/// <reference path="../Map.ts"/>
var MapJsonDecoder = (function () {
    function MapJsonDecoder(dataString) {
        this.rootMap = new Map('rootMap');
        this.dataString = dataString;
    }
    MapJsonDecoder.prototype.decode = function () {
        this.parseStringToMap(this.dataString, this.rootMap);
        return this.rootMap;
    };
    MapJsonDecoder.prototype.parseStringToMap = function (dataString, parentMap) {
        var dataJson = JSON.parse(dataString);
        this.parseObjectToMap(dataJson, parentMap);
    };
    MapJsonDecoder.prototype.parseObjectToMap = function (dataObject, parentMap) {
        var id = dataObject["id"];
        var type = dataObject["type"];
        if (type == "Map") {
            parentMap.setId(id);
            for (var key in dataObject) {
                var value = dataObject[key];
                var valueId = value["id"];
                var valueType = value["type"];
                console.log("Key is: " + key + "  value: " + value + "  valueType:" + valueType);
                if (key != "id" && key != "type" && valueType == "Map") {
                    console.log("creating sub map... by key " + key);
                    var subMap = new Map(valueId);
                    parentMap.add(key, this.parseObjectToMap(value, subMap));
                }
                else {
                    parentMap.add(key, value);
                }
            }
        }
        return parentMap;
    };
    return MapJsonDecoder;
})();
//# sourceMappingURL=MapJsonDecoder.js.map