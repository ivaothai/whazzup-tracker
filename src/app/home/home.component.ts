import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { Observable } from 'rxjs';
import {
  delay,
  filter,
  first,
  switchMap,
  tap,
  shareReplay,
  map
} from 'rxjs/operators';
import { DataService } from '../data.service';
import { DownloadService } from '../download.service';
import { WhazzupSession } from '../shared/whazzup-session';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: Observable<WhazzupSession[]>;
  groupedData: Observable<User[]>;
  loadedData: any[];
  selectedForMultiview: {
    vid: string;
    selected: number[];
  } = { vid: '', selected: [] };
  constructor(
    private _data: DataService,
    private cd: ChangeDetectorRef,
    private download: DownloadService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.data = _data.dataSubject.pipe(shareReplay(1));
    this.groupedData = this.data.pipe(
      map(s => {
        return s.reduce((prev: User[], curr: WhazzupSession, order: number) => {
          const index = prev.findIndex(v => v.vid === curr.vid);
          if (index !== -1) {
            return prev.map(v => {
              if (v.vid === curr.vid) {
                return {
                  ...v,
                  sessions: [...v.sessions, {...curr, order}]
                };
              }
              return v;
            });
          }
          return [
            ...prev,
            {
              vid: curr.vid,
              sessions: [{...curr, order}]
            }
          ];
        }, [] as User[]);
      })
    );
    this.router.events
      .pipe(
        filter((e): e is Scroll => e instanceof Scroll),
        filter(e => !!e.position),
        switchMap(e => {
          return this.data.pipe(
            delay(0),
            tap(_ => {
              this.viewportScroller.scrollToPosition(e.position);
            })
          );
        })
      )
      .subscribe();
  }

  onFileChanged(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);
      reader.onload = () => {
        this.loadedData = JSON.parse(reader.result as string);
        this.cd.markForCheck();
      };
    }
  }

  loadData() {
    this._data.setData(this.loadedData);
  }

  downloadData() {
    this._data.download();
  }

  downloadResult(valid: boolean) {
    this.data.pipe(first()).subscribe(d => {
      const vids = this.uniq(
        d.filter(c => c.validated && c.valid === valid).map(s => s.vid)
      );
      this.download.download(vids.join('\n'), `output-${valid}.txt`);
    });
  }

  addToMultiview(id: number, vid: string) {
    if (
      (this.selectedForMultiview.vid === vid ||
        this.selectedForMultiview.selected.length === 0) &&
      !this.selectedForMultiview.selected.includes(id)
    ) {
      this.selectedForMultiview.selected.push(id);
      this.selectedForMultiview.vid = vid;
    }
  }

  removeFromMultiview(id: number) {
    this.selectedForMultiview.selected = this.selectedForMultiview.selected.filter(
      i => i !== id
    );
  }

  clearMultiview() {
    this.selectedForMultiview.selected = [];
  }

  navigateMultiview() {
    this.router.navigate(['map'], {
      queryParams: { id: this.selectedForMultiview.selected }
    });
  }

  private uniq(a: any[]) {
    const seen = {};
    return a.filter(i => {
      return (seen as Object).hasOwnProperty(i) ? false : (seen[i] = true);
    });
  }
}
