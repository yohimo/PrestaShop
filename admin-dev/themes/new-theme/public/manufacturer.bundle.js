!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=315)}({1:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},10:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(){var e=this;return o(this,n),{extend:function(n){return e.extend(n)}}}return r(n,[{key:"extend",value:function(n){var e=this;n.getContainer().on("click",".js-bulk-action-submit-btn",function(t){e.submit(t,n)})}},{key:"submit",value:function(n,e){var t=a(n.currentTarget),o=t.data("confirm-message");if(!(void 0!==o&&0<o.length)||confirm(o)){var r=a("#"+e.getId()+"_filter_form");r.attr("action",t.data("form-url")),r.attr("method",t.data("form-method")),r.submit()}}}]),n}();e.a=i},11:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=function(){function n(){o(this,n)}return r(n,[{key:"extend",value:function(n){var e=n.getContainer().find(".column-filters");e.find("input, select").on("input",function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)})}}]),n}();e.a=a},12:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(){o(this,n)}return r(n,[{key:"extend",value:function(n){n.getContainer().on("click",".js-submit-row-action",function(n){n.preventDefault();var e=a(n.currentTarget),t=e.data("confirm-message");if(!t.length||confirm(t)){var o=e.data("method"),r=["GET","POST"].includes(o),i=a("<form>",{action:e.data("url"),method:r?o:"POST"}).appendTo("body");r||i.append(a("<input>",{type:"_hidden",name:"_method",value:o})),i.submit()}})}}]),n}();e.a=i},13:function(n,e,t){"use strict";(function(n){function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),r=n.$,a=function(){function n(e){t(this,n),this.selector=".ps-sortable-column",this.columns=r(e).find(this.selector)}return o(n,[{key:"attach",value:function(){var n=this;this.columns.on("click",function(e){var t=r(e.delegateTarget);n._sortByColumn(t,n._getToggledSortDirection(t))})}},{key:"sortBy",value:function(n,e){var t=this.columns.is('[data-sort-col-name="'+n+'"]');if(!t)throw new Error('Cannot sort by "'+n+'": invalid column');this._sortByColumn(t,e)}},{key:"_sortByColumn",value:function(n,e){window.location=this._getUrl(n.data("sortColName"),"desc"===e?"desc":"asc",n.data("sortPrefix"))}},{key:"_getToggledSortDirection",value:function(n){return"asc"===n.data("sortDirection")?"desc":"asc"}},{key:"_getUrl",value:function(n,e,t){var o=new URL(window.location.href),r=o.searchParams;return t?(r.set(t+"[orderBy]",n),r.set(t+"[sortOrder]",e)):(r.set("orderBy",n),r.set("sortOrder",e)),o.toString()}}]),n}();e.a=a}).call(e,t(1))},14:function(n,e,t){"use strict";(function(n){/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var t=n.$,o=function(n,e){t.post(n).then(function(){return window.location.assign(e)})};e.a=o}).call(e,t(1))},15:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(e){o(this,n),e=e||{},this.localeItemSelector=e.localeItemSelector||".js-locale-item",this.localeButtonSelector=e.localeButtonSelector||".js-locale-btn",this.localeInputSelector=e.localeInputSelector||".js-locale-input",a("body").on("click",this.localeItemSelector,this.toggleInputs.bind(this))}return r(n,[{key:"toggleInputs",value:function(n){var e=a(n.target),t=e.closest("form"),o=e.data("locale"),r=t.find(this.localeButtonSelector),i=r.data("change-language-url");r.text(o),t.find(this.localeInputSelector).addClass("d-none"),t.find(this.localeInputSelector+".js-locale-"+o).removeClass("d-none"),i&&this._saveSelectedLanguage(i,o)}},{key:"_saveSelectedLanguage",value:function(n,e){a.post({url:n,data:{language_iso_code:e}})}}]),n}();e.a=i},17:function(n,e,t){"use strict";(function(n){function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),r=n.$,a=function(){function n(){t(this,n)}return o(n,[{key:"extend",value:function(n){var e=this;n.getContainer().find("table.table").find(".ps-togglable-row").on("click",function(n){n.preventDefault(),e._toggleValue(r(n.delegateTarget))})}},{key:"_toggleValue",value:function(n){var e=n.data("toggleUrl");this._submitAsForm(e)}},{key:"_submitAsForm",value:function(n){r("<form>",{action:n,method:"POST"}).appendTo("body").submit()}}]),n}();e.a=a}).call(e,t(1))},25:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var r=window.$,a=function n(e){var t=e.tokenFieldSelector,a=e.options,i=void 0===a?{}:a;o(this,n),r(t).tokenfield(i)};e.a=a},315:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(15),r=t(25),a=t(43),i=t(4),c=t(7),u=t(5),l=t(6),f=t(17),s=t(12),d=t(10),h=t(8),b=t(9),v=t(11);(0,window.$)(function(){["manufacturer","manufacturer_address"].forEach(function(n){var e=new i.a(n);e.addExtension(new b.a),e.addExtension(new l.a),e.addExtension(new c.a),e.addExtension(new u.a),e.addExtension(new f.a),e.addExtension(new s.a),e.addExtension(new d.a),e.addExtension(new h.a),e.addExtension(new v.a)}),new o.a,new r.a({tokenFieldSelector:"input.js-taggable-field",options:{createTokensOnBlur:!0}}),new a.a})},4:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(e){o(this,n),this.id=e,this.$container=a("#"+this.id+"_grid")}return r(n,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(n){n.extend(this)}}]),n}();e.a=i},43:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var r=window.$,a=function n(){o(this,n),r(document).on("click",".js-form-submit-btn",function(n){n.preventDefault();var e=r(this);if(!e.data("form-confirm-message")||!1!==confirm(e.data("form-confirm-message"))){var t=r("<form>",{action:e.data("form-submit-url"),method:"POST"});e.data("form-csrf-token")&&t.append(r("<input>",{type:"_hidden",name:"_csrf_token",value:e.data("form-csrf-token")})),t.appendTo("body").submit()}})};e.a=a},5:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=t(14),a=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),i=window.$,c=function(){function n(){o(this,n)}return a(n,[{key:"extend",value:function(n){n.getContainer().on("click",".js-reset-search",function(n){t.i(r.a)(i(n.currentTarget).data("url"),i(n.currentTarget).data("redirect"))})}}]),n}();e.a=c},6:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=function(){function n(){o(this,n)}return r(n,[{key:"extend",value:function(n){n.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",function(){location.reload()})}}]),n}();e.a=a},7:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=t(13),a=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),i=function(){function n(){o(this,n)}return a(n,[{key:"extend",value:function(n){var e=n.getContainer().find("table.table");new r.a(e).attach()}}]),n}();e.a=i},8:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(){o(this,n)}return r(n,[{key:"extend",value:function(n){this._handleBulkActionCheckboxSelect(n),this._handleBulkActionSelectAllCheckbox(n)}},{key:"_handleBulkActionSelectAllCheckbox",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-select-all",function(t){var o=a(t.currentTarget),r=o.is(":checked");r?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n),n.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)})}},{key:"_handleBulkActionCheckboxSelect",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-checkbox",function(){n.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n)})}},{key:"_enableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"_disableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),n}();e.a=i},9:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=window.$,i=function(){function n(){o(this,n)}return r(n,[{key:"extend",value:function(n){var e=this;n.getHeaderContainer().on("click",".js-common_show_query-grid-action",function(){return e._onShowSqlQueryClick(n)}),n.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",function(){return e._onExportSqlManagerClick(n)})}},{key:"_onShowSqlQueryClick",value:function(n){var e=a("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n);var t=a("#"+n.getId()+"_grid_common_show_query_modal");t.modal("show"),t.on("click",".btn-sql-submit",function(){return e.submit()})}},{key:"_onExportSqlManagerClick",value:function(n){var e=a("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n),e.submit()}},{key:"_fillExportForm",value:function(n,e){var t=e.getContainer().find(".js-grid-table").data("query");n.find('textarea[name="sql"]').val(t),n.find('input[name="name"]').val(this._getNameFromBreadcrumb())}},{key:"_getNameFromBreadcrumb",value:function(){var n=a(".header-toolbar").find(".breadcrumb-item"),e="";return n.each(function(n,t){var o=a(t),r=0<o.find("a").length?o.find("a").text():o.text();0<e.length&&(e=e.concat(" > ")),e=e.concat(r)}),e}}]),n}();e.a=i}});