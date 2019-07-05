/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/marker-manager";
import * as i2 from "../services/google-maps-api-wrapper";
import * as i3 from "../services/managers/info-window-manager";
import * as i4 from "../services/managers/circle-manager";
import * as i5 from "../services/managers/rectangle-manager";
import * as i6 from "../services/managers/polyline-manager";
import * as i7 from "../services/managers/polygon-manager";
import * as i8 from "../services/managers/kml-layer-manager";
import * as i9 from "../services/managers/data-layer-manager";
import * as i10 from "../services/maps-api-loader/maps-api-loader";
import * as i11 from "../services/fit-bounds";
import * as i12 from "./map";
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
export { RenderType_AgmMap as RenderType_AgmMap };
export function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
export function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.RectangleManager, i5.RectangleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolylineManager, i6.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.PolygonManager, i7.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.KmlLayerManager, i8.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.DataLayerManager, i9.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i10.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i11.FitBoundsService, i11.FitBoundsService, [i10.MapsAPILoader]), i0.ɵdid(11, 770048, null, 0, i12.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper, i11.FitBoundsService, i0.NgZone], null, null)], function (_ck, _v) { _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
var AgmMapNgFactory = i0.ɵccf("agm-map", i12.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", restriction: "restriction" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
export { AgmMapNgFactory as AgmMapNgFactory };
//# sourceMappingURL=map.ngfactory.js.map