//------------------------------------------------------------------------------
//----- Resource ---------------------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2015 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  
//          
//discussion:
//
//Comments
//08.20.2014 jkn - Created
//Imports"
// Interface
var BLT;
(function (BLT) {
    var Models;
    (function (Models) {
        var Resource = (function () {
            function Resource(n) {
                this.name = n;
            }
            return Resource;
        })();
        Models.Resource = Resource; //end class
    })(Models = BLT.Models || (BLT.Models = {}));
})(BLT || (BLT = {})); //end module  
//# sourceMappingURL=Resource.js.map