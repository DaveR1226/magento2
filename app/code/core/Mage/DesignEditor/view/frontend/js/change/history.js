/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     Mage_DesignEditor
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

( function ( $ ) {
    /**
     * Change history
     */
    $.fn.history = (function() {
        var _object;

        var _init = function() {
            if (!_object) {
                _object = new HistoryObject();
            }
            return _object;
        }

        return _init();
    })();

    /**
     * History object
     */
    function HistoryObject() {
        var history = [];
        return {
            add: function(revision, title) {
                history[revision] = title;
                console.log(history[revision]);
                /** @todo add your code */
            },
            undo: function() {
                /** @todo add your code */
            },
            redo: function() {
                /** @todo add your code */
            },
            revertToRevision: function(revision) {
                /** @todo add your code */
            }

        };

    };
})( jQuery );