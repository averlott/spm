if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'komp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'komp'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'komp'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'komp'.");
}
var komp = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var DefaultUnsafe = $module$kotlinx_html_js.kotlinx.html.DefaultUnsafe;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function HtmlConsumer() {
  }
  HtmlConsumer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'HtmlConsumer', interfaces: [TagConsumer]};
  function HtmlBuilder(komponent, document) {
    this.komponent = komponent;
    this.document = document;
    this.path_0 = ArrayList_init();
    this.lastLeaved_0 = null;
  }
  HtmlBuilder.prototype.onTagStart_tkgjla$ = function (tag) {
    var tmp$, tmp$_0;
    if (tag.namespace != null)
      tmp$_0 = this.document.createElementNS(ensureNotNull(tag.namespace), tag.tagName);
    else
      tmp$_0 = Kotlin.isType(tmp$ = this.document.createElement(tag.tagName), HTMLElement) ? tmp$ : throwCCE();
    var element = tmp$_0;
    if (!this.path_0.isEmpty()) {
      last(this.path_0).appendChild(element);
    }
    this.path_0.add_11rb$(element);
  };
  HtmlBuilder.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    if (this.path_0.isEmpty())
      throw IllegalStateException_init('No current tag');
    else {
      if (!equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw IllegalStateException_init('Wrong current tag');
      else {
        var node = last(this.path_0);
        if (value == null) {
          node.removeAttribute(attribute);
        }
         else {
          node.setAttribute(attribute, value);
        }
      }
    }
  };
  HtmlBuilder.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    if (this.path_0.isEmpty())
      throw IllegalStateException_init('No current tag');
    else {
      if (!equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw IllegalStateException_init('Wrong current tag');
      else {
        last(this.path_0)[event] = value;
      }
    }
  };
  HtmlBuilder.prototype.onTagEnd_tkgjla$ = function (tag) {
    var tmp$ = this.path_0.isEmpty();
    if (!tmp$) {
      tmp$ = !equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase());
    }
    if (tmp$) {
      throw IllegalStateException_init("We haven't entered tag " + tag.tagName + ' but trying to leave');
    }
    var element = last(this.path_0);
    var tmp$_0;
    tmp$_0 = tag.attributesEntries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1, tmp$_2;
      if (equals(element_0.key, 'class')) {
        var classes = split(element_0.value, [' ']);
        var classNames = StringBuilder_init();
        tmp$_1 = classes.iterator();
        while (tmp$_1.hasNext()) {
          var cls = tmp$_1.next();
          var cssStyle = this.komponent.declaredStyles.get_11rb$(cls);
          if (cssStyle != null) {
            tmp$_2 = cssStyle.length;
            for (var index = 0; index < tmp$_2; index++) {
              var propertyName = cssStyle.item(index);
              element.style.setProperty(propertyName, cssStyle.getPropertyValue(propertyName));
            }
          }
           else {
            classNames.append_gw00v9$(cls);
            classNames.append_gw00v9$(' ');
          }
        }
        element.className = classNames.toString();
      }
       else {
        element.setAttribute(element_0.key, element_0.value);
      }
    }
    this.lastLeaved_0 = this.path_0.removeAt_za3lpa$(get_lastIndex(this.path_0));
  };
  HtmlBuilder.prototype.onTagContent_6bul2c$ = function (content) {
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    last(this.path_0).appendChild(this.document.createTextNode(content.toString()));
  };
  HtmlBuilder.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    var tmp$;
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    var s = Kotlin.isType(tmp$ = this.document.createElement('span'), HTMLElement) ? tmp$ : throwCCE();
    s.innerHTML = entity.text;
    var tmp$_0 = last(this.path_0);
    var $receiver = asList(s.childNodes);
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.nodeType === Node.TEXT_NODE)
        destination.add_11rb$(element);
    }
    tmp$_0.appendChild(first(destination));
  };
  HtmlBuilder.prototype.append_b3w3xb$ = function (node) {
    last(this.path_0).appendChild(node);
  };
  HtmlBuilder.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var $receiver = new DefaultUnsafe();
    block($receiver);
    last(this.path_0).innerHTML = last(this.path_0).innerHTML + $receiver.toString();
  };
  HtmlBuilder.prototype.onTagComment_6bul2c$ = function (content) {
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    last(this.path_0).appendChild(this.document.createComment(content.toString()));
  };
  HtmlBuilder.prototype.finalize = function () {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.lastLeaved_0) != null ? this.asR_0(tmp$) : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init("We can't finalize as there was no tags");
    }
    return tmp$_0;
  };
  HtmlBuilder.prototype.asR_0 = function ($receiver) {
    return $receiver;
  };
  HtmlBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'HtmlBuilder', interfaces: [HtmlConsumer]};
  function include($receiver, component) {
    component.update();
    var consumer = $receiver.consumer;
    var element = component.element;
    if (Kotlin.isType(consumer, HtmlBuilder) && element != null) {
      consumer.append_b3w3xb$(element);
    }
  }
  function Komponent() {
    Komponent$Companion_getInstance();
    this.element = null;
    this.declaredStyles = HashMap_init();
  }
  Komponent.prototype.create = function () {
    var consumer = new HtmlBuilder(this, document);
    var result = this.render_9mbe17$(consumer);
    this.element = result;
    return result;
  };
  Komponent.prototype.style_j4vlwp$$default = function (className, imports, block) {
    var tmp$, tmp$_0;
    var style = (Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE()).style;
    for (tmp$_0 = 0; tmp$_0 !== imports.length; ++tmp$_0) {
      var imp = imports[tmp$_0];
      imp(style);
    }
    block(style);
    this.declaredStyles.put_xwzc9p$(className, style);
  };
  function Komponent$style$lambda($receiver) {
    return Unit;
  }
  Komponent.prototype.style_j4vlwp$ = function (className, imports, block, callback$default) {
    if (block === void 0)
      block = Komponent$style$lambda;
    callback$default ? callback$default(className, imports, block) : this.style_j4vlwp$$default(className, imports, block);
  };
  Komponent.prototype.update = function () {
    this.refresh();
  };
  Komponent.prototype.refresh = function () {
    var tmp$;
    var oldElement = this.element;
    if (Komponent$Companion_getInstance().logRenderEvent) {
      console.log('Rendering', this);
    }
    var newElement = this.create();
    if (oldElement != null) {
      if (Komponent$Companion_getInstance().logReplaceEvent) {
        console.log('Replacing', oldElement, newElement);
      }
      (tmp$ = oldElement.parentNode) != null ? tmp$.replaceChild(newElement, oldElement) : null;
    }
  };
  Komponent.prototype.remove = function () {
    var tmp$;
    if ((tmp$ = this.element) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.parentElement;
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('Element has no parent!?');
      }
      var parent = tmp$_0;
      if (Komponent$Companion_getInstance().logReplaceEvent) {
        console.log('Remove', tmp$);
      }
      parent.removeChild(tmp$);
    }
  };
  function Komponent$Companion() {
    Komponent$Companion_instance = this;
    this.logRenderEvent = false;
    this.logReplaceEvent = false;
  }
  Komponent$Companion.prototype.create_nkol39$ = function (parent, component, insertAsFirst) {
    if (insertAsFirst === void 0)
      insertAsFirst = false;
    var element = component.create();
    if (insertAsFirst && parent.childElementCount > 0) {
      parent.insertBefore(element, parent.firstChild);
    }
     else {
      parent.appendChild(element);
    }
  };
  Komponent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Komponent$Companion_instance = null;
  function Komponent$Companion_getInstance() {
    if (Komponent$Companion_instance === null) {
      new Komponent$Companion();
    }
    return Komponent$Companion_instance;
  }
  Komponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'Komponent', interfaces: []};
  var package$nl = _.nl || (_.nl = {});
  var package$astraeus = package$nl.astraeus || (package$nl.astraeus = {});
  var package$komp = package$astraeus.komp || (package$astraeus.komp = {});
  package$komp.HtmlConsumer = HtmlConsumer;
  package$komp.HtmlBuilder = HtmlBuilder;
  package$komp.include_sdrn2j$ = include;
  Object.defineProperty(Komponent, 'Companion', {get: Komponent$Companion_getInstance});
  package$komp.Komponent = Komponent;
  HtmlConsumer.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  HtmlBuilder.prototype.onTagError_cjwpn3$ = HtmlConsumer.prototype.onTagError_cjwpn3$;
  return _;
}(typeof komp === 'undefined' ? {} : komp, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=komp.js.map
