var App = function(){
    var rootMap = new Map('rootMap');
    var mapToJson;
    var mapFromJson;

    var key1='1';
    var key2='2';
    var key3='3';

    var subMap1 = new Map('subMap1');
    var subMap2 = new Map('subMap2');
    var subMap3 = new Map('subMap3');

    function encodeToJson(){
        var jsonEncoder = rootMap.getEncoder();
        mapToJson = jsonEncoder.encode();
        $('#resultContainer').text(mapToJson);
    }

    function decodeFromJson(){
        var jsonDecoder = new MapJsonDecoder(mapToJson);
        mapFromJson = jsonDecoder.decode();
    }

    function encodeDecodedJson(){
        var jsonEncoder = mapFromJson.getEncoder();
        mapToJson = jsonEncoder.encode();
        $('#resultContainer1').text(mapToJson);
    }

    return{
        init:function(){

            subMap1.add('key1', 'sub1_1');
            subMap1.add('key2', 'sub1_2');
            subMap1.add('key3', 'sub1_3');

            subMap2.add('key1', 'sub2_1');
            subMap2.add('key2', 'sub2_2');
            subMap2.add('key3', 'sub2_3');

            subMap3.add('key1', 'sub3_1');
            subMap3.add('key2', 'sub3_2');
            subMap3.add('key3', 'sub3_3');

            rootMap.add(key1, subMap1);
            rootMap.add(key2, subMap2);
            rootMap.add(key3, subMap3);

            encodeToJson();
            decodeFromJson();

            encodeDecodedJson();
        }
    }
}
