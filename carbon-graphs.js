(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Carbon"] = factory();
	else
		root["Carbon"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/app.js":
/*!********************!*\
  !*** ./dev/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cerner_carbon_site_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-site-helpers */ \"./node_modules/@cerner/carbon-site-helpers/dist/main.js\");\n/* harmony import */ var _cerner_carbon_site_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cerner_carbon_site_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_main_less_carbon_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/main/less/carbon.less */ \"./src/main/less/carbon.less\");\n/* harmony import */ var _src_main_less_carbon_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_main_less_carbon_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.less */ \"./dev/app.less\");\n/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/controls/bar */ \"./dev/examples/controls/bar.js\");\n/* harmony import */ var _examples_controls_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/controls/colors */ \"./dev/examples/controls/colors.js\");\n/* harmony import */ var _examples_controls_combination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/controls/combination */ \"./dev/examples/controls/combination.js\");\n/* harmony import */ var _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/controls/criticality */ \"./dev/examples/controls/criticality.js\");\n/* harmony import */ var _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/controls/gantt */ \"./dev/examples/controls/gantt.js\");\n/* harmony import */ var _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/controls/line */ \"./dev/examples/controls/line.js\");\n/* harmony import */ var _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/controls/pairedResult */ \"./dev/examples/controls/pairedResult.js\");\n/* harmony import */ var _examples_controls_pie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/controls/pie */ \"./dev/examples/controls/pie.js\");\n/* harmony import */ var _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/controls/shapes */ \"./dev/examples/controls/shapes.js\");\n/* harmony import */ var _examples_controls_spline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/controls/spline */ \"./dev/examples/controls/spline.js\");\n/* harmony import */ var _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/controls/timeline */ \"./dev/examples/controls/timeline.js\");\n/* harmony import */ var _examples_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/helpers */ \"./dev/examples/helpers.js\");\n/* harmony import */ var _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/controls/scatter */ \"./dev/examples/controls/scatter.js\");\n/* harmony import */ var _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/controls/bubble */ \"./dev/examples/controls/bubble.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_cerner_carbon_site_helpers__WEBPACK_IMPORTED_MODULE_1___default()([{\n  pathname: \"/line\",\n  children: [{\n    pathname: \"/line/simple\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLine\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/line/timeseries\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineTimeSeries\"],\n    title: \"Timeseries\"\n  }, {\n    pathname: \"/line/timeseries-dateline\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineWithDateline\"],\n    title: \"Timeseries With Dateline\"\n  }, {\n    pathname: \"/line/eventline\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineWithEventline\"],\n    title: \"Timeseries With Eventline\"\n  }, {\n    pathname: \"/line/y2-axis\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineY2Axis\"],\n    title: \"Y2 Axis\"\n  }, {\n    pathname: \"/line/label-hidden\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineLabelHidden\"],\n    title: \"Label Hidden\"\n  }, {\n    pathname: \"/line/legend-hidden\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineLegendHidden\"],\n    title: \"Legend Hidden\"\n  }, {\n    pathname: \"/line/custom-legend-placement\",\n    content: function content(id) {\n      Object(_examples_helpers__WEBPACK_IMPORTED_MODULE_15__[\"createElementLegendBindTo\"])(id);\n      return Object(_examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineLegendTo\"])(id);\n    },\n    title: \"Custom Legend Placement\"\n  }, {\n    pathname: \"/line/legend-item-disabled\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineLegendItemDisabled\"],\n    title: \"Legend Item Disabled\"\n  }, {\n    pathname: \"/line/shapes-hidden\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineShapesHidden\"],\n    title: \"Shapes Hidden\"\n  }, {\n    pathname: \"/line/no-data\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderNoDataView\"],\n    title: \"No Data\"\n  }, {\n    pathname: \"/line/dashed-line\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderDashedLine\"],\n    title: \"Dashed Line\"\n  }]\n}, {\n  pathname: \"/multi-line\",\n  children: [{\n    pathname: \"/multi-line/simple\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderMultiLine\"],\n    title: \"Simple\"\n  }]\n}, {\n  pathname: \"/spline\",\n  children: [{\n    pathname: \"/spline/simple\",\n    content: _examples_controls_spline__WEBPACK_IMPORTED_MODULE_13__[\"renderSplineLine\"],\n    title: \"Simple\"\n  }]\n}, {\n  pathname: \"/non-contiguous-line\",\n  children: [{\n    pathname: \"/non-contiguous-line/simple\",\n    content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineBlankDataPoint\"],\n    title: \"Simple\"\n  }]\n}, {\n  pathname: \"/paired-result\",\n  children: [{\n    pathname: \"/paired-result/simple\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResult\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/paired-result/timeseries\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultTimeseries\"],\n    title: \"Timeseries\"\n  }, {\n    pathname: \"/paired-result/timeseries-dateline\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultTimeseriesDateline\"],\n    title: \"Timeseries With Dateline\"\n  }, {\n    pathname: \"/paired-result/timeseries-eventline\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultTimeseriesEventline\"],\n    title: \"Timeseries With Eventline\"\n  }, {\n    pathname: \"/paired-result/y2-axis\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultY2Axis\"],\n    title: \"Y2 Axis\"\n  }, {\n    pathname: \"/paired-result/label-hidden\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultLabelHidden\"],\n    title: \"Label Hidden\"\n  }, {\n    pathname: \"/paired-result/legend-hidden\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultLegendHidden\"],\n    title: \"Legend Hidden\"\n  }, {\n    pathname: \"/paired-result/legend-item-disabled\",\n    content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultLegendItemDisabled\"],\n    title: \"Legend Item Disabled\"\n  }]\n}, {\n  pathname: \"/bar\",\n  children: [{\n    pathname: \"/bar/simple\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarDefault\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/bar/timeseries\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarTimeSeries\"],\n    title: \"Timeseries\"\n  }, {\n    pathname: \"/bar/timeseries-dateline\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarTimeSeriesWithDateline\"],\n    title: \"Timeseries With Dateline\"\n  }, {\n    pathname: \"/bar/timeseries-eventline\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarTimeSeriesWithEventline\"],\n    title: \"Timeseries With Eventline\"\n  }, {\n    pathname: \"/bar/grouped-bars\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarGroup\"],\n    title: \"Grouped bars\"\n  }, {\n    pathname: \"/bar/stacked-bars\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarStacked\"],\n    title: \"Stacked bars\"\n  }, {\n    pathname: \"/bar/negative-bars\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarNegative\"],\n    title: \"Negative bars\"\n  }, {\n    pathname: \"/bar/axis-info-text-labels\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderSimpleBarAxisInfoTextLabels\"],\n    title: \"Axis Info Text Labels\"\n  }, {\n    pathname: \"/bar/stacked-axis-info-text-labels\",\n    content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderStackedBarAxisInfoTextLabels\"],\n    title: \"Stacked - Axis Info Text Labels\"\n  }]\n}, {\n  pathname: \"/scatter\",\n  children: [{\n    pathname: \"/scatter/simple\",\n    content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatter\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/scatter/timeseries\",\n    content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterTimeSeries\"],\n    title: \"Timeseries\"\n  }, {\n    pathname: \"/scatter/timeseries-dateline\",\n    content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterWithDateline\"],\n    title: \"Timeseries With Dateline\"\n  }, {\n    pathname: \"/scatter/timeseries-eventline\",\n    content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterWithEventline\"],\n    title: \"Timeseries With Eventline\"\n  }]\n}, {\n  pathname: \"/bubble\",\n  children: [{\n    pathname: \"/bubble/simple\",\n    content: _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__[\"renderSimpleBubble\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/bubble/weight-based\",\n    content: _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__[\"renderWeightBasedBubbleGraph\"],\n    title: \"Weight Based\"\n  }, {\n    pathname: \"/bubble/color-based\",\n    content: _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__[\"renderColorBasedBubbleGraph\"],\n    title: \"Color Based\"\n  }, {\n    pathname: \"/bubble/weight-color-combination\",\n    content: _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__[\"renderWeightColorCombination\"],\n    title: \"Weight and Color Combination\"\n  }, {\n    pathname: \"/bubble/custom-bubble-size\",\n    content: _examples_controls_bubble__WEBPACK_IMPORTED_MODULE_17__[\"renderCustomBubbleSize\"],\n    title: \"Custom Bubble size\"\n  }]\n}, {\n  pathname: \"/combination\",\n  children: [{\n    pathname: \"/combination/simple\",\n    content: _examples_controls_combination__WEBPACK_IMPORTED_MODULE_6__[\"renderCombinationSimple\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/combination/bar-graph-with-line\",\n    content: _examples_controls_combination__WEBPACK_IMPORTED_MODULE_6__[\"renderCombinationBar\"],\n    title: \"Bar Graph With Line\"\n  }]\n}, {\n  pathname: \"/gantt\",\n  children: [{\n    pathname: \"/gantt/simple\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGantt\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/gantt/tasks-and-activities\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttActivities\"],\n    title: \"Tasks and Activities\"\n  }, {\n    pathname: \"/gantt/percentage\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttPercentage\"],\n    title: \"Percentage\"\n  }, {\n    pathname: \"/gantt/eventline\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttEventline\"],\n    title: \"Eventline\"\n  }, {\n    pathname: \"/gantt/actions\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttAction\"],\n    title: \"Actions\"\n  }, {\n    pathname: \"/gantt/events\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttEvents\"],\n    title: \"Events\"\n  }, {\n    pathname: \"/gantt/track-selection\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttTrackSelection\"],\n    title: \"Track Selection\"\n  }, {\n    pathname: \"/gantt/bar-types\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttStyle\"],\n    title: \"Bar types\"\n  }, {\n    pathname: \"/gantt/label-truncation\",\n    content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttTruncate\"],\n    title: \"Label Truncation\"\n  }]\n}, {\n  pathname: \"/timeline\",\n  children: [{\n    pathname: \"/timeline/simple\",\n    content: _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__[\"renderTimeline\"],\n    title: \"Simple\"\n  }]\n}, {\n  pathname: \"/pie\",\n  children: [{\n    pathname: \"/pie/simple\",\n    content: _examples_controls_pie__WEBPACK_IMPORTED_MODULE_11__[\"renderPieSimple\"],\n    title: \"Simple\"\n  }, {\n    pathname: \"/pie/custom-legend-placement\",\n    content: function content(id) {\n      Object(_examples_helpers__WEBPACK_IMPORTED_MODULE_15__[\"createElementLegendBindTo\"])(id);\n      return Object(_examples_controls_pie__WEBPACK_IMPORTED_MODULE_11__[\"renderPieLegendTo\"])(id);\n    },\n    title: \"Custom Legend Placement\"\n  }]\n}, {\n  pathname: \"/panning\",\n  children: [{\n    pathname: \"/panning/line\",\n    children: [{\n      pathname: \"/panning/line/simple\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineWithPanning\"],\n      title: \"Simple\"\n    }]\n  }, {\n    pathname: \"/panning/gantt\",\n    children: [{\n      pathname: \"/panning/gantt/simple\",\n      content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttPanning\"],\n      title: \"Simple\"\n    }]\n  }, {\n    pathname: \"/panning/timeline\",\n    children: [{\n      pathname: \"/panning/timeline/simple\",\n      content: _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__[\"renderTimelinePanning\"],\n      title: \"Simple\"\n    }]\n  }, {\n    pathname: \"/panning/bar\",\n    children: [{\n      pathname: \"/panning/bar/simple\",\n      content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarWithPanning\"],\n      title: \"Simple\"\n    }]\n  }, {\n    pathname: \"/panning/paired-result\",\n    children: [{\n      pathname: \"/panning/paired-result/simple\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultWithPanning\"],\n      title: \"Simple\"\n    }]\n  }, {\n    pathname: \"/panning/scatter\",\n    children: [{\n      pathname: \"/panning/scatter/simple\",\n      content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterWithPanning\"],\n      title: \"Simple\"\n    }]\n  }]\n}, {\n  pathname: \"/grid\",\n  children: [{\n    pathname: \"/grid/line\",\n    children: [{\n      pathname: \"/grid/line/horizontal-grid-hidden\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineGridHHidden\"],\n      title: \"Horizontal Grid Hidden\"\n    }, {\n      pathname: \"/grid/line/vertical-grid-hidden\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineGridVHidden\"],\n      title: \"Vertical Grid Hidden\"\n    }]\n  }, {\n    pathname: \"/grid/paired-result\",\n    children: [{\n      pathname: \"/grid/paired-result/horizontal-grid-hidden\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultGridHHidden\"],\n      title: \"Horizontal Grid Hidden\"\n    }, {\n      pathname: \"/grid/paired-result/vertical-grid-hidden\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultGridVHidden\"],\n      title: \"Vertical Grid Hidden\"\n    }]\n  }]\n}, {\n  pathname: \"/axes\",\n  children: [{\n    pathname: \"/axes/line\",\n    children: [{\n      pathname: \"/axes/line/x-axis-hidden\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineXHidden\"],\n      title: \"X Axis Hidden\"\n    }, {\n      pathname: \"/axes/line/y-axis-hidden\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineYHidden\"],\n      title: \"Y Axis Hidden\"\n    }, {\n      pathname: \"/axes/line/static-x-axis-ticks\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineXStaticTicks\"],\n      title: \"Static X Axis Ticks\"\n    }, {\n      pathname: \"/axes/line/x-axis-ticks-formatted\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineXAxisFormatted\"],\n      title: \"X Axis Ticks Formatted\"\n    }, {\n      pathname: \"/axes/line/x-axis-alternate-locale\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineXAlternateLocale\"],\n      title: \"X Axis Alternate Locale\"\n    }, {\n      pathname: \"/axes/line/datetime-buckets\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineDateTimeBuckets\"],\n      title: \"Datetime Buckets\"\n    }, {\n      pathname: \"/axes/line/x-axis-orientation-top\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineXOrientationTop\"],\n      title: \"X Axis Orientation Top\"\n    }]\n  }, {\n    pathname: \"/axes/paired-result\",\n    children: [{\n      pathname: \"/axes/paired-result/x-axis-hidden\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultXHidden\"],\n      title: \"X Axis Hidden\"\n    }, {\n      pathname: \"/axes/paired-result/y-axis-hidden\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultYHidden\"],\n      title: \"Y Axis Hidden\"\n    }, {\n      pathname: \"/axes/paired-result/static-x-axis-ticks\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultXStaticTicks\"],\n      title: \"Static X Axis Ticks\"\n    }, {\n      pathname: \"/axes/paired-result/x-axis-ticks-formatted\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultXAxisFormatted\"],\n      title: \"X Axis Ticks Formatted\"\n    }, {\n      pathname: \"/axes/paired-result/x-axis-alternate-locale\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultXAlternateLocale\"],\n      title: \"X Axis Alternate Locale\"\n    }, {\n      pathname: \"/axes/paired-result/datetime-buckets\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultDateTimeBuckets\"],\n      title: \"Datetime Buckets\"\n    }, {\n      pathname: \"/axes/paired-result/x-axis-orientation-top\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultXOrientationTop\"],\n      title: \"X Axis Orientation Top\"\n    }]\n  }, {\n    pathname: \"/axes/gantt\",\n    children: [{\n      pathname: \"/axes/gantt/datetime-buckets\",\n      content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttDateTimeBuckets\"],\n      title: \"Datetime Buckets\"\n    }]\n  }, {\n    pathname: \"/axes/bar\",\n    children: [{\n      pathname: \"/axes/bar/x-axis-orientation-top\",\n      content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarTimeSeriesXOrientationTop\"],\n      title: \"X Axis Orientation Top\"\n    }]\n  }, {\n    pathname: \"/axes/timeline\",\n    children: [{\n      pathname: \"/axes/timeline/x-axis-without-tick-label\",\n      content: _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__[\"renderTimelineNoXAxisTickLabel\"],\n      title: \"X Axis Without Tick Label\"\n    }]\n  }, {\n    pathname: \"/axes/scatter\",\n    children: [{\n      pathname: \"/axes/scatter/x-axis-hidden\",\n      content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterXHidden\"],\n      title: \"X Axis Hidden\"\n    }, {\n      pathname: \"/axes/scatter/y-axis-hidden\",\n      content: _examples_controls_scatter__WEBPACK_IMPORTED_MODULE_16__[\"renderScatterYHidden\"],\n      title: \"Y Axis Hidden\"\n    }]\n  }]\n}, {\n  pathname: \"/regions\",\n  children: [{\n    pathname: \"/regions/line\",\n    children: [{\n      pathname: \"/regions/line/simple\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineRegionSimple\"],\n      title: \"Simple\"\n    }, {\n      pathname: \"/regions/line/multiple-line\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderMultiLineRegion\"],\n      title: \"Multiple line\"\n    }, {\n      pathname: \"/regions/line/multiple-regions\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineRegionMultiple\"],\n      title: \"Multiple Regions\"\n    }, {\n      pathname: \"/regions/line/region-line\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderRegionLine\"],\n      title: \"Region-line\"\n    }, {\n      pathname: \"/regions/line/with-y2-axis\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineRegionY2\"],\n      title: \"With Y2 Axis\"\n    }, {\n      pathname: \"/regions/line/no-lower-bound\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineRegionNoLower\"],\n      title: \"No Lower Bound\"\n    }, {\n      pathname: \"/regions/line/no-upper-bound\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineRegionNoUpper\"],\n      title: \"No Upper Bound\"\n    }]\n  }, {\n    pathname: \"/regions/multi-line\",\n    children: [{\n      pathname: \"/regions/multi-line/identical\",\n      content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderMultiLineIdenticalDatasetRegion\"],\n      title: \"Dataset Region Identical\"\n    }]\n  }, {\n    pathname: \"/regions/paired-result\",\n    children: [{\n      pathname: \"/regions/paired-result/simple\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderPairedResultRegionSimple\"],\n      title: \"Simple\"\n    }, {\n      pathname: \"/regions/paired-result/multiple-paired-result\",\n      content: _examples_controls_pairedResult__WEBPACK_IMPORTED_MODULE_10__[\"renderMultiPairedResultRegion\"],\n      title: \"Multiple Paired Result\"\n    }]\n  }, {\n    pathname: \"/regions/bar\",\n    children: [{\n      pathname: \"/regions/bar/goal-lines\",\n      content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarDefaultWithGoal\"],\n      title: \"Goal lines\"\n    }, {\n      pathname: \"/regions/bar/grouped-goal-lines\",\n      content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarGroupWithGoal\"],\n      title: \"Grouped - Goal lines\"\n    }, {\n      pathname: \"/regions/bar/stacked-goal-lines\",\n      content: _examples_controls_bar__WEBPACK_IMPORTED_MODULE_4__[\"renderBarStackedWithGoal\"],\n      title: \"Stacked - Goal lines\"\n    }]\n  }, {\n    pathname: \"/regions/combination\",\n    children: [{\n      pathname: \"/regions/combination/simple\",\n      content: _examples_controls_combination__WEBPACK_IMPORTED_MODULE_6__[\"renderCombinationRegion\"],\n      title: \"Simple\"\n    }, {\n      pathname: \"/regions/combination/identical\",\n      content: _examples_controls_combination__WEBPACK_IMPORTED_MODULE_6__[\"renderCombinationIdenticalDatasetRegion\"],\n      title: \"Dataset Region Identical\"\n    }]\n  }]\n}, {\n  pathname: \"/criticality\",\n  children: [{\n    pathname: \"/criticality/simple-line\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityLineSimple\"],\n    title: \"Simple Line\"\n  }, {\n    pathname: \"/criticality/multi-line\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityMultiLine\"],\n    title: \"Multiple Line\"\n  }, {\n    pathname: \"/criticality/simple-paired-result\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityPairedResultSimple\"],\n    title: \"Simple Paired Result\"\n  }, {\n    pathname: \"/criticality/multi-paired-result\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityMultiPairedResult\"],\n    title: \"Multiple Paired Result\"\n  }, {\n    pathname: \"/criticality/timeline\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityTimeline\"],\n    title: \"Timeline\"\n  }, {\n    pathname: \"/criticality/scatter\",\n    content: _examples_controls_criticality__WEBPACK_IMPORTED_MODULE_7__[\"renderCriticalityScatter\"],\n    title: \"Scatter\"\n  }]\n}, {\n  pathname: \"/styles\",\n  children: [{\n    pathname: \"/styles/padding\",\n    children: [{\n      pathname: \"/styles/padding/line\",\n      children: [{\n        pathname: \"/styles/padding/line/custom-container-padding\",\n        content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineCustomContainerPadding\"],\n        title: \"Container Padding\"\n      }, {\n        pathname: \"/styles/padding/line/custom-content-padding\",\n        content: _examples_controls_line__WEBPACK_IMPORTED_MODULE_9__[\"renderLineCustomContentPadding\"],\n        title: \"Content Padding\"\n      }]\n    }, {\n      pathname: \"/styles/padding/gantt\",\n      children: [{\n        pathname: \"/styles/padding/gantt/custom-container-padding\",\n        content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttCustomContainerPadding\"],\n        title: \"Container Padding\"\n      }, {\n        pathname: \"/styles/padding/gantt/custom-content-padding\",\n        content: _examples_controls_gantt__WEBPACK_IMPORTED_MODULE_8__[\"renderGanttCustomContentPadding\"],\n        title: \"Content Padding\"\n      }]\n    }, {\n      pathname: \"/styles/padding/timeline\",\n      children: [{\n        pathname: \"/styles/padding/timeline/custom-container-padding\",\n        content: _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__[\"renderTimelineCustomContainerPadding\"],\n        title: \"Container Padding\"\n      }, {\n        pathname: \"/styles/padding/timeline/custom-content-padding\",\n        content: _examples_controls_timeline__WEBPACK_IMPORTED_MODULE_14__[\"renderTimelineCustomContentPadding\"],\n        title: \"Content Padding\"\n      }]\n    }]\n  }, {\n    pathname: \"/styles/shapes\",\n    children: [{\n      pathname: \"/styles/shapes/standard\",\n      content: _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__[\"renderShapesSimple\"],\n      title: \"Standard\"\n    }, {\n      pathname: \"/styles/shapes/critical\",\n      content: _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__[\"renderCriticalityShapes\"],\n      title: \"Criticality\"\n    }, {\n      pathname: \"/styles/shapes/standard-light\",\n      content: _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__[\"renderShapesSimpleLight\"],\n      title: \"Standard - Light\"\n    }, {\n      pathname: \"/styles/shapes/critical-light\",\n      content: _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__[\"renderCriticalityShapesLight\"],\n      title: \"Criticality - Light\"\n    }, {\n      pathname: \"/styles/shapes/fills\",\n      content: _examples_controls_shapes__WEBPACK_IMPORTED_MODULE_12__[\"renderFillTypes\"],\n      title: \"Rectangle Fill\"\n    }]\n  }, {\n    pathname: \"/styles/colors\",\n    content: _examples_controls_colors__WEBPACK_IMPORTED_MODULE_5__[\"renderColorsExample\"],\n    title: \"Colors\"\n  }]\n}], {\n  gettingStartedLink: \"#/line/simple\",\n  gitHubRepo: \"https://github.com/cerner/carbon-graphs\"\n});\n\n//# sourceURL=webpack://Carbon/./dev/app.js?");

/***/ }),

/***/ "./dev/app.less":
/*!**********************!*\
  !*** ./dev/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Carbon/./dev/app.less?");

/***/ }),

/***/ "./dev/examples/controls/bar.js":
/*!**************************************!*\
  !*** ./dev/examples/controls/bar.js ***!
  \**************************************/
/*! exports provided: renderBarDefault, renderBarTimeSeries, renderBarTimeSeriesWithDateline, renderBarTimeSeriesWithEventline, renderBarGroup, renderBarStacked, renderBarNegative, renderBarDefaultWithGoal, renderBarGroupWithGoal, renderBarStackedWithGoal, renderBarTimeSeriesXOrientationTop, renderSimpleBarAxisInfoTextLabels, renderStackedBarAxisInfoTextLabels, renderBarWithPanning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarDefault\", function() { return renderBarDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarTimeSeries\", function() { return renderBarTimeSeries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarTimeSeriesWithDateline\", function() { return renderBarTimeSeriesWithDateline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarTimeSeriesWithEventline\", function() { return renderBarTimeSeriesWithEventline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarGroup\", function() { return renderBarGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarStacked\", function() { return renderBarStacked; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarNegative\", function() { return renderBarNegative; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarDefaultWithGoal\", function() { return renderBarDefaultWithGoal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarGroupWithGoal\", function() { return renderBarGroupWithGoal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarStackedWithGoal\", function() { return renderBarStackedWithGoal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarTimeSeriesXOrientationTop\", function() { return renderBarTimeSeriesXOrientationTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSimpleBarAxisInfoTextLabels\", function() { return renderSimpleBarAxisInfoTextLabels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderStackedBarAxisInfoTextLabels\", function() { return renderStackedBarAxisInfoTextLabels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBarWithPanning\", function() { return renderBarWithPanning; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup */ \"./dev/examples/popup.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n/* eslint-disable no-unused-expressions */\n\n/* eslint-disable no-sequences */\n\n\n\n\n\nvar tickValues = [new Date(2018, 0, 1).toISOString(), new Date(2018, 0, 2).toISOString(), new Date(2018, 0, 3).toISOString(), new Date(2018, 0, 4).toISOString(), new Date(2018, 0, 5).toISOString(), new Date(2018, 0, 6).toISOString(), new Date(2018, 0, 7).toISOString()];\nvar numberedTicks = {\n  values: [1, 2, 3, 4, 5, 6, 7],\n  format: \".0f\"\n};\nvar regions = [{\n  axis: \"y\",\n  x: 1,\n  start: 7,\n  end: 7\n}, {\n  axis: \"y\",\n  x: 2,\n  start: 13,\n  end: 13\n}, {\n  axis: \"y\",\n  x: 3,\n  start: 17,\n  end: 17\n}, {\n  axis: \"y\",\n  x: 4,\n  start: 4,\n  end: 4\n}];\nvar regions2 = [{\n  axis: \"y\",\n  x: 1,\n  start: 10,\n  end: 10\n}, {\n  axis: \"y\",\n  x: 2,\n  start: 40,\n  end: 40\n}, {\n  axis: \"y\",\n  x: 3,\n  start: 55,\n  end: 55\n}, {\n  axis: \"y\",\n  x: 4,\n  start: 30,\n  end: 30\n}];\nvar axisInfoRow = [{\n  axis: \"x\",\n  x: 1,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    characterCount: 4,\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n    shape: {\n      path: {\n        d: \"M24,0l24,24L24,48L0,24L24,0z\",\n        fill: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE\n      },\n      options: {\n        x: -6,\n        y: -6,\n        scale: 0.25\n      }\n    },\n    label: {\n      display: \"1234567\",\n      secondaryDisplay: \"ICU\"\n    }\n  }\n}, {\n  axis: \"x\",\n  x: 2,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    shape: {\n      path: {\n        d: \"M24,0l24,24L24,48L0,24L24,0z\",\n        fill: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.PURPLE\n      },\n      options: {\n        x: -6,\n        y: -6,\n        scale: 0.25\n      }\n    },\n    label: {\n      display: \"65\",\n      secondaryDisplay: \"ICU\"\n    }\n  }\n}, {\n  axis: \"x\",\n  x: 3,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n    shape: {\n      path: {\n        d: \"M24,0l24,24L24,48L0,24L24,0z\"\n      },\n      options: {\n        x: -6,\n        y: -6,\n        scale: 0.25\n      }\n    },\n    label: {\n      display: \"42\",\n      secondaryDisplay: \"ICU\"\n    }\n  }\n}, {\n  axis: \"x\",\n  x: 4,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    shape: {},\n    label: {\n      display: \"23\",\n      secondaryDisplay: \"\"\n    }\n  }\n}, {\n  axis: \"x\",\n  x: 5,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    shape: {},\n    label: {\n      display: \"\",\n      secondaryDisplay: \"ICU\"\n    }\n  }\n}, {\n  axis: \"x\",\n  x: 6,\n  value: {\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadTextLabelPopup\"],\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    shape: {},\n    label: {\n      display: \"25\",\n      secondaryDisplay: \"ICU\"\n    }\n  }\n}];\nvar renderBarDefault = function renderBarDefault(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  var barSimple = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barSimple.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]));\n  return barSimple;\n};\nvar renderBarTimeSeries = function renderBarTimeSeries(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e\"\n  };\n  axisData.showVGrid = false;\n  var barTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\").data[0]));\n  return barTime;\n};\nvar renderBarTimeSeriesWithDateline = function renderBarTimeSeriesWithDateline(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e\"\n  };\n  axisData.dateline = [{\n    showDatelineIndicator: true,\n    label: {\n      display: \"Action Date\"\n    },\n    color: \"#FFDF00\",\n    shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.SQUARE,\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadDatelinePopup\"],\n    value: new Date(2017, 12, 2).toISOString()\n  }], axisData.clickPassThrough = {\n    dateline: false\n  }, axisData.showVGrid = false;\n  var barTimeDateline = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barTimeDateline.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\").data[0]));\n  return barTimeDateline;\n};\nvar renderBarTimeSeriesWithEventline = function renderBarTimeSeriesWithEventline(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e\"\n  };\n  axisData.eventline = [{\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n    style: {\n      strokeDashArray: \"4,4\"\n    },\n    value: new Date(2017, 12, 2).toISOString()\n  }, {\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    style: {\n      strokeDashArray: \"2,2\"\n    },\n    value: new Date(2017, 12, 3).toISOString()\n  }], axisData.clickPassThrough = {\n    dateline: false\n  }, axisData.showVGrid = false;\n  var barTimeDateline = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barTimeDateline.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\").data[0]));\n  return barTimeDateline;\n};\nvar renderBarGroup = function renderBarGroup(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  var barGroup = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barGroup.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[1]));\n  barGroup.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]));\n  var content2 = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[2]);\n  barGroup.loadContent(content2);\n  return barGroup;\n};\nvar renderBarStacked = function renderBarStacked(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  var barStacked = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]));\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[3]));\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[4]));\n  return barStacked;\n};\nvar renderBarNegative = function renderBarNegative(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  axisData.axis.y.lowerLimit = -15;\n  axisData.axis.y.upperLimit = 0;\n  var barNegative = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barNegative.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[5]));\n  return barNegative;\n};\nvar renderBarDefaultWithGoal = function renderBarDefaultWithGoal(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  var barSimple = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]);\n  data.regions = regions;\n  barSimple.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data));\n  return barSimple;\n};\nvar renderBarGroupWithGoal = function renderBarGroupWithGoal(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  var barGroup = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barGroup.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[1]);\n  data.regions = regions;\n  barGroup.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data));\n  var data2 = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[2]);\n  data2.regions = regions;\n  barGroup.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data2));\n  return barGroup;\n};\nvar renderBarStackedWithGoal = function renderBarStackedWithGoal(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.showVGrid = false;\n  var barStacked = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data2 = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]);\n  data2.regions = regions2;\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data2));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[3]);\n  data.regions = regions2;\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data));\n  var data3 = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[4]);\n  data3.regions = regions2;\n  barStacked.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data3));\n  return barStacked;\n};\nvar renderBarTimeSeriesXOrientationTop = function renderBarTimeSeriesXOrientationTop(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e\"\n  };\n  axisData.showVGrid = false;\n  axisData.axis.x.orientation = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXES_ORIENTATION.X.TOP;\n  var barTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\").data[0]));\n  return barTime;\n};\nvar renderSimpleBarAxisInfoTextLabels = function renderSimpleBarAxisInfoTextLabels(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  var barSimpleAxisInfoRow = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[7]);\n  data.axisInfoRow = axisInfoRow;\n  barSimpleAxisInfoRow.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data));\n  return barSimpleAxisInfoRow;\n};\nvar renderStackedBarAxisInfoTextLabels = function renderStackedBarAxisInfoTextLabels(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = numberedTicks;\n  axisData.axis.x.orientation = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXES_ORIENTATION.X.TOP;\n  var barStackedAxisInfoRow = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]);\n  data.label.isDisabled = true;\n  data.axisInfoRow = axisInfoRow;\n  barStackedAxisInfoRow.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data));\n  var data2 = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[3]);\n  data2.label.isDisabled = true;\n  barStackedAxisInfoRow.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data2));\n  var data3 = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[4]);\n  data3.label.isDisabled = true;\n  barStackedAxisInfoRow.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(data3));\n  return barStackedAxisInfoRow;\n};\nvar renderBarWithPanning = function renderBarWithPanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_TIMESERIES\"));\n  axisData.axis.x.lowerLimit = new Date(2016, 0, 1, 0).toISOString();\n  axisData.axis.x.upperLimit = new Date(2016, 0, 2, 0).toISOString();\n  axisData.pan = {\n    enabled: true\n  };\n  axisData.axis.x.ticks = {\n    values: [new Date(2016, 0, 1, 3).toISOString(), new Date(2016, 0, 1, 6).toISOString(), new Date(2016, 0, 1, 9).toISOString(), new Date(2016, 0, 1, 12).toISOString(), new Date(2016, 0, 1, 15).toISOString()],\n    format: \"%H\"\n  };\n  var graphData = {\n    key: \"uid_bar_t1\",\n    label: {\n      display: \"Data Label\"\n    },\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadBarPopup\"],\n    values: [{\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 15\n    }, {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 19\n    }, {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 10\n    }, {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 13\n    }, {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 15\n    }]\n  };\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axis);\n    graph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(values));\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_4__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/bar.js?");

/***/ }),

/***/ "./dev/examples/controls/bubble.js":
/*!*****************************************!*\
  !*** ./dev/examples/controls/bubble.js ***!
  \*****************************************/
/*! exports provided: renderSimpleBubble, renderWeightBasedBubbleGraph, renderColorBasedBubbleGraph, renderWeightColorCombination, renderCustomBubbleSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSimpleBubble\", function() { return renderSimpleBubble; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWeightBasedBubbleGraph\", function() { return renderWeightBasedBubbleGraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderColorBasedBubbleGraph\", function() { return renderColorBasedBubbleGraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWeightColorCombination\", function() { return renderWeightColorCombination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCustomBubbleSize\", function() { return renderCustomBubbleSize; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup */ \"./dev/examples/popup.js\");\n\n\n\nvar simpleAxisData = function simpleAxisData(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: \"Datetime\",\n        lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 1, 23, 59).toISOString()\n      },\n      y: {\n        label: \"Bubble\",\n        lowerLimit: 10,\n        upperLimit: 200\n      }\n    }\n  };\n};\n\nvar axisData = function axisData(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: \"Datetime\",\n        lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 1, 23, 59).toISOString()\n      },\n      y: {\n        label: \"Year\",\n        lowerLimit: 2010,\n        upperLimit: 2020\n      }\n    }\n  };\n};\n\nvar temperatureAxisData = function temperatureAxisData(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: \"Datetime\",\n        lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 1, 23, 59).toISOString()\n      },\n      y: {\n        label: \"Temperature\",\n        lowerLimit: 50,\n        upperLimit: 280\n      }\n    }\n  };\n};\n\nvar data = {\n  key: \"uid_1\",\n  label: {\n    display: \"Bubble set A\"\n  },\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n  color: \"#004C76\",\n  values: [{\n    x: new Date(2016, 0, 1, 12, 0).toISOString(),\n    y: 50\n  }, {\n    x: new Date(2016, 0, 1, 15, 45).toISOString(),\n    y: 120\n  }, {\n    x: new Date(2016, 0, 1, 10, 30).toISOString(),\n    y: 130\n  }, {\n    x: new Date(2016, 0, 1, 18, 0).toISOString(),\n    y: 180\n  }],\n  yAxis: \"y\",\n  showShapes: false\n};\nvar data2 = {\n  key: \"uid_2\",\n  label: {\n    display: \"Amount\"\n  },\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBubblePopup\"],\n  weight: {\n    min: 40,\n    max: 450\n  },\n  hue: {\n    lowerShade: \"yellow\",\n    upperShade: \"red\"\n  },\n  values: [{\n    x: new Date(2016, 0, 1, 11, 0).toISOString(),\n    y: 2012,\n    weight: 70\n  }, {\n    x: new Date(2016, 0, 1, 9, 0).toISOString(),\n    y: 2014,\n    weight: 180\n  }, {\n    x: new Date(2016, 0, 1, 19, 30).toISOString(),\n    y: 2016,\n    weight: 220\n  }, {\n    x: new Date(2016, 0, 1, 15, 0).toISOString(),\n    y: 2018,\n    weight: 340\n  }],\n  yAxis: \"y\"\n};\nvar data3 = {\n  key: \"uid_3\",\n  label: {\n    display: \"Temperature\"\n  },\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n  hue: {\n    // 1-to-1 mapping of range with data values. If not provided, data.color is used\n    // If lowerShade and upperShade is provided, Carbon will map the colors to each data value.\n    lowerShade: \"#ffff00\",\n    // yellow\n    upperShade: \"#ff0000\" // red\n\n  },\n  values: [{\n    x: new Date(2016, 0, 1, 9, 0).toISOString(),\n    y: 80\n  }, {\n    x: new Date(2016, 0, 1, 11, 0).toISOString(),\n    y: 110\n  }, {\n    x: new Date(2016, 0, 1, 13, 0).toISOString(),\n    y: 150\n  }, {\n    x: new Date(2016, 0, 1, 15, 0).toISOString(),\n    y: 190\n  }, {\n    x: new Date(2016, 0, 1, 16, 40).toISOString(),\n    y: 220\n  }, {\n    x: new Date(2016, 0, 1, 18, 30).toISOString(),\n    y: 250\n  }],\n  yAxis: \"y\"\n};\nvar data4 = {\n  key: \"uid_4\",\n  label: {\n    display: \"Population\"\n  },\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBubblePopup\"],\n  weight: {\n    min: 100000,\n    max: 250000\n  },\n  values: [{\n    x: new Date(2016, 0, 1, 11, 0).toISOString(),\n    y: 2012,\n    weight: 120000\n  }, {\n    x: new Date(2016, 0, 1, 9, 0).toISOString(),\n    y: 2014,\n    weight: 180000\n  }, {\n    x: new Date(2016, 0, 1, 19, 30).toISOString(),\n    y: 2016,\n    weight: 220000\n  }, {\n    x: new Date(2016, 0, 1, 15, 0).toISOString(),\n    y: 2018,\n    weight: 240000\n  }],\n  yAxis: \"y\"\n};\nvar data5 = {\n  key: \"uid_5\",\n  label: {\n    display: \"Bubble set B\"\n  },\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_BLUE,\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n  weight: {\n    // when providing maxRadius maxRadius will be given preference\n    maxRadius: 12\n  },\n  values: [{\n    x: new Date(2016, 0, 1, 6, 0).toISOString(),\n    y: 60\n  }, {\n    x: new Date(2016, 0, 1, 10, 0).toISOString(),\n    y: 120\n  }, {\n    x: new Date(2016, 0, 1, 12, 0).toISOString(),\n    y: 180\n  }, {\n    x: new Date(2016, 0, 1, 18, 0).toISOString(),\n    y: 220\n  }],\n  yAxis: \"y\"\n};\nvar renderSimpleBubble = function renderSimpleBubble(id) {\n  var bubbleGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(simpleAxisData(\"#\".concat(id)));\n  bubbleGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bubble(data));\n  return bubbleGraph;\n};\nvar renderWeightBasedBubbleGraph = function renderWeightBasedBubbleGraph(id) {\n  var bubbleGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData(\"#\".concat(id)));\n  bubbleGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bubble(data4));\n  return bubbleGraph;\n};\nvar renderColorBasedBubbleGraph = function renderColorBasedBubbleGraph(id) {\n  var bubbleGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(temperatureAxisData(\"#\".concat(id)));\n  bubbleGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bubble(data3));\n  return bubbleGraph;\n};\nvar renderWeightColorCombination = function renderWeightColorCombination(id) {\n  var bubbleGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData(\"#\".concat(id)));\n  bubbleGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bubble(data2));\n  return bubbleGraph;\n};\nvar renderCustomBubbleSize = function renderCustomBubbleSize(id) {\n  var bubbleGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(simpleAxisData(\"#\".concat(id)));\n  bubbleGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bubble(data5));\n  return bubbleGraph;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/bubble.js?");

/***/ }),

/***/ "./dev/examples/controls/colors.js":
/*!*****************************************!*\
  !*** ./dev/examples/controls/colors.js ***!
  \*****************************************/
/*! exports provided: renderColorsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderColorsExample\", function() { return renderColorsExample; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./dev/examples/helpers.js\");\n\n\n\nvar renderColorsExample = function renderColorsExample(id) {\n  var sect = document.createElement(\"section\");\n  sect.setAttribute(\"class\", \"shape-container\");\n  var svgElement = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"vector\"].render(sect, id, \"0 0 1080 150\");\n  document.querySelector(\"#\".concat(id)).appendChild(sect);\n  d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(svgElement).attr(\"style\", \"background: #fafafa; margin: 1rem;\", true).append(\"g\").selectAll(\"circle\").data(Object.keys(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS)).enter().append(\"circle\").attr(\"r\", 20).attr(\"cx\", function (d, i) {\n    return i * 85 + 25;\n  }).attr(\"cy\", function () {\n    return 75;\n  }).attr(\"style\", function (d) {\n    return \"fill: \".concat(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS[d], \";\");\n  });\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/colors.js?");

/***/ }),

/***/ "./dev/examples/controls/combination.js":
/*!**********************************************!*\
  !*** ./dev/examples/controls/combination.js ***!
  \**********************************************/
/*! exports provided: renderCombinationSimple, renderCombinationRegion, renderCombinationBar, combinationRegionInput, renderCombinationIdenticalDatasetRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCombinationSimple\", function() { return renderCombinationSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCombinationRegion\", function() { return renderCombinationRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCombinationBar\", function() { return renderCombinationBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combinationRegionInput\", function() { return combinationRegionInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCombinationIdenticalDatasetRegion\", function() { return renderCombinationIdenticalDatasetRegion; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n\n\n\nvar renderCombinationSimple = function renderCombinationSimple(id) {\n  var combGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\"));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[0]));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[1]));\n  return combGraph;\n};\nvar renderCombinationRegion = function renderCombinationRegion(id) {\n  var lineData = Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[0];\n  lineData.regions = [{\n    axis: \"y\",\n    start: 6,\n    end: 18\n  }];\n  var pairedData = Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[1];\n  pairedData.regions = {\n    high: [{\n      axis: \"y2\",\n      start: 120,\n      end: 180,\n      color: \"#c8cacb\"\n    }],\n    low: [{\n      axis: \"y2\",\n      start: 20,\n      end: 80\n    }]\n  };\n  var combGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\"));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(pairedData));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(lineData));\n  return combGraph;\n};\nvar renderCombinationBar = function renderCombinationBar(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\"));\n  axisData.axis.x.ticks = {\n    values: [1, 2, 3, 4, 5, 6, 7],\n    format: \".0f\"\n  };\n  axisData.showVGrid = false;\n  axisData.axis.y2.show = true;\n  axisData.axis.y2.padDomain = false;\n  var barTest = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  barTest.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.bar(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[0]));\n  barTest.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"BAR_DEFAULT\").data[6]));\n  return barTest;\n};\nvar combinationRegionInput = function combinationRegionInput(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        show: true,\n        label: \"Data\",\n        lowerLimit: 0,\n        upperLimit: 300\n      },\n      y: {\n        show: true,\n        label: \"Line Paired Combo\",\n        lowerLimit: 0,\n        upperLimit: 20\n      }\n    }\n  };\n};\nvar renderCombinationIdenticalDatasetRegion = function renderCombinationIdenticalDatasetRegion(id) {\n  var lineData = Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[0];\n  lineData.regions = [{\n    axis: \"y\",\n    start: 6,\n    end: 100\n  }];\n  var pairedData = Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_PAIR_COMB_DEFAULT\").data[2];\n  pairedData.regions = {\n    high: [{\n      axis: \"y\",\n      start: 6,\n      end: 100\n    }],\n    low: [{\n      axis: \"y\",\n      start: 6,\n      end: 100\n    }],\n    mid: [{\n      axis: \"y\",\n      start: 6,\n      end: 100\n    }]\n  };\n  var combGraph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(combinationRegionInput(\"#\".concat(id)));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(lineData));\n  combGraph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(pairedData));\n  return combGraph;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/combination.js?");

/***/ }),

/***/ "./dev/examples/controls/criticality.js":
/*!**********************************************!*\
  !*** ./dev/examples/controls/criticality.js ***!
  \**********************************************/
/*! exports provided: renderCriticalityLineSimple, renderCriticalityMultiLine, renderCriticalityPairedResultSimple, renderCriticalityMultiPairedResult, renderCriticalityTimeline, renderCriticalityScatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityLineSimple\", function() { return renderCriticalityLineSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityMultiLine\", function() { return renderCriticalityMultiLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityPairedResultSimple\", function() { return renderCriticalityPairedResultSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityMultiPairedResult\", function() { return renderCriticalityMultiPairedResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityTimeline\", function() { return renderCriticalityTimeline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityScatter\", function() { return renderCriticalityScatter; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _pairedResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pairedResult */ \"./dev/examples/controls/pairedResult.js\");\n\n\n\n\nvar renderCriticalityLineSimple = function renderCriticalityLineSimple(id) {\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]);\n  data.regions = [{\n    axis: \"y\",\n    start: 2,\n    end: 10\n  }];\n  data.values[0].isCritical = true;\n  data.values[10].isCritical = true;\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineTime;\n};\nvar renderCriticalityMultiLine = function renderCriticalityMultiLine(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.values[0].isCritical = true;\n  data.values[5].isCritical = true;\n  data.values[10].isCritical = true;\n  data.regions = [{\n    start: 2\n  }];\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2]);\n  dataAlt.values[6].isCritical = true;\n  dataAlt.values[11].isCritical = true;\n  dataAlt.regions = [{\n    start: 2,\n    end: 14\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(dataAlt));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4]));\n  return lineDefault;\n};\nvar renderCriticalityPairedResultSimple = function renderCriticalityPairedResultSimple(id) {\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]);\n  data.regions = {\n    high: [{\n      axis: \"y\",\n      start: 120,\n      end: 170,\n      color: \"#c8cacb\"\n    }],\n    low: [{\n      axis: \"y\",\n      start: 20,\n      end: 100\n    }]\n  };\n  data.values[3].high.isCritical = true;\n  data.values[3].mid.isCritical = true;\n  data.values[3].low.isCritical = true;\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(data));\n  return pairedTime;\n};\nvar renderCriticalityMultiPairedResult = function renderCriticalityMultiPairedResult(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.y2.show = true;\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]);\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[1]);\n  data.regions = _pairedResult__WEBPACK_IMPORTED_MODULE_3__[\"multiRegion\"];\n  data.values[3].high.isCritical = true;\n  data.values[3].mid.isCritical = true;\n  data.values[0].low.isCritical = true;\n  dataAlt.regions = _pairedResult__WEBPACK_IMPORTED_MODULE_3__[\"multiRegionAlt\"];\n  dataAlt.values[1].high.isCritical = true;\n  dataAlt.values[1].mid.isCritical = true;\n  dataAlt.values[1].low.isCritical = true;\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(data));\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(dataAlt));\n  return pairedTime;\n};\nvar renderCriticalityTimeline = function renderCriticalityTimeline(id) {\n  var timelineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  var timelineData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  timelineData.data[0].values[1].isCritical = true;\n  timelineData.data[0].values[2].isCritical = true;\n  timelineData.data[1].values[1].isCritical = true;\n  timelineDefault.loadContent(timelineData.data[0]);\n  timelineDefault.loadContent(timelineData.data[1]);\n  return timelineDefault;\n};\nvar renderCriticalityScatter = function renderCriticalityScatter(id) {\n  var scatterDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.values[0].isCritical = true;\n  data.values[5].isCritical = true;\n  data.values[10].isCritical = true;\n  data.regions = [{\n    start: 2\n  }];\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2]);\n  dataAlt.values[6].isCritical = true;\n  dataAlt.values[11].isCritical = true;\n  dataAlt.regions = [{\n    start: 2,\n    end: 14\n  }];\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(data));\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(dataAlt));\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4]));\n  return scatterDefault;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/criticality.js?");

/***/ }),

/***/ "./dev/examples/controls/gantt.js":
/*!****************************************!*\
  !*** ./dev/examples/controls/gantt.js ***!
  \****************************************/
/*! exports provided: renderGantt, renderGanttActivities, renderGanttEventline, renderGanttPercentage, renderGanttPanning, renderGanttAction, renderGanttEvents, renderGanttTruncate, renderGanttStyle, renderGanttDateTimeBuckets, renderGanttCustomContentPadding, renderGanttCustomContainerPadding, renderGanttTrackSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGantt\", function() { return renderGantt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttActivities\", function() { return renderGanttActivities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttEventline\", function() { return renderGanttEventline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttPercentage\", function() { return renderGanttPercentage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttPanning\", function() { return renderGanttPanning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttAction\", function() { return renderGanttAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttEvents\", function() { return renderGanttEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttTruncate\", function() { return renderGanttTruncate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttStyle\", function() { return renderGanttStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttDateTimeBuckets\", function() { return renderGanttDateTimeBuckets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttCustomContentPadding\", function() { return renderGanttCustomContentPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttCustomContainerPadding\", function() { return renderGanttCustomContainerPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGanttTrackSelection\", function() { return renderGanttTrackSelection; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./dev/examples/helpers.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup */ \"./dev/examples/popup.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n\n\n\n\n\n\n\n\n\n\nvar daysToMilliseconds = function daysToMilliseconds(d) {\n  return 24 * 60 * 60 * 1000 * d;\n};\n\nvar scheduled = {\n  path: [{\n    id: \"calendar\",\n    d: \"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8\" + \" 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z\"\n  }, {\n    id: \"circle\",\n    fill: \"#78C346\",\n    d: \"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z\"\n  }, {\n    id: \"check\",\n    fill: \"#FFF\",\n    d: \"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z\"\n  }],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4\n  }\n};\nvar alert = {\n  path: [{\n    id: \"triangle\",\n    fill: \"#E50000\",\n    d: \"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z\"\n  }, {\n    id: \"exclamation\",\n    fill: \"#FFF\",\n    d: \"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z\"\n  }],\n  options: {\n    x: -6.5,\n    y: -7.5,\n    scale: 0.35\n  }\n};\nvar dueSoon = {\n  path: [{\n    id: \"clock\",\n    d: \"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 \" + \"1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 \" + \"0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-\" + \"1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9\" + \"-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 \" + \"5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z\"\n  }, {\n    id: \"diamond\",\n    fill: \"#E50000\",\n    d: \"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 \" + \".1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z\"\n  }, {\n    id: \"exclamation\",\n    fill: \"#FFF\",\n    d: \"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z\"\n  }],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.35\n  }\n};\nvar tasks = [[{\n  key: \"task1\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Apex\"\n  },\n  startDate: new Date(2018, 2, 1).toISOString(),\n  endDate: new Date(2018, 3, 10).toISOString()\n}, {\n  key: \"task2\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Broccoli\"\n  },\n  startDate: new Date(2018, 8, 1).toISOString(),\n  endDate: new Date(2018, 9, 10).toISOString()\n}], [{\n  key: \"task3\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Apex\"\n  },\n  startDate: new Date(2018, 3, 1).toISOString(),\n  endDate: new Date(2018, 7, 10).toISOString()\n}], [{\n  key: \"task4\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Charming\"\n  },\n  startDate: new Date(2018, 6, 1).toISOString(),\n  endDate: new Date(2018, 7, 10).toISOString()\n}, {\n  key: \"task5\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Broccoli\"\n  },\n  startDate: new Date(2018, 10, 1).toISOString(),\n  endDate: new Date(2018, 10, 1).toISOString()\n}], [{\n  key: \"task6\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Apex\"\n  },\n  startDate: new Date(2018, 6, 1).toISOString(),\n  endDate: new Date(2018, 9, 10).toISOString()\n}], [{\n  key: \"task7\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Donny\"\n  },\n  startDate: new Date(2018, 3, 1).toISOString(),\n  duration: function duration() {\n    return daysToMilliseconds(14);\n  }\n}, {\n  key: \"task8\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Fargo\"\n  },\n  endDate: new Date(2018, 7, 1).toISOString(),\n  duration: function duration() {\n    return daysToMilliseconds(10);\n  }\n}, {\n  key: \"Task 9\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Broccoli Task hash\"\n  },\n  startDate: new Date(2018, 8, 1).toISOString(),\n  endDate: new Date(2018, 9, 10).toISOString(),\n  style: {\n    isHashed: true\n  }\n}]];\nvar tasks2 = [[{\n  key: \"task1\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Apex\"\n  },\n  startDate: new Date(2016, 0, 1, 8).toISOString(),\n  endDate: new Date(2016, 0, 1, 12).toISOString()\n}, {\n  key: \"task2\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Broccoli\"\n  },\n  startDate: new Date(2016, 0, 1, 15).toISOString(),\n  endDate: new Date(2016, 0, 1, 23).toISOString()\n}]];\nvar activities = [[{\n  key: \"activity1\",\n  label: {\n    display: \"activity1\"\n  },\n  onClick: function onClick() {},\n  color: \"#FFDF00\",\n  startDate: new Date(2018, 1, 1).toISOString(),\n  endDate: new Date(2018, 4, 10).toISOString(),\n  style: {\n    isDotted: false,\n    isHollow: false\n  }\n}], [{\n  key: \"activity2-hashed\",\n  label: {\n    display: \"Story Apex Hashed Activity\"\n  },\n  color: \"#000\",\n  startDate: new Date(2018, 0, 1).toISOString(),\n  endDate: new Date(2018, 3, 1).toISOString(),\n  style: {\n    isDotted: false,\n    isHollow: false,\n    isHashed: true\n  }\n}, {\n  key: \"activity3\",\n  color: \"#ff0000\",\n  label: {\n    display: \"Story Apex Activity\"\n  },\n  startDate: new Date(2018, 3, 1).toISOString(),\n  endDate: new Date(2018, 9, 10).toISOString(),\n  style: {\n    isDotted: false,\n    isHollow: false\n  }\n}], [{\n  key: \"activity4\",\n  color: _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"COLORS\"].LIGHT_BLUE,\n  onMouseEnter: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  onMouseMove: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n  label: {\n    display: \"Story Charming Activity\"\n  },\n  startDate: new Date(2018, 5, 1).toISOString(),\n  endDate: new Date(2018, 5, 31).toISOString(),\n  style: {\n    isDotted: false,\n    isHollow: false\n  }\n}]];\nvar events = [[{\n  key: \"uid_event_1\",\n  label: {\n    display: \"Defect A\"\n  },\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadPopup\"],\n  shape: scheduled,\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n  values: [new Date(2018, 2, 5).toISOString()]\n}, {\n  key: \"uid_event_2\",\n  label: {\n    display: \"Defect B\"\n  },\n  shape: dueSoon,\n  color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.WHITE,\n  values: [new Date(2018, 5, 4).toISOString()]\n}, {\n  key: \"uid_event_3\",\n  label: {\n    display: \"Defect C\"\n  },\n  shape: alert,\n  values: [new Date(2018, 3, 30).toISOString()]\n}]];\nvar actions = [[{\n  key: \"uid_action_1\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadPopup\"],\n  values: [new Date(2018, 2, 1, 6, 15).toISOString()]\n}, {\n  key: \"uid_action_2\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadPopup\"],\n  values: [new Date(2018, 7, 1, 6, 15).toISOString()]\n}], [{\n  key: \"uid_action_1\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadPopup\"],\n  values: [new Date(2018, 2, 1, 6, 15).toISOString(), new Date(2018, 4, 1, 6, 15).toISOString()]\n}, {\n  key: \"uid_action_2\",\n  onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadPopup\"],\n  values: [new Date(2018, 7, 1, 6, 15).toISOString()]\n}]];\nvar lowerStepTickValues = [new Date(2018, 1, 2, 6).toISOString(), new Date(2018, 1, 2, 12).toISOString(), new Date(2018, 1, 2, 18).toISOString()];\nvar midpointTickValues = [new Date(2018, 1, 2, 3).toISOString(), new Date(2018, 1, 2, 9).toISOString(), new Date(2018, 1, 2, 15).toISOString(), new Date(2018, 1, 2, 21).toISOString()];\nvar upperStepTickValues = [new Date(2018, 1, 2, 0).toISOString(), new Date(2018, 1, 2, 24).toISOString()];\nvar renderGantt = function renderGantt(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, tasks, [], [], [], 4);\n  return ganttDefault;\n};\nvar renderGanttActivities = function renderGanttActivities(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, tasks, activities, [], [], 4);\n  return ganttDefault;\n};\nvar renderGanttEventline = function renderGanttEventline(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.eventline = [{\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n    style: {\n      strokeDashArray: \"4,4\"\n    },\n    value: new Date(2018, 10, 13).toISOString()\n  }, {\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    style: {\n      strokeDashArray: \"2,2\"\n    },\n    value: new Date(2018, 10, 20).toISOString()\n  }];\n  data.showActionLegend = false;\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, tasks, [], [], [], 4);\n  return ganttDefault;\n};\nvar renderGanttPercentage = function renderGanttPercentage(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  data.dateline = [];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  ganttDefault.loadContent({\n    key: \"track 1\",\n    trackLabel: {\n      display: \"Percentage\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"task3\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      color: _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"COLORS\"].ORANGE,\n      label: {\n        display: \"Story Apex\"\n      },\n      percentage: 20,\n      startDate: new Date(2018, 8, 1).toISOString(),\n      endDate: new Date(2019, 0, 12).toISOString()\n    }, {\n      key: \"task5\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      color: _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"COLORS\"].GREEN,\n      label: {\n        display: \"Story Zelda\"\n      },\n      percentage: 60,\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 5, 12).toISOString()\n    }]\n  });\n  return ganttDefault;\n};\nvar renderGanttPanning = function renderGanttPanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  axisData.showActionLegend = false;\n  axisData.axis.x.lowerLimit = new Date(2016, 0, 1, 0).toISOString();\n  axisData.axis.x.upperLimit = new Date(2016, 0, 2, 0).toISOString();\n  axisData.dateline = [{\n    showDatelineIndicator: true,\n    label: {\n      display: \"Release A\"\n    },\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n    shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.SQUARE,\n    value: new Date(2016, 0, 1, 9).toISOString()\n  }];\n  axisData.pan = {\n    enabled: true\n  };\n  var graphData = {\n    key: \"track 0\",\n    trackLabel: {\n      display: \"Default\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: tasks2[0]\n  };\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(axis);\n    graph.loadContent(values);\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_6__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\nvar renderGanttAction = function renderGanttAction(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.dateline = [];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, [], [], [], actions, 2);\n  return ganttDefault;\n};\nvar renderGanttEvents = function renderGanttEvents(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.dateline = [];\n  data.showActionLegend = false;\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, [tasks[1]], [], [events[0]], [], 1);\n  return ganttDefault;\n};\nvar renderGanttTruncate = function renderGanttTruncate(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  data.dateline = [];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  ganttDefault.loadContent({\n    key: \"track 1\",\n    trackLabel: {\n      display: \"Really really long project name that cannot be shown realistically\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    }\n  });\n  return ganttDefault;\n};\nvar renderGanttStyle = function renderGanttStyle(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  data.dateline = [];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  ganttDefault.loadContent({\n    key: \"track 0\",\n    trackLabel: {\n      display: \"Default\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"default\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString()\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 1\",\n    trackLabel: {\n      display: \"Hollow only\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"default\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHollow: true\n      }\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 2\",\n    trackLabel: {\n      display: \"Dotted, Hollow\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"default\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isDotted: true,\n        isHollow: true\n      }\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 3\",\n    trackLabel: {\n      display: \"Percentage\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"percentage\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      percentage: 30\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 4\",\n    trackLabel: {\n      display: \"Task Hashed\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"task_hash\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHashed: true\n      }\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 5\",\n    trackLabel: {\n      display: \"Activity\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    activities: [{\n      key: \"Activity\",\n      label: {\n        display: \"Story Apex Activity\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString()\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 6\",\n    trackLabel: {\n      display: \"Activity Hashed\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    activities: [{\n      key: \"Hash\",\n      label: {\n        display: \"Story Apex Activity hash\"\n      },\n      color: \"#000\",\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHashed: true\n      }\n    }]\n  });\n  ganttDefault.loadContent({\n    key: \"track 7\",\n    trackLabel: {\n      display: \"Activity and Task\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"Task\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex Task\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString()\n    }],\n    activities: [{\n      key: \"Activity and Task\",\n      label: {\n        display: \"Combination\"\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString()\n    }]\n  });\n  return ganttDefault;\n};\nvar renderGanttDateTimeBuckets = function renderGanttDateTimeBuckets(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.axis.x.lowerLimit = new Date(2018, 1, 1, 23).toISOString();\n  data.axis.x.upperLimit = new Date(2018, 1, 3, 1).toISOString();\n  data.axis.x.ticks = {\n    format: \"%H\",\n    lowerStepTickValues: lowerStepTickValues,\n    midpointTickValues: midpointTickValues,\n    upperStepTickValues: upperStepTickValues\n  };\n  data.showActionLegend = false;\n  data.dateline = [];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  ganttDefault.loadContent({\n    key: \"track 1\",\n    trackLabel: {\n      display: \"Project A\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n    },\n    tasks: [{\n      key: \"task1\",\n      onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTaskPopup\"],\n      label: {\n        display: \"Story Apex\"\n      },\n      startDate: new Date(2018, 1, 2, 9).toISOString(),\n      endDate: new Date(2018, 1, 2, 19).toISOString()\n    }]\n  });\n  return ganttDefault;\n};\nvar renderGanttCustomContentPadding = function renderGanttCustomContentPadding(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  data.showActionLegend = false;\n  data.padding = {\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  };\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, tasks, [], [], [], 4);\n  return ganttDefault;\n};\nvar renderGanttCustomContainerPadding = function renderGanttCustomContainerPadding(id) {\n  var containerElement = document.querySelector(\"#\".concat(id));\n  containerElement.setAttribute(\"class\", \"\".concat(containerElement.getAttribute(\"class\"), \" \").concat(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"CUSTOM_CONTAINER_STYLE\"]));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\"));\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  loadTracks(ganttDefault, tasks, [], [], [], 4);\n  return ganttDefault;\n};\nvar renderGanttTrackSelection = function renderGanttTrackSelection(id) {\n  var data = Object.assign(_src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_4__[\"getDemoData\"])(\"#\".concat(id), \"GANTT\")), {\n    clickPassThrough: {\n      tasks: true,\n      activities: true,\n      events: true,\n      actions: true,\n      datelines: true\n    }\n  });\n  data.showActionLegend = true;\n  data.dateline = [{\n    showDatelineIndicator: true,\n    label: {\n      display: \"DST Start\"\n    },\n    color: \"#D3D4D5\",\n    shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.TRIANGLE,\n    value: new Date(2018, 2, 10).toISOString()\n  }, {\n    showDatelineIndicator: true,\n    label: {\n      display: \"Current Date\"\n    },\n    color: \"#FFDF00\",\n    shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.SQUARE,\n    value: new Date(2018, 8, 5).toISOString()\n  }];\n  var ganttDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.gantt(data);\n  var passThroughActivities = [[{\n    key: \"activity1\",\n    label: {\n      display: \"activity1\"\n    },\n    color: \"#FFDF00\",\n    startDate: new Date(2018, 1, 1).toISOString(),\n    endDate: new Date(2018, 4, 10).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false\n    }\n  }]];\n  var passThroughTasks = [[{\n    key: \"task1\",\n    label: {\n      display: \"Story Apex\"\n    },\n    startDate: new Date(2018, 2, 1).toISOString(),\n    endDate: new Date(2018, 3, 10).toISOString()\n  }, {\n    key: \"task2\",\n    label: {\n      display: \"Story Broccoli\"\n    },\n    startDate: new Date(2018, 8, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString()\n  }]];\n  var passThroughEvents = [[{\n    key: \"uid_event_1\",\n    label: {\n      display: \"Defect A\"\n    },\n    shape: dueSoon,\n    values: [new Date(2018, 4, 30).toISOString()]\n  }, {\n    key: \"uid_event_2\",\n    label: {\n      display: \"Defect B\"\n    },\n    shape: alert,\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n    values: [new Date(2018, 5, 4).toISOString()]\n  }, {\n    key: \"uid_event_3\",\n    label: {\n      display: \"Defect C\"\n    },\n    shape: alert,\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n    values: [new Date(2018, 9, 5).toISOString()]\n  }]];\n  var passThroughActions = [[{\n    key: \"uid_action_1\",\n    values: [new Date(2018, 2, 1, 6, 15).toISOString()]\n  }, {\n    key: \"uid_action_2\",\n    values: [new Date(2018, 7, 1, 6, 15).toISOString()]\n  }]];\n  loadTracks(ganttDefault, passThroughTasks, passThroughActivities, passThroughEvents, passThroughActions, 1, true);\n  return ganttDefault;\n};\n/**\n * Helper function to load tracks.\n *\n * @private\n * @param {object} gantt - gantt object where its components needs to be loaded.\n * @param {Array} tasks - gantt tasks that needs to be loaded\n * @param {Array} activities - gantt activities that needs to be loaded\n * @param {Array} events - gantt events that needs to be loaded\n * @param {Array} actions - gannt actions that needs to be loaded\n * @param {number} totalTracks - total required number of tracks\n * @param {boolean} isTrackSelectable - indicator to specify if track is selectable or not.\n * @returns {undefined} - returns nothing\n */\n\nvar loadTracks = function loadTracks(gantt) {\n  var tasks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var activities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var events = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];\n  var actions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n  var totalTracks = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;\n  var isTrackSelectable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = Array(totalTracks).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var each = _step.value;\n      gantt.loadContent({\n        key: \"track \".concat(each),\n        onClick: isTrackSelectable ? _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackPopup\"] : undefined,\n        trackLabel: {\n          display: \"Project \".concat(String.fromCharCode(65 + each)),\n          onClick: _popup__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackLabelPopup\"]\n        },\n        tasks: tasks[each] ? tasks[each] : {},\n        activities: activities[each] ? activities[each] : {},\n        events: events[each] ? events[each] : {},\n        actions: actions[each] ? actions[each] : {}\n      });\n    }\n    /* gantt.unloadContent({\n        key: \"track 3\",\n        trackLabel: {\n            display: \"Project C\"\n        }\n    }); */\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/gantt.js?");

/***/ }),

/***/ "./dev/examples/controls/line.js":
/*!***************************************!*\
  !*** ./dev/examples/controls/line.js ***!
  \***************************************/
/*! exports provided: renderLine, renderLineY2Axis, renderLineXHidden, renderLineYHidden, renderLineWithDateline, renderLineWithEventline, renderLineXStaticTicks, renderLineXAxisFormatted, renderLineXAlternateLocale, renderLineLabelHidden, renderLineLegendHidden, renderLineLegendItemDisabled, renderLineGridHHidden, renderLineGridVHidden, renderLineShapesHidden, renderMultiLine, renderLineTimeSeries, renderLineRegionSimple, renderLineRegionMultiple, renderLineRegionNoLower, renderLineRegionNoUpper, renderLineRegionY2, renderMultiLineRegion, renderMultiLineIdenticalDatasetRegion, renderRegionLine, renderLineBlankDataPoint, renderLineLegendTo, renderLineDateTimeBuckets, renderLineXOrientationTop, renderNoDataView, renderLineCustomContentPadding, renderLineCustomContainerPadding, renderLineWithPanning, renderDashedLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLine\", function() { return renderLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineY2Axis\", function() { return renderLineY2Axis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineXHidden\", function() { return renderLineXHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineYHidden\", function() { return renderLineYHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineWithDateline\", function() { return renderLineWithDateline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineWithEventline\", function() { return renderLineWithEventline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineXStaticTicks\", function() { return renderLineXStaticTicks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineXAxisFormatted\", function() { return renderLineXAxisFormatted; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineXAlternateLocale\", function() { return renderLineXAlternateLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineLabelHidden\", function() { return renderLineLabelHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineLegendHidden\", function() { return renderLineLegendHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineLegendItemDisabled\", function() { return renderLineLegendItemDisabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineGridHHidden\", function() { return renderLineGridHHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineGridVHidden\", function() { return renderLineGridVHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineShapesHidden\", function() { return renderLineShapesHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMultiLine\", function() { return renderMultiLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineTimeSeries\", function() { return renderLineTimeSeries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineRegionSimple\", function() { return renderLineRegionSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineRegionMultiple\", function() { return renderLineRegionMultiple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineRegionNoLower\", function() { return renderLineRegionNoLower; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineRegionNoUpper\", function() { return renderLineRegionNoUpper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineRegionY2\", function() { return renderLineRegionY2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMultiLineRegion\", function() { return renderMultiLineRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMultiLineIdenticalDatasetRegion\", function() { return renderMultiLineIdenticalDatasetRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRegionLine\", function() { return renderRegionLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineBlankDataPoint\", function() { return renderLineBlankDataPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineLegendTo\", function() { return renderLineLegendTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineDateTimeBuckets\", function() { return renderLineDateTimeBuckets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineXOrientationTop\", function() { return renderLineXOrientationTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNoDataView\", function() { return renderNoDataView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineCustomContentPadding\", function() { return renderLineCustomContentPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineCustomContainerPadding\", function() { return renderLineCustomContainerPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLineWithPanning\", function() { return renderLineWithPanning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderDashedLine\", function() { return renderDashedLine; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./dev/examples/helpers.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n\n\n\n\n\nvar tickValues = [new Date(2016, 0, 1, 1, 0).toISOString(), new Date(2016, 0, 1, 5, 0).toISOString(), new Date(2016, 0, 1, 10, 0).toISOString(), new Date(2016, 0, 1, 15, 0).toISOString(), new Date(2016, 0, 1, 20, 0).toISOString()];\nvar regions = [{\n  axis: \"y\",\n  start: 2,\n  end: 10,\n  color: \"#f4f4f4\"\n}, {\n  axis: \"y\",\n  start: 12,\n  end: 18,\n  color: \"#c8cacb\"\n}];\nvar renderLine = function renderLine(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineY2Axis = function renderLineY2Axis(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  axisData.axis.y2.show = true;\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[1]));\n  return lineTime;\n};\nvar renderLineXHidden = function renderLineXHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.axis.x.show = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineYHidden = function renderLineYHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.axis.y.show = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineWithDateline = function renderLineWithDateline(id) {\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\"));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]));\n  return lineTime;\n};\nvar renderLineWithEventline = function renderLineWithEventline(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  data.eventline = [{\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n    style: {\n      strokeDashArray: \"4,4\"\n    },\n    value: new Date(2016, 0, 1, 8).toISOString()\n  }, {\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    style: {\n      strokeDashArray: \"2,2\"\n    },\n    value: new Date(2016, 0, 1, 12).toISOString()\n  }];\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(data);\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]));\n  return lineTime;\n};\nvar renderLineXStaticTicks = function renderLineXStaticTicks(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%H:%M:%S\"\n  };\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return lineDefault;\n};\nvar renderLineXAxisFormatted = function renderLineXAxisFormatted(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e %X %Y\"\n  };\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return lineDefault;\n};\nvar renderLineXAlternateLocale = function renderLineXAlternateLocale(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  axisData.locale = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.LOCALE.de_DE;\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%A %e %B %Y, %X\"\n  };\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return lineDefault;\n};\nvar renderLineLabelHidden = function renderLineLabelHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.showLabel = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineLegendHidden = function renderLineLegendHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.showLegend = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineLegendItemDisabled = function renderLineLegendItemDisabled(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.label.isDisabled = true;\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4]));\n  return lineDefault;\n};\nvar renderLineGridHHidden = function renderLineGridHHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.showHGrid = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineGridVHidden = function renderLineGridVHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.showVGrid = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineShapesHidden = function renderLineShapesHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.showShapes = false;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderMultiLine = function renderMultiLine(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[1])) : \"\";\n  }, 750);\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2])) : \"\";\n  }, 750 * 2);\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[3])) : \"\";\n  }, 750 * 3);\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4])) : \"\";\n  }, 750 * 4);\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[5])) : \"\";\n  }, 750 * 5);\n  setTimeout(function () {\n    return lineDefault.graphContainer ? lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[6])) : \"\";\n  }, 750 * 6);\n  return lineDefault;\n};\nvar renderLineTimeSeries = function renderLineTimeSeries(id) {\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return lineTime;\n};\nvar renderLineRegionSimple = function renderLineRegionSimple(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.regions = [regions[0]];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineDefault;\n};\nvar renderLineRegionMultiple = function renderLineRegionMultiple(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4]);\n  data.regions = regions;\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineDefault;\n};\nvar renderLineRegionNoLower = function renderLineRegionNoLower(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.regions = [{\n    end: 10\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineDefault;\n};\nvar renderLineRegionNoUpper = function renderLineRegionNoUpper(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  data.regions = [{\n    start: 2\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineDefault;\n};\nvar renderLineRegionY2 = function renderLineRegionY2(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  var dataValueObject = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[1]);\n  axisData.axis.y2.show = true;\n  dataValueObject.regions = [{\n    axis: \"y2\",\n    start: 50,\n    end: 150\n  }];\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(dataValueObject));\n  return lineTime;\n};\nvar renderMultiLineRegion = function renderMultiLineRegion(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2]);\n  data.regions = [{\n    start: 2\n  }];\n  dataAlt.regions = [{\n    start: 2,\n    end: 14\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(dataAlt));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[4]));\n  return lineDefault;\n};\nvar renderMultiLineIdenticalDatasetRegion = function renderMultiLineIdenticalDatasetRegion(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2]);\n  data.regions = [{\n    start: 2,\n    end: 14\n  }];\n  dataAlt.regions = [{\n    start: 2,\n    end: 14\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(dataAlt));\n  return lineDefault;\n};\nvar renderRegionLine = function renderRegionLine(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[5]);\n  data.regions = [{\n    start: 15,\n    end: 15,\n    color: \"#bcbfc0\"\n  }];\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineDefault;\n};\nvar renderLineBlankDataPoint = function renderLineBlankDataPoint(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[2]);\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(data));\n  return lineTime;\n};\nvar renderLineLegendTo = function renderLineLegendTo(id) {\n  // Add legend container ID to input JSON\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#graphContainer\", \"LINE_TIMESERIES\"));\n  data.bindLegendTo = \"#legendContainer\";\n  var lineTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(data);\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  lineTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[2]));\n  return lineTime;\n};\nvar renderLineDateTimeBuckets = function renderLineDateTimeBuckets(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  axisData.axis.x.lowerLimit = new Date(2016, 0, 0, 23, 59).toISOString();\n  axisData.axis.x.upperLimit = new Date(2016, 0, 2, 1, 0).toISOString();\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%H\",\n    lowerStepTickValues: [new Date(2016, 0, 1, 6).toISOString(), new Date(2016, 0, 1, 12).toISOString(), new Date(2016, 0, 1, 18).toISOString()],\n    midpointTickValues: [new Date(2016, 0, 1, 3).toISOString(), new Date(2016, 0, 1, 9).toISOString(), new Date(2016, 0, 1, 15).toISOString(), new Date(2016, 0, 1, 21).toISOString()],\n    upperStepTickValues: [new Date(2016, 0, 1, 0).toISOString(), new Date(2016, 0, 1, 24).toISOString()]\n  };\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return lineDefault;\n};\nvar renderLineXOrientationTop = function renderLineXOrientationTop(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.axis.x.orientation = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXES_ORIENTATION.X.TOP;\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderNoDataView = function renderNoDataView(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"NO_DATA_VIEW\"));\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"NO_DATA_VIEW\").data[0]));\n  return lineDefault;\n};\nvar renderLineCustomContentPadding = function renderLineCustomContentPadding(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  data.showLegend = false;\n  data.showLabel = false;\n  data.axis.x.show = false;\n  data.axis.y.show = false;\n  data.padding = {\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  };\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(data);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return lineDefault;\n};\nvar renderLineCustomContainerPadding = function renderLineCustomContainerPadding(id) {\n  var containerElement = document.querySelector(\"#\".concat(id));\n  containerElement.setAttribute(\"class\", \"\".concat(containerElement.getAttribute(\"class\"), \" \").concat(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"CUSTOM_CONTAINER_STYLE\"]));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(data);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[5]));\n  return lineDefault;\n};\nvar renderLineWithPanning = function renderLineWithPanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\"));\n  axisData.pan = {\n    enabled: true\n  };\n  var graphData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]);\n  graphData.regions = [regions[0]];\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axis);\n    graph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(values));\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_4__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\nvar renderDashedLine = function renderDashedLine(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(axisData.data[1]));\n  return lineDefault;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/line.js?");

/***/ }),

/***/ "./dev/examples/controls/pairedResult.js":
/*!***********************************************!*\
  !*** ./dev/examples/controls/pairedResult.js ***!
  \***********************************************/
/*! exports provided: multiRegion, multiRegionAlt, renderPairedResult, renderPairedResultTimeseries, renderPairedResultTimeseriesDateline, renderPairedResultTimeseriesEventline, renderPairedResultY2Axis, renderPairedResultXHidden, renderPairedResultYHidden, renderPairedResultXStaticTicks, renderPairedResultXAxisFormatted, renderPairedResultXAlternateLocale, renderPairedResultLabelHidden, renderPairedResultLegendHidden, renderPairedResultLegendItemDisabled, renderPairedResultGridHHidden, renderPairedResultGridVHidden, renderPairedResultRegionSimple, renderMultiPairedResultRegion, renderPairedResultDateTimeBuckets, renderPairedResultXOrientationTop, renderPairedResultWithPanning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiRegion\", function() { return multiRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiRegionAlt\", function() { return multiRegionAlt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResult\", function() { return renderPairedResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultTimeseries\", function() { return renderPairedResultTimeseries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultTimeseriesDateline\", function() { return renderPairedResultTimeseriesDateline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultTimeseriesEventline\", function() { return renderPairedResultTimeseriesEventline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultY2Axis\", function() { return renderPairedResultY2Axis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultXHidden\", function() { return renderPairedResultXHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultYHidden\", function() { return renderPairedResultYHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultXStaticTicks\", function() { return renderPairedResultXStaticTicks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultXAxisFormatted\", function() { return renderPairedResultXAxisFormatted; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultXAlternateLocale\", function() { return renderPairedResultXAlternateLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultLabelHidden\", function() { return renderPairedResultLabelHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultLegendHidden\", function() { return renderPairedResultLegendHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultLegendItemDisabled\", function() { return renderPairedResultLegendItemDisabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultGridHHidden\", function() { return renderPairedResultGridHHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultGridVHidden\", function() { return renderPairedResultGridVHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultRegionSimple\", function() { return renderPairedResultRegionSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMultiPairedResultRegion\", function() { return renderMultiPairedResultRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultDateTimeBuckets\", function() { return renderPairedResultDateTimeBuckets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultXOrientationTop\", function() { return renderPairedResultXOrientationTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPairedResultWithPanning\", function() { return renderPairedResultWithPanning; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup */ \"./dev/examples/popup.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n\n\n\n\n\nvar tickValues = [new Date(2016, 0, 1, 1, 0).toISOString(), new Date(2016, 6, 1, 1, 0).toISOString(), new Date(2017, 0, 1, 1, 0).toISOString(), new Date(2017, 6, 1, 1, 0).toISOString(), new Date(2018, 0, 1, 1, 0).toISOString()];\nvar regions = {\n  high: [{\n    axis: \"y\",\n    start: 140,\n    end: 220,\n    color: \"#c8cacb\"\n  }, {\n    axis: \"y\",\n    start: 180,\n    end: 230,\n    color: \"#d6d8d9\"\n  }],\n  low: [{\n    axis: \"y\",\n    start: 20,\n    end: 70\n  }]\n};\nvar multiRegion = {\n  high: [{\n    axis: \"y\",\n    start: 120,\n    end: 170,\n    color: \"#c8cacb\"\n  }],\n  low: [{\n    axis: \"y\",\n    start: 20,\n    end: 100\n  }]\n};\nvar multiRegionAlt = {\n  high: [{\n    axis: \"y2\",\n    start: 210,\n    end: 280,\n    color: \"#c8cacb\"\n  }],\n  low: [{\n    axis: \"y2\",\n    start: 175,\n    end: 200\n  }]\n};\nvar renderPairedResult = function renderPairedResult(id) {\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultTimeseries = function renderPairedResultTimeseries(id) {\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedTime;\n};\nvar renderPairedResultTimeseriesDateline = function renderPairedResultTimeseriesDateline(id) {\n  var pairedTimeDateline = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  pairedTimeDateline.dateline = [{\n    showDatelineIndicator: true,\n    label: {\n      display: \"Action Date\"\n    },\n    color: \"#FFDF00\",\n    shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.SQUARE,\n    onClick: _popup__WEBPACK_IMPORTED_MODULE_3__[\"loadDatelinePopup\"],\n    value: new Date(2017, 10, 1).toISOString()\n  }];\n  pairedTimeDateline.clickPassThrough = {\n    dateline: false\n  };\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(pairedTimeDateline);\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedTime;\n};\nvar renderPairedResultTimeseriesEventline = function renderPairedResultTimeseriesEventline(id) {\n  var pairedTimeDateline = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  pairedTimeDateline.eventline = [{\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n    style: {\n      strokeDashArray: \"4,4\"\n    },\n    value: new Date(2016, 8, 1, 8).toISOString()\n  }, {\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    style: {\n      strokeDashArray: \"2,2\"\n    },\n    value: new Date(2017, 5, 1, 12).toISOString()\n  }];\n  pairedTimeDateline.clickPassThrough = {\n    dateline: false\n  };\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(pairedTimeDateline);\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedTime;\n};\nvar renderPairedResultY2Axis = function renderPairedResultY2Axis(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.y2.show = true;\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[1]));\n  return pairedTime;\n};\nvar renderPairedResultXHidden = function renderPairedResultXHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.axis.x.show = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultYHidden = function renderPairedResultYHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.axis.y.show = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultXStaticTicks = function renderPairedResultXStaticTicks(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%a %b %e %X %Y\"\n  };\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultXAxisFormatted = function renderPairedResultXAxisFormatted(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%b, %X %Y\"\n  };\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultXAlternateLocale = function renderPairedResultXAlternateLocale(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.locale = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.LOCALE.fr_FR;\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%A %e %B %Y\"\n  };\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultLabelHidden = function renderPairedResultLabelHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.showLabel = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultLegendHidden = function renderPairedResultLegendHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.showLegend = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultLegendItemDisabled = function renderPairedResultLegendItemDisabled(id) {\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]);\n  data.label.high.isDisabled = true;\n  data.label.low.isDisabled = true;\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(data));\n  return pairedDefault;\n};\nvar renderPairedResultGridHHidden = function renderPairedResultGridHHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.showHGrid = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultGridVHidden = function renderPairedResultGridVHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.showVGrid = false;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultRegionSimple = function renderPairedResultRegionSimple(id) {\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]);\n  data.regions = {\n    high: [regions.high[0]],\n    low: regions.low\n  };\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(data));\n  return pairedDefault;\n};\nvar renderMultiPairedResultRegion = function renderMultiPairedResultRegion(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.y2.show = true;\n  var pairedTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]);\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[1]);\n  data.regions = multiRegion;\n  dataAlt.regions = multiRegionAlt;\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(data));\n  pairedTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(dataAlt));\n  return pairedTime;\n};\nvar renderPairedResultDateTimeBuckets = function renderPairedResultDateTimeBuckets(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.x.ticks = {\n    values: tickValues,\n    format: \"%b %Y\",\n    lowerStepTickValues: [new Date(2016, 9).toISOString(), new Date(2017, 3).toISOString(), new Date(2017, 9).toISOString()],\n    midpointTickValues: [new Date(2016, 6).toISOString(), new Date(2017, 0).toISOString(), new Date(2017, 6).toISOString(), new Date(2018, 0).toISOString()],\n    upperStepTickValues: [new Date(2016, 3).toISOString(), new Date(2018, 3).toISOString()]\n  };\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultXOrientationTop = function renderPairedResultXOrientationTop(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\"));\n  axisData.axis.x.orientation = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXES_ORIENTATION.X.TOP;\n  var pairedDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  pairedDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_DEFAULT\").data[0]));\n  return pairedDefault;\n};\nvar renderPairedResultWithPanning = function renderPairedResultWithPanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PAIRED_TIMESERIES\"));\n  axisData.axis.x.lowerLimit = new Date(2016, 0, 1, 0).toISOString();\n  axisData.axis.x.upperLimit = new Date(2016, 0, 2, 0).toISOString();\n  axisData.pan = {\n    enabled: true\n  };\n  axisData.axis.x.ticks = {};\n  var graphData = {\n    key: \"uid_1\",\n    label: {\n      high: {\n        display: \"High\"\n      },\n      mid: {\n        display: \"Median\"\n      },\n      low: {\n        display: \"Low\"\n      }\n    },\n    shape: {\n      high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n      mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n      low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n    },\n    color: {\n      high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n      low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n    },\n    values: [{\n      high: {\n        x: \"2015-12-31T20:30:00.000Z\",\n        y: 150\n      },\n      mid: {\n        x: \"2015-12-31T20:30:00.000Z\",\n        y: 40\n      },\n      low: {\n        x: \"2015-12-31T20:30:00.000Z\",\n        y: 10\n      }\n    }, {\n      high: {\n        x: \"2015-12-31T22:30:00.000Z\",\n        y: 110\n      },\n      mid: {\n        x: \"2015-12-31T22:30:00.000Z\",\n        y: 70\n      },\n      low: {\n        x: \"2015-12-31T22:30:00.000Z\",\n        y: 30\n      }\n    }]\n  };\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axis);\n    graph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pairedResult(values));\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_4__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/pairedResult.js?");

/***/ }),

/***/ "./dev/examples/controls/pie.js":
/*!**************************************!*\
  !*** ./dev/examples/controls/pie.js ***!
  \**************************************/
/*! exports provided: renderPieSimple, renderPieLegendTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPieSimple\", function() { return renderPieSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPieLegendTo\", function() { return renderPieLegendTo; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n\n\n\nvar renderPieSimple = function renderPieSimple(id) {\n  var pieDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pie(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PIE\"));\n  pieDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"PIE\").data);\n};\nvar renderPieLegendTo = function renderPieLegendTo() {\n  var pieGenerateData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#graphContainer\", \"PIE\"));\n  pieGenerateData.bindLegendTo = \"#legendContainer\";\n  var pieDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.pie(pieGenerateData);\n  pieDefault.loadContent(pieGenerateData.data);\n  return pieDefault;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/pie.js?");

/***/ }),

/***/ "./dev/examples/controls/scatter.js":
/*!******************************************!*\
  !*** ./dev/examples/controls/scatter.js ***!
  \******************************************/
/*! exports provided: renderScatter, renderScatterWithDateline, renderScatterWithEventline, renderScatterXHidden, renderScatterYHidden, renderScatterTimeSeries, renderMultiScatterIdenticalDatasetRegion, renderScatterBlankDataPoint, renderScatterWithPanning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatter\", function() { return renderScatter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterWithDateline\", function() { return renderScatterWithDateline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterWithEventline\", function() { return renderScatterWithEventline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterXHidden\", function() { return renderScatterXHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterYHidden\", function() { return renderScatterYHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterTimeSeries\", function() { return renderScatterTimeSeries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMultiScatterIdenticalDatasetRegion\", function() { return renderMultiScatterIdenticalDatasetRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterBlankDataPoint\", function() { return renderScatterBlankDataPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderScatterWithPanning\", function() { return renderScatterWithPanning; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n\n\n\n\nvar regions = [{\n  axis: \"y\",\n  start: 2,\n  end: 10,\n  color: \"#f4f4f4\"\n}, {\n  axis: \"y\",\n  start: 12,\n  end: 18,\n  color: \"#c8cacb\"\n}];\nvar renderScatter = function renderScatter(id) {\n  var scatterDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return scatterDefault;\n};\nvar renderScatterWithDateline = function renderScatterWithDateline(id) {\n  var scatterTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\"));\n  scatterTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]));\n  return scatterTime;\n};\nvar renderScatterWithEventline = function renderScatterWithEventline(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  data.eventline = [{\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n    style: {\n      strokeDashArray: \"4,4\"\n    },\n    value: new Date(2016, 0, 1, 8).toISOString()\n  }, {\n    color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    style: {\n      strokeDashArray: \"2,2\"\n    },\n    value: new Date(2016, 0, 1, 12).toISOString()\n  }];\n  var scatterTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(data);\n  scatterTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]));\n  return scatterTime;\n};\nvar renderScatterXHidden = function renderScatterXHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.axis.x.show = false;\n  var scatterDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return scatterDefault;\n};\nvar renderScatterYHidden = function renderScatterYHidden(id) {\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  axisData.axis.y.show = false;\n  var scatterDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axisData);\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]));\n  return scatterDefault;\n};\nvar renderScatterTimeSeries = function renderScatterTimeSeries(id) {\n  var scatterTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  scatterTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0]));\n  return scatterTime;\n};\nvar renderMultiScatterIdenticalDatasetRegion = function renderMultiScatterIdenticalDatasetRegion(id) {\n  var scatterDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\"));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[0]);\n  var dataAlt = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_DEFAULT\").data[2]);\n  data.regions = [{\n    start: 2,\n    end: 14\n  }];\n  dataAlt.regions = [{\n    start: 2,\n    end: 14\n  }];\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(data));\n  scatterDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(dataAlt));\n  return scatterDefault;\n};\nvar renderScatterBlankDataPoint = function renderScatterBlankDataPoint(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[2]);\n  var scatterTime = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  scatterTime.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(data));\n  return scatterTime;\n};\nvar renderScatterWithPanning = function renderScatterWithPanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\"));\n  axisData.pan = {\n    enabled: true\n  };\n  var graphData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES_DATELINE\").data[0]);\n  graphData.regions = [regions[0]];\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(axis);\n    graph.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.scatter(values));\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_3__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/scatter.js?");

/***/ }),

/***/ "./dev/examples/controls/shapes.js":
/*!*****************************************!*\
  !*** ./dev/examples/controls/shapes.js ***!
  \*****************************************/
/*! exports provided: renderShapesSimple, renderCriticalityShapes, renderShapesSimpleLight, renderCriticalityShapesLight, renderFillTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderShapesSimple\", function() { return renderShapesSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityShapes\", function() { return renderCriticalityShapes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderShapesSimpleLight\", function() { return renderShapesSimpleLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCriticalityShapesLight\", function() { return renderCriticalityShapesLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFillTypes\", function() { return renderFillTypes; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_helpers_barType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/main/js/helpers/barType */ \"./src/main/js/helpers/barType.js\");\n/* harmony import */ var _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/main/js/helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ \"./dev/examples/helpers.js\");\n\n\n\n\n\n\nvar viewBoxSize = \"0 0 1000 500\";\n\nvar getShapesSplit = function getShapesSplit(shapeList) {\n  var shapes = Object.keys(shapeList);\n  var splitShapes = [];\n\n  while (shapes.length > 0) {\n    splitShapes.push(shapes.splice(0, 5));\n  }\n\n  return splitShapes;\n};\n\nvar transformPoint = function transformPoint(i, pos) {\n  return function () {\n    var scaleFactor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    return \"translate(\".concat(i * 225 + 50, \",\").concat(pos * 100 + 50, \") scale(\").concat(scaleFactor, \")\");\n  };\n};\n\nvar constructSVGObject = function constructSVGObject(shape, _ref) {\n  var _ref$posX = _ref.posX,\n      posX = _ref$posX === void 0 ? 1 : _ref$posX,\n      _ref$posY = _ref.posY,\n      posY = _ref$posY === void 0 ? 1 : _ref$posY,\n      _ref$scale = _ref.scale,\n      scale = _ref$scale === void 0 ? 2 : _ref$scale;\n  var d3Shape = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(shape);\n  d3Shape.options.x = shape.options.x * posX;\n  d3Shape.options.y = shape.options.y * posY;\n  d3Shape.options.scale = d3Shape.options.scale * scale;\n  return d3Shape;\n};\n\nvar renderShapesSimple = function renderShapesSimple(id) {\n  var sect = document.createElement(\"section\");\n  sect.setAttribute(\"class\", \"shape-container\");\n  var svgElement = _helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(sect, id, viewBoxSize);\n  document.querySelector(\"#\".concat(id)).appendChild(sect);\n  getShapesSplit(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK).forEach(function (s, pos) {\n    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(svgElement).append(\"g\").selectAll(\"path\").data(s).enter().append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].point,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n  });\n};\nvar renderCriticalityShapes = function renderCriticalityShapes(id) {\n  var sect = document.createElement(\"section\");\n  sect.setAttribute(\"class\", \"shape-container\");\n  var svgElement = _helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(sect, id, viewBoxSize);\n  document.querySelector(\"#\".concat(id)).appendChild(sect);\n  getShapesSplit(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK).forEach(function (s, pos) {\n    var groupSVG = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(svgElement).append(\"g\").selectAll(\"path\").data(s).enter().append(\"g\");\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].criticalityOuterPoint,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].criticalityInnerPoint,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].point,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n  });\n};\nvar renderShapesSimpleLight = function renderShapesSimpleLight(id) {\n  var sect = document.createElement(\"section\");\n  sect.setAttribute(\"class\", \"shape-container\");\n  var svgElement = _helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(sect, id, viewBoxSize);\n  document.querySelector(\"#\".concat(id)).appendChild(sect);\n  getShapesSplit(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.LIGHT).forEach(function (s, pos) {\n    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(svgElement).append(\"g\").selectAll(\"path\").data(s).enter().append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.LIGHT[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].point,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n  });\n};\nvar renderCriticalityShapesLight = function renderCriticalityShapesLight(id) {\n  var sect = document.createElement(\"section\");\n  sect.setAttribute(\"class\", \"shape-container\");\n  var svgElement = _helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(sect, id, viewBoxSize);\n  document.querySelector(\"#\".concat(id)).appendChild(sect);\n  getShapesSplit(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.LIGHT).forEach(function (s, pos) {\n    var groupSVG = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(svgElement).append(\"g\").selectAll(\"path\").data(s).enter().append(\"g\");\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].criticalityOuterPoint,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.DARK[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].criticalityInnerPoint,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n    groupSVG.append(function (d, i) {\n      return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(constructSVGObject(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.SHAPES.LIGHT[d], {})).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n        svgClassNames: _src_main_js_helpers_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].point,\n        transformFn: transformPoint(i, pos)\n      }));\n    });\n  });\n};\nvar renderFillTypes = function renderFillTypes(id) {\n  var shellElementId = document.querySelector(\"#\".concat(id));\n  _helpers__WEBPACK_IMPORTED_MODULE_5__[\"h3\"].render(shellElementId, \"Default\");\n  var barSVG = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(shellElementId, \"\".concat(id, \"Bar\"), \"\", \"width: 100%; height: 50px\"));\n  _helpers__WEBPACK_IMPORTED_MODULE_5__[\"h3\"].render(shellElementId, \"Hashed\");\n  var hashSVG = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"vector\"].render(shellElementId, \"\".concat(id, \"Hash\"), \"\", \"width: 100%; height: 50px\"));\n  var x = 10;\n  var y = 10;\n  var width = 400;\n  var height = 30;\n  var defsPath = hashSVG.append(\"defs\");\n  Object(_src_main_js_helpers_barType__WEBPACK_IMPORTED_MODULE_2__[\"getBar\"])(barSVG.append(\"g\"), x, y, width, height, \"fill: #007cc3;\");\n  Object(_src_main_js_helpers_barType__WEBPACK_IMPORTED_MODULE_2__[\"getHashedBar\"])(hashSVG, defsPath, hashSVG.append(\"g\"), x, y, width, height, \"fill: #007cc3\");\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/shapes.js?");

/***/ }),

/***/ "./dev/examples/controls/spline.js":
/*!*****************************************!*\
  !*** ./dev/examples/controls/spline.js ***!
  \*****************************************/
/*! exports provided: renderSplineLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSplineLine\", function() { return renderSplineLine; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n\n\nvar renderSplineLine = function renderSplineLine(id) {\n  var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.graph(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\"));\n  lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.line(Object.assign({\n    type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.LINE_TYPE.SPLINE\n  }, Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"LINE_TIMESERIES\").data[0])));\n  return lineDefault;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/spline.js?");

/***/ }),

/***/ "./dev/examples/controls/timeline.js":
/*!*******************************************!*\
  !*** ./dev/examples/controls/timeline.js ***!
  \*******************************************/
/*! exports provided: renderTimeline, renderTimelineCustomContentPadding, renderTimelineCustomContainerPadding, renderTimelinePanning, renderTimelineNoXAxisTickLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTimeline\", function() { return renderTimeline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTimelineCustomContentPadding\", function() { return renderTimelineCustomContentPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTimelineCustomContainerPadding\", function() { return renderTimelineCustomContainerPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTimelinePanning\", function() { return renderTimelinePanning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTimelineNoXAxisTickLabel\", function() { return renderTimelineNoXAxisTickLabel; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./dev/examples/data.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./dev/examples/helpers.js\");\n/* harmony import */ var _panHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panHelpers */ \"./dev/examples/panHelpers.js\");\n\n\n\n\n\nvar tickValues = [new Date(2016, 0, 1, 2, 0).toISOString(), new Date(2016, 0, 1, 4, 0).toISOString(), new Date(2016, 0, 1, 6, 0).toISOString(), new Date(2016, 0, 1, 8, 0).toISOString(), new Date(2016, 0, 1, 10, 0).toISOString(), new Date(2016, 0, 1, 12, 0).toISOString(), new Date(2016, 0, 1, 14, 0).toISOString()];\nvar renderTimeline = function renderTimeline(id) {\n  var timelineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  timelineDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[0]);\n  timelineDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[1]);\n  return timelineDefault;\n};\nvar renderTimelineCustomContentPadding = function renderTimelineCustomContentPadding(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  data.showLegend = false;\n  data.showLabel = false;\n  data.padding = {\n    left: 150,\n    right: 300,\n    top: 0,\n    bottom: 0\n  };\n  var timelineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(data);\n  timelineDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[0]);\n  return timelineDefault;\n};\nvar renderTimelineCustomContainerPadding = function renderTimelineCustomContainerPadding(id) {\n  var containerElement = document.querySelector(\"#\".concat(id));\n  containerElement.setAttribute(\"class\", \"\".concat(containerElement.getAttribute(\"class\"), \" \").concat(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"CUSTOM_CONTAINER_STYLE\"]));\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  var timelineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(data);\n  timelineDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[0]);\n  return timelineDefault;\n};\nvar renderTimelinePanning = function renderTimelinePanning(id) {\n  var graph;\n  var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  axisData.axis.x.lowerLimit = new Date(2016, 0, 1, 0).toISOString();\n  axisData.axis.x.upperLimit = new Date(2016, 0, 2, 0).toISOString();\n  axisData.pan = {\n    enabled: true\n  };\n  var graphData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[1]);\n\n  var createGraph = function createGraph(axis, values) {\n    if (graph) {\n      graph.destroy();\n    }\n\n    graph = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(axis);\n    graph.loadContent(values);\n    return graph;\n  };\n\n  graph = createGraph(axisData, graphData);\n  Object(_panHelpers__WEBPACK_IMPORTED_MODULE_4__[\"createPanningControls\"])(id, {\n    axisData: axisData,\n    graphData: graphData,\n    creationHandler: createGraph\n  });\n  return graph;\n};\nvar renderTimelineNoXAxisTickLabel = function renderTimelineNoXAxisTickLabel(id) {\n  var data = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\"));\n  data.axis.x.ticks = {\n    values: tickValues,\n    format: \"\"\n  };\n  var timelineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.timeline(data);\n  timelineDefault.loadContent(Object(_data__WEBPACK_IMPORTED_MODULE_1__[\"getDemoData\"])(\"#\".concat(id), \"TIMELINE\").data[0]);\n  return timelineDefault;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/controls/timeline.js?");

/***/ }),

/***/ "./dev/examples/data.js":
/*!******************************!*\
  !*** ./dev/examples/data.js ***!
  \******************************/
/*! exports provided: getDemoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDemoData\", function() { return getDemoData; });\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./dev/examples/popup.js\");\n\n\n\n\n\nvar daysToMilliseconds = function daysToMilliseconds(d) {\n  return 24 * 60 * 60 * 1000 * d;\n};\n\nvar bobRossIpsum = \"Just use the old one inch brush. It's so important to do something every day that will make you happy. \" + \"I sincerely wish for you every possible joy life could bring. Water's like me. It's laaazy ... Boy, it \" + \"always looks for the easiest way to do things\\n\\nWe're trying to teach you a technique here and how to use it. \" + \"The least little bit can do so much. There we go.\\n\\nNo worries. No cares. Just float and wait for the wind to blow you around. \" + \"These trees are so much fun. I get started on them and I have a hard time stopping. We'll make some happy little bushes here. \" + \"Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world. \" + \"A thin paint will stick to a thick paint.\\n\";\nvar DATA = [{\n  LINE_DEFAULT: function LINE_DEFAULT(id) {\n    return {\n      bindTo: id,\n      bindLegendTo: null,\n      axis: {\n        x: {\n          show: true,\n          label: \"Data\",\n          lowerLimit: 80,\n          upperLimit: 280\n        },\n        y: {\n          show: true,\n          label: \"Line Set A\",\n          lowerLimit: 0,\n          upperLimit: 20\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 250\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Data Label 1\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(20).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * Math.PI,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_2\",\n        label: {\n          display: \"Data Label 2\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        style: {\n          strokeDashArray: \"2,2\"\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(18).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * Math.PI * 2,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_3\",\n        label: {\n          display: \"Data Label 3\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.X,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(12).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * Math.PI * 3,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_4\",\n        label: {\n          display: \"Data Label 4\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CROSS,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(15).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * Math.PI * 4,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_5\",\n        label: {\n          display: \"Data Label 5\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.SQUARE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(20).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.cos(i) * Math.PI * 5,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_6\",\n        label: {\n          display: \"Data Label 6\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CIRCLE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(14).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.cos(i) * Math.PI * 6,\n            x: 85 + i * 10\n          };\n        })\n      }, {\n        key: \"uid_7\",\n        label: {\n          display: \"Data Label 7\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE_DOWN,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREY,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(18).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.cos(i) * Math.PI * 7,\n            x: 85 + i * 10\n          };\n        })\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  LINE_TIMESERIES: function LINE_TIMESERIES(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n          label: \"Datetime\",\n          lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n          upperLimit: new Date(2016, 0, 1, 23, 59).toISOString()\n        },\n        y: {\n          label: \"Line Set A\",\n          lowerLimit: 10,\n          upperLimit: 30\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 250\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Data Label 1\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CIRCLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 1, 5).toISOString(),\n          y: 5,\n          isCritical: false\n        }, {\n          x: new Date(2016, 0, 1, 2, 15).toISOString(),\n          y: 11\n        }, {\n          x: new Date(2016, 0, 1, 3, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 4, 15).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 5, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 6, 15).toISOString(),\n          y: 9\n        }, {\n          x: new Date(2016, 0, 1, 7, 0).toISOString(),\n          y: 11\n        }, {\n          x: new Date(2016, 0, 1, 8, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 9, 45).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 12, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 13, 15).toISOString(),\n          y: 28\n        }, {\n          x: new Date(2016, 0, 1, 14, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 19, 45).toISOString(),\n          y: 13\n        }, {\n          x: new Date(2016, 0, 1, 21, 15).toISOString(),\n          y: 14\n        }],\n        yAxis: \"y\"\n      }, {\n        key: \"uid_2\",\n        label: {\n          display: \"Data Label 2\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 1, 5).toISOString(),\n          y: 0\n        }, {\n          x: new Date(2016, 0, 1, 2, 15).toISOString(),\n          y: 50\n        }, {\n          x: new Date(2016, 0, 1, 3, 15).toISOString(),\n          y: 60\n        }, {\n          x: new Date(2016, 0, 1, 4, 15).toISOString(),\n          y: 80\n        }, {\n          x: new Date(2016, 0, 1, 5, 15).toISOString(),\n          y: 120\n        }, {\n          x: new Date(2016, 0, 1, 6, 15).toISOString(),\n          y: 130\n        }, {\n          x: new Date(2016, 0, 1, 7, 0).toISOString(),\n          y: 180\n        }, {\n          x: new Date(2016, 0, 1, 8, 15).toISOString(),\n          y: 185\n        }, {\n          x: new Date(2016, 0, 1, 9, 45).toISOString(),\n          y: 200\n        }, {\n          x: new Date(2016, 0, 1, 12, 15).toISOString(),\n          y: 220\n        }],\n        yAxis: \"y2\"\n      }, {\n        key: \"uid_3\",\n        label: {\n          display: \"Data Label 3\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CIRCLE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 1, 5).toISOString(),\n          y: 15\n        }, {\n          x: new Date(2016, 0, 1, 2, 15).toISOString(),\n          y: 21\n        }, {\n          x: new Date(2016, 0, 1, 3, 15).toISOString(),\n          y: null\n        }, {\n          x: new Date(2016, 0, 1, 4, 15).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 5, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 6, 15).toISOString(),\n          y: 19\n        }, {\n          x: new Date(2016, 0, 1, 9, 45).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 12, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 13, 15).toISOString(),\n          y: 28\n        }, {\n          x: new Date(2016, 0, 1, 14, 15).toISOString(),\n          y: 22\n        }, {\n          x: new Date(2016, 0, 1, 19, 45).toISOString(),\n          y: 23\n        }],\n        yAxis: \"y\"\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  LINE_TIMESERIES_DATELINE: function LINE_TIMESERIES_DATELINE(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n          label: \"Datetime\",\n          lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n          upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n          orientation: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXES_ORIENTATION.X.BOTTOM\n        },\n        y: {\n          label: \"Line Set A\",\n          lowerLimit: 10,\n          upperLimit: 30\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 250\n        }\n      },\n      dateline: [{\n        showDatelineIndicator: true,\n        label: {\n          display: \"Current Date\"\n        },\n        color: \"#FFDF00\",\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.SQUARE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadDatelinePopup\"],\n        value: new Date(2016, 0, 1, 6).toISOString()\n      }],\n      clickPassThrough: {\n        dateline: false\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Data Label 1\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CIRCLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 1, 5).toISOString(),\n          y: 5,\n          isCritical: false\n        }, {\n          x: new Date(2016, 0, 1, 2, 15).toISOString(),\n          y: 11\n        }, {\n          x: new Date(2016, 0, 1, 3, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 4, 15).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 5, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 6, 15).toISOString(),\n          y: 9\n        }, {\n          x: new Date(2016, 0, 1, 7, 0).toISOString(),\n          y: 11\n        }, {\n          x: new Date(2016, 0, 1, 8, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 9, 45).toISOString(),\n          y: 16\n        }, {\n          x: new Date(2016, 0, 1, 12, 15).toISOString(),\n          y: 17\n        }, {\n          x: new Date(2016, 0, 1, 13, 15).toISOString(),\n          y: 28\n        }, {\n          x: new Date(2016, 0, 1, 14, 15).toISOString(),\n          y: 12\n        }, {\n          x: new Date(2016, 0, 1, 19, 45).toISOString(),\n          y: 13\n        }, {\n          x: new Date(2016, 0, 1, 21, 15).toISOString(),\n          y: 14\n        }],\n        yAxis: \"y\"\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  PAIRED_DEFAULT: function PAIRED_DEFAULT(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          label: \"Data\",\n          lowerLimit: 0,\n          upperLimit: 1000\n        },\n        y: {\n          label: \"Paired\",\n          lowerLimit: 0,\n          upperLimit: 200\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.PURPLE,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          high: {\n            x: 20,\n            y: 150\n          },\n          mid: {\n            x: 20,\n            y: 40\n          },\n          low: {\n            x: 20,\n            y: 10\n          }\n        }, {\n          high: {\n            x: 80,\n            y: 100\n          },\n          mid: {\n            x: 80,\n            y: 75\n          },\n          low: {\n            x: 80,\n            y: 50\n          }\n        }, {\n          high: {\n            x: 150,\n            y: 110\n          },\n          mid: {\n            x: 150,\n            y: 70\n          },\n          low: {\n            x: 150,\n            y: 30\n          }\n        }, {\n          high: {\n            x: 175,\n            y: 160\n          },\n          mid: {\n            x: 175,\n            y: 120\n          },\n          low: {\n            x: 175,\n            y: 100\n          }\n        }, {\n          high: {\n            x: 300,\n            y: 190\n          },\n          mid: {\n            x: 300,\n            y: 90\n          },\n          low: {\n            x: 300,\n            y: 60\n          }\n        }, {\n          high: {\n            x: 560,\n            y: 150\n          },\n          mid: {\n            x: 560,\n            y: 40\n          },\n          low: {\n            x: 560,\n            y: 10\n          }\n        }, {\n          high: {\n            x: 800,\n            y: 180\n          },\n          mid: {\n            x: 800,\n            y: 100\n          },\n          low: {\n            x: 800,\n            y: 100\n          }\n        }]\n      }, {\n        key: \"uid_2\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        yAxis: \"y2\",\n        values: [{\n          high: {\n            x: 45,\n            y: 350\n          },\n          mid: {\n            x: 45,\n            y: 146\n          },\n          low: {\n            x: 45,\n            y: 75\n          }\n        }, {\n          high: {\n            x: 470,\n            y: 110\n          },\n          mid: {\n            x: 470,\n            y: 70\n          },\n          low: {\n            x: 470,\n            y: 30\n          }\n        }]\n      }],\n      showLabel: true,\n      showLegend: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  PAIRED_TIMESERIES: function PAIRED_TIMESERIES(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n          label: \"Datetime\",\n          lowerLimit: \"2016-03-02T12:00:00Z\",\n          upperLimit: \"2018-12-10T12:00:00Z\",\n          ticks: {\n            format: \"%b %Y\"\n          }\n        },\n        y: {\n          label: \"Paired Set A\",\n          lowerLimit: 0,\n          upperLimit: 200\n        },\n        y2: {\n          show: false,\n          label: \"Paired Set B\",\n          lowerLimit: 100,\n          upperLimit: 350\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          high: {\n            x: \"2016-05-01T12:00:00Z\",\n            y: 150,\n            isCritical: false\n          },\n          mid: {\n            x: \"2016-05-01T12:00:00Z\",\n            y: 40\n          },\n          low: {\n            x: \"2016-05-01T12:00:00Z\",\n            y: 10,\n            isCritical: false\n          }\n        }, {\n          high: {\n            x: \"2016-08-17T12:00:00Z\",\n            y: 110\n          },\n          mid: {\n            x: \"2016-08-17T12:00:00Z\",\n            y: 70\n          },\n          low: {\n            x: \"2016-08-17T12:00:00Z\",\n            y: 30\n          }\n        }, {\n          high: {\n            x: \"2016-10-17T12:00:00Z\",\n            y: 160\n          },\n          mid: {\n            x: \"2016-10-17T12:00:00Z\",\n            y: 120\n          },\n          low: {\n            x: \"2016-10-17T12:00:00Z\",\n            y: 100\n          }\n        }, {\n          high: {\n            x: \"2017-03-17T12:00:00Z\",\n            y: 190\n          },\n          mid: {\n            x: \"2017-03-17T12:00:00Z\",\n            y: 90\n          },\n          low: {\n            x: \"2017-03-17T12:00:00Z\",\n            y: 60\n          }\n        }, {\n          low: {\n            x: \"2017-07-17T12:00:00Z\",\n            y: 10\n          }\n        }, {\n          high: {\n            x: \"2018-02-17T12:00:00Z\",\n            y: 180\n          }\n        }]\n      }, {\n        key: \"uid_2\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.SQUARE,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE_DOWN\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        yAxis: \"y2\",\n        values: [{\n          high: {\n            x: \"2017-05-01T11:00:00Z\",\n            y: 300\n          },\n          mid: {\n            x: \"2017-05-01T11:00:00Z\",\n            y: 250\n          },\n          low: {\n            x: \"2017-05-01T11:00:00Z\",\n            y: 175\n          }\n        }, {\n          high: {\n            x: \"2017-08-17T13:00:00Z\",\n            y: 300\n          },\n          mid: {\n            x: \"2017-08-17T13:00:00Z\",\n            y: 170\n          },\n          low: {\n            x: \"2017-08-17T13:00:00Z\",\n            y: 130\n          }\n        }, {\n          high: {\n            x: \"2017-10-17T15:00:00Z\",\n            y: 250\n          },\n          mid: {\n            x: \"2017-10-17T15:00:00Z\",\n            y: 220\n          },\n          low: {\n            x: \"2017-10-17T15:00:00Z\",\n            y: 200\n          }\n        }]\n      }],\n      showLabel: true,\n      showLegend: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  LINE_PAIR_COMB_DEFAULT: function LINE_PAIR_COMB_DEFAULT(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          show: true,\n          label: \"Data\",\n          lowerLimit: 0,\n          upperLimit: 300\n        },\n        y: {\n          show: true,\n          label: \"Line\",\n          lowerLimit: 0,\n          upperLimit: 20\n        },\n        y2: {\n          show: true,\n          label: \"Paired\",\n          lowerLimit: 40,\n          upperLimit: 180\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Line\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(50).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * 5 + 10,\n            x: 10 + i * 5\n          };\n        })\n      }, {\n        key: \"uid_2\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        yAxis: \"y2\",\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          high: {\n            x: 45,\n            y: 200\n          },\n          mid: {\n            x: 45,\n            y: 146\n          },\n          low: {\n            x: 45,\n            y: 75\n          }\n        }, {\n          high: {\n            x: 160,\n            y: 110\n          },\n          mid: {\n            x: 160,\n            y: 70\n          },\n          low: {\n            x: 160,\n            y: 30\n          }\n        }, {\n          high: {\n            x: 220,\n            y: 110\n          },\n          mid: {\n            x: 220,\n            y: 70\n          },\n          low: {\n            x: 220,\n            y: 30\n          }\n        }]\n      }, {\n        key: \"uid_2\",\n        label: {\n          high: {\n            display: \"High\"\n          },\n          mid: {\n            display: \"Median\"\n          },\n          low: {\n            display: \"Low\"\n          }\n        },\n        yAxis: \"y\",\n        shape: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.TEAR_ALT,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.RHOMBUS,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.TEAR_DROP\n        },\n        color: {\n          high: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          mid: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n          low: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n        },\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: [{\n          high: {\n            x: 45,\n            y: 200\n          },\n          mid: {\n            x: 45,\n            y: 146\n          },\n          low: {\n            x: 45,\n            y: 75\n          }\n        }, {\n          high: {\n            x: 160,\n            y: 110\n          },\n          mid: {\n            x: 160,\n            y: 70\n          },\n          low: {\n            x: 160,\n            y: 30\n          }\n        }]\n      }],\n      showLabel: true,\n      showLegend: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  PIE: function PIE(id) {\n    return {\n      bindTo: id,\n      dimension: {\n        height: 300\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Blue\",\n          format: function format(display, val) {\n            return \"\".concat(display, \": \").concat(val.toFixed(), \"%\");\n          }\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPiePopup\"],\n        value: 60\n      }, {\n        key: \"uid_2\",\n        label: {\n          display: \"Green\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPiePopup\"],\n        value: 10\n      }, {\n        key: \"uid_3\",\n        label: {\n          display: \"Light Purple\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPiePopup\"],\n        value: 30\n      }],\n      showLegend: true\n    };\n  }\n}, {\n  GANTT: function GANTT(id) {\n    return {\n      bindTo: id,\n      axis: {\n        x: {\n          show: true,\n          lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n          upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n          rangeRounding: true // If set to false, we don't extend the domain\n\n        }\n      },\n      clickPassThrough: {\n        task: false,\n        activity: false,\n        event: false,\n        action: false,\n        dateline: false\n      },\n      tracks: [{\n        key: \"track 1\",\n        dimension: {\n          trackHeight: 80\n        },\n        trackLabel: {\n          display: \"Project A\",\n          onClick: function onClick() {// Call consumer implementation here or NOP\n          }\n        },\n        tasks: [{\n          key: \"task1\",\n          label: {\n            display: \"Story A\"\n          },\n          onClick: function onClick() {},\n          color: \"#007cc3\",\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: function duration() {\n            return daysToMilliseconds(10);\n          },\n          percentage: 40,\n          dependencies: null,\n          // TODO FUTURE implementation\n          style: {\n            isDotted: true,\n            isHollow: true\n          }\n        }],\n        activities: [// Optional, consumer can skip this to get a valid gantt chart.\n        {\n          key: \"uid_activity_1\",\n          label: {\n            display: \"Support\"\n          },\n          onClick: function onClick() {},\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: function duration() {\n            return daysToMilliseconds(12);\n          },\n          style: {\n            isDotted: false,\n            isHollow: false\n          }\n        }],\n        events: [{\n          key: \"uid_event_1\",\n          label: {\n            display: \"Defect A\"\n          },\n          onClick: function onClick() {},\n          shape: {\n            path: {\n              id: \"caretUp\",\n              d: \"M0,36l24-24l24,24H0z\"\n            },\n            options: {\n              x: -12,\n              y: -12,\n              scale: 0.5\n            }\n          },\n          color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n          values: [new Date(2018, 3, 1, 7, 0).toISOString()]\n        }],\n        actions: [{\n          key: \"uid_action_1\",\n          onClick: function onClick() {},\n          values: [new Date(2018, 2, 1, 6, 15).toISOString(), new Date(2018, 3, 1, 6, 15).toISOString(), new Date(2018, 4, 1, 6, 15).toISOString()]\n        }, {\n          key: \"uid_action_2\",\n          onClick: function onClick() {},\n          values: [new Date(2018, 6, 1, 6, 15).toISOString()]\n        }]\n      }],\n      actionLegend: [{\n        key: \"uid_action_1\",\n        label: {\n          display: \"Action A\"\n        }\n      }, {\n        key: \"uid_action_2\",\n        label: {\n          display: \"Action B\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN\n      }],\n      dateline: [{\n        showDatelineIndicator: true,\n        label: {\n          display: \"DST Start\"\n        },\n        color: \"#D3D4D5\",\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadDatelinePopup\"],\n        value: new Date(2018, 2, 10).toISOString()\n      }, {\n        showDatelineIndicator: true,\n        label: {\n          display: \"Current Date\"\n        },\n        color: \"#FFDF00\",\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.SQUARE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadDatelinePopup\"],\n        value: new Date(2018, 8, 5).toISOString()\n      }, {\n        showDatelineIndicator: true,\n        label: {\n          display: \"DST End\"\n        },\n        color: \"#D3D4D5\",\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TRIANGLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadDatelinePopup\"],\n        value: new Date(2018, 10, 3).toISOString()\n      }],\n      showActionLegend: true\n    };\n  }\n}, {\n  TIMELINE: function TIMELINE(id) {\n    return {\n      bindTo: id,\n      bindLegendTo: null,\n      axis: {\n        x: {\n          label: \"Datetime\",\n          lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n          upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Timeline A\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadTimelinePopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 1, 30).toISOString(),\n          content: bobRossIpsum\n        }, {\n          x: new Date(2016, 0, 1, 2, 15).toISOString(),\n          content: bobRossIpsum\n        }, {\n          x: new Date(2016, 0, 1, 3, 15).toISOString(),\n          content: bobRossIpsum\n        }, {\n          x: new Date(2016, 0, 1, 4, 15).toISOString(),\n          content: bobRossIpsum\n        }, {\n          x: new Date(2016, 0, 1, 5, 15).toISOString(),\n          content: bobRossIpsum\n        }]\n      }, {\n        key: \"uid_2\",\n        label: {\n          display: \"Timeline B\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadTimelinePopup\"],\n        values: [{\n          x: new Date(2016, 0, 1, 8, 15).toISOString(),\n          content: \"This is custom value of another unit\"\n        }, {\n          x: new Date(2016, 0, 1, 9, 45).toISOString(),\n          content: \"This is custom value of another unit\"\n        }, {\n          x: new Date(2016, 0, 1, 12).toISOString(),\n          content: \"This is custom value of another unit\"\n        }]\n      }],\n      showLabel: true,\n      showLegend: true\n    };\n  }\n}, {\n  BAR_DEFAULT: function BAR_DEFAULT(id) {\n    return {\n      bindTo: id,\n      bindLegendTo: null,\n      axis: {\n        x: {\n          show: true,\n          label: \"Data\",\n          lowerLimit: 0,\n          upperLimit: 8\n        },\n        y: {\n          show: true,\n          label: \"Bar Set A\",\n          lowerLimit: 0,\n          upperLimit: 35\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 30\n        }\n      },\n      data: [{\n        key: \"uid_bar_1\",\n        label: {\n          display: \"Data Label 1\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 30\n        }, {\n          x: 2,\n          y: 10\n        }, {\n          x: 3,\n          y: 13\n        }, {\n          x: 4,\n          y: 15\n        }, {\n          x: 5,\n          y: 18\n        }]\n      }, {\n        key: \"uid_bar_2\",\n        label: {\n          display: \"Data Label 2\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 10\n        }, {\n          x: 2,\n          y: 15\n        }, {\n          x: 3,\n          y: 18\n        }, {\n          x: 4,\n          y: 6\n        }, {\n          x: 6,\n          y: 10\n        }]\n      }, {\n        key: \"uid_bar_3\",\n        label: {\n          display: \"Data Label 3\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 15\n        }, {\n          x: 2,\n          y: 10\n        }, {\n          x: 3,\n          y: 13\n        }, {\n          x: 4,\n          y: 8\n        }]\n      }, {\n        key: \"uid_bar_4\",\n        label: {\n          display: \"Data Label 4\"\n        },\n        group: \"uid_bar_1\",\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 30\n        }, {\n          x: 2,\n          y: 5\n        }, {\n          x: 3,\n          y: 8\n        }, {\n          x: 4,\n          y: 10\n        }, {\n          x: 5,\n          y: 10\n        }, {\n          x: 6,\n          y: 10\n        }]\n      }, {\n        key: \"uid_bar_5\",\n        label: {\n          display: \"Data Label 5\"\n        },\n        group: \"uid_bar_1\",\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 30\n        }, {\n          x: 2,\n          y: 8\n        }, {\n          x: 3,\n          y: 9\n        }, {\n          x: 4,\n          y: 10\n        }, {\n          x: 5,\n          y: 7\n        }]\n      }, {\n        key: \"uid_bar_6\",\n        label: {\n          display: \"Data Label 6\"\n        },\n        group: \"uid_bar_1\",\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: -15\n        }, {\n          x: 2,\n          y: -8\n        }, {\n          x: 3,\n          y: -9\n        }, {\n          x: 4,\n          y: -10\n        }, {\n          x: 5,\n          y: -7\n        }]\n      }, {\n        key: \"uid_barline_1\",\n        label: {\n          display: \"Data Bar Line 1\"\n        },\n        yAxis: \"y2\",\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: new Array(7).fill(\"\").map(function (_, i) {\n          return {\n            y: Math.sin(i) * Math.PI + 20,\n            x: i + 0.5\n          };\n        })\n      }, {\n        key: \"uid_bar_7\",\n        label: {\n          display: \"Data Label 7\"\n        },\n        group: \"uid_bar_1\",\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.YELLOW,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: 1,\n          y: 10\n        }, {\n          x: 2,\n          y: 15\n        }, {\n          x: 3,\n          y: 18\n        }, {\n          x: 4,\n          y: 6\n        }, {\n          x: 5,\n          y: 0\n        }, {\n          x: 6,\n          y: 10\n        }]\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  BAR_TIMESERIES: function BAR_TIMESERIES(id) {\n    return {\n      bindTo: id,\n      bindLegendTo: null,\n      axis: {\n        x: {\n          show: true,\n          type: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n          label: \"Data\",\n          lowerLimit: new Date(2017, 11, 31).toISOString(),\n          upperLimit: new Date(2018, 0, 8).toISOString()\n        },\n        y: {\n          show: true,\n          label: \"Bar Set A\",\n          lowerLimit: 0,\n          upperLimit: 20\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 20\n        }\n      },\n      data: [{\n        key: \"uid_bar_t1\",\n        label: {\n          display: \"Data Label t1\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: new Date(2018, 0, 1).toISOString(),\n          y: 15\n        }, {\n          x: new Date(2018, 0, 2).toISOString(),\n          y: 19\n        }, {\n          x: new Date(2018, 0, 3).toISOString(),\n          y: 10\n        }, {\n          x: new Date(2018, 0, 4).toISOString(),\n          y: 13\n        }, {\n          x: new Date(2018, 0, 5).toISOString(),\n          y: 15\n        }]\n      }, {\n        key: \"uid_bar_t2\",\n        label: {\n          display: \"Data Label t2\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadBarPopup\"],\n        values: [{\n          x: new Date(2018, 0, 2).toISOString(),\n          y: 10\n        }, {\n          x: new Date(2018, 0, 3).toISOString(),\n          y: 10\n        }, {\n          x: new Date(2018, 0, 4).toISOString(),\n          y: 15\n        }]\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}, {\n  NO_DATA_VIEW: function NO_DATA_VIEW(id) {\n    return {\n      bindTo: id,\n      bindLegendTo: null,\n      axis: {\n        x: {\n          show: true,\n          label: \"Data\",\n          lowerLimit: 80,\n          upperLimit: 280\n        },\n        y: {\n          show: true,\n          label: \"Line Set A\",\n          lowerLimit: 0,\n          upperLimit: 20\n        },\n        y2: {\n          show: false,\n          label: \"Line Set B\",\n          lowerLimit: 0,\n          upperLimit: 250\n        }\n      },\n      data: [{\n        key: \"uid_1\",\n        label: {\n          display: \"Data Label 1\"\n        },\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: []\n      }, {\n        key: \"uid_2\",\n        label: {\n          display: \"Data Label 2\"\n        },\n        shape: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.TRIANGLE,\n        color: _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n        onClick: _popup__WEBPACK_IMPORTED_MODULE_1__[\"loadPopup\"],\n        values: []\n      }],\n      showLabel: true,\n      showLegend: true,\n      showShapes: true,\n      showVGrid: true,\n      showHGrid: true\n    };\n  }\n}];\nvar getDemoData = function getDemoData(id, type) {\n  var res = DATA.find(function (t) {\n    return t[type];\n  });\n  return res ? res[type](id) : null;\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/data.js?");

/***/ }),

/***/ "./dev/examples/helpers.js":
/*!*********************************!*\
  !*** ./dev/examples/helpers.js ***!
  \*********************************/
/*! exports provided: createElementLegendBindTo, vector, h3, CUSTOM_CONTAINER_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementLegendBindTo\", function() { return createElementLegendBindTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vector\", function() { return vector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h3\", function() { return h3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOM_CONTAINER_STYLE\", function() { return CUSTOM_CONTAINER_STYLE; });\nvar createElementLegendBindTo = function createElementLegendBindTo(id) {\n  var parentContainerElem = document.querySelector(\"#\".concat(id));\n  var container = document.createElement(\"div\");\n  container.setAttribute(\"class\", \"bindto-container\"); // Prepare legend container\n\n  var legendContainer = document.createElement(\"div\");\n  var graphContainer = document.createElement(\"div\");\n  legendContainer.setAttribute(\"id\", \"legendContainer\");\n  legendContainer.setAttribute(\"class\", \"legend-bindto-container\"); // Prepare graph container\n\n  graphContainer.setAttribute(\"id\", \"graphContainer\");\n  graphContainer.setAttribute(\"class\", \"legend-bindto-graph-container\");\n  container.appendChild(legendContainer);\n  container.appendChild(graphContainer);\n  parentContainerElem.appendChild(container);\n};\nvar vector = {\n  render: function render(el, id) {\n    var vb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"\";\n    var elem = el.appendChild(document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\"));\n    elem.id = id;\n    elem.setAttribute(\"style\", style);\n    vb ? elem.setAttribute(\"viewBox\", vb) : \"\";\n    vb ? elem.setAttribute(\"preserveAspectRatio\", \"xMidYMid meet\") : \"\";\n    return elem;\n  }\n};\nvar h3 = {\n  render: function render(el, content) {\n    var elem = el.appendChild(document.createElement(\"h3\"));\n    elem.innerHTML = content;\n    elem.setAttribute(\"class\", \"graph-header\");\n    return elem;\n  }\n};\nvar CUSTOM_CONTAINER_STYLE = \"custom-container-style\";\n\n//# sourceURL=webpack://Carbon/./dev/examples/helpers.js?");

/***/ }),

/***/ "./dev/examples/panHelpers.js":
/*!************************************!*\
  !*** ./dev/examples/panHelpers.js ***!
  \************************************/
/*! exports provided: createPanningControls, moveRightHandler, moveLeftHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPanningControls\", function() { return createPanningControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveRightHandler\", function() { return moveRightHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveLeftHandler\", function() { return moveLeftHandler; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/main/js/carbon */ \"./src/main/js/carbon.js\");\n/* harmony import */ var _src_main_js_core_Shape_shapeDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/main/js/core/Shape/shapeDefinitions */ \"./src/main/js/core/Shape/shapeDefinitions.js\");\n\n\n\n/**\n * Creates Panning container to hold the navigation buttons\n *\n * @private\n * @param {Array} container - Contains array of the html elements\n * @returns { HTMLElement } return html element\n */\n\nvar createPanningContainer = function createPanningContainer(container) {\n  return container.insert(\"nav\", \":first-child\").classed(\"panning-container\", true);\n};\n/**\n * createNavigationButton to control the graph movement\n *\n * @private\n * @param {Array} container - container we need to append the navigation button\n * @param {object} icon - icon to add inside the buttons\n * @param {Function} action - function to move to graph\n * @param {string} className - className to be given to each button\n * @returns {object} returns the navigation button element\n */\n\n\nvar createNavigationButton = function createNavigationButton(container, icon, action, className) {\n  return container.append(\"button\").classed(className, true).on(\"click\", action).attr(\"tabindex\", 0).append(function () {\n    return _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.shape(icon).getShapeElement(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tools.defaultSVGProps({\n      svgStyles: \"fill: \".concat(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.BLACK, \";\")\n    }), true);\n  });\n};\n/**\n * moveLeftHandler moves the graph to left on click of the button\n *\n * @private\n * @param {object} graphOptions - graph object which we have to re-create\n * @param {object} shift - rate by which we have to shift\n * @returns {object} returns the update axis to re-create the graph\n */\n\n\nvar moveLeftHandler = function moveLeftHandler(graphOptions, shift) {\n  return function () {\n    var axisData = graphOptions.axisData,\n        graphData = graphOptions.graphData,\n        creationHandler = graphOptions.creationHandler;\n    var hour = shift.initial - shift.factor;\n    shift.initial = hour;\n    axisData.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    axisData.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    creationHandler(axisData, graphData);\n  };\n};\n/**\n * moveRightHandler moves the graph to left on click of the button\n *\n * @private\n * @param {object} graphOptions - graph object which we have to re-create\n * @param {object} shift - rate by which we have to shift\n * @returns {object} returns the update axis to re-create the graph\n */\n\n\nvar moveRightHandler = function moveRightHandler(graphOptions, shift) {\n  return function () {\n    var axisData = graphOptions.axisData,\n        graphData = graphOptions.graphData,\n        creationHandler = graphOptions.creationHandler;\n    var hour = shift.initial + shift.factor;\n    shift.initial = hour;\n    axisData.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    axisData.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    creationHandler(axisData, graphData);\n  };\n};\n/**\n * createPanningControls to create the navigation button with the click handler\n *\n * @private\n * @param {string} id - id of the div where we have to insert the navigation buttons\n * @param {object} graphOptions - graph data to perform operations on the graph\n * @returns {undefined} returns nothing\n */\n\n\nvar createPanningControls = function createPanningControls(id, graphOptions) {\n  var shift = {\n    initial: 0,\n    factor: 3\n  };\n  var panningContainerElement = createPanningContainer(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(\"#\".concat(id)));\n  createNavigationButton(panningContainerElement, _src_main_js_core_Shape_shapeDefinitions__WEBPACK_IMPORTED_MODULE_2__[\"LEFT_CHEVRON\"], moveLeftHandler(graphOptions, shift), \"nav-left\");\n  createNavigationButton(panningContainerElement, _src_main_js_core_Shape_shapeDefinitions__WEBPACK_IMPORTED_MODULE_2__[\"RIGHT_CHEVRON\"], moveRightHandler(graphOptions, shift), \"nav-right\");\n};\n\n\n\n//# sourceURL=webpack://Carbon/./dev/examples/panHelpers.js?");

/***/ }),

/***/ "./dev/examples/popup.js":
/*!*******************************!*\
  !*** ./dev/examples/popup.js ***!
  \*******************************/
/*! exports provided: loadPopup, loadBubblePopup, loadBarPopup, loadTextLabelPopup, loadTrackLabelPopup, loadTrackPopup, loadTaskPopup, loadDatelinePopup, loadTimelinePopup, loadPiePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPopup\", function() { return loadPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadBubblePopup\", function() { return loadBubblePopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadBarPopup\", function() { return loadBarPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTextLabelPopup\", function() { return loadTextLabelPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTrackLabelPopup\", function() { return loadTrackLabelPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTrackPopup\", function() { return loadTrackPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTaskPopup\", function() { return loadTaskPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDatelinePopup\", function() { return loadDatelinePopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTimelinePopup\", function() { return loadTimelinePopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPiePopup\", function() { return loadPiePopup; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/main/js/helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/main/js/helpers/utils */ \"./src/main/js/helpers/utils.js\");\n\n\n/* eslint-disable */\n\n\n\n\nvar getDate = function getDate(d) {\n  return new Date(d).toLocaleString();\n};\n\nvar getPairData = function getPairData(value) {\n  return value ? checkDate(value) ? getDate(value) : value : null;\n};\n\nvar checkDate = function checkDate(date) {\n  return date instanceof Date;\n};\n\nvar createItem = function createItem(pair, label, value) {\n  var item = pair.append(\"g\").classed(\"popup-item\", true);\n  item.append(\"label\").classed(\"popup-label\", true).text(label);\n  item.append(\"g\").classed(\"popup-text\", true).text(value);\n};\n\nvar createTrackItem = function createTrackItem(pair, label, items) {\n  var item = pair.append(\"g\").classed(\"popup-item\", true);\n  item.append(\"label\").classed(\"popup-label\", true).text(label);\n  var section = item.append(\"g\").classed(\"section\", true);\n\n  var _loop = function _loop() {\n    var value = _Object$values[_i];\n    var content = section.append(\"g\").classed(\"content\", true);\n    Object.entries(value).forEach(function (_ref) {\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n          subLabel = _ref2[0],\n          subItem = _ref2[1];\n\n      var subContent = content.append(\"g\").classed(\"popup-item\", true);\n      subContent.append(\"label\").classed(\"popup-label\", true).text(subLabel.replace(/([a-z0-9])([A-Z])/g, \"$1 $2\").replace(/(\\b[a-z](?!\\s))/g, function (x) {\n        return x.toUpperCase();\n      }));\n      subContent.append(\"g\").classed(\"popup-text\", true).text(subItem);\n    });\n  };\n\n  for (var _i = 0, _Object$values = Object.values(items); _i < _Object$values.length; _i++) {\n    _loop();\n  }\n};\n\nvar renderPopup = function renderPopup(fn) {\n  var tip = document.querySelector(\"#tooltip\");\n\n  var clickHandler = function clickHandler() {\n    d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(tip).attr(\"style\", \"display:none;\").selectAll(\"g\").remove();\n\n    if (_src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isFunction(fn)) {\n      fn();\n    }\n\n    d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(\"#overlay\").remove();\n    tip.removeEventListener(\"click\", clickHandler);\n    window.removeEventListener(\"resize\", clickHandler);\n  }; // Add new popup\n\n\n  d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(\"body\").append(\"div\", \"#tooltip\").attr(\"id\", \"overlay\").classed(\"overlay\", true).on(\"click\", clickHandler); // Position popup\n\n  return d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(\"#tooltip\").style(\"left\", \"\".concat(d3__WEBPACK_IMPORTED_MODULE_1___default.a.event.pageX + 5, \"px\")).style(\"top\", \"\".concat(d3__WEBPACK_IMPORTED_MODULE_1___default.a.event.pageY + 5, \"px\"));\n};\n\nvar removeOldPopup = function removeOldPopup() {\n  // Remove old popup\n  d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(\"#overlay\").remove();\n  d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(\"#tooltip\").attr(\"style\", \"\").selectAll(\"g\").remove();\n};\n\nvar loadPopup = function loadPopup(onCloseCB, key, index, value) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n\n  if (value.x) {\n    // Line\n    createItem(pair, \"X axis\", \"\".concat(checkDate(value.x) ? getDate(value.x) : value.x));\n    createItem(pair, \"\".concat(value.label.display), value.y);\n  } else {\n    // Paired Result\n    createItem(pair, \"X axis\", \"\".concat(value.high ? getPairData(value.high.x) : value.mid ? getPairData(value.mid.x) : value.low ? getPairData(value.low.x) : \"N/A\"));\n\n    if (value.high) {\n      createItem(pair, \"High\", getPairData(value.high.y));\n    }\n\n    if (value.mid) {\n      createItem(pair, \"Mid\", getPairData(value.mid.y));\n    }\n\n    if (value.low) {\n      createItem(pair, \"Low\", getPairData(value.low.y));\n    }\n  }\n};\nvar loadBubblePopup = function loadBubblePopup(onCloseCB, key, index, value) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n\n  if (value.x) {\n    // Line\n    createItem(pair, \"X axis\", \"\".concat(checkDate(value.x) ? getDate(value.x) : value.x));\n    createItem(pair, \"year\", value.y);\n  }\n\n  if (value.weight) {\n    createItem(pair, \"\".concat(value.label.display), \"\".concat(value.weight));\n  }\n};\nvar loadBarPopup = function loadBarPopup(onCloseCB, key, index, values) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n  values.forEach(function (value) {\n    return createItem(pair, \"\".concat(value.label.display), \"\".concat(value.y));\n  });\n};\nvar loadTextLabelPopup = function loadTextLabelPopup(onCloseCB, value, index) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\").classed(\"popup-item\", true).append(\"g\").attr(\"style\", \"display: inline-block;\");\n\n  if (_src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(value.shape)) {\n    pair.append(\"svg\").attr(\"width\", \"15\").attr(\"height\", \"12\").append(\"path\").attr(\"transform\", \"translate(\".concat(0, \", \", 0, \") scale(\", value.shape.options.scale, \")\")).attr(\"d\", value.shape.path.d).attr(\"fill\", value.shape.path.fill || _src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULT_COLOR).attr(\"id\", value.shape.path.id);\n  }\n\n  if (value.label.display) {\n    pair.append(\"text\").classed(\"popup-text\", true).attr(\"style\", \"color: \".concat(value.color, \";\")).text(\"\".concat(value.label.display));\n  }\n\n  if (value.label.secondaryDisplay) {\n    pair.append(\"tspan\").attr(\"style\", \"color: \".concat(_src_main_js_helpers_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULT_COLOR, \";\")).text(\" \".concat(value.label.secondaryDisplay));\n  }\n};\nvar loadTrackLabelPopup = function loadTrackLabelPopup(d) {\n  removeOldPopup();\n  var path = renderPopup();\n  path.append(\"g\").append(\"g\").classed(\"popup-item\", true).append(\"g\").classed(\"popup-text\", true).text(d);\n};\nvar loadTrackPopup = function loadTrackPopup(onCloseCB, key, value) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n\n  if (value.tasks && value.tasks.length > 0) {\n    var tasks = [];\n    value.tasks.forEach(function (task) {\n      tasks.push({\n        name: task.key,\n        startDate: task.startDate,\n        endDate: task.endDate\n      });\n    });\n    createTrackItem(pair, \"Tasks\", tasks);\n  }\n\n  if (value.activities && value.activities.length > 0) {\n    var activities = [];\n    value.activities.forEach(function (activity) {\n      activities.push({\n        name: activity.key,\n        startDate: activity.startDate,\n        endDate: activity.endDate\n      });\n    });\n    createTrackItem(pair, \"Activities\", activities);\n  }\n\n  if (value.events && value.events.length > 0) {\n    var events = [];\n    value.events.forEach(function (event) {\n      events.push({\n        name: event.key,\n        values: event.values.join(\", \")\n      });\n    });\n    createTrackItem(pair, \"Events\", events);\n  }\n\n  if (value.actions && value.actions.length > 0) {\n    var actions = [];\n    value.actions.forEach(function (action) {\n      actions.push({\n        name: action.key,\n        values: action.values.join(\", \")\n      });\n    });\n    createTrackItem(pair, \"Actions\", actions);\n  }\n};\nvar loadTaskPopup = function loadTaskPopup(onCloseCB, key, index, value) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n\n  if (value.label) {\n    createItem(pair, \"Task Name\", value.label.display);\n  }\n\n  createItem(pair, \"Track\", value.y);\n  createItem(pair, \"Start Date\", getDate(value.startDate));\n  createItem(pair, \"End Date\", getDate(value.endDate));\n\n  if (value.percentage) {\n    createItem(pair, \"Percentage\", value.percentage);\n  }\n};\nvar loadDatelinePopup = function loadDatelinePopup(onCloseCB, payload) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n\n  if (payload.label) {\n    createItem(pair, \"Milestone\", payload.label.display);\n  }\n\n  createItem(pair, \"Date\", getDate(payload.value));\n};\nvar loadTimelinePopup = function loadTimelinePopup(onCloseCB, key, index, value) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n  createItem(pair, \"X axis\", \"\".concat(checkDate(value.x) ? getDate(value.x) : value.x));\n  createItem(pair, \"\".concat(value.label.display), value.content);\n};\nvar loadPiePopup = function loadPiePopup(onCloseCB, key, index, val) {\n  removeOldPopup();\n  var path = renderPopup(onCloseCB);\n  var pair = path.append(\"g\");\n  createItem(pair, val.label.display, val.value);\n};\n\n//# sourceURL=webpack://Carbon/./dev/examples/popup.js?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./noConflict */ \"./node_modules/@babel/polyfill/lib/noConflict.js\");\n\nvar _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ \"./node_modules/core-js/library/fn/global.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nif (_global[\"default\"]._babelPolyfill && typeof console !== \"undefined\" && console.warn) {\n  console.warn(\"@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended \" + \"and may have consequences if different versions of the polyfills are applied sequentially. \" + \"If you do need to load the polyfill more than once, use @babel/polyfill/noConflict \" + \"instead to bypass the warning.\");\n}\n\n_global[\"default\"]._babelPolyfill = true;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/es6 */ \"./node_modules/core-js/es6/index.js\");\n\n__webpack_require__(/*! core-js/fn/array/includes */ \"./node_modules/core-js/fn/array/includes.js\");\n\n__webpack_require__(/*! core-js/fn/array/flat-map */ \"./node_modules/core-js/fn/array/flat-map.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-start */ \"./node_modules/core-js/fn/string/pad-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-end */ \"./node_modules/core-js/fn/string/pad-end.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-start */ \"./node_modules/core-js/fn/string/trim-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-end */ \"./node_modules/core-js/fn/string/trim-end.js\");\n\n__webpack_require__(/*! core-js/fn/symbol/async-iterator */ \"./node_modules/core-js/fn/symbol/async-iterator.js\");\n\n__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ \"./node_modules/core-js/fn/object/get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/fn/object/values */ \"./node_modules/core-js/fn/object/values.js\");\n\n__webpack_require__(/*! core-js/fn/object/entries */ \"./node_modules/core-js/fn/object/entries.js\");\n\n__webpack_require__(/*! core-js/fn/promise/finally */ \"./node_modules/core-js/fn/promise/finally.js\");\n\n__webpack_require__(/*! core-js/web */ \"./node_modules/core-js/web/index.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/polyfill/lib/noConflict.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction _construct(Parent, args, Class) {\n  if (isNativeReflectConstruct()) {\n    module.exports = _construct = Reflect.construct;\n  } else {\n    module.exports = _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) setPrototypeOf(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\nmodule.exports = _construct;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/construct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nmodule.exports = _inheritsLoose;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/inheritsLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://Carbon/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@cerner/carbon-site-helpers/dist/main.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cerner/carbon-site-helpers/dist/main.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ../modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ../modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ../modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ../modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ../modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ../modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ../modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ../modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ../modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ../modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ../modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ../modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ../modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ../modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ../modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ../modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ../modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ../modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ../modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ../modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ../modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ../modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ../modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ../modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ../modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ../modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ../modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ../modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ../modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ../modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ../modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ../modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ../modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ../modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ../modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ../modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ../modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ../modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ../modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ../modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ../modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ../modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ../modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ../modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ../modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ../modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ../modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ../modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ../modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ../modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ../modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ../modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ../modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ../modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ../modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ../modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ../modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ../modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ../modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ../modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ../modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ../modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ../modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ../modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/es6/index.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.flatMap;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/array/flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.includes;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/array/includes.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.entries;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.getOwnPropertyDescriptors;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.values;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/object/values.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ../../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../../modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Promise['finally'];\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/promise/finally.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padEnd;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/string/pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padStart;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/string/pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimRight;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/string/trim-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimLeft;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/string/trim-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\").f('asyncIterator');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/fn/symbol/async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es7.global */ \"./node_modules/core-js/library/modules/es7.global.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").global;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/fn/global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/library/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ../modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://Carbon/./node_modules/core-js/web/index.js?");

/***/ }),

/***/ "./node_modules/d3/d3.js":
/*!*******************************!*\
  !*** ./node_modules/d3/d3.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://Carbon/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/main/js/carbon.js":
/*!*******************************!*\
  !*** ./src/main/js/carbon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ \"./node_modules/@babel/runtime/helpers/construct.js\");\n/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ \"./src/main/js/controls/index.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ \"./src/main/js/core/index.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ \"./src/main/js/locale/index.js\");\n\n/* globals VERSION */\n\n\n\n\n\n\n/**\n * Carbon tools for generating reusable items like different shapes\n *\n * @enum {{Object: Function}}\n */\n\nvar tools = {\n  shape: function shape() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_2__[\"Shape\"], args);\n  },\n  defaultSVGProps: function defaultSVGProps(args) {\n    return _core__WEBPACK_IMPORTED_MODULE_2__[\"Shape\"].getDefaultSVGProps(args);\n  }\n};\n/**\n * Carbon helper constants\n *\n * @public\n * @property {object} AXIS_TYPE Carbon API axis types constants\n * @property {object} COLORS Carbon API color constants\n * @property {object} LINE_TYPE Carbon API line type constants\n * @property {object} LOCALE Carbon API locale objects\n * @property {object} SHAPES Carbon API shape constants\n */\n\nvar helpers = {\n  AXIS_TYPE: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"AXIS_TYPE\"],\n  COLORS: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"COLORS\"],\n  LINE_TYPE: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"LINE_TYPE\"],\n  LOCALE: _locale__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  SHAPES: Object.assign({}, _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"SHAPES\"], {\n    DARK: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"SHAPES\"],\n    LIGHT: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"SHAPES_LIGHT\"]\n  }),\n  AXES_ORIENTATION: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"AXES_ORIENTATION\"]\n};\n/**\n * Carbon\n *\n * @public\n * @module Carbon\n * @property {object} api Carbon API controls\n * @property {object} tools Tools such as Shapes\n * @property {object} helpers Helper constants such as colors and shapes\n * @property {object} version Current version\n * @enum {object}\n */\n\nvar Carbon = {\n  api: _controls__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  tools: tools,\n  helpers: helpers,\n  version: \"1.21.1\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbon);\n\n//# sourceURL=webpack://Carbon/./src/main/js/carbon.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/Bar.js":
/*!*****************************************!*\
  !*** ./src/main/js/controls/Bar/Bar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ \"./src/main/js/core/index.js\");\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/label */ \"./src/main/js/helpers/label.js\");\n/* harmony import */ var _helpers_legend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/legend */ \"./src/main/js/helpers/legend.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _BarConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BarConfig */ \"./src/main/js/controls/Bar/BarConfig.js\");\n/* harmony import */ var _helpers_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/axisInfoRowHelpers */ \"./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js\");\n/* harmony import */ var _helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/creationHelpers */ \"./src/main/js/controls/Bar/helpers/creationHelpers.js\");\n/* harmony import */ var _helpers_goalLineHelpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/goalLineHelpers */ \"./src/main/js/controls/Bar/helpers/goalLineHelpers.js\");\n/* harmony import */ var _helpers_legendHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/legendHelpers */ \"./src/main/js/controls/Bar/helpers/legendHelpers.js\");\n/* harmony import */ var _helpers_resizeHelpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/resizeHelpers */ \"./src/main/js/controls/Bar/helpers/resizeHelpers.js\");\n/* harmony import */ var _helpers_selectionHelpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/selectionHelpers */ \"./src/main/js/controls/Bar/helpers/selectionHelpers.js\");\n/* harmony import */ var _helpers_translateHelpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/translateHelpers */ \"./src/main/js/controls/Bar/helpers/translateHelpers.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Calculates the min and max values for Y Axis or Y2 Axis\n *\n * @private\n * @param {Array} values - Datapoint values\n * @param {string} axis - y or y2\n * @returns {object} - Contains min and max values for the data points\n */\n\nvar calculateValuesRange = function calculateValuesRange(values) {\n  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _helpers_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Y_AXIS;\n  var min = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(values.map(function (i) {\n    return i.y;\n  })));\n  var max = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(values.map(function (i) {\n    return i.y;\n  })));\n  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, axis, {\n    min: min < 0 ? min : 0,\n    max: max > 0 ? max : 0\n  });\n};\n/**\n * Data point sets can be loaded using this function.\n * Load function validates, clones and stores the input onto a config object.\n *\n * @private\n * @param {object} inputJSON - Input JSON provided by the consumer\n * @returns {object} BarConfig config object containing consumer data\n */\n\n\nvar loadInput = function loadInput(inputJSON) {\n  return new _BarConfig__WEBPACK_IMPORTED_MODULE_11__[\"default\"]().setInput(inputJSON).validateInput().clone().getConfig();\n};\n/**\n * Initializes the necessary Bar constructor objects\n *\n * @private\n * @param {Bar} control - Bar instance\n * @returns {Bar} Bar instance\n */\n\n\nvar initConfig = function initConfig(control) {\n  control.config = {};\n  control.ordinalScale = {\n    x0: {},\n    x1: {}\n  };\n  control.dataTarget = {};\n  control.valuesRange = {};\n  return control;\n};\n/**\n * A bar graph is a graph used to represent numerical values of data by\n * height or length of lines or rectangles of equal width\n *\n * Lifecycle functions include:\n *  * Load\n *  * Generate\n *  * Unload\n *  * Destroy\n *\n * @module Bar\n * @class Bar\n */\n\n\nvar Bar =\n/*#__PURE__*/\nfunction (_GraphContent) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Bar, _GraphContent);\n\n  /**\n   * @class\n   * @param {BarConfig} input - Input JSON instance created using GraphConfig\n   */\n  function Bar(input) {\n    var _this;\n\n    _this = _GraphContent.call(this) || this;\n    initConfig(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.config = loadInput(input);\n    _this.config.yAxis = Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_5__[\"getDefaultValue\"])(_this.config.yAxis, _helpers_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Y_AXIS);\n    _this.config.axisPadding = false;\n    _this.valuesRange = calculateValuesRange(_this.config.values, _this.config.yAxis);\n    return _this;\n  }\n  /**\n   * @inheritdoc\n   */\n\n\n  var _proto = Bar.prototype;\n\n  _proto.load = function load(graph) {\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"setGroupName\"])(this.config, graph.content);\n    Object(_helpers_resizeHelpers__WEBPACK_IMPORTED_MODULE_16__[\"scaleOrdinalAxis\"])(this.ordinalScale, graph.config, graph.content);\n    this.dataTarget = Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"processDataPoints\"])(graph.config, this.config);\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"draw\"])(graph.scale, this.ordinalScale, graph.config, graph.svg, this.dataTarget);\n    Object(_helpers_selectionHelpers__WEBPACK_IMPORTED_MODULE_17__[\"updateSelectionBars\"])(this.dataTarget.internalValuesSubset, graph.svg, graph.config);\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"prepareLegendItems\"])(graph.config, {\n      clickHandler: Object(_helpers_legendHelpers__WEBPACK_IMPORTED_MODULE_15__[\"clickHandler\"])(graph, this, graph.config, graph.svg),\n      hoverHandler: Object(_helpers_legendHelpers__WEBPACK_IMPORTED_MODULE_15__[\"hoverHandler\"])(graph.config.shownTargets, graph.svg)\n    }, this.dataTarget, graph.legendSVG);\n    Object(_helpers_label__WEBPACK_IMPORTED_MODULE_7__[\"prepareLabelShapeItem\"])(graph.config, this.dataTarget, graph.axesLabelShapeGroup[this.config.yAxis]);\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.unload = function unload(graph) {\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"clear\"])(graph.svg, this.dataTarget.key);\n    Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_8__[\"removeLegendItem\"])(graph.legendSVG, this.dataTarget);\n    Object(_helpers_label__WEBPACK_IMPORTED_MODULE_7__[\"removeLabelShapeItem\"])(graph.axesLabelShapeGroup[this.config.yAxis], this.dataTarget, graph.config);\n    Object(_helpers_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_12__[\"removeAxisInfoRowLabels\"])(graph.svg.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].axisInfoRow)), this.dataTarget.key);\n    Object(_helpers_selectionHelpers__WEBPACK_IMPORTED_MODULE_17__[\"clearSelectionDatum\"])(graph.svg, this.dataTarget.key);\n    initConfig(this);\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.resize = function resize(graph) {\n    Object(_helpers_resizeHelpers__WEBPACK_IMPORTED_MODULE_16__[\"scaleOrdinalAxis\"])(this.ordinalScale, graph.config, graph.content);\n    Object(_helpers_resizeHelpers__WEBPACK_IMPORTED_MODULE_16__[\"setBarOffsets\"])(graph.content, graph.contentConfig, this, this.ordinalScale, graph.config);\n    Object(_helpers_translateHelpers__WEBPACK_IMPORTED_MODULE_18__[\"translateBarGraph\"])(graph.scale, this.ordinalScale, graph.svg, this.dataTarget, graph.config);\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notEmpty(this.dataTarget.axisInfoRow)) {\n      Object(_helpers_translateHelpers__WEBPACK_IMPORTED_MODULE_18__[\"translateTextLabel\"])(this.ordinalScale, graph.scale, graph.config, graph.svg, this.dataTarget.axisInfoRow, this.dataTarget);\n    }\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notEmpty(this.dataTarget.regions)) {\n      Object(_helpers_goalLineHelpers__WEBPACK_IMPORTED_MODULE_14__[\"processGoalLines\"])(graph.scale, this.ordinalScale, graph.config, this.dataTarget, this.config.yAxis);\n      Object(_helpers_goalLineHelpers__WEBPACK_IMPORTED_MODULE_14__[\"translateRegion\"])(graph.scale, graph.config, graph.svg.selectAll(\"rect[aria-describedby=region_\".concat(this.dataTarget.key, \"]\")));\n    }\n\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.redraw = function redraw(graph) {\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"clear\"])(graph.svg, this.dataTarget.key);\n    Object(_helpers_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_12__[\"removeAxisInfoRowLabels\"])(graph.svg.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].axisInfoRow)), this.dataTarget.key);\n    Object(_helpers_creationHelpers__WEBPACK_IMPORTED_MODULE_13__[\"draw\"])(graph.scale, this.ordinalScale, graph.config, graph.svg, this.dataTarget);\n    return this;\n  };\n\n  return Bar;\n}(_core__WEBPACK_IMPORTED_MODULE_4__[\"GraphContent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bar);\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/Bar.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/BarConfig.js":
/*!***********************************************!*\
  !*** ./src/main/js/controls/Bar/BarConfig.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n\n\n\n\n\n/**\n * API to parse consumer input for Bar graph\n *\n * @class BarConfig\n */\n\nvar BarConfig =\n/*#__PURE__*/\nfunction (_BaseConfig) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(BarConfig, _BaseConfig);\n\n  /**\n   * @inheritdoc\n   */\n  function BarConfig() {\n    var _this;\n\n    _this = _BaseConfig.call(this) || this;\n    _this.config = null;\n    _this.input = null;\n    return _this;\n  }\n  /**\n   * Returns the config object\n   *\n   * @returns {object} config object\n   */\n\n\n  var _proto = BarConfig.prototype;\n\n  _proto.getConfig = function getConfig() {\n    return this.config;\n  }\n  /**\n   * Sets the input object\n   *\n   * @param {object} inputJSON - Input JSON\n   * @returns {BarConfig} instance object\n   */\n  ;\n\n  _proto.setInput = function setInput(inputJSON) {\n    this.input = inputJSON;\n    return this;\n  }\n  /**\n   * Validates and verifies the input JSON object.\n   *\n   * @returns {BarConfig} instance object\n   */\n  ;\n\n  _proto.validateInput = function validateInput() {\n    Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"validateBaseInput\"])(this.input);\n    return this;\n  }\n  /**\n   * Clones the input JSON into the config object\n   *\n   * @returns {BarConfig} instance object\n   */\n  ;\n\n  _proto.clone = function clone() {\n    this.config = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(this.input);\n    return this;\n  };\n\n  return BarConfig;\n}(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarConfig);\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/BarConfig.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js":
/*!****************************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js ***!
  \****************************************************************/
/*! exports provided: createAxisInfoRowLabel, getTextLabelsYPosition, getTextLabelsXPosition, removeAxisInfoRowLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAxisInfoRowLabel\", function() { return createAxisInfoRowLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTextLabelsYPosition\", function() { return getTextLabelsYPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTextLabelsXPosition\", function() { return getTextLabelsXPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAxisInfoRowLabels\", function() { return removeAxisInfoRowLabels; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ \"./src/main/js/core/index.js\");\n/* harmony import */ var _core_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Shape */ \"./src/main/js/core/Shape/index.js\");\n/* harmony import */ var _helpers_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/axis */ \"./src/main/js/helpers/axis.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/label */ \"./src/main/js/helpers/label.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Graph/helpers/helpers */ \"./src/main/js/controls/Graph/helpers/helpers.js\");\n/* harmony import */ var _creationHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./creationHelpers */ \"./src/main/js/controls/Bar/helpers/creationHelpers.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Creates text labels based on input object provided. Text label can be one or many.\n *\n * @private\n * @param {object} ordinalScale - ordinal scale object\n * @param {object} scale - d3 scale taking into account the input parameters\n * @param {object} config - config object derived from input JSON\n * @param {object} canvasSVG - d3 object of canvas group svg\n * @param {Array} textLabelList - List of text labels\n * @param {string} uniqueKey - unique id of the content loaded in graph\n * @param {number} index - data point index\n * @returns {undefined} - returns nothing\n */\n\nvar createAxisInfoRowLabel = function createAxisInfoRowLabel(ordinalScale, scale, config, canvasSVG, textLabelList, uniqueKey, index) {\n  if (config.axis.x.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"AXIS_TYPE\"].TIME_SERIES) {\n    textLabelList.x = _helpers_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"].parseDateTime(textLabelList.x); // for time series\n  }\n\n  var attributeHelper = Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_9__[\"barAttributesHelper\"])(scale, ordinalScale);\n  var axisInfoRow = canvasSVG.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRow)).attr(\"aria-hidden\", false).datum(textLabelList.value).append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRowItem, true).attr(\"text-anchor\", \"middle\").attr(\"transform\", \"translate(\".concat(getTextLabelsXPosition(attributeHelper, textLabelList), \", \").concat(getTextLabelsYPosition(config), \")\")).attr(\"aria-describedby\", \"text_label_\".concat(uniqueKey)).attr(\"aria-hidden\", config.shownTargets.indexOf(uniqueKey) < 0);\n\n  if (Object(_helpers_label__WEBPACK_IMPORTED_MODULE_5__[\"shouldTruncateLabel\"])(textLabelList.value.label.display, textLabelList.value.characterCount) || textLabelList.value.label.secondaryDisplay && Object(_helpers_label__WEBPACK_IMPORTED_MODULE_5__[\"shouldTruncateLabel\"])(textLabelList.value.label.secondaryDisplay, textLabelList.value.characterCount)) {\n    axisInfoRow.attr(\"aria-disabled\", !_helpers_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isFunction(textLabelList.value.onClick)).on(\"click\", function (value) {\n      axisInfoRowActionHandler(value, index, canvasSVG, config.axis.x.type, uniqueKey);\n    });\n  }\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"].notEmpty(textLabelList.value.shape)) {\n    axisInfoRow.append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRowIcon, true).attr(\"transform\", \"translate(\".concat(-(Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_3__[\"getAxisLabelWidth\"])(getTextLabel(textLabelList.value.label.display, textLabelList.value.characterCount)) / 2) - _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].TEXT_LABEL_ICON_WIDTH_PADDING, \",\\n                \").concat(-_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].TEXT_LABEL_ICON_HEIGHT_PADDING, \")\"));\n    addTextLabelIcon(axisInfoRow, config, textLabelList, uniqueKey);\n  }\n\n  addTextLabelString(axisInfoRow, config, textLabelList, uniqueKey);\n};\n/**\n * Handler for the text label on click.\n * If the callback is present, the selected text label is toggled and the element is passed as an argument to the\n * consumer in the callback, to execute once the popup is closed.\n *\n * @private\n * @param {object} value - data point object\n * @param {number} index - data point index for the set\n * @param {Array} canvasSVG - d3 object of canvas svg\n * @param {string} type - x-axis type\n * @param {string} uniqueKey - unique id of the content loaded in graph\n * @returns {undefined} - returns nothing\n */\n\n\nvar axisInfoRowActionHandler = function axisInfoRowActionHandler(value, index, canvasSVG, type, uniqueKey) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isEmpty(value.onClick)) {\n    return;\n  }\n\n  toggleDataPointSelection(value, canvasSVG, type, uniqueKey, index).call(function (selectedTarget) {\n    return value.onClick(function () {\n      setOnSelectionAttributes(selectedTarget, false);\n    }, value, index, uniqueKey, selectedTarget);\n  });\n};\n/**\n * Toggles the selection of a text label, executes on click of a text label.\n *\n * @private\n * @param {object} value - data point object\n * @param {Array} canvasSVG - d3 object of canvas svg\n * @param {string} type - x-axis type\n * @param {string} uniqueKey - unique id of the content loaded in graph\n * @param {number} index - data point index\n * @returns {Array} d3 html element of the selected text label\n */\n\n\nvar toggleDataPointSelection = function toggleDataPointSelection(value, canvasSVG, type, uniqueKey, index) {\n  var selectedPointNodes = canvasSVG.selectAll(\"g[aria-describedby=text_label_\".concat(uniqueKey, \"]\"));\n  var selectedPointNode = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(selectedPointNodes[0][index]);\n  var isSelected = selectedPointNode.attr(\"aria-selected\") === \"true\";\n  setOnSelectionAttributes(selectedPointNode, !isSelected);\n  return selectedPointNode;\n};\n/**\n * sets selection axis info row label's aria-selected attribute\n *\n * @private\n * @param {object} selectionPath - selection axis info row label svg path\n * @param {boolean} isSelected - true if selected, false if not\n * @returns {undefined} - returns nothing\n */\n\n\nvar setOnSelectionAttributes = function setOnSelectionAttributes(selectionPath, isSelected) {\n  selectionPath.attr(\"aria-selected\", isSelected);\n};\n/**\n * Adds the label strings to axis info row after truncation(if required).\n *\n * @private\n * @param {object} axisInfoRow - d3 object of axis info row group svg\n * @param {object} config - config object derived from input JSON\n * @param {Array} textLabelList - list of text labels\n * @returns {undefined} - returns nothing\n */\n\n\nvar addTextLabelString = function addTextLabelString(axisInfoRow, config, textLabelList) {\n  axisInfoRow.append(\"text\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRowDisplay, true).text(getTextLabel(textLabelList.value.label.display, textLabelList.value.characterCount)).attr(\"style\", \"fill: \".concat(textLabelList.value.color, \";\"));\n\n  if (textLabelList.value.label.secondaryDisplay) {\n    axisInfoRow.append(\"text\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRowSecondaryDisplay, true).text(getTextLabel(textLabelList.value.label.secondaryDisplay, textLabelList.value.characterCount)).attr(\"dy\", Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_3__[\"isXAxisOrientationTop\"])(config.axis.x.orientation) ? config.axisLabelHeights.x : -config.axisLabelHeights.x);\n  }\n};\n/**\n * Truncates the label string to the character count provided, by default the label will not be truncated\n *\n * @private\n * @param {string} label - axis info row label\n * @param {number} characterCount - Maximum character length before truncation\n * @returns {string} A truncated string with ellipsis\n */\n\n\nvar getTextLabel = function getTextLabel(label, characterCount) {\n  return Object(_helpers_label__WEBPACK_IMPORTED_MODULE_5__[\"shouldTruncateLabel\"])(label, characterCount) ? Object(_helpers_label__WEBPACK_IMPORTED_MODULE_5__[\"truncateLabel\"])(label, characterCount) : label;\n};\n/**\n * X position for the text label\n *\n * @private\n * @param {object} attributeHelper - contains methods for calculating x, y, height, width.\n * @param {Array} textLabelList - list of text labels\n * @param {number} index - data point index\n * @returns {number} X position for the text label\n */\n\n\nvar getTextLabelsXPosition = function getTextLabelsXPosition(attributeHelper, textLabelList, index) {\n  return _helpers_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isDefined(index) && index < textLabelList.length ? attributeHelper.x(textLabelList[index]) + attributeHelper.width / 2 : attributeHelper.x(textLabelList) + attributeHelper.width / 2;\n};\n/**\n * Y position for the text label\n *\n * @private\n * @param {object} config - config object derived from input JSON\n * @returns {number} Y position for the text label\n */\n\n\nvar getTextLabelsYPosition = function getTextLabelsYPosition(config) {\n  return Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_3__[\"isXAxisOrientationTop\"])(config.axis.x.orientation) ? _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].TEXT_LABEL_VERTICAL_POSITION.bottom // axis info row orientation is bottom\n  : _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].TEXT_LABEL_VERTICAL_POSITION.top;\n}; // axis info row orientation is top\n\n/**\n * Adds svg element for each text label.\n *\n * @private\n * @param {object} axisInfoRow - d3 select object containing the text label\n * @param {object} config - Graph config object derived from input JSON\n * @param {Array} textLabelList - list of text labels\n * @param {string} uniqueKey - unique id of the content loaded in graph\n * @returns {undefined} - returns nothing\n */\n\n\nvar addTextLabelIcon = function addTextLabelIcon(axisInfoRow, config, textLabelList, uniqueKey) {\n  return axisInfoRow.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].axisInfoRowIcon)).append(function () {\n    return new _core__WEBPACK_IMPORTED_MODULE_1__[\"Shape\"](Object(_Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_8__[\"getShapeForTarget\"])(textLabelList.value)).getShapeElement(Object(_core_Shape__WEBPACK_IMPORTED_MODULE_2__[\"getDefaultSVGProps\"])({\n      svgClassNames: _helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].point,\n      svgStyles: \"fill: \".concat(Object(_Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_8__[\"getColorForTarget\"])(textLabelList.value.shape)),\n      transformFn: function transformFn(scale) {\n        return \"scale(\".concat(scale, \")\");\n      },\n      a11yAttributes: {\n        \"aria-hidden\": config.shownTargets.indexOf(uniqueKey) < 0,\n        \"aria-describedby\": uniqueKey\n      }\n    }));\n  });\n};\n/**\n * CLear the axis info row labels currently rendered\n *\n * @private\n * @param {d3.selection} axisInfoRowSVG - d3 selection node of axis info row svg\n * @param {string} key - identifier\n * @returns {object} - d3 select object\n */\n\n\nvar removeAxisInfoRowLabels = function removeAxisInfoRowLabels(axisInfoRowSVG, key) {\n  return Object(_Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_8__[\"d3RemoveElement\"])(axisInfoRowSVG, \"g[aria-describedby=\\\"text_label_\".concat(key, \"\\\"]\"), true);\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/creationHelpers.js":
/*!*************************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/creationHelpers.js ***!
  \*************************************************************/
/*! exports provided: processDataPoints, draw, clear, setGroupName, prepareLegendItems, barAttributesHelper, getXAxisXPosition, setSelectionIndicatorAttributes, hasInvalidTicks, barActionHandler, getSelectedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processDataPoints\", function() { return processDataPoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setGroupName\", function() { return setGroupName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareLegendItems\", function() { return prepareLegendItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barAttributesHelper\", function() { return barAttributesHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getXAxisXPosition\", function() { return getXAxisXPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSelectionIndicatorAttributes\", function() { return setSelectionIndicatorAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasInvalidTicks\", function() { return hasInvalidTicks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barActionHandler\", function() { return barActionHandler; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/axis */ \"./src/main/js/helpers/axis.js\");\n/* harmony import */ var _helpers_barType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/barType */ \"./src/main/js/helpers/barType.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/errors */ \"./src/main/js/helpers/errors.js\");\n/* harmony import */ var _helpers_legend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/legend */ \"./src/main/js/helpers/legend.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Graph/helpers/helpers */ \"./src/main/js/controls/Graph/helpers/helpers.js\");\n/* harmony import */ var _axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./axisInfoRowHelpers */ \"./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js\");\n/* harmony import */ var _goalLineHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goalLineHelpers */ \"./src/main/js/controls/Bar/helpers/goalLineHelpers.js\");\n/* harmony import */ var _selectionHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectionHelpers */ \"./src/main/js/controls/Bar/helpers/selectionHelpers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedData\", function() { return _selectionHelpers__WEBPACK_IMPORTED_MODULE_12__[\"getSelectedData\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Checks if ticks are provided for every input\n *\n * @private\n * @param {Array} xTicks - graph x axis tick values\n * @param {Array} inputValues - input values\n * @returns {boolean} - true if invalid. false if valid\n */\n\nvar hasInvalidTicks = function hasInvalidTicks(xTicks, inputValues) {\n  return inputValues.some(function (value) {\n    return xTicks.indexOf(value.x) < 0;\n  });\n};\n/**\n * Checks if x-axis type matches for every input\n *\n * @private\n * @param {string} type - x-axis type\n * @param {Array} inputValues - input values\n * @returns {boolean} - true if input has invalid type, false if it doesn't have invalid type\n */\n\n\nvar hasInvalidTypes = function hasInvalidTypes(type, inputValues) {\n  return inputValues.some(function (value) {\n    return !Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_2__[\"isValidAxisType\"])(value.x, type);\n  });\n};\n/**\n * Processes the input JSON and adds the colors, labels etc. to each data points so that we\n * can use them when rendering the data point.\n * We add key to shownTargets if bar content is newly added to graph\n *\n * @private\n * @param {object} graphConfig - config object of Graph API\n * @param {object} dataTarget - Data points object\n * @throws module:errors.THROW_MSG_EMPTY_X_AXIS_TICK_VALUES\n * @throws module:errors.THROW_MSG_INVALID_FORMAT_TYPE\n * @throws module:errors.THROW_MSG_INVALID_X_AXIS_TICK_VALUES\n * @returns {object} dataTarget - Updated data target object\n */\n\n\nvar processDataPoints = function processDataPoints(graphConfig, dataTarget) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(graphConfig.axis.x.ticks) || _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(graphConfig.axis.x.ticks.values)) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_EMPTY_X_AXIS_TICK_VALUES);\n  }\n\n  if (hasInvalidTypes(graphConfig.axis.x.type, dataTarget.values)) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_INVALID_FORMAT_TYPE);\n  }\n\n  if (hasInvalidTicks(graphConfig.axis.x.ticks.values, dataTarget.values)) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_INVALID_X_AXIS_TICK_VALUES);\n  }\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isDefined(dataTarget.axisInfoRow)) {\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(dataTarget.axisInfoRow)) {\n      throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_AXIS_INFO_ROW_EMPTY_TICK_VALUES);\n    }\n\n    if (hasInvalidTicks(graphConfig.axis.x.ticks.values, dataTarget.axisInfoRow)) {\n      throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_AXIS_INFO_ROW_INVALID_TICK_VALUES);\n    }\n\n    if (hasMissingAxisInfoRowValue(dataTarget.axisInfoRow)) {\n      throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_AXIS_INFO_ROW_VALUE_NOT_PROVIDED);\n    }\n\n    if (hasMissingAxisInfoRowLabelDisplay(dataTarget.axisInfoRow)) {\n      throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THROW_MSG_AXIS_INFO_ROW_LABEL_DISPLAY_NOT_PROVIDED);\n    }\n  }\n\n  graphConfig.shownTargets.push(dataTarget.key);\n  return setDataPoints(graphConfig, dataTarget);\n};\n/**\n * Checks if each axis info row input has value\n *\n * @private\n * @param {object} inputAxisInfoRow - input axis info row values\n * @returns {boolean} - true if each axis info row input has value, false otherwise\n */\n\n\nvar hasMissingAxisInfoRowValue = function hasMissingAxisInfoRowValue(inputAxisInfoRow) {\n  return inputAxisInfoRow.some(function (axisInfoRow) {\n    return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isUndefined(axisInfoRow.value);\n  });\n};\n/**\n * Checks if each axis info row input value label has display\n *\n * @private\n * @param {object} inputAxisInfoRow - input axis info row values\n * @returns {boolean} - true if each axis info row input value label has display , false otherwise\n */\n\n\nvar hasMissingAxisInfoRowLabelDisplay = function hasMissingAxisInfoRowLabelDisplay(inputAxisInfoRow) {\n  return inputAxisInfoRow.some(function (axisInfoRow) {\n    return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isUndefined(axisInfoRow.value.label) || _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isUndefined(axisInfoRow.value.label.display);\n  });\n};\n/**\n * Processes the input JSON and adds the colors, labels etc. to each data points so that we\n * can use them when rendering the data point.\n *\n * @private\n * @param {object} graphConfig - config object of Graph API\n * @param {object} dataTarget - Data points object\n * @returns {object} dataTarget - Updated data target object\n */\n\n\nvar setDataPoints = function setDataPoints(graphConfig, dataTarget) {\n  var type = graphConfig.axis.x.type;\n\n  var getXDataValues = function getXDataValues(x) {\n    if (Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"getType\"])(type) === _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"AXIS_TYPE\"].TIME_SERIES) {\n      return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].parseDateTime(x);\n    }\n\n    return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getNumber(x);\n  };\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].notEmpty(dataTarget.axisInfoRow)) {\n    dataTarget.axisInfoRow.forEach(function (axisInfoRowValue) {\n      return axisInfoRowValue.group = dataTarget.group;\n    });\n\n    if (!graphConfig.axisInfoRowLabelHeight) {\n      graphConfig.axisInfoRowLabelHeight = hasSecondaryDisplay(dataTarget) ? Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_2__[\"getAxisLabelHeight\"])(\"dummyString\") * 2 : Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_2__[\"getAxisLabelHeight\"])(\"dummyString\");\n      graphConfig.padding.bottom = graphConfig.padding.bottom + graphConfig.axisInfoRowLabelHeight;\n    }\n  }\n\n  dataTarget.internalValuesSubset = dataTarget.values.map(function (value) {\n    var isHashed = dataTarget.style ? dataTarget.style.isHashed : false;\n    return {\n      onClick: dataTarget.onClick,\n      x: getXDataValues(value.x),\n      y: value.y,\n      y0: 0,\n      color: dataTarget.color || _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"COLORS\"].BLUE,\n      label: dataTarget.label,\n      yAxis: dataTarget.yAxis || _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Y_AXIS,\n      key: dataTarget.key,\n      isHashed: value.style ? value.style.isHashed : isHashed,\n      style: Object(_helpers_barType__WEBPACK_IMPORTED_MODULE_3__[\"getBarStyle\"])(value.style ? value.style : dataTarget.style, dataTarget),\n      group: dataTarget.group\n    };\n  }); // This square shape is used strictly for legend item\n\n  dataTarget.shape = _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"SHAPES\"].SQUARE;\n  dataTarget.color = dataTarget.color || _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"COLORS\"].BLUE;\n  return dataTarget;\n};\n/**\n * Checks for the presence of secondary display inside axisInfoRow\n *\n * @private\n * @param {object} dataTarget - Data points object\n * @returns {boolean} - true if secondary display is present, false otherwise\n */\n\n\nvar hasSecondaryDisplay = function hasSecondaryDisplay(dataTarget) {\n  return dataTarget.axisInfoRow.some(function (axisInfoRowItem) {\n    return axisInfoRowItem.value.label.secondaryDisplay;\n  });\n};\n/**\n * X Axis's starting position within the canvas\n *\n * @private\n * @param {object} config - config object derived from input JSON\n * @returns {number} Position for the axis\n */\n\n\nvar getXAxisXPosition = function getXAxisXPosition(config) {\n  return config.axisSizes.y + config.axisLabelWidths.y;\n};\n/**\n * Draws the Bar graph on the canvas element. This calls the Graph API to render the following first\n *  Grid\n *  Axes\n *  Legend\n *  Labels\n * Once these items are rendered, we will parse through the data points and render the lines and points\n *\n * @private\n * @param {object} scale - d3 scale taking into account the input parameters\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} config - config object derived from input JSON\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} dataTarget - Data points\n * @returns {undefined} - returns nothing\n */\n\n\nvar draw = function draw(scale, ordinalScale, config, canvasSVG, dataTarget) {\n  if (canvasSVG.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].barSelectionGroup)).empty()) {\n    Object(_selectionHelpers__WEBPACK_IMPORTED_MODULE_12__[\"drawSelectionBars\"])(scale, ordinalScale, config, canvasSVG);\n  }\n\n  var barSVG = canvasSVG.append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].barGraphContent, true).attr(\"clip-path\", \"url(#\".concat(config.clipPathId, \")\")).attr(\"aria-hidden\", config.shownTargets.indexOf(dataTarget.key) < 0).attr(\"aria-describedby\", dataTarget.key);\n  var barGroupSVG = barSVG.append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].currentBarsGroup, true).attr(\"transform\", \"translate(\".concat(getXAxisXPosition(config), \",\").concat(Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_2__[\"calculateVerticalPadding\"])(config), \")\")).data([dataTarget]);\n  var bars = barGroupSVG.selectAll(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bar)).data(dataTarget.internalValuesSubset);\n  drawDataBars(scale, ordinalScale, config, canvasSVG, bars.enter(), dataTarget.regions, dataTarget.axisInfoRow);\n};\n/**\n * Contains logic to calculate x, y, height, width for bar\n * x is calculated using ordinal scale. Padding between each bar should be half of its width.\n * width of bar should be 2/3 of range band. Remaining 1/3 of range band is for padding between bars.\n * height of bar should be\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @returns {object} Object that contains methods for calculating x, y, height, width.\n */\n\n\nvar barAttributesHelper = function barAttributesHelper(scale, ordinalScale) {\n  var leftShiftOffset = ordinalScale.x0.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.LEFT_SHIFT_OFFSET_RATIO; // this value is used to center bars by shifting left\n\n  var leftShiftPadding = ordinalScale.x1.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.LEFT_SHIFT_OFFSET_PADDING_RATIO; // padding to be added on left side of bar\n\n  var getXRange = function getXRange(x, groupOffset) {\n    return scale.x(x) + leftShiftPadding + groupOffset - leftShiftOffset;\n  };\n\n  return {\n    x: function x(d) {\n      // x offset for grouped bars. By default every content is treated as a grouped bar.\n      var groupOffset = ordinalScale.x1(d.group);\n      return getXRange(d.x, groupOffset || 0) || 0;\n    },\n    y: function y(d) {\n      return d.y < 0 ? scale[d.yAxis](d.y0) : scale[d.yAxis](d.y + d.y0);\n    },\n    height: function height(d) {\n      return Math.abs(scale[d.yAxis](0) - scale[d.yAxis](+d.y));\n    },\n    width: ordinalScale.x1.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.WIDTH_RATIO\n  };\n};\n/**\n * Creates a d3 svg bar\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} config - config object derived from input JSON\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} barGroupSVG - d3 object for bar group svg\n * @param {Array} regionList - List of regions to be shown within graph\n * @param {Array} axisInfoRowList - List of text labels to be shown\n * @returns {object} d3 bar object\n */\n\n\nvar drawDataBars = function drawDataBars(scale, ordinalScale, config, canvasSVG, barGroupSVG, regionList, axisInfoRowList) {\n  var attributeHelper = barAttributesHelper(scale, ordinalScale);\n  return barGroupSVG.append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bar, true).each(function (dataPoint, index) {\n    var dataPointSVG = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);\n    var rectPath = dataPoint.isHashed ? Object(_helpers_barType__WEBPACK_IMPORTED_MODULE_3__[\"getHashedBar\"])(canvasSVG, canvasSVG.append(\"defs\"), dataPointSVG, attributeHelper.x(dataPoint), attributeHelper.y(dataPoint), attributeHelper.width, attributeHelper.height(dataPoint), dataPoint.style).selectAll(\"rect\") : Object(_helpers_barType__WEBPACK_IMPORTED_MODULE_3__[\"getRect\"])(dataPointSVG, attributeHelper.x(dataPoint), attributeHelper.y(dataPoint), attributeHelper.width, attributeHelper.height(dataPoint)).attr(\"style\", \"\".concat(dataPoint.style));\n    rectPath.attr(\"aria-describedby\", dataPoint.key).classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"].taskBar, true).attr(\"aria-hidden\", config.shownTargets.indexOf(dataPoint.key) < 0).attr(\"aria-disabled\", !_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isFunction(dataPoint.onClick)).on(\"click\", function (value) {\n      barActionHandler(value, index, canvasSVG, config.axis.x.type, config.axis.x.ticks.values, Object(_selectionHelpers__WEBPACK_IMPORTED_MODULE_12__[\"getSelectedData\"])(canvasSVG, value, config));\n    });\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].notEmpty(regionList)) {\n      var regions = regionList.filter(function (r) {\n        return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEqual(r.x, dataPoint.x);\n      });\n\n      if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].notEmpty(regions)) {\n        Object(_goalLineHelpers__WEBPACK_IMPORTED_MODULE_11__[\"createRegion\"])(scale, config, dataPointSVG, regions, dataPoint.key);\n      }\n    }\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].notEmpty(axisInfoRowList)) {\n      var textLabels = axisInfoRowList.filter(function (t) {\n        return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEqual(t.x, dataPoint.x);\n      });\n\n      if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].notEmpty(textLabels)) {\n        Object(_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_10__[\"createAxisInfoRowLabel\"])(ordinalScale, scale, config, canvasSVG, textLabels[0], dataPoint.key, axisInfoRowList.indexOf(textLabels[0]));\n      }\n    }\n  });\n};\n/**\n * Sets key as group name if group name is empty\n *\n * @private\n * @param {object} config - config object derived from input JSON\n * @param {Array} content - Array of targets\n * @returns {undefined} - returns nothing\n */\n\n\nvar setGroupName = function setGroupName(config, content) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(config.group)) {\n    config.group = config.key;\n    return;\n  }\n\n  if (!content.filter(function (c) {\n    return c.config.key === config.group;\n  }).length) {\n    config.group = config.key;\n  }\n};\n/**\n * CLear the graph data points and bars currently rendered\n *\n * @private\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {string} key - identifier\n * @returns {object} - d3 select object\n */\n\n\nvar clear = function clear(canvasSVG, key) {\n  return Object(_Graph_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__[\"d3RemoveElement\"])(canvasSVG, \"g[aria-describedby=\\\"\".concat(key, \"\\\"]\"));\n};\n/**\n * A callback that will be sent to Graph class so that when graph is\n * created the Graph API will execute this callback function and the legend\n * items are loaded.\n *\n * @private\n * @param {object} config - Graph config object derived from input JSON\n * @param {object} eventHandlers - Object containing click and hover event handlers for legend item\n * @param {object} dataTarget - Data points object\n * @param {object} legendSVG - d3 element that will be need to render the legend\n * items into.\n * @returns {undefined} - returns nothing\n */\n\n\nvar prepareLegendItems = function prepareLegendItems(config, eventHandlers, dataTarget, legendSVG) {\n  if (dataTarget.label && dataTarget.label.display && legendSVG) {\n    Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_6__[\"loadLegendItem\"])(legendSVG, dataTarget, config.shownTargets, eventHandlers);\n  }\n};\n/**\n * Toggles the selection of a bar, executes on click of a bar.\n *\n * @private\n * @param {object} value - data point object\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {string} type - x-axis type\n * @param {Array} tickValues - X axis ticks array\n * @returns {Array} d3 html element of the selected bar\n */\n\n\nvar toggleDataPointSelection = function toggleDataPointSelection(value, canvasSVG, type, tickValues) {\n  var selectedPointNode = canvasSVG.select(\"rect[aria-describedby=bar-selector-\".concat(type === _helpers_constants__WEBPACK_IMPORTED_MODULE_4__[\"AXIS_TYPE\"].TIME_SERIES ? tickValues.indexOf(new Date(value.x).toISOString()) : tickValues.indexOf(value.x), \"]\"));\n  var isHidden = selectedPointNode.attr(\"aria-hidden\") === \"true\";\n  setSelectionIndicatorAttributes(selectedPointNode, isHidden);\n  return selectedPointNode;\n};\n/**\n * Handler for the bar on click. If the content property is present for the bar content\n * then the callback is executed other wise it is NOP.\n * If the callback is present, the selected bar is toggled and the element is passed as an argument to the\n * consumer in the callback, to execute once the popup is closed.\n *  Callback arguments:\n *      Post close callback function\n *      value [x and y data point values]\n *      Selected bar target [d3 target]\n *  On close of popup, call -> the provided callback\n *\n * @private\n * @param {object} value - data point object\n * @param {number} index - data point index for the set\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {string} type - x-axis type\n * @param {Array} tickValues - X axis ticks array\n * @param {Array} datum - selected bar data to be passed to onclick function\n * @returns {undefined} - returns nothing\n */\n\n\nvar barActionHandler = function barActionHandler(value, index, canvasSVG, type, tickValues, datum) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(value.onClick)) {\n    return;\n  }\n\n  toggleDataPointSelection(value, canvasSVG, type, tickValues).call(function (selectedTarget) {\n    return value.onClick(function () {\n      setSelectionIndicatorAttributes(selectedTarget, false);\n    }, value.key, index, datum, selectedTarget);\n  });\n};\n/**\n * sets selection bar's aria-hidden and aria-selected attributes\n *\n * @private\n * @param {object} selectionPath - selection bar svg path\n * @param {boolean} isSelected - true if selected, false if not\n * @returns {undefined} - returns nothing\n */\n\n\nvar setSelectionIndicatorAttributes = function setSelectionIndicatorAttributes(selectionPath, isSelected) {\n  selectionPath.attr(\"aria-hidden\", !isSelected);\n  selectionPath.attr(\"aria-selected\", isSelected);\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/creationHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/goalLineHelpers.js":
/*!*************************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/goalLineHelpers.js ***!
  \*************************************************************/
/*! exports provided: processGoalLines, translateRegion, createRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processGoalLines\", function() { return processGoalLines; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translateRegion\", function() { return translateRegion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRegion\", function() { return createRegion; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/axis */ \"./src/main/js/helpers/axis.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/errors */ \"./src/main/js/helpers/errors.js\");\n/* harmony import */ var _helpers_region__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/region */ \"./src/main/js/helpers/region.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_transformUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/transformUtils */ \"./src/main/js/helpers/transformUtils.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Calculates x-axis range for given region\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} region - region input\n * @returns {number} - xRange of region\n */\n\nvar getXRange = function getXRange(scale, ordinalScale, region) {\n  var leftShiftOffset = ordinalScale.x0.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.LEFT_SHIFT_OFFSET_RATIO; // this value is used to center bars by shifting left\n\n  var groupOffset = ordinalScale.x1(region.group);\n  var leftShiftPadding = ordinalScale.x1.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.REGION_LEFT_SHIFT_OFFSET_PADDING_RATIO; // padding to be added on left side of bar\n\n  return scale.x(region.x) + groupOffset - leftShiftOffset + leftShiftPadding;\n};\n/**\n * Validates the input object provided for the region\n *\n * @private\n * @param {object} region - Region to be shown within graph\n * @param {string} targetAxis - Axis for which region needs to be shown\n * @param {Array} ticks - x axis ticks array\n * @param {string} xAxisType - Graph x axis type\n * @returns {undefined} - returns nothing\n */\n\n\nvar validateBarRegion = function validateBarRegion(region, targetAxis, ticks, xAxisType) {\n  Object(_helpers_region__WEBPACK_IMPORTED_MODULE_5__[\"validateRegion\"])(region, targetAxis);\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEmpty(region.x) && !_helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isDateInstance(region.x)) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_4__[\"default\"].THROW_MSG_BAR_REGION_EMPTY_X_VALUE);\n  }\n\n  if (!Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_2__[\"isValidAxisType\"])(region.x, xAxisType)) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_4__[\"default\"].THROW_MSG_REGION_INVALID_FORMAT);\n  }\n\n  if (!ticks.filter(function (t) {\n    return _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].isEqual(t, region.x);\n  }).length) {\n    throw new Error(_helpers_errors__WEBPACK_IMPORTED_MODULE_4__[\"default\"].THROW_MSG_INVALID_REGION_X_AXIS_TICK);\n  }\n};\n/**\n * Process goal regions. Sets x-axis range and width of each region.\n * These values are used in createRegion method to create rect for each region\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} config - Graph config object derived from input JSON\n * @param {object} dataTarget - Data input object\n * @param {string} targetAxis - Axis for which region needs to be shown\n * @returns {undefined} - returns nothing\n */\n\n\nvar processGoalLines = function processGoalLines(scale, ordinalScale, config, dataTarget) {\n  var targetAxis = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Y_AXIS;\n  var regionWidth = ordinalScale.x1.rangeBand() * _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.REGION_WIDTH_RATIO;\n  dataTarget.regions.forEach(function (region) {\n    validateBarRegion(region, targetAxis, config.axis.x.ticks.values, config.axis.x.type);\n    region.x = Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"parseTypedValue\"])(region.x, config.axis.x.type);\n    region.group = dataTarget.group;\n    region.xRange = getXRange(scale, ordinalScale, region);\n    region.width = regionWidth;\n  });\n};\n/**\n * Creates regions based on input object provided. Region can be one or many.\n * Regions are rendered based on the content.\n * Criteria:\n * * Either start or end is mandatory.\n * * If start is not provided - 0 to end\n * * If end is not provided - start to INFINITY (end of the graph)\n * If xRange is provided - starts from xRange point\n * If width is provided - applies that width to region\n * Color can be provided to identify the range.\n *\n * @private\n * @param {object} scale - d3 scale taking into account the input parameters\n * @param {object} config - config object derived from input JSON\n * @param {object} regionGroupSVG - d3 object of region group svg\n * @param {Array} regionList - List of regions to be shown within graph\n * @param {string} uniqueKey - unique id of the content loaded in graph\n * @returns {undefined} - returns nothing\n */\n\n\nvar createRegion = function createRegion(scale, config, regionGroupSVG, regionList, uniqueKey) {\n  var regionPath = regionGroupSVG.selectAll(\"g\").data(regionList);\n  regionPath.enter().append(\"rect\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].region, true).classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"].barGoalLine, true).attr(\"aria-hidden\", config.shownTargets.indexOf(uniqueKey) < 0).attr(\"aria-describedby\", \"region_\".concat(uniqueKey)).attr(\"style\", function (d) {\n    return \"fill: \".concat(d.color || _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_BAR_REGION_COLOR, \";\");\n  }).attr(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].X_AXIS, function (d) {\n    return d.xRange | 0;\n  }).attr(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Y_AXIS, getYAxisRangePosition(scale, config)).attr(\"width\", function (d) {\n    return d.width | 0;\n  }).attr(\"height\", function (d) {\n    return getRegionHeight(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this), d, scale, config);\n  });\n  regionPath.exit().transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].d3Transition(config.settingsDictionary.transition)).remove();\n};\n/**\n * Translates region. Moves the \"rect\" according the new scale generated on-resize.\n * Width and height are also flexed accordingly.\n *\n * @private\n * @param {object} scale - d3 scale taking into account the input parameters\n * @param {object} config - config object derived from input JSON\n * @param {object} regionGroupSVG - d3 object of region group svg\n * @returns {undefined} - returns nothing\n */\n\n\nvar translateRegion = function translateRegion(scale, config, regionGroupSVG) {\n  regionGroupSVG.transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].d3Transition(config.settingsDictionary.transition)).attr(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].X_AXIS, function (d) {\n    return d.xRange | 0;\n  }).attr(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Y_AXIS, getYAxisRangePosition(scale, config)).attr(\"width\", function (d) {\n    return d.width | 0;\n  }).attr(\"height\", function (d) {\n    return getRegionHeight(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this), d, scale, config);\n  });\n};\n/**\n * Returns the region axis or \"y\" as default\n *\n * @private\n * @param {object} region - Region to be shown within graph\n * @returns {string} Region axis or \"y\" as default\n */\n\n\nvar getRegionAxis = function getRegionAxis(region) {\n  return region.axis || _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Y_AXIS;\n};\n/**\n * Returns the function which returns Y Axis Vertical position for Range\n *\n * @private\n * @param {object} scale - d3 scale taking into account the input parameters\n * @returns {function(*=): number} Function which returns Y Axis Vertical position for Range\n */\n\n\nvar getYAxisRangePosition = function getYAxisRangePosition(scale) {\n  return function (bounds) {\n    return bounds.end ? Object(_helpers_transformUtils__WEBPACK_IMPORTED_MODULE_7__[\"round2Decimals\"])(scale[getRegionAxis(bounds)](bounds.end)) : 0;\n  };\n};\n/**\n * Returns the height for range based on Y Axes, start and end bounds\n * If start and end bounds arent provided then a \"goal line\" number is returned with\n * height worth of padding top\n *\n * @private\n * @param {object} regionPath - d3 object of region svg\n * @param {object} bounds - Start and end values for region\n * @param {object} scale - d3 scale taking into account the input parameters\n * @param {object} config - config object derived from input JSON.\n * @returns {number} Height of the region for Y axes\n */\n\n\nvar getRegionHeight = function getRegionHeight(regionPath, bounds, scale, config) {\n  var upperBound = _helpers_utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getNumber(regionPath.attr(_helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Y_AXIS));\n  var lowerBound = bounds.start ? Object(_helpers_transformUtils__WEBPACK_IMPORTED_MODULE_7__[\"round2Decimals\"])(scale[getRegionAxis(bounds)](bounds.start)) + _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_GOAL_LINE_STROKE_WIDTH : config.height + _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_GOAL_LINE_STROKE_WIDTH; // If start and end are the same then `constants.DEFAULT_GOAL_LINE_STROKE_WIDTH`\n  // worth of height is applied to make it seem like a goal line\n\n  return lowerBound - upperBound || _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DEFAULT_GOAL_LINE_STROKE_WIDTH;\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/goalLineHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/legendHelpers.js":
/*!***********************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/legendHelpers.js ***!
  \***********************************************************/
/*! exports provided: clickHandler, hoverHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoverHandler\", function() { return hoverHandler; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/legend */ \"./src/main/js/helpers/legend.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _creationHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creationHelpers */ \"./src/main/js/controls/Bar/helpers/creationHelpers.js\");\n\n\n\n\n/**\n * @typedef Bar\n * @typedef d3\n */\n\n/**\n * Handler for Request animation frame, executes on resize.\n *  * Order of execution\n *      * Redraws the content\n *      * Shows/hides the regions\n *\n * @private\n * @param {object} graphContext - Graph instance\n * @returns {function()} callback function handler for RAF\n */\n\nvar onAnimationHandler = function onAnimationHandler(graphContext) {\n  return function () {\n    graphContext.resize();\n  };\n};\n/**\n * Click handler for legend item. Hide and display the bar from graph when clicked.\n *\n * @private\n * @param {object} graphContext - Graph instance\n * @param {Bar} control - Bar instance\n * @param {object} config - Graph config object derived from input JSON\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @returns {Function} - returns callback function that handles click action on legend item\n */\n\n\nvar clickHandler = function clickHandler(graphContext, control, config, canvasSVG) {\n  return function (element, item) {\n    var updateShownTarget = function updateShownTarget(shownTargets, item) {\n      var index = shownTargets.indexOf(item.key);\n\n      if (index > -1) {\n        shownTargets.splice(index, 1);\n      } else {\n        shownTargets.push(item.key);\n      }\n    };\n\n    Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_1__[\"legendClickHandler\"])(element);\n    updateShownTarget(config.shownTargets, item);\n    canvasSVG.selectAll(\"g[aria-describedby=\\\"\".concat(item.key, \"\\\"]\")).attr(\"aria-hidden\", Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_1__[\"isLegendSelected\"])(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(element)));\n    Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_3__[\"setSelectionIndicatorAttributes\"])(canvasSVG.selectAll(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection)), false);\n    window.requestAnimationFrame(onAnimationHandler(graphContext));\n  };\n};\n/**\n * Hover handler for legend item. Highlights current bar and blurs the rest of the targets in Graph\n * if present.\n *\n * @private\n * @param {Array} graphTargets - List of all the items in the Graph\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @returns {Function} - returns callback function that handles hover action on legend item\n */\n\n\nvar hoverHandler = function hoverHandler(graphTargets, canvasSVG) {\n  return function (item, state) {\n    Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_1__[\"legendHoverHandler\"])(graphTargets, canvasSVG, item.key, state, []);\n  };\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/legendHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/resizeHelpers.js":
/*!***********************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/resizeHelpers.js ***!
  \***********************************************************/
/*! exports provided: scaleOrdinalAxis, setBarOffsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scaleOrdinalAxis\", function() { return scaleOrdinalAxis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBarOffsets\", function() { return setBarOffsets; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/axis */ \"./src/main/js/helpers/axis.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bar */ \"./src/main/js/controls/Bar/Bar.js\");\n\n\n\n\n\n\n\n/**\n * Filters and returns number of groups available for a unit bandwidth (for each x-axis tick)\n *\n * @private\n * @param {Array} content - Array of targets\n * @param {Array} shownTargets - Array of shown targets\n * @returns {Array} - array of group names\n */\n\nvar getBands = function getBands(content, shownTargets) {\n  var bands = [];\n\n  var addGroupNameToBands = function addGroupNameToBands(group) {\n    if (bands.indexOf(group) < 0) {\n      bands.push(group);\n    }\n  };\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(content)) {\n    content.forEach(function (value) {\n      if (value instanceof _Bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n        if (shownTargets.indexOf(value.config.key) > -1) {\n          addGroupNameToBands(value.config.group);\n        }\n      }\n    });\n  }\n\n  return bands;\n};\n/**\n * Calculates and returns outer padding ratio for ordidnal scale unit bandwidth\n * Outer padding should be 2.5 times the inner padding\n * Inner padding should be 0.5 times the bar width\n *\n * @private\n * @param {Array} content - Array of targets\n * @param {Array} shownTargets - Array of shown targets\n * @returns {number} - padding value\n */\n\n\nvar getBandwidthPaddingRatio = function getBandwidthPaddingRatio(content, shownTargets) {\n  return _helpers_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.OUTER_PADDING_RATIO / (3 * getBands(content, shownTargets).length + _helpers_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES.OUTER_PADDING_RATIO);\n};\n/**\n * Creates and sets the d3 ordinalScale for the Graph. This scale is created only if\n * static x-axis is provided for graph.\n * To create a d3 ordinalScale, we need domain, rangeBands and bandwidth padding\n *\n * @private\n * @param {object} ordinalScale - d3 ordinalScale taking into account the input parameters\n * @param {object} config - config object derived from input JSON\n * @param {Array} content - Array of targets\n * @returns {undefined} - returns nothing\n */\n\n\nvar scaleOrdinalAxis = function scaleOrdinalAxis(ordinalScale, config, content) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(config.axis.x.ticks) && _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(config.axis.x.ticks.values)) {\n    ordinalScale.x0 = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.ordinal().domain(config.axis.x.ticks.values).rangeBands(Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_1__[\"getXAxisRange\"])(config), getBandwidthPaddingRatio(content, config.shownTargets));\n    ordinalScale.x1 = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.ordinal();\n  }\n};\n/**\n * Sets domain and range bands for ordinal scale\n *\n * @private\n * @param {Array} bands - bands array for bandwidth\n * @param {Array} content - Array of targets\n * @param {object} ordinalScale - ordinal scale object\n * @param {object} config - config object derived from input JSON\n * @returns {undefined} - returns nothing\n */\n\n\nvar setX0X1Scale = function setX0X1Scale(bands, content, ordinalScale, config) {\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEmpty(content) || _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEmpty(bands) || _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEmpty(config.axis.x.ticks) || _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEmpty(config.axis.x.ticks.values)) {\n    return;\n  }\n\n  ordinalScale.x1.domain(bands).rangeBands([0, ordinalScale.x0.rangeBand()]);\n};\n/**\n * Sets offsets for bars on content load\n *\n * @private\n * @param {Array} content - Array of targets\n * @param {Array} contentConfig - Array of targets config objects\n * @param {object} input - load input object\n * @param {object} ordinalScale - ordinal scale object\n * @param {object} config - config object derived from input JSON\n * @returns {undefined} - returns nothing\n */\n\n\nvar setBarOffsets = function setBarOffsets(content, contentConfig, input, ordinalScale, config) {\n  var shownTargets = config.shownTargets;\n  var group = contentConfig.filter(function (d) {\n    return d.key === input.config.key || d.group === input.config.group && shownTargets.indexOf(d.key) !== -1;\n  });\n  setStackOffset(input.dataTarget.internalValuesSubset, group.splice(group.indexOf(input.config) + 1));\n  setX0X1Scale(getBands(content, config.shownTargets), content, ordinalScale, config);\n};\n/**\n * In case of stacked bars, this method sets y-axis offset for each data point.\n * By default, every bar is considered as a stacked bar. This method checks if there are any bars\n * getting stacked under it and calculates offset for both positive and negative bars.\n * If no other bar is stacked below this bar, offset is set to 0.\n *\n * @private\n * @param {Array} inputValues - Array of dataTarget's inputValueSubset\n * @param {Array} group - Array of filtered group names\n * @returns {undefined} - returns nothing\n */\n\n\nvar setStackOffset = function setStackOffset(inputValues, group) {\n  inputValues.forEach(function (value) {\n    var upY = 0;\n    var downY = 0;\n    group.forEach(function (prev) {\n      var f = prev.values.filter(function (p) {\n        return _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isEqual(p.x, value.x);\n      });\n\n      if (f.length > 0) {\n        if (f[0].y > 0) {\n          upY += f[0].y;\n        } else {\n          downY += f[0].y;\n        }\n      }\n    });\n    value.y0 = value.y < 0 ? downY : upY;\n  });\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/resizeHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/selectionHelpers.js":
/*!**************************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/selectionHelpers.js ***!
  \**************************************************************/
/*! exports provided: getSelectedData, drawSelectionBars, translateSelectBars, updateSelectionBars, clearSelectionDatum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSelectedData\", function() { return getSelectedData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSelectionBars\", function() { return drawSelectionBars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translateSelectBars\", function() { return translateSelectBars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSelectionBars\", function() { return updateSelectionBars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearSelectionDatum\", function() { return clearSelectionDatum; });\n/* harmony import */ var _helpers_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/axis */ \"./src/main/js/helpers/axis.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _creationHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creationHelpers */ \"./src/main/js/controls/Bar/helpers/creationHelpers.js\");\n\n\n\n\n\n\n\nvar PADDING = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DEFAULT_BAR_SELECTION_PADDING;\n/**\n * @typedef d3\n */\n\n/**\n * Returns selected data on click of a bar.\n * This will return only content that is present in shownTargets. Array also maintains order in which content is loaded.\n *\n * @private\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} value - selected value\n * @param {object} config - graph config object\n * @returns {Array} - array of selected content\n */\n\nvar getSelectedData = function getSelectedData(canvasSVG, value, config) {\n  return canvasSVG.select(\"rect[aria-describedby=bar-selector-\".concat(config.axis.x.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"AXIS_TYPE\"].TIME_SERIES ? config.axis.x.ticks.values.indexOf(new Date(value.x).toISOString()) : config.axis.x.ticks.values.indexOf(value.x), \"]\")).datum().valueSubsetArray.filter(function (v) {\n    return config.shownTargets.indexOf(v.key) > -1;\n  });\n};\n/**\n * This method is called when bar content is unloaded off graph. This will remove objects related to the unloaded content.\n *\n * @private\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {string} key - unloaded content key\n * @returns {undefined} - returns nothing\n */\n\n\nvar clearSelectionDatum = function clearSelectionDatum(canvasSVG, key) {\n  canvasSVG.selectAll(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection)).each(function (dataPoint) {\n    var index = dataPoint.valueSubsetArray.findIndex(function (v) {\n      return v.key === key;\n    });\n\n    if (index > -1) {\n      dataPoint.valueSubsetArray.splice(index, 1);\n    }\n  });\n};\n/**\n * Updates selection datum with newly loaded content.\n *\n * @private\n * @param {Array} internalValueSubset - input internalValueSubset array\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} config - graph config object\n * @returns {undefined} - returns nothing\n */\n\n\nvar updateSelectionBars = function updateSelectionBars(internalValueSubset, canvasSVG, config) {\n  var selectionPath = canvasSVG.selectAll(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection));\n  selectionPath.each(function (dataPoint) {\n    var value = internalValueSubset.filter(function (v) {\n      return config.axis.x.type === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"AXIS_TYPE\"].TIME_SERIES ? v.x.toISOString() === dataPoint.x : v.x === dataPoint.x;\n    });\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(value)) {\n      dataPoint.valueSubsetArray.push(value[0]);\n    }\n  });\n};\n/**\n * Creates a d3 svg selection bar\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} config - config object derived from input JSON\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @returns {undefined} - returns nothing\n */\n\n\nvar drawSelectionBars = function drawSelectionBars(scale, ordinalScale, config, canvasSVG) {\n  var tickValues = config.axis.x.ticks.values.map(function (d) {\n    return {\n      x: d,\n      valueSubsetArray: []\n    };\n  });\n  var selectionPath = canvasSVG.append(\"g\").classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].barSelectionGroup, true).attr(\"transform\", \"translate(\".concat(Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_4__[\"getXAxisXPosition\"])(config), \",\").concat(Object(_helpers_axis__WEBPACK_IMPORTED_MODULE_0__[\"calculateVerticalPadding\"])(config), \")\")).selectAll(\"\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection)).data(tickValues);\n  selectionPath.enter().append(\"rect\").attr(\"aria-hidden\", true).classed(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection, true).attr(\"aria-describedby\", function (value) {\n    return \"bar-selector-\".concat(tickValues.indexOf(value));\n  }).attr(\"rx\", 3).attr(\"ry\", 3);\n  selectionPath.exit().transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].d3Transition(config.settingsDictionary.transition)).remove();\n};\n/**\n * Contains logic to calculate x, y, height, width for selection bar\n * x is calculated using first visible content in the datum array for a tick.\n * y is calculated using maximum y available in datum.\n * Last content - first content range is the width\n * max y range - min y range is the height\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {Array} shownTargets - graph's shownTarget array\n * @param {Array} datum - selection datum array\n * @returns {object} Object that contains methods for calculating x, y, height, width.\n */\n\n\nvar selectionAttributeHelper = function selectionAttributeHelper(scale, ordinalScale, shownTargets, datum) {\n  var barAttributeHelper = Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_4__[\"barAttributesHelper\"])(scale, ordinalScale);\n  var shownDatum = datum.filter(function (v) {\n    return shownTargets.indexOf(v.key) > -1;\n  });\n\n  var maxYIndex = function (targets) {\n    var maxIndex = 0;\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(targets)) {\n      var maxY = Math.max(0, targets[0].y + targets[0].y0);\n      targets.forEach(function (v, i) {\n        var temp = Math.max(0, v.y + v.y0);\n\n        if (maxY <= temp) {\n          maxIndex = i;\n          maxY = temp;\n        }\n      });\n    }\n\n    return maxIndex;\n  }(shownDatum);\n\n  var minYIndex = function (targets) {\n    var maxIndex = 0;\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(targets)) {\n      var maxY = Math.min(0, targets[0].y + targets[0].y0);\n      targets.forEach(function (v, i) {\n        var temp = Math.min(0, v.y + v.y0);\n\n        if (maxY >= temp) {\n          maxIndex = i;\n          maxY = temp;\n        }\n      });\n    }\n\n    return maxIndex;\n  }(shownDatum);\n\n  var maxXIndex = function (targets) {\n    var maxIndex = 0;\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(targets)) {\n      var maxX = 0;\n      targets.forEach(function (v, i) {\n        var temp = Math.max(maxX, barAttributeHelper.x(v));\n\n        if (temp > maxX) {\n          maxIndex = i;\n          maxX = temp;\n        }\n      });\n    }\n\n    return maxIndex;\n  }(shownDatum);\n\n  var leftRange = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? barAttributeHelper.x(shownDatum[0]) : 0;\n  var topRange = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? barAttributeHelper.y(shownDatum[maxYIndex]) : 0;\n  var rightRange = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? barAttributeHelper.x(shownDatum[maxXIndex]) + barAttributeHelper.width : 0;\n  var bottomRange = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? barAttributeHelper.y(shownDatum[minYIndex]) + barAttributeHelper.height(shownDatum[minYIndex]) : 0;\n  return {\n    x: function x() {\n      return _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? leftRange - PADDING : 0;\n    },\n    y: function y() {\n      return _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? topRange - PADDING : 0;\n    },\n    height: function height() {\n      return _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? bottomRange - topRange + 2 * PADDING : 0;\n    },\n    width: function width() {\n      return _helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].notEmpty(shownDatum) ? rightRange - leftRange + 2 * PADDING : 0;\n    }\n  };\n};\n/**\n * Transforms selection bars for all ticks in the Bar graph on resize\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} config - config object derived from input JSON\n * @returns {object} d3 object for selection bars\n */\n\n\nvar translateSelectBars = function translateSelectBars(scale, ordinalScale, canvasSVG, config) {\n  return canvasSVG.selectAll(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskBarSelection)).each(function (dataPoint, i) {\n    var selectionAttrHelper = selectionAttributeHelper(scale, ordinalScale, config.shownTargets, dataPoint.valueSubsetArray);\n    canvasSVG.select(\"rect[aria-describedby=bar-selector-\".concat(i, \"]\")).transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].d3Transition(config.settingsDictionary.transition)).attr(\"x\", selectionAttrHelper.x()).attr(\"y\", selectionAttrHelper.y()).attr(\"height\", selectionAttrHelper.height()).attr(\"width\", selectionAttrHelper.width());\n  });\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/selectionHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/helpers/translateHelpers.js":
/*!**************************************************************!*\
  !*** ./src/main/js/controls/Bar/helpers/translateHelpers.js ***!
  \**************************************************************/
/*! exports provided: translateBarGraph, translateTextLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translateBarGraph\", function() { return translateBarGraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translateTextLabel\", function() { return translateTextLabel; });\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axisInfoRowHelpers */ \"./src/main/js/controls/Bar/helpers/axisInfoRowHelpers.js\");\n/* harmony import */ var _creationHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creationHelpers */ \"./src/main/js/controls/Bar/helpers/creationHelpers.js\");\n/* harmony import */ var _selectionHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectionHelpers */ \"./src/main/js/controls/Bar/helpers/selectionHelpers.js\");\n\n\n\n\n\n\n\n/**\n * @typedef d3\n */\n\n/**\n * Transforms bars for a data point set in the Bar graph on resize\n *\n * @private\n * @param {object} scale - d3 scale for Graph\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {d3.selection} canvasSVG - d3 selection node of canvas svg\n * @param {object} dataTarget - Data points object\n * @param {object} config - graph config object\n * @returns {object} d3 select object\n */\n\nvar translateBarGraph = function translateBarGraph(scale, ordinalScale, canvasSVG, dataTarget, config) {\n  var attributeHelper = Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_3__[\"barAttributesHelper\"])(scale, ordinalScale);\n  Object(_selectionHelpers__WEBPACK_IMPORTED_MODULE_4__[\"translateSelectBars\"])(scale, ordinalScale, canvasSVG, config);\n  return canvasSVG.selectAll(\"rect[aria-describedby=\".concat(dataTarget.key, \"]\")).transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].d3Transition(config.settingsDictionary.transition)).attr(\"x\", function (d) {\n    return attributeHelper.x(d);\n  }).attr(\"y\", function (d) {\n    return attributeHelper.y(d);\n  }).attr(\"width\", attributeHelper.width).attr(\"height\", function (d) {\n    return attributeHelper.height(d);\n  });\n};\n/**\n * Translates text label in axis info row\n *\n * @private\n * @param {object} ordinalScale - bar x-axis ordinal scale\n * @param {object} scale - d3 scale for Graph\n * @param {object} config - graph config object\n * @param {Array} canvasSVG -d3 object of canvas svg\n * @param {Array} textLabelList - input axis info row JSON\n * @param {object} dataTarget - Data points object\n * @returns {object} d3 select object\n */\n\n\nvar translateTextLabel = function translateTextLabel(ordinalScale, scale, config, canvasSVG, textLabelList, dataTarget) {\n  var attributeHelper = Object(_creationHelpers__WEBPACK_IMPORTED_MODULE_3__[\"barAttributesHelper\"])(scale, ordinalScale);\n  var axisInfoPath = canvasSVG.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].axisInfoRow));\n  return axisInfoPath.selectAll(\"g[aria-describedby=\\\"text_label_\".concat(dataTarget.key, \"\\\"]\")).transition().call(_helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].d3Transition(config.settingsDictionary.transition)).attr(\"transform\", function (d, index) {\n    return \"translate(\".concat(Object(_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_2__[\"getTextLabelsXPosition\"])(attributeHelper, textLabelList, index), \", \").concat(Object(_axisInfoRowHelpers__WEBPACK_IMPORTED_MODULE_2__[\"getTextLabelsYPosition\"])(config), \")\");\n  });\n};\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/helpers/translateHelpers.js?");

/***/ }),

/***/ "./src/main/js/controls/Bar/index.js":
/*!*******************************************!*\
  !*** ./src/main/js/controls/Bar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar */ \"./src/main/js/controls/Bar/Bar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bar/index.js?");

/***/ }),

/***/ "./src/main/js/controls/Bubble/Bubble.js":
/*!***********************************************!*\
  !*** ./src/main/js/controls/Bubble/Bubble.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ \"./src/main/js/core/index.js\");\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/label */ \"./src/main/js/helpers/label.js\");\n/* harmony import */ var _helpers_legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/legend */ \"./src/main/js/helpers/legend.js\");\n/* harmony import */ var _helpers_region__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/region */ \"./src/main/js/helpers/region.js\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/styles */ \"./src/main/js/helpers/styles.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/helpers */ \"./src/main/js/controls/Bubble/helpers/helpers.js\");\n/* harmony import */ var _BubbleConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BubbleConfig */ \"./src/main/js/controls/Bubble/BubbleConfig.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * @typedef {object} Bubble\n * @typedef {object} GraphContent\n * @typedef {object} BubbleConfig\n */\n\n/**\n * Calculates the min and max values for Y Axis or Y2 Axis.\n * First we filter out values that are `null`, this is a result of\n * datapoint being part of being in a non-contiguous series and then we\n * get the min and max values for the Y or Y2 axis domain.\n *\n * @private\n * @param {Array} values - Datapoint values\n * @param {string} axis - y or y2\n * @returns {object} - Contains min and max values for the data points for Y and Y2 axis\n */\n\nvar calculateValuesRange = function calculateValuesRange(values) {\n  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _helpers_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Y_AXIS;\n  var yAxisValuesList = values.filter(function (i) {\n    return i.y !== null;\n  }).map(function (i) {\n    return i.y;\n  });\n  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, axis, {\n    min: Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(yAxisValuesList)),\n    max: Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(yAxisValuesList))\n  });\n};\n/**\n * Data point sets can be loaded using this function.\n * Load function validates, clones and stores the input onto a config object.\n *\n * @private\n * @param {object} inputJSON - Input JSON provided by the consumer\n * @returns {object} BubbleConfig config object containing consumer data\n */\n\n\nvar loadInput = function loadInput(inputJSON) {\n  return new _BubbleConfig__WEBPACK_IMPORTED_MODULE_12__[\"default\"]().setInput(inputJSON).validateInput().clone().getConfig();\n};\n/**\n * A Bubble graph is a graph used to represent a collection of data\n * points connected by a Bubble along the X and Y Axis.\n *\n * Lifecycle functions include:\n *  * Load\n *  * Generate\n *  * Unload\n *  * Destroy\n *\n * @module Bubble\n * @class Bubble\n */\n\n\nvar Bubble =\n/*#__PURE__*/\nfunction (_GraphContent) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Bubble, _GraphContent);\n\n  /**\n   * @class\n   * @param {BubbleConfig} input - Input JSON instance created using GraphConfig\n   */\n  function Bubble(input) {\n    var _this;\n\n    _this = _GraphContent.call(this) || this;\n    _this.config = loadInput(input);\n    _this.config.yAxis = Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"getDefaultValue\"])(_this.config.yAxis, _helpers_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Y_AXIS);\n    _this.valuesRange = calculateValuesRange(_this.config.values, _this.config.yAxis);\n    _this.dataTarget = {};\n    return _this;\n  }\n  /**\n   * @inheritdoc\n   */\n\n\n  var _proto = Bubble.prototype;\n\n  _proto.load = function load(graph) {\n    this.dataTarget = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"processDataPoints\"])(graph.config, this.config);\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"draw\"])(graph.scale, graph.config, graph.svg, this.dataTarget);\n\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notEmpty(this.dataTarget.regions)) {\n      Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"createRegion\"])(graph.scale, graph.config, graph.svg.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].regionGroup)), this.dataTarget.regions, \"region_\".concat(this.dataTarget.key), this.config.yAxis);\n    }\n\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"prepareLegendItems\"])(graph.config, {\n      clickHandler: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"clickHandler\"])(graph, this, graph.config, graph.svg),\n      hoverHandler: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"hoverHandler\"])(graph.config.shownTargets, graph.svg)\n    }, this.dataTarget, graph.legendSVG);\n    Object(_helpers_label__WEBPACK_IMPORTED_MODULE_6__[\"prepareLabelShapeItem\"])(graph.config, this.dataTarget, graph.axesLabelShapeGroup[this.config.yAxis]);\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.unload = function unload(graph) {\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"clear\"])(graph.svg, this.dataTarget);\n    Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"removeRegion\"])(graph.svg.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].regionGroup)), this.dataTarget);\n    Object(_helpers_legend__WEBPACK_IMPORTED_MODULE_7__[\"removeLegendItem\"])(graph.legendSVG, this.dataTarget);\n    Object(_helpers_label__WEBPACK_IMPORTED_MODULE_6__[\"removeLabelShapeItem\"])(graph.axesLabelShapeGroup[this.config.yAxis], this.dataTarget, graph.config);\n    this.dataTarget = {};\n    this.config = {};\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.resize = function resize(graph) {\n    if (_helpers_utils__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notEmpty(this.dataTarget.regions)) {\n      if (graph.content.length > 1 && !graph.config.shouldHideAllRegion) {\n        if (Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"areRegionsIdentical\"])(graph.svg)) {\n          graph.config.shouldHideAllRegion = false;\n        } else {\n          Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"hideAllRegions\"])(graph.svg);\n          graph.config.shouldHideAllRegion = true;\n        }\n      }\n    } else {\n      Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"hideAllRegions\"])(graph.svg);\n      graph.config.shouldHideAllRegion = true;\n    }\n\n    Object(_helpers_region__WEBPACK_IMPORTED_MODULE_8__[\"translateRegion\"])(graph.scale, graph.config, graph.svg.select(\".\".concat(_helpers_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"].regionGroup)));\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"translateBubbleGraph\"])(graph.scale, graph.svg, graph.config);\n    return this;\n  }\n  /**\n   * @inheritdoc\n   */\n  ;\n\n  _proto.redraw = function redraw(graph) {\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"clear\"])(graph.svg, this.dataTarget);\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__[\"draw\"])(graph.scale, graph.config, graph.svg, this.dataTarget);\n    return this;\n  };\n\n  return Bubble;\n}(_core__WEBPACK_IMPORTED_MODULE_3__[\"GraphContent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bubble/Bubble.js?");

/***/ }),

/***/ "./src/main/js/controls/Bubble/BubbleConfig.js":
/*!*****************************************************!*\
  !*** ./src/main/js/controls/Bubble/BubbleConfig.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/BaseConfig */ \"./src/main/js/core/BaseConfig/index.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n\n\n\n\n\n/**\n * API to parse consumer input for Bubble graph\n *\n * @class BubbleConfig\n */\n\nvar BubbleConfig =\n/*#__PURE__*/\nfunction (_BaseConfig) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(BubbleConfig, _BaseConfig);\n\n  /**\n   * @inheritdoc\n   */\n  function BubbleConfig() {\n    var _this;\n\n    _this = _BaseConfig.call(this) || this;\n    _this.config = null;\n    _this.input = null;\n    return _this;\n  }\n  /**\n   * Returns the config object\n   *\n   * @returns {object} config object\n   */\n\n\n  var _proto = BubbleConfig.prototype;\n\n  _proto.getConfig = function getConfig() {\n    return this.config;\n  }\n  /**\n   * Sets the input object\n   *\n   * @param {object} inputJSON - Input JSON\n   * @returns {BubbleConfig} instance object\n   */\n  ;\n\n  _proto.setInput = function setInput(inputJSON) {\n    this.input = inputJSON;\n    return this;\n  }\n  /**\n   * Validates and verifies the input JSON object.\n   *\n   * @returns {BubbleConfig} instance object\n   */\n  ;\n\n  _proto.validateInput = function validateInput() {\n    Object(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"validateBaseInput\"])(this.input);\n    return this;\n  }\n  /**\n   * Clones the input JSON into the config object\n   *\n   * @returns {BubbleConfig} instance object\n   */\n  ;\n\n  _proto.clone = function clone() {\n    this.config = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deepClone(this.input);\n    return this;\n  };\n\n  return BubbleConfig;\n}(_core_BaseConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BubbleConfig);\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bubble/BubbleConfig.js?");

/***/ }),

/***/ "./src/main/js/controls/Bubble/helpers/colorGradient.js":
/*!**************************************************************!*\
  !*** ./src/main/js/controls/Bubble/helpers/colorGradient.js ***!
  \**************************************************************/
/*! exports provided: bubbleScale, generateColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleScale\", function() { return bubbleScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateColor\", function() { return generateColor; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/d3.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/constants */ \"./src/main/js/helpers/constants.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/utils */ \"./src/main/js/helpers/utils.js\");\n\n\n\n\n\n/**\n * Gives bubble scale for given weight range in min and max\n *\n * @private\n * @param {object} dataTarget - data for the bubble graph\n * @returns {d3.scale} - returns a function to get bubble radius\n */\n\nvar bubbleScale = function bubbleScale(dataTarget) {\n  return d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().domain([dataTarget.weight.min, dataTarget.weight.max]).range([_helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DEFAULT_BUBBLE_RADIUS_MIN, _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DEFAULT_BUBBLE_RADIUS_MAX]);\n};\n/**\n * Generates color range for the given color lowerShade and upperShade\n *\n * @private\n * @param {object} dataTarget - data for the bubble graph\n * @returns {d3.scale} - returns function to get color for specific bubble\n */\n\nvar generateColor = function generateColor(dataTarget) {\n  var lowerShade = dataTarget.hue.lowerShade;\n  var upperShade = dataTarget.hue.upperShade;\n  var radiusData;\n\n  if (_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isUndefined(dataTarget.weight)) {\n    radiusData = dataTarget.values.map(function (element) {\n      return element.y;\n    });\n  } else {\n    radiusData = dataTarget.values.map(function (element) {\n      return bubbleScale(dataTarget)(element.weight);\n    });\n  }\n\n  var huePaletteList = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().domain(d3__WEBPACK_IMPORTED_MODULE_0___default.a.extent(radiusData)).range([lowerShade, upperShade]);\n  return huePaletteList;\n};\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bubble/helpers/colorGradient.js?");

/***/ }),

/***/ "./src/main/js/controls/Bubble/helpers/helpers.js":
/*!********************************************************!*\
  !*** ./src/main/js/controls/Bubble/helpers/helpers.js ***!
  \********************************************************/
/*! exports provided: toggleDataPointSelection, draw, translateBubbleGraph, clickHandler, hoverHandler, transformPoint, prepareLegendItems, processDataPoints, getDataPointValues, clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Bubble/index.js":
/*!**********************************************!*\
  !*** ./src/main/js/controls/Bubble/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bubble */ \"./src/main/js/controls/Bubble/Bubble.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Bubble/index.js?");

/***/ }),

/***/ "./src/main/js/controls/Gantt/Gantt.js":
/*!*********************************************!*\
  !*** ./src/main/js/controls/Gantt/Gantt.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/GanttConfig.js":
/*!***************************************************!*\
  !*** ./src/main/js/controls/Gantt/GanttConfig.js ***!
  \***************************************************/
/*! exports provided: settingsDictionary, processInput, isUniqueKey, default, validateTask, validateActivity, validateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/Track.js":
/*!*********************************************!*\
  !*** ./src/main/js/controls/Gantt/Track.js ***!
  \*********************************************/
/*! exports provided: validateContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/actionHelpers.js":
/*!*************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/actionHelpers.js ***!
  \*************************************************************/
/*! exports provided: processActionItems, clickHandler, hoverHandler, prepareLegendEventHandlers, renderLegendItems, loadActions, unloadActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/activityHelpers.js":
/*!***************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/activityHelpers.js ***!
  \***************************************************************/
/*! exports provided: loadActivities, unloadActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/creationHelpers.js":
/*!***************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/creationHelpers.js ***!
  \***************************************************************/
/*! exports provided: getXAxisWidth, getXAxisXPosition, getXAxisYPosition, getYAxisYPosition, getAxesScale, createTrack, calculateAxesSize, calculateAxesLabelSize, translateCanvas, createAxes, createDefs, createGrid, createContentContainer, createTrackSelectionContainer, createGanttContent, createTrackContainer, removeTrackContainer, scaleGraph, determineHeight, getShapeForTarget, getColorForTarget, attachEventHandlers, detachEventHandlers, updateAxesDomain, updateTrackProps, prepareLoadAtIndex, isHashed, d3RemoveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/datapointHelpers.js":
/*!****************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/datapointHelpers.js ***!
  \****************************************************************/
/*! exports provided: drawDataPoints, renderSelectionPath, dataPointActionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/durationHelpers.js":
/*!***************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/durationHelpers.js ***!
  \***************************************************************/
/*! exports provided: calculatePercentage, isAChunk, getEndDuration, getStartDuration, getDuration, getActivityDuration, getTaskStyle, getActivityStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/eventHelpers.js":
/*!************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/eventHelpers.js ***!
  \************************************************************/
/*! exports provided: loadEvents, unloadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/taskHelpers.js":
/*!***********************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/taskHelpers.js ***!
  \***********************************************************/
/*! exports provided: loadTasks, unloadTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/trackHelpers.js":
/*!************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/trackHelpers.js ***!
  \************************************************************/
/*! exports provided: generatorArgs, loadGanttTrackSelector, unloadGanttTrackSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/helpers/translateHelpers.js":
/*!****************************************************************!*\
  !*** ./src/main/js/controls/Gantt/helpers/translateHelpers.js ***!
  \****************************************************************/
/*! exports provided: translateGraph, translateHorizontalGrid, translateVerticalGrid, translateLabelText, truncateTrackLabelText, transformPoint, translateDataPoints, translateTasks, translateActivities, translateTrackSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Gantt/index.js":
/*!*********************************************!*\
  !*** ./src/main/js/controls/Gantt/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gantt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gantt */ \"./src/main/js/controls/Gantt/Gantt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Gantt__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Gantt/index.js?");

/***/ }),

/***/ "./src/main/js/controls/Graph/Graph.js":
/*!*********************************************!*\
  !*** ./src/main/js/controls/Graph/Graph.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Graph/GraphConfig.js":
/*!***************************************************!*\
  !*** ./src/main/js/controls/Graph/GraphConfig.js ***!
  \***************************************************/
/*! exports provided: processInput, isUniqueKey, validateContent, settingsDictionary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Graph/helpers/helpers.js":
/*!*******************************************************!*\
  !*** ./src/main/js/controls/Graph/helpers/helpers.js ***!
  \*******************************************************/
/*! exports provided: translateAxes, translateVerticalGrid, translateContentContainer, translateDefs, translateLabel, translateGrid, translateCanvas, updateAxesDomain, createDefs, createGrid, createLabel, createContentContainer, scaleGraph, translateGraph, padDomain, determineHeight, getShapeForTarget, getColorForTarget, attachEventHandlers, detachEventHandlers, d3RemoveElement, setAxisPadding, getAxisInfoRowLabelHeight, removeNoDataView, drawNoDataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Graph/index.js":
/*!*********************************************!*\
  !*** ./src/main/js/controls/Graph/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph */ \"./src/main/js/controls/Graph/Graph.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Graph__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Carbon/./src/main/js/controls/Graph/index.js?");

/***/ }),

/***/ "./src/main/js/controls/Line/Line.js":
/*!*******************************************!*\
  !*** ./src/main/js/controls/Line/Line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Line/LineConfig.js":
/*!*************************************************!*\
  !*** ./src/main/js/controls/Line/LineConfig.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main/js/controls/Line/helpers/helpers.js":

"use strict";




