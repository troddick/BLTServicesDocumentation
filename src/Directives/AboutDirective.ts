﻿//------------------------------------------------------------------------------
//----- WiM About --------------------------------------------------------------
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
//  http://www.ng-newsletter.com/posts/directives.html
//      Restrict parameters
//          'A' - <span ng-sparkline></span>
//          'E' - <ng-sparkline > </ng-sparkline>
//          'C' - <span class="ng-sparkline" > </span>
//          'M' - <!--directive: ng - sparkline-- >

//Comments
//04.15.2015 jkn - Created

//Import
module BLT.Directives {
    'use string';
    interface IAboutControllerScope extends ng.IScope {
        vm: IAboutController;
    }
    interface IAboutController {
        selected: boolean;
        selectedTabName: string;
        toggleSelected(): void;
        selectTab(tabname: string): void;

    }
    interface IUrlAttributes extends ng.IAttributes {
        //must use camelcase
        mainUrl: string;
    }

    class AboutController implements IAboutController {
        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        public selected: boolean;
        public selectedTabName: string;
        
        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        static $inject = ['$scope'];
        constructor($scope: IAboutControllerScope) {
            $scope.vm = this;
            this.selectedTabName = "about";
            this.selected = false;
        }  
        
        //Methods  
        //-+-+-+-+-+-+-+-+-+-+-+-
        public toggleSelected(): void {
            if (this.selected) this.selected = false;
            else this.selected = true;

            console.log(this.selected);
        }
        public selectTab(tabname: string): void {
            if (this.selectedTabName == tabname) return;
            this.selectedTabName = tabname;
            console.log('selected tab: ' + tabname);
        }
    }

    class wimAbout implements ng.IDirective {
        static instance(): ng.IDirective {
            return new wimAbout;
        }
        scope = true;
        restrict = 'E';
        controller = AboutController;
        templateUrl = 'Views/about/about.html';
        //replace= true;

        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IUrlAttributes, controller: IAboutController): void {
            //this is where we can register listeners, set up watches, and add functionality. 
            // The result of this process is why the live data- binding exists between the scope and the DOM tree.
           
        }//end link
    }//end UrlDirective

    angular.module('BLT.Directives', [])
        .directive('about', wimAbout.instance);
}//end module 