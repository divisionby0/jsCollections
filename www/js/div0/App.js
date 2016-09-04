var App = function(){
    var rootMap = new Map('rootMap');
    var mapToJson;
    var mapFromJson;

    var key1='$10,000';
    var key2='$12,000';
    var key3='$25,000';
    var key4='$50,000';
    var key5='$100,000';
    var key6='$150,000';

    var subMap1;
    var subMap2;
    var subMap3;
    var subMap4;
    var subMap5;
    var subMap6;

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
        $('#resultContainer1').html('<font color="blue">'+mapToJson+'</font>');
    }

    function assertResultsAreEquals(){
        var result1 = $('#resultContainer').text();
        var result2 = $('#resultContainer1').text();
        var resultsAreEquals = result1.indexOf(result2)>-1;

        $('<br/><div class="container">map encode into json and get back into map results are equals: <b><font color="red"> '+resultsAreEquals+'</font></b></div>').appendTo($('#body'));
    }

    function createSubMaps(){
        subMap1 = new Map(key1);
        subMap2 = new Map(key2);
        subMap3 = new Map(key3);
        subMap4 = new Map(key4);
        subMap5 = new Map(key5);
        subMap6 = new Map(key6);
    }

    function addSubMaps(){
        rootMap.add(key1, subMap1);
        rootMap.add(key2, subMap2);
        rootMap.add(key3, subMap3);
        rootMap.add(key4, subMap4);
        rootMap.add(key5, subMap5);
        rootMap.add(key6, subMap6);
    }

    function fillSubMaps(){
        var rootMapIterator = rootMap.getIterator();
        while(rootMapIterator.hasNext()){
            var row = rootMapIterator.next();
            for(var i=0; i<100; i++){
                row.add((i+1)+'y.o', 0);
            }
        }
    }

    return{
        init:function(){
            createSubMaps();
            addSubMaps();
            fillSubMaps();

            encodeToJson();
            decodeFromJson();

            encodeDecodedJson();
            assertResultsAreEquals();
        }
    }
}
