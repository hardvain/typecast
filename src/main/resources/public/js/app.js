'use strict';
var app = angular.module('app', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.load', 'ui.jq', 'ui.validate', 'app.filters', 'app.services', 'app.directives', 'app.controllers'])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        $urlRouterProvider
            .otherwise('/dashboard');
        $stateProvider
            .state('app', {abstract: true, url: '', templateUrl: 'tpl/app.html'})
            .state('app.dashboard', {url: '/dashboard', templateUrl: 'tpl/dashboard.html'})
            .state('app.haskell', {url: '/haskell', templateUrl: 'tpl/haskell.html'})
            .state('app.aboutme', {url: '/aboutme', templateUrl: 'tpl/aboutme.html'})
            .state('app.haskell.introduction', {url: '/introduction', templateUrl: 'tpl/haskell/introduction.html'})
//            .state('app.ui', {url: '/ui', template: '<div ui-view class="fade-in-up"></div>'})
//            .state('app.ui.buttons', {url: '/buttons', templateUrl: 'tpl/ui_buttons.html'})
//            .state('app.ui.icons', {url: '/icons', templateUrl: 'tpl/ui_icons.html'})
//            .state('app.ui.grid', {url: '/grid', templateUrl: 'tpl/ui_grid.html'})
//            .state('app.ui.widgets', {url: '/widgets', templateUrl: 'tpl/ui_widgets.html'})
//            .state('app.ui.bootstrap', {url: '/bootstrap', templateUrl: 'tpl/ui_bootstrap.html'})
//            .state('app.ui.sortable', {url: '/sortable', templateUrl: 'tpl/ui_sortable.html'})
//            .state('app.ui.portlet', {url: '/portlet', templateUrl: 'tpl/ui_portlet.html'})
//            .state('app.ui.timeline', {url: '/timeline', templateUrl: 'tpl/ui_timeline.html'})
//            .state('app.ui.jvectormap', {url: '/jvectormap', templateUrl: 'tpl/ui_jvectormap.html'})
//            .state('app.ui.chart', {url: '/chart', templateUrl: 'tpl/ui_chart.html'})
//            .state('app.table', {url: '/table', template: '<div ui-view></div>'})
//            .state('app.table.static', {url: '/static', templateUrl: 'tpl/table_static.html'})
//            .state('app.table.datatable', {url: '/datatable', templateUrl: 'tpl/table_datatable.html'})
//            .state('app.form', {url: '/form', template: '<div ui-view class="fade-in"></div>'})
//            .state('app.form.elements', {url: '/elements', templateUrl: 'tpl/form_elements.html'})
//            .state('app.form.validation', {url: '/validation', templateUrl: 'tpl/form_validation.html'})
//            .state('app.form.wizard', {url: '/wizard', templateUrl: 'tpl/form_wizard.html'})
//            .state('app.page', {url: '/page', template: '<div ui-view class="fade-in-down"></div>'})
//            .state('app.page.profile', {url: '/profile', templateUrl: 'tpl/page_profile.html'})
//            .state('app.page.post', {url: '/post', templateUrl: 'tpl/page_post.html'})
//            .state('app.page.search', {url: '/search', templateUrl: 'tpl/page_search.html'})
//            .state('app.page.invoice', {url: '/invoice', templateUrl: 'tpl/page_invoice.html'})
//            .state('app.docs', {url: '/docs', templateUrl: 'tpl/docs.html'})
//            .state('lockme', {url: '/lockme', templateUrl: 'tpl/page_lockme.html'})
//            .state('access', {url: '/access', template: '<div ui-view class="fade-in-right-big smooth"></div>'})
//            .state('access.signin', {url: '/signin', templateUrl: 'tpl/page_signin.html'})
//            .state('access.signup', {url: '/signup', templateUrl: 'tpl/page_signup.html'})
//            .state('access.forgotpwd', {url: '/forgotpwd', templateUrl: 'tpl/page_forgotpwd.html'})
//            .state('access.404', {url: '/404', templateUrl: 'tpl/page_404.html'})
//            .state('app.calendar', {url: '/calendar', templateUrl: 'tpl/app_calendar.html', resolve: {deps: ['uiLoad', function (uiLoad) {
//                return uiLoad.load(['js/jquery/fullcalendar/fullcalendar.css', 'js/jquery/jquery-ui-1.10.3.custom.min.js', 'js/jquery/fullcalendar/fullcalendar.min.js', 'js/app/calendar/ui-calendar.js', 'js/app/calendar/calendar.js']);
//            }]}})
//            .state('app.mail', {abstract: true, url: '/mail', templateUrl: 'tpl/mail.html', resolve: {deps: ['uiLoad', function (uiLoad) {
//                return uiLoad.load(['js/app/mail/mail.js', 'js/app/mail/mail-service.js', 'js/libs/moment.min.js']);
//            }]}})
//            .state('app.mail.list', {url: '/inbox/{fold}', templateUrl: 'tpl/mail.list.html'})
//            .state('app.mail.detail', {url: '/{mailId:[0-9]{1,4}}', templateUrl: 'tpl/mail.detail.html'})
//            .state('app.mail.compose', {url: '/compose', templateUrl: 'tpl/mail.new.html'})
    }])
    .constant('JQ_CONFIG', {
        easyPieChart: ['js/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
        sparkline: ['js/jquery/charts/sparkline/jquery.sparkline.min.js'],
        plot: ['js/jquery/charts/flot/jquery.flot.min.js',
            'js/jquery/charts/flot/jquery.flot.resize.js',
            'js/jquery/charts/flot/jquery.flot.tooltip.min.js',
            'js/jquery/charts/flot/jquery.flot.spline.js',
            'js/jquery/charts/flot/jquery.flot.orderBars.js',
            'js/jquery/charts/flot/jquery.flot.pie.min.js'],
        slimScroll: ['js/jquery/slimscroll/jquery.slimscroll.min.js'],
        sortable: ['js/jquery/sortable/jquery.sortable.js'],
        nestable: ['js/jquery/nestable/jquery.nestable.js', 'js/jquery/nestable/nestable.css'],
        filestyle: ['js/jquery/file/bootstrap-filestyle.min.js'],
        slider: ['js/jquery/slider/bootstrap-slider.js', 'js/jquery/slider/slider.css'],
        chosen: ['js/jquery/chosen/chosen.jquery.min.js', 'js/jquery/chosen/chosen.css'],
        TouchSpin: ['js/jquery/spinner/jquery.bootstrap-touchspin.min.js', 'js/jquery/spinner/jquery.bootstrap-touchspin.css'],
        wysiwyg: ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
            'js/jquery/wysiwyg/jquery.hotkeys.js'],
        dataTable: ['js/jquery/datatables/jquery.dataTables.min.js',
            'js/jquery/datatables/dataTables.bootstrap.js', 'js/jquery/datatables/dataTables.bootstrap.css'],
        vectorMap: ['js/jquery/jvectormap/jquery-jvectormap.min.js',
            'js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
            'js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
            'js/jquery/jvectormap/jquery-jvectormap.css']});

'use strict';
angular.module('app.services', []).
    value('version', '1.0');
'use strict';
angular.module('app.controllers', [])
    .controller('AppCtrl', ['$scope', function ($scope) {
        var isTouchDevice = !!('ontouchstart'in window);
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        !isTouchDevice && $('html').addClass('no-touch');
        isIE && $('html').addClass('ie');
        $scope.app = {name: 'aravindh.io', version: '1.0.0', color: {primary: '#7266ba', info: '#23b7e5', success: '#27c24c', warning: '#fad733', danger: '#f05050', light: '#e8eff0', dark: '#3a3f51', black: '#1c2b36'}, settings: {navbarHeaderColor: 'bg-info dker', navbarCollapseColor: 'bg-info dker', asideColor: 'bg-light dker', headerFixed: true, asideFixed: false, asideFolded: true}}
    }])
    .controller('AccordionDemoCtrl', ['$scope', function ($scope) {
        $scope.oneAtATime = true;
        $scope.groups = [
            {title: 'Accordion group header - #1', content: 'Dynamic group body - #1'},
            {title: 'Accordion group header - #2', content: 'Dynamic group body - #2'}
        ];
        $scope.items = ['Item 1', 'Item 2', 'Item 3'];
        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };
        $scope.status = {isFirstOpen: true, isFirstDisabled: false};
    }])
    .controller('AlertDemoCtrl', ['$scope', function ($scope) {
        $scope.alerts = [
            {type: 'success', msg: 'Well done! You successfully read this important alert message.'},
            {type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.'},
            {type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...'}
        ];
        $scope.addAlert = function () {
            $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
        };
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }])
    .controller('ButtonsDemoCtrl', ['$scope', function ($scope) {
        $scope.singleModel = 1;
        $scope.radioModel = 'Middle';
        $scope.checkModel = {left: false, middle: true, right: false};
    }])
    .controller('CarouselDemoCtrl', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function () {
            slides.push({image: 'img/c' + slides.length + '.jpg', text: ['Carousel text #0', 'Carousel text #1', 'Carousel text #2', 'Carousel text #3'][slides.length % 4]});
        };
        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
    }])
    .controller('DropdownDemoCtrl', ['$scope', function ($scope) {
        $scope.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        $scope.status = {isopen: false};
        $scope.toggled = function (open) {
        };
        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }])
    .controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];
        var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
            $scope.items = items;
            $scope.selected = {item: $scope.items[0]};
            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
        $scope.open = function (size) {
            var modalInstance = $modal.open({templateUrl: 'myModalContent.html', controller: ModalInstanceCtrl, size: size, resolve: {items: function () {
                return $scope.items;
            }}});
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }])
    .controller('PaginationDemoCtrl', ['$scope', '$log', function ($scope, $log) {
        $scope.totalItems = 64;
        $scope.currentPage = 4;
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function () {
            $log.info('Page changed to: ' + $scope.currentPage);
        };
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    }])
    .controller('PopoverDemoCtrl', ['$scope', function ($scope) {
        $scope.dynamicPopover = 'Hello, World!';
        $scope.dynamicPopoverTitle = 'Title';
    }])
    .controller('ProgressDemoCtrl', ['$scope', function ($scope) {
        $scope.max = 200;
        $scope.random = function () {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;
            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }
            $scope.showWarning = (type === 'danger' || type === 'warning');
            $scope.dynamic = value;
            $scope.type = type;
        };
        $scope.random();
        $scope.randomStacked = function () {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];
            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                $scope.stacked.push({value: Math.floor((Math.random() * 30) + 1), type: types[index]});
            }
        };
        $scope.randomStacked();
    }])
    .controller('TabsDemoCtrl', ['$scope', function ($scope) {
        $scope.tabs = [
            {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
            {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true}
        ];
    }])
    .controller('RatingDemoCtrl', ['$scope', function ($scope) {
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;
        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    }])
    .controller('TooltipDemoCtrl', ['$scope', function ($scope) {
        $scope.dynamicTooltip = 'Hello, World!';
        $scope.dynamicTooltipText = 'dynamic';
        $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
    }])
    .controller('TypeaheadDemoCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.selected = undefined;
        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        $scope.getLocation = function (val) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: {address: val, sensor: false}}).then(function (res) {
                var addresses = [];
                angular.forEach(res.data.results, function (item) {
                    addresses.push(item.formatted_address);
                });
                return addresses;
            });
        };
    }])
    .controller('DatepickerDemoCtrl', ['$scope', function ($scope) {
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();
        $scope.clear = function () {
            $scope.dt = null;
        };
        $scope.disabled = function (date, mode) {
            return(mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };
        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {formatYear: 'yy', startingDay: 1, class: 'datepicker'};
        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
    }])
    .controller('TimepickerDemoCtrl', ['$scope', function ($scope) {
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {hstep: [1, 2, 3], mstep: [1, 5, 10, 15, 25, 30]};
        $scope.ismeridian = true;
        $scope.toggleMode = function () {
            $scope.ismeridian = !$scope.ismeridian;
        };
        $scope.update = function () {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.mytime = d;
        };
        $scope.changed = function () {
        };
        $scope.clear = function () {
            $scope.mytime = null;
        };
    }])
    .controller('FormDemoCtrl', ['$scope', function ($scope) {
        $scope.notBlackListed = function (value) {
            var blacklist = ['bad@domain.com', 'verybad@domain.com'];
            return blacklist.indexOf(value) === -1;
        }
    }])
    .controller('FlotChartDemoCtrl', ['$scope', function ($scope) {
        $scope.d = [
            [1, 6.5],
            [2, 6.5],
            [3, 7],
            [4, 8],
            [5, 7.5],
            [6, 7],
            [7, 6.8],
            [8, 7],
            [9, 7.2],
            [10, 7],
            [11, 6.8],
            [12, 7]
        ];
        $scope.d0_1 = [
            [0, 7],
            [1, 6.5],
            [2, 12.5],
            [3, 7],
            [4, 9],
            [5, 6],
            [6, 11],
            [7, 6.5],
            [8, 8],
            [9, 7]
        ];
        $scope.d0_2 = [
            [0, 4],
            [1, 4.5],
            [2, 7],
            [3, 4.5],
            [4, 3],
            [5, 3.5],
            [6, 6],
            [7, 3],
            [8, 4],
            [9, 3]
        ];
        $scope.d1_1 = [
            [10, 120],
            [20, 70],
            [30, 70],
            [40, 60]
        ];
        $scope.d1_2 = [
            [10, 50],
            [20, 60],
            [30, 90],
            [40, 35]
        ];
        $scope.d1_3 = [
            [10, 80],
            [20, 40],
            [30, 30],
            [40, 20]
        ];
        $scope.d2 = [];
        for (var i = 0; i < 20; ++i) {
            $scope.d2.push([i, Math.sin(i)]);
        }
        $scope.d3 = [
            {label: "iPhone5S", data: 40},
            {label: "iPad Mini", data: 10},
            {label: "iPad Mini Retina", data: 20},
            {label: "iPhone4S", data: 12},
            {label: "iPad Air", data: 18}
        ];
        $scope.getRandomData = function () {
            var data = [], totalPoints = 150;
            if (data.length > 0)
                data = data.slice(1);
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        $scope.d4 = $scope.getRandomData();
    }])
    .controller('JVectorMapDemoCtrl', ['$scope', function ($scope) {
        $scope.world_markers = [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'},
            {latLng: [43.93, 12.46], name: 'San Marino'},
            {latLng: [47.14, 9.52], name: 'Liechtenstein'},
            {latLng: [7.11, 171.06], name: 'Marshall Islands'},
            {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
            {latLng: [3.2, 73.22], name: 'Maldives'},
            {latLng: [35.88, 14.5], name: 'Malta'},
            {latLng: [12.05, -61.75], name: 'Grenada'},
            {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
            {latLng: [13.16, -59.55], name: 'Barbados'},
            {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
            {latLng: [-4.61, 55.45], name: 'Seychelles'},
            {latLng: [7.35, 134.46], name: 'Palau'},
            {latLng: [42.5, 1.51], name: 'Andorra'},
            {latLng: [14.01, -60.98], name: 'Saint Lucia'},
            {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
            {latLng: [1.46, 173.03], name: 'Kiribati'},
            {latLng: [-21.13, -175.2], name: 'Tonga'},
            {latLng: [15.3, -61.38], name: 'Dominica'},
            {latLng: [-20.2, 57.5], name: 'Mauritius'},
            {latLng: [26.02, 50.55], name: 'Bahrain'},
            {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ];
        $scope.usa_markers = [
            {latLng: [40.71, -74.00], name: 'New York'},
            {latLng: [34.05, -118.24], name: 'Los Angeles'},
            {latLng: [41.87, -87.62], name: 'Chicago'},
            {latLng: [29.76, -95.36], name: 'Houston'},
            {latLng: [39.95, -75.16], name: 'Philadelphia'},
            {latLng: [38.90, -77.03], name: 'Washington'},
            {latLng: [37.36, -122.03], name: 'Silicon Valley'}
        ];
    }]);
'use strict';
angular.module('app.filters', [])
    .filter('fromNow', function () {
        return function (date) {
            return moment(date).fromNow();
        }
    });
'use strict';
angular.module('app.directives', [])
    .directive('uiShift', ['$timeout', function ($timeout) {
        return{restrict: 'A', replace: true, link: function (scope, el, attr) {
            var _el = $(el), _window = $(window), prev = _el.prev(), parent, width = _window.width();
            !prev.length && (parent = _el.parent());
            function sm() {
                $timeout(function () {
                    var method = attr.uiShift;
                    var target = attr.target;
                    _el.hasClass('in') || _el[method](target).addClass('in');
                });
            }

            function md() {
                parent && parent['prepend'](el);
                !parent && _el['insertAfter'](prev);
                _el.removeClass('in');
            }

            (width < 768 && sm()) || md();
            _window.resize(function () {
                if (width !== _window.width()) {
                    $timeout(function () {
                        (_window.width() < 768 && sm()) || md();
                        width = _window.width();
                    });
                }
            });
        }};
    }])
    .directive('uiToggleClass', ['$timeout', '$document', function ($timeout, $document) {
        return{restrict: 'AC', replace: true, link: function (scope, el, attr) {
            el.on('click', function (e) {
                e.preventDefault();
                var classes = attr.uiToggleClass.split(','), targets = (attr.target && attr.target.split(',')) || Array(el), key = 0;
                angular.forEach(classes, function (_class) {
                    var target = targets[(targets.length && key)];
                    (_class.indexOf('*') !== -1) && magic(_class, target);
                    $(target).toggleClass(_class);
                    key++;
                });
                $(el).toggleClass('active');
                function magic(_class, target) {
                    var patt = new RegExp('\\s' + _class.
                        replace(/\*/g, '[A-Za-z0-9-_]+').
                        split(' ').
                        join('\\s|\\s') + '\\s', 'g');
                    var cn = ' ' + $(target)[0].className + ' ';
                    while (patt.test(cn)) {
                        cn = cn.replace(patt, ' ');
                    }
                    $(target)[0].className = $.trim(cn);
                }
            });
        }};
    }])
    .directive('uiNav', ['$timeout', function ($timeout) {
        return{restrict: 'AC', replace: true, link: function (scope, el, attr) {
            var _window = $(window);
            var _mb = 768;
            $(el).on('click', 'a', function (e) {
                var _this = $(this);
                _this.parent().siblings(".active").toggleClass('active');
                _this.parent().toggleClass('active');
                _this.next().is('ul') && e.preventDefault();
                _this.next().is('ul') || ((_window.width() < _mb) && $('.app-aside').toggleClass('show'));
            });
            var wrap = $('.app-aside'), next;
            $(el).on('mouseenter', 'a', function (e) {
                if (!$('.app-aside-fixed.app-aside-folded').length || (_window.width() < _mb))return;
                var _this = $(this);
                next && next.trigger('mouseleave.nav');
                if (_this.next().is('ul')) {
                    next = _this.next();
                } else {
                    return;
                }
                next.appendTo(wrap).css('top', _this.offset().top - _this.height());
                next.on('mouseleave.nav', function (e) {
                    next.appendTo(_this.parent());
                    next.off('mouseleave.nav');
                    _this.parent().removeClass('active');
                });
                _this.parent().addClass('active');
            });
            wrap.on('mouseleave', function (e) {
                next && next.trigger('mouseleave.nav');
            });
        }};
    }])
    .directive('uiScroll', ['$location', '$anchorScroll', function ($location, $anchorScroll) {
        return{restrict: 'AC', replace: true, link: function (scope, el, attr) {
            el.on('click', function (e) {
                $location.hash(attr.uiScroll);
                $anchorScroll();
            });
        }};
    }]);