if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'spm'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'spm'.");
}
if (typeof komp === 'undefined') {
  throw new Error("Error loading module 'spm'. Its dependency 'komp' was not found. Please, check whether 'komp' is loaded prior to 'spm'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'spm'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'spm'.");
}
var spm = function (_, Kotlin, $module$komp, $module$kotlinx_html_js) {
  'use strict';
  var Komponent = $module$komp.nl.astraeus.komp.Komponent;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var unboxChar = Kotlin.unboxChar;
  var equals = Kotlin.equals;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var L0 = Kotlin.Long.ZERO;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_z82v7u$;
  var throwCCE = Kotlin.throwCCE;
  var include = $module$komp.nl.astraeus.komp.include_sdrn2j$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_e6giw3$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.h4_zdyoc7$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var ul_0 = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var set_for_ = $module$kotlinx_html_js.kotlinx.html.set_for__i8xdhl$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var set_onKeyDownFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyDownFunction_pszlq2$;
  var getCallableRef = Kotlin.getCallableRef;
  var set_tabIndex = $module$kotlinx_html_js.kotlinx.html.set_tabIndex_ueiko3$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var set_onKeyUpFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyUpFunction_pszlq2$;
  var nav = $module$kotlinx_html_js.kotlinx.html.js.nav_pc7gpz$;
  var span_0 = $module$kotlinx_html_js.kotlinx.html.span_fqsp1s$;
  var set_onBlurFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onBlurFunction_pszlq2$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var th = $module$kotlinx_html_js.kotlinx.html.th_bncpyi$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var td_0 = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var numberToInt = Kotlin.numberToInt;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var hr = $module$kotlinx_html_js.kotlinx.html.hr_17yvwq$;
  var tr_0 = $module$kotlinx_html_js.kotlinx.html.tr_gqplvg$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var button_0 = $module$kotlinx_html_js.kotlinx.html.button_yup7tf$;
  var option = $module$kotlinx_html_js.kotlinx.html.option_xfiiwk$;
  var select = $module$kotlinx_html_js.kotlinx.html.select_9klr40$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var tr_1 = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_j1nulr$;
  var tbody = $module$kotlinx_html_js.kotlinx.html.tbody_cbte6n$;
  var table_0 = $module$kotlinx_html_js.kotlinx.html.table_llpdic$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  ChangePassword.prototype = Object.create(Komponent.prototype);
  ChangePassword.prototype.constructor = ChangePassword;
  Container.prototype = Object.create(Komponent.prototype);
  Container.prototype.constructor = Container;
  GroupCommands.prototype = Object.create(Komponent.prototype);
  GroupCommands.prototype.constructor = GroupCommands;
  GroupOverview.prototype = Object.create(Komponent.prototype);
  GroupOverview.prototype.constructor = GroupOverview;
  LoginTab.prototype = Object.create(Enum.prototype);
  LoginTab.prototype.constructor = LoginTab;
  Login.prototype = Object.create(Komponent.prototype);
  Login.prototype.constructor = Login;
  Main.prototype = Object.create(Komponent.prototype);
  Main.prototype.constructor = Main;
  ModalComponent.prototype = Object.create(Komponent.prototype);
  ModalComponent.prototype.constructor = ModalComponent;
  AlertComponent.prototype = Object.create(Komponent.prototype);
  AlertComponent.prototype.constructor = AlertComponent;
  Navbar.prototype = Object.create(Komponent.prototype);
  Navbar.prototype.constructor = Navbar;
  RemoveHistoryEntryConfirm.prototype = Object.create(Komponent.prototype);
  RemoveHistoryEntryConfirm.prototype.constructor = RemoveHistoryEntryConfirm;
  ClearHistoryConfirm.prototype = Object.create(Komponent.prototype);
  ClearHistoryConfirm.prototype.constructor = ClearHistoryConfirm;
  PasswordEditor.prototype = Object.create(Komponent.prototype);
  PasswordEditor.prototype.constructor = PasswordEditor;
  PasswordGenerator.prototype = Object.create(Komponent.prototype);
  PasswordGenerator.prototype.constructor = PasswordGenerator;
  RemovePasswordConfirm.prototype = Object.create(Komponent.prototype);
  RemovePasswordConfirm.prototype.constructor = RemovePasswordConfirm;
  RemoveGroupConfirm.prototype = Object.create(Komponent.prototype);
  RemoveGroupConfirm.prototype.constructor = RemoveGroupConfirm;
  GroupNameEdit.prototype = Object.create(Komponent.prototype);
  GroupNameEdit.prototype.constructor = GroupNameEdit;
  PasswordOverview.prototype = Object.create(Komponent.prototype);
  PasswordOverview.prototype.constructor = PasswordOverview;
  PasswordOverviewRow.prototype = Object.create(Komponent.prototype);
  PasswordOverviewRow.prototype.constructor = PasswordOverviewRow;
  SearchResult.prototype = Object.create(Komponent.prototype);
  SearchResult.prototype.constructor = SearchResult;
  PasswordButton.prototype = Object.create(Komponent.prototype);
  PasswordButton.prototype.constructor = PasswordButton;
  SelectInput.prototype = Object.create(Komponent.prototype);
  SelectInput.prototype.constructor = SelectInput;
  TextInput.prototype = Object.create(Komponent.prototype);
  TextInput.prototype.constructor = TextInput;
  Table.prototype = Object.create(Komponent.prototype);
  Table.prototype.constructor = Table;
  var mainComponent;
  function main() {
    var tmp$;
    var splash = document.getElementById('splash');
    (tmp$ = splash != null ? splash.parentElement : null) != null ? tmp$.removeChild(splash) : null;
    Komponent.Companion.logRenderEvent = false;
    Komponent.Companion.logReplaceEvent = false;
    Komponent.Companion.create_nkol39$(ensureNotNull(document.body), mainComponent);
    WebSocketConnection_getInstance().open();
  }
  function Aes() {
    Aes_instance = this;
  }
  Aes.prototype.encrypt_puj7f4$ = function (plaintext, passphrase) {
    return CryptoJS.AES.encrypt(plaintext, passphrase);
  };
  Aes.prototype.decrypt_puj7f4$ = function (encrypted, passphrase) {
    return CryptoJS.AES.decrypt(encrypted, passphrase).toString(CryptoJS.enc.Utf8);
  };
  Aes.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Aes', interfaces: []};
  var Aes_instance = null;
  function Aes_getInstance() {
    if (Aes_instance === null) {
      new Aes();
    }
    return Aes_instance;
  }
  var Hash_instance = null;
  var PBKDF2_instance = null;
  function Group(id, name, opened, parent, found, children, passwords) {
    Group$Companion_getInstance();
    if (opened === void 0)
      opened = false;
    if (found === void 0)
      found = false;
    if (children === void 0)
      children = ArrayList_init();
    if (passwords === void 0)
      passwords = ArrayList_init();
    this.id = id;
    this.name = name;
    this.opened = opened;
    this.parent = parent;
    this.found = found;
    this.children = children;
    this.passwords = passwords;
  }
  Group.prototype.all = function () {
    var tmp$;
    var result = ArrayList_init();
    result.add_11rb$(this);
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      result.addAll_brywnq$(child.all());
    }
    return result;
  };
  Group.prototype.export = function () {
    var tmp$, tmp$_0;
    var result = StringBuilder_init();
    var tk = new Tokenizer();
    result.append_gw00v9$(tk.tokenize_vqirvp$([this.id.toString(), this.name, this.opened.toString()]));
    result.append_s8itvh$(unboxChar(tk.seperator));
    result.append_s8jyv4$(this.passwords.size);
    tmp$ = this.passwords.iterator();
    while (tmp$.hasNext()) {
      var password = tmp$.next();
      result.append_s8itvh$(unboxChar(tk.seperator));
      result.append_gw00v9$(password.tokenized());
    }
    result.append_s8itvh$(unboxChar(tk.seperator));
    result.append_s8jyv4$(this.children.size);
    tmp$_0 = this.children.iterator();
    while (tmp$_0.hasNext()) {
      var child = tmp$_0.next();
      result.append_s8itvh$(unboxChar(tk.seperator));
      result.append_gw00v9$(child.export());
    }
    return result.toString();
  };
  Group.prototype.findById_s8cxhz$ = function (id) {
    var tmp$;
    if (equals(this.id, id)) {
      return this;
    }
     else {
      tmp$ = this.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        var found = child.findById_s8cxhz$(id);
        if (found != null) {
          return found;
        }
      }
    }
    return null;
  };
  Group.prototype.getPasswordsCountInGroup = function () {
    var tmp$;
    var result = this.passwords.size;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      result = result + child.getPasswordsCountInGroup() | 0;
    }
    return result;
  };
  Group.prototype.getGroups_61zpoe$ = function (prefix) {
    if (prefix === void 0)
      prefix = '';
    var tmp$, tmp$_0;
    var result = ArrayList_init();
    if (isBlank(prefix)) {
      tmp$ = this.name;
    }
     else {
      tmp$ = prefix + ' / ' + this.name;
    }
    var childPrefix = tmp$;
    result.add_11rb$(to(this.id.toString(), childPrefix));
    tmp$_0 = this.children.iterator();
    while (tmp$_0.hasNext()) {
      var child = tmp$_0.next();
      result.addAll_brywnq$(child.getGroups_61zpoe$(childPrefix));
    }
    return result;
  };
  function Group$Companion() {
    Group$Companion_instance = this;
    this.lastId_0 = L0;
  }
  Group$Companion.prototype.nextId = function () {
    return this.lastId_0 = this.lastId_0.inc(), this.lastId_0;
  };
  Group$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Group$Companion_instance = null;
  function Group$Companion_getInstance() {
    if (Group$Companion_instance === null) {
      new Group$Companion();
    }
    return Group$Companion_instance;
  }
  Group.$metadata$ = {kind: Kind_CLASS, simpleName: 'Group', interfaces: []};
  function Group_init(name, parent, $this) {
    $this = $this || Object.create(Group.prototype);
    Group.call($this, Group$Companion_getInstance().nextId(), name, false, parent);
    return $this;
  }
  function Group_init_0(tk, $this) {
    $this = $this || Object.create(Group.prototype);
    Group.call($this, toLong(tk.next()), tk.next(), equals(tk.next(), 'true'), null);
    if ($this.id.compareTo_11rb$(Group$Companion_getInstance().lastId_0) > 0) {
      Group$Companion_getInstance().lastId_0 = $this.id;
    }
    var numberOfPasswords = toInt(tk.next());
    for (var index = 0; index < numberOfPasswords; index++) {
      var password = Password_init_1(tk, $this);
      $this.passwords.add_11rb$(password);
    }
    var numberOfChildren = toInt(tk.next());
    var index_0 = 0;
    while (index_0 < numberOfChildren) {
      var child = Group_init_0(tk);
      child.parent = $this;
      $this.children.add_11rb$(child);
      index_0 = index_0 + 1 | 0;
    }
    return $this;
  }
  Group.prototype.component1 = function () {
    return this.id;
  };
  Group.prototype.component2 = function () {
    return this.name;
  };
  Group.prototype.component3 = function () {
    return this.opened;
  };
  Group.prototype.component4 = function () {
    return this.parent;
  };
  Group.prototype.component5 = function () {
    return this.found;
  };
  Group.prototype.component6 = function () {
    return this.children;
  };
  Group.prototype.component7 = function () {
    return this.passwords;
  };
  Group.prototype.copy_yfsedy$ = function (id, name, opened, parent, found, children, passwords) {
    return new Group(id === void 0 ? this.id : id, name === void 0 ? this.name : name, opened === void 0 ? this.opened : opened, parent === void 0 ? this.parent : parent, found === void 0 ? this.found : found, children === void 0 ? this.children : children, passwords === void 0 ? this.passwords : passwords);
  };
  Group.prototype.toString = function () {
    return 'Group(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', opened=' + Kotlin.toString(this.opened)) + (', parent=' + Kotlin.toString(this.parent)) + (', found=' + Kotlin.toString(this.found)) + (', children=' + Kotlin.toString(this.children)) + (', passwords=' + Kotlin.toString(this.passwords)) + ')';
  };
  Group.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.opened) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    result = result * 31 + Kotlin.hashCode(this.found) | 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    result = result * 31 + Kotlin.hashCode(this.passwords) | 0;
    return result;
  };
  Group.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.opened, other.opened) && Kotlin.equals(this.parent, other.parent) && Kotlin.equals(this.found, other.found) && Kotlin.equals(this.children, other.children) && Kotlin.equals(this.passwords, other.passwords)))));
  };
  function HistoryEntry(encryptedPassword, from, until) {
    this.encryptedPassword = encryptedPassword;
    this.from = from;
    this.until = until;
  }
  HistoryEntry.prototype.tokenized = function () {
    return Tokenizer$Companion_getInstance().tokenize_vqirvp$([this.encryptedPassword, this.from, this.until]);
  };
  HistoryEntry.$metadata$ = {kind: Kind_CLASS, simpleName: 'HistoryEntry', interfaces: []};
  function HistoryEntry_init(tk, $this) {
    $this = $this || Object.create(HistoryEntry.prototype);
    HistoryEntry.call($this, tk.next(), tk.next(), tk.next());
    return $this;
  }
  HistoryEntry.prototype.component1 = function () {
    return this.encryptedPassword;
  };
  HistoryEntry.prototype.component2 = function () {
    return this.from;
  };
  HistoryEntry.prototype.component3 = function () {
    return this.until;
  };
  HistoryEntry.prototype.copy_6hosri$ = function (encryptedPassword, from, until) {
    return new HistoryEntry(encryptedPassword === void 0 ? this.encryptedPassword : encryptedPassword, from === void 0 ? this.from : from, until === void 0 ? this.until : until);
  };
  HistoryEntry.prototype.toString = function () {
    return 'HistoryEntry(encryptedPassword=' + Kotlin.toString(this.encryptedPassword) + (', from=' + Kotlin.toString(this.from)) + (', until=' + Kotlin.toString(this.until)) + ')';
  };
  HistoryEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encryptedPassword) | 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.until) | 0;
    return result;
  };
  HistoryEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.encryptedPassword, other.encryptedPassword) && Kotlin.equals(this.from, other.from) && Kotlin.equals(this.until, other.until)))));
  };
  function Password(id, user, group, title, website, username, encryptedPassword, password1, password2, description, created, history) {
    Password$Companion_getInstance();
    if (password1 === void 0)
      password1 = '';
    if (password2 === void 0)
      password2 = '';
    if (history === void 0)
      history = ArrayList_init();
    this.id = id;
    this.user = user;
    this.group = group;
    this.title = title;
    this.website = website;
    this.username = username;
    this.encryptedPassword = encryptedPassword;
    this.password1 = password1;
    this.password2 = password2;
    this.description = description;
    this.created = created;
    this.history = history;
  }
  Password.prototype.tokenized = function () {
    var tmp$;
    var tk = new Tokenizer();
    var tkHist = StringBuilder_init();
    tmp$ = this.history.size;
    for (var index = 0; index < tmp$; index++) {
      if (index > 0) {
        tkHist.append_s8itvh$(unboxChar(tk.seperator));
      }
      tkHist.append_gw00v9$(Tokenizer$Companion_getInstance().tokenize_vqirvp$([this.history.get_za3lpa$(index).tokenized()]));
    }
    return Tokenizer$Companion_getInstance().tokenize_vqirvp$(['V3', this.id.toString(), this.user, this.title, this.website, this.username, this.encryptedPassword, this.description, this.created, tkHist.toString()]);
  };
  Password.prototype.decrypt = function () {
    this.password1 = UserState_getInstance().decryptPassword_61zpoe$(this.encryptedPassword);
    this.password2 = this.password1;
  };
  Password.prototype.delete = function () {
    this.group.passwords.remove_11rb$(this);
  };
  function Password$Companion() {
    Password$Companion_instance = this;
    this.lastId_0 = L0;
  }
  Password$Companion.prototype.nextId = function () {
    return this.lastId_0 = this.lastId_0.inc(), this.lastId_0;
  };
  Password$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Password$Companion_instance = null;
  function Password$Companion_getInstance() {
    if (Password$Companion_instance === null) {
      new Password$Companion();
    }
    return Password$Companion_instance;
  }
  Password.prototype.search_61zpoe$ = function (value) {
    var tmp$ = contains(this.username.toLowerCase(), value);
    if (!tmp$) {
      tmp$ = contains(this.title.toLowerCase(), value);
    }
    var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = contains(this.website.toLowerCase(), value);
    }
    var tmp$_1 = tmp$_0;
    if (!tmp$_1) {
      tmp$_1 = contains(this.description.toLowerCase(), value);
    }
    return tmp$_1;
  };
  Password.prototype.archivePassword = function () {
    this.history.add_11rb$(new HistoryEntry(this.encryptedPassword, this.created, formatted(new Date())));
  };
  Password.prototype.hasHistory = function () {
    return !this.history.isEmpty();
  };
  Password.$metadata$ = {kind: Kind_CLASS, simpleName: 'Password', interfaces: []};
  function Password_init(group, $this) {
    $this = $this || Object.create(Password.prototype);
    Password.call($this, Password$Companion_getInstance().nextId(), '', group, '', '', '', '', '', '', '', formatted(new Date()));
    return $this;
  }
  function Password_init_0(other, $this) {
    $this = $this || Object.create(Password.prototype);
    Password.call($this, other.id, other.user, other.group, other.title, other.website, other.username, other.encryptedPassword, other.password1, other.password2, other.description, formatted(new Date()));
    return $this;
  }
  function Password_init_1(tk, group, $this) {
    $this = $this || Object.create(Password.prototype);
    Password.call($this, L_1, '', group, '', '', '', '', '', '', '', formatted(new Date()));
    var first = tk.next();
    switch (first) {
      case 'V3':
        $this.id = toLong(tk.next());
        $this.user = tk.next();
        $this.title = tk.next();
        $this.website = tk.next();
        $this.username = tk.next();
        $this.encryptedPassword = tk.next();
        $this.description = tk.next();
        $this.created = tk.next();
        var historyData = new Tokenizer(tk.next());
        while (!historyData.done()) {
          $this.history.add_11rb$(HistoryEntry_init(new Tokenizer(historyData.next())));
        }

        break;
      case 'V2':
        $this.id = toLong(tk.next());
        $this.user = tk.next();
        $this.title = tk.next();
        $this.website = tk.next();
        $this.username = tk.next();
        $this.encryptedPassword = tk.next();
        $this.description = tk.next();
        var historyData_0 = new Tokenizer(tk.next());
        while (!historyData_0.done()) {
          $this.history.add_11rb$(HistoryEntry_init(new Tokenizer(historyData_0.next())));
        }

        break;
      default:$this.id = toLong(first);
        $this.user = tk.next();
        $this.title = tk.next();
        $this.website = tk.next();
        $this.username = tk.next();
        $this.encryptedPassword = tk.next();
        $this.description = tk.next();
        break;
    }
    return $this;
  }
  Password.prototype.component1 = function () {
    return this.id;
  };
  Password.prototype.component2 = function () {
    return this.user;
  };
  Password.prototype.component3 = function () {
    return this.group;
  };
  Password.prototype.component4 = function () {
    return this.title;
  };
  Password.prototype.component5 = function () {
    return this.website;
  };
  Password.prototype.component6 = function () {
    return this.username;
  };
  Password.prototype.component7 = function () {
    return this.encryptedPassword;
  };
  Password.prototype.component8 = function () {
    return this.password1;
  };
  Password.prototype.component9 = function () {
    return this.password2;
  };
  Password.prototype.component10 = function () {
    return this.description;
  };
  Password.prototype.component11 = function () {
    return this.created;
  };
  Password.prototype.component12 = function () {
    return this.history;
  };
  Password.prototype.copy_bledsg$ = function (id, user, group, title, website, username, encryptedPassword, password1, password2, description, created, history) {
    return new Password(id === void 0 ? this.id : id, user === void 0 ? this.user : user, group === void 0 ? this.group : group, title === void 0 ? this.title : title, website === void 0 ? this.website : website, username === void 0 ? this.username : username, encryptedPassword === void 0 ? this.encryptedPassword : encryptedPassword, password1 === void 0 ? this.password1 : password1, password2 === void 0 ? this.password2 : password2, description === void 0 ? this.description : description, created === void 0 ? this.created : created, history === void 0 ? this.history : history);
  };
  Password.prototype.toString = function () {
    return 'Password(id=' + Kotlin.toString(this.id) + (', user=' + Kotlin.toString(this.user)) + (', group=' + Kotlin.toString(this.group)) + (', title=' + Kotlin.toString(this.title)) + (', website=' + Kotlin.toString(this.website)) + (', username=' + Kotlin.toString(this.username)) + (', encryptedPassword=' + Kotlin.toString(this.encryptedPassword)) + (', password1=' + Kotlin.toString(this.password1)) + (', password2=' + Kotlin.toString(this.password2)) + (', description=' + Kotlin.toString(this.description)) + (', created=' + Kotlin.toString(this.created)) + (', history=' + Kotlin.toString(this.history)) + ')';
  };
  Password.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.group) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.website) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.encryptedPassword) | 0;
    result = result * 31 + Kotlin.hashCode(this.password1) | 0;
    result = result * 31 + Kotlin.hashCode(this.password2) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.created) | 0;
    result = result * 31 + Kotlin.hashCode(this.history) | 0;
    return result;
  };
  Password.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.group, other.group) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.website, other.website) && Kotlin.equals(this.username, other.username) && Kotlin.equals(this.encryptedPassword, other.encryptedPassword) && Kotlin.equals(this.password1, other.password1) && Kotlin.equals(this.password2, other.password2) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.created, other.created) && Kotlin.equals(this.history, other.history)))));
  };
  function UserState() {
    UserState_instance = this;
    this.loginname_3ezabt$_0 = null;
    this.loginPasswordHash = null;
    this.encryptedEncryptionKey = null;
    this.loggedIn = false;
    this.currentGroup = null;
    this.topGroup = null;
    this.currentSearch = '';
    this.readOnly = true;
    this.obtainedLock = false;
    this.decryptPassphraseHash_0 = null;
  }
  Object.defineProperty(UserState.prototype, 'loginname', {get: function () {
    return this.loginname_3ezabt$_0;
  }, set: function (value) {
    var crypto = CryptoJS;
    this.loginname_3ezabt$_0 = crypto.SHA256(value).toString();
  }});
  UserState.prototype.clear = function () {
    this.loginname = null;
    this.loginPasswordHash = null;
    this.decryptPassphraseHash_0 = null;
    this.encryptedEncryptionKey = null;
    this.topGroup = null;
    this.currentGroup = null;
    this.loggedIn = false;
    this.readOnly = true;
  };
  UserState.prototype.decryptPassword_61zpoe$ = function (password) {
    var tmp$, tmp$_0;
    tmp$ = this.decryptPassphraseHash_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var pp = tmp$;
    tmp$_0 = this.encryptedEncryptionKey;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var eek = tmp$_0;
    var decryptedEncryptionKey = Aes_getInstance().decrypt_puj7f4$(eek, pp).toString();
    return Aes_getInstance().decrypt_puj7f4$(password, decryptedEncryptionKey).toString();
  };
  UserState.prototype.encryptPassword_61zpoe$ = function (password) {
    var tmp$, tmp$_0;
    tmp$ = this.decryptPassphraseHash_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var pp = tmp$;
    tmp$_0 = this.encryptedEncryptionKey;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var eek = tmp$_0;
    var decryptedEncryptionKey = Aes_getInstance().decrypt_puj7f4$(eek, pp).toString();
    return Aes_getInstance().encrypt_puj7f4$(password, decryptedEncryptionKey).toString();
  };
  UserState.prototype.setPassword_61zpoe$ = function (password) {
    var crypto = CryptoJS;
    var sha256 = crypto.SHA256(password);
    var sha512 = crypto.SHA512(password);
    this.loginPasswordHash = CryptoJS.PBKDF2(sha256, sha512, {keySize: 256 / 32, iterations: 500}).toString();
    this.decryptPassphraseHash_0 = CryptoJS.PBKDF2(sha256, sha512, {keySize: 256 / 32, iterations: 750}).toString();
  };
  function UserState$updatePassword$lambda(this$UserState, closure$newPassword1) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$ = this$UserState.decryptPassphraseHash_0;
      if (tmp$ == null) {
        throw IllegalStateException_init('passphraseHash is not set');
      }
      var pp = tmp$;
      tmp$_0 = this$UserState.encryptedEncryptionKey;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('passphraseHash is not set');
      }
      var eek = tmp$_0;
      var decryptedEncryptionKey = Aes_getInstance().decrypt_puj7f4$(eek, pp).toString();
      this$UserState.setPassword_61zpoe$(closure$newPassword1);
      tmp$_1 = this$UserState.decryptPassphraseHash_0;
      if (tmp$_1 == null) {
        throw IllegalStateException_init('passphraseHash is not set');
      }
      var newPP = tmp$_1;
      var newEEK = Aes_getInstance().encrypt_puj7f4$(decryptedEncryptionKey, newPP);
      this$UserState.encryptedEncryptionKey = newEEK.toString();
      tmp$_4 = WebSocketConnection_getInstance();
      tmp$_2 = UserState_getInstance().loginname;
      if (tmp$_2 == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_3 = UserState_getInstance().loginPasswordHash;
      if (tmp$_3 == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_4.send_vqirvp$(['UPDATE_PASSWORD', tmp$_2, tmp$_3, newEEK.toString()]);
      return Unit;
    };
  }
  UserState.prototype.updatePassword_6hosri$ = function (currentPassword, newPassword1, newPassword2) {
    var crypto = CryptoJS;
    var sha256 = crypto.SHA256(currentPassword);
    var sha512 = crypto.SHA512(currentPassword);
    var currentPasswordHash = CryptoJS.PBKDF2(sha256, sha512, {keySize: 256 / 32, iterations: 500}).toString();
    if (!equals(currentPasswordHash, this.loginPasswordHash)) {
      Modal_getInstance().showAlert_6hosri$('Fail', 'Wrong passphrase entered');
      return false;
    }
    if (newPassword1.length === 0 || !equals(newPassword1, newPassword2)) {
      Modal_getInstance().showAlert_6hosri$('Fail', "New passphrases don't match");
      return false;
    }
    WebSocketConnection_getInstance().loadingWork_o14v8n$(UserState$updatePassword$lambda(this, newPassword1));
    return true;
  };
  UserState.prototype.createEncryptionKey = function () {
    var tmp$;
    tmp$ = this.decryptPassphraseHash_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var pp = tmp$;
    var base64String = CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.random(64)).toString();
    return Aes_getInstance().encrypt_puj7f4$(base64String, pp).toString();
  };
  UserState.prototype.loadData_61zpoe$ = function (data) {
    var tmp$, tmp$_0;
    tmp$ = this.decryptPassphraseHash_0;
    if (tmp$ == null) {
      throw IllegalStateException_init('passphraseHash is not set');
    }
    var pp = tmp$;
    tmp$_0 = this.encryptedEncryptionKey;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('encryptedEncryptionKey is not set');
    }
    var eek = tmp$_0;
    var decryptedEncryptionKey = Aes_getInstance().decrypt_puj7f4$(eek, pp).toString();
    var decryptedData = Aes_getInstance().decrypt_puj7f4$(data, decryptedEncryptionKey).toString();
    if (isBlank(decryptedData)) {
      this.topGroup = new Group(L0, 'Root', false, null, false, ArrayList_init(), ArrayList_init());
    }
     else {
      var tk = new Tokenizer(decryptedData);
      this.topGroup = Group_init_0(tk);
    }
  };
  UserState.prototype.saveData = function () {
    var tmp$, tmp$_0;
    if (!this.readOnly) {
      tmp$ = this.decryptPassphraseHash_0;
      if (tmp$ == null) {
        throw IllegalStateException_init('passphraseHash is not set');
      }
      var pp = tmp$;
      tmp$_0 = this.encryptedEncryptionKey;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('passphraseHash is not set');
      }
      var eek = tmp$_0;
      var decryptedEncryptionKey = Aes_getInstance().decrypt_puj7f4$(eek, pp).toString();
      var tg = this.topGroup;
      if (tg != null) {
        var export_0 = tg.export();
        var data = Aes_getInstance().encrypt_puj7f4$(export_0, decryptedEncryptionKey).toString();
        WebSocketConnection_getInstance().send_vqirvp$(['SAVEDATA', data]);
      }
    }
     else {
      throw IllegalStateException_init("Can't save in readOnly mode!");
    }
  };
  UserState.prototype.logout = function () {
    WebSocketConnection_getInstance().send_61zpoe$('LOGOUT');
    this.clear();
  };
  UserState.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UserState', interfaces: []};
  var UserState_instance = null;
  function UserState_getInstance() {
    if (UserState_instance === null) {
      new UserState();
    }
    return UserState_instance;
  }
  function formatted($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = StringBuilder_init();
    var date = $receiver;
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    result.append_gw00v9$(date.getFullYear().toString());
    result.append_gw00v9$('-');
    if (month.length === 1) {
      tmp$ = '0' + month;
    }
     else {
      tmp$ = month;
    }
    result.append_gw00v9$(tmp$);
    result.append_gw00v9$('-');
    if (day.length === 1) {
      tmp$_0 = '0' + day;
    }
     else {
      tmp$_0 = day;
    }
    result.append_gw00v9$(tmp$_0);
    result.append_gw00v9$(' ');
    if (hour.length === 1) {
      tmp$_1 = '0' + hour;
    }
     else {
      tmp$_1 = hour;
    }
    result.append_gw00v9$(tmp$_1);
    result.append_gw00v9$(':');
    if (minute.length === 1) {
      tmp$_2 = '0' + minute;
    }
     else {
      tmp$_2 = minute;
    }
    result.append_gw00v9$(tmp$_2);
    return result.toString();
  }
  function trimmed$lambda(closure$str, closure$length) {
    return function ($receiver) {
      if (closure$str.length > closure$length) {
        set_title($receiver, closure$str);
        $receiver.unaryPlus_pdl1vz$(substring(closure$str, until(0, closure$length - 3 | 0)) + '...');
      }
       else {
        $receiver.unaryPlus_pdl1vz$(closure$str);
      }
      return Unit;
    };
  }
  function trimmed($receiver, str, length) {
    return td($receiver.consumer, void 0, trimmed$lambda(str, length));
  }
  function copyToClipboard(text, parentToAppendTo) {
    var tmp$;
    if (parentToAppendTo === void 0) {
      tmp$ = document.body;
      if (tmp$ == null) {
        throw IllegalStateException_init('The body was not found!');
      }
      parentToAppendTo = tmp$;
    }
    var ta = document.createElement('textarea');
    ta.innerHTML = text;
    if (Kotlin.isType(ta, HTMLTextAreaElement)) {
      parentToAppendTo.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      parentToAppendTo.removeChild(ta);
    }
     else {
      throw IllegalStateException_init("Created element isn't HTMLTextAreaElement but " + ta);
    }
  }
  function Version() {
    Version_instance = this;
    this.version = 'v. 1.7.6';
  }
  Version.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Version', interfaces: []};
  var Version_instance = null;
  function Version_getInstance() {
    if (Version_instance === null) {
      new Version();
    }
    return Version_instance;
  }
  function ChangePassword() {
    Komponent.call(this);
    this.currentPassword = '';
    this.newPassword1 = '';
    this.newPassword2 = '';
  }
  function ChangePassword$render$lambda$lambda$lambda(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.currentPassword = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda$lambda_0(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.currentPassword = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda$lambda_1(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.newPassword1 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda$lambda_2(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.newPassword1 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda$lambda_3(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.newPassword2 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda$lambda_4(this$ChangePassword) {
    return function (e) {
      var tmp$;
      this$ChangePassword.newPassword2 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function ChangePassword$render$lambda$lambda(this$ChangePassword) {
    return function ($receiver) {
      include($receiver, new TextInput('current_password', 'Current passphrase', '', void 0, void 0, void 0, void 0, 4, ChangePassword$render$lambda$lambda$lambda(this$ChangePassword), ChangePassword$render$lambda$lambda$lambda_0(this$ChangePassword)));
      include($receiver, new TextInput('new_password1', 'New passphrase', '', void 0, void 0, void 0, void 0, 4, ChangePassword$render$lambda$lambda$lambda_1(this$ChangePassword), ChangePassword$render$lambda$lambda$lambda_2(this$ChangePassword)));
      include($receiver, new TextInput('new_password2', 'Confirm new passphrase', '', void 0, void 0, void 0, void 0, 4, ChangePassword$render$lambda$lambda$lambda_3(this$ChangePassword), ChangePassword$render$lambda$lambda$lambda_4(this$ChangePassword)));
      return Unit;
    };
  }
  function ChangePassword$render$lambda(this$ChangePassword) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'form form-horizontal', ChangePassword$render$lambda$lambda(this$ChangePassword));
      return Unit;
    };
  }
  ChangePassword.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'col-md-12', ChangePassword$render$lambda(this));
  };
  ChangePassword.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChangePassword', interfaces: [Komponent]};
  function Container(main) {
    Komponent.call(this);
    this.groupOverview = new GroupOverview(this);
    this.passwordOverview = new PasswordOverview(this);
    this.searchResult = new SearchResult(this);
  }
  function Container$render$lambda$lambda(this$Container) {
    return function ($receiver) {
      include($receiver, this$Container.groupOverview);
      if (isBlank(UserState_getInstance().currentSearch)) {
        include($receiver, this$Container.passwordOverview);
      }
       else {
        include($receiver, this$Container.searchResult);
      }
      return Unit;
    };
  }
  function Container$render$lambda(this$Container) {
    return function ($receiver) {
      div_0($receiver, 'container', Container$render$lambda$lambda(this$Container));
      return Unit;
    };
  }
  Container.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, void 0, Container$render$lambda(this));
  };
  Container.$metadata$ = {kind: Kind_CLASS, simpleName: 'Container', interfaces: [Komponent]};
  function GroupCommands(cg, refreshContainer) {
    Komponent.call(this);
    this.cg = cg;
    this.refreshContainer = refreshContainer;
  }
  function GroupCommands$rename$lambda$lambda(closure$renameSubgroup, closure$group, this$GroupCommands) {
    return function () {
      if (isBlank(closure$renameSubgroup.groupname)) {
        Modal_getInstance().showAlert_6hosri$('Error', 'Group name can not be blank');
      }
       else {
        closure$group.name = closure$renameSubgroup.groupname;
        UserState_getInstance().saveData();
        this$GroupCommands.refreshContainer.update();
      }
      return true;
    };
  }
  function GroupCommands$rename$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function GroupCommands$rename$lambda(closure$group, this$GroupCommands) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        var renameSubgroup = new GroupNameEdit(closure$group.name);
        UserState_getInstance().readOnly = false;
        UserState_getInstance().obtainedLock = true;
        mainComponent.update();
        Modal_getInstance().openModal_1zcf62$('Add group', renameSubgroup, 'Save', void 0, void 0, 'btn-success', void 0, void 0, GroupCommands$rename$lambda$lambda(renameSubgroup, closure$group, this$GroupCommands), GroupCommands$rename$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  GroupCommands.prototype.rename_1pjq3o$ = function (group) {
    WebSocketConnection_getInstance().lock_kfkw3g$(GroupCommands$rename$lambda(group, this));
  };
  function GroupCommands$addSubgroup$lambda$lambda(closure$addSubgroup, closure$group, this$GroupCommands) {
    return function () {
      if (isBlank(closure$addSubgroup.groupname)) {
        Modal_getInstance().showAlert_6hosri$('Error', 'Group name can not be blank');
      }
       else {
        var newGroup = Group_init(closure$addSubgroup.groupname, closure$group);
        closure$group.children.add_11rb$(newGroup);
        UserState_getInstance().saveData();
        this$GroupCommands.refreshContainer.update();
      }
      return true;
    };
  }
  function GroupCommands$addSubgroup$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function GroupCommands$addSubgroup$lambda(closure$group, this$GroupCommands) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        var addSubgroup = new GroupNameEdit();
        Modal_getInstance().openModal_1zcf62$('Add group', addSubgroup, 'Save', void 0, void 0, 'btn-success', void 0, void 0, GroupCommands$addSubgroup$lambda$lambda(addSubgroup, closure$group, this$GroupCommands), GroupCommands$addSubgroup$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  GroupCommands.prototype.addSubgroup_1pjq3o$ = function (group) {
    WebSocketConnection_getInstance().lock_kfkw3g$(GroupCommands$addSubgroup$lambda(group, this));
  };
  function GroupCommands$removeGroup$lambda$lambda(closure$group, this$GroupCommands) {
    return function () {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = closure$group.parent) != null ? tmp$.children : null) != null ? tmp$_0.remove_11rb$(closure$group) : null;
      UserState_getInstance().saveData();
      this$GroupCommands.refreshContainer.update();
      return true;
    };
  }
  function GroupCommands$removeGroup$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function GroupCommands$removeGroup$lambda(closure$group, this$GroupCommands) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        var removeSubGroup = new RemoveGroupConfirm(closure$group.name);
        Modal_getInstance().openModal_1zcf62$('Remove group', removeSubGroup, 'Remove', void 0, void 0, 'btn-danger', void 0, void 0, GroupCommands$removeGroup$lambda$lambda(closure$group, this$GroupCommands), GroupCommands$removeGroup$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  GroupCommands.prototype.removeGroup_1pjq3o$ = function (group) {
    WebSocketConnection_getInstance().lock_kfkw3g$(GroupCommands$removeGroup$lambda(group, this));
  };
  function GroupCommands$render$lambda$lambda$lambda(this$GroupCommands) {
    return function (it) {
      this$GroupCommands.rename_1pjq3o$(this$GroupCommands.cg);
      return Unit;
    };
  }
  function GroupCommands$render$lambda$lambda(this$GroupCommands) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Rename');
      set_onClickFunction($receiver, GroupCommands$render$lambda$lambda$lambda(this$GroupCommands));
      return Unit;
    };
  }
  function GroupCommands$render$lambda$lambda$lambda_0(this$GroupCommands) {
    return function (it) {
      this$GroupCommands.addSubgroup_1pjq3o$(this$GroupCommands.cg);
      return Unit;
    };
  }
  function GroupCommands$render$lambda$lambda_0(this$GroupCommands) {
    return function ($receiver) {
      set_style($receiver, 'margin-left:5px;');
      $receiver.unaryPlus_pdl1vz$('Add subgroup');
      set_onClickFunction($receiver, GroupCommands$render$lambda$lambda$lambda_0(this$GroupCommands));
      return Unit;
    };
  }
  function GroupCommands$render$lambda$lambda$lambda_1(this$GroupCommands) {
    return function (it) {
      if (this$GroupCommands.cg.children.isEmpty() && this$GroupCommands.cg.passwords.isEmpty() && this$GroupCommands.cg.parent != null) {
        this$GroupCommands.removeGroup_1pjq3o$(this$GroupCommands.cg);
      }
      return Unit;
    };
  }
  function GroupCommands$render$lambda$lambda_1(this$GroupCommands) {
    return function ($receiver) {
      set_style($receiver, 'margin-left:5px;');
      var tmp$ = !this$GroupCommands.cg.children.isEmpty();
      if (!tmp$) {
        tmp$ = !this$GroupCommands.cg.passwords.isEmpty();
      }
      if (tmp$ || this$GroupCommands.cg.parent == null) {
        var $receiver_0 = $receiver.attributes;
        var key = 'disabled';
        var value = 'disabled';
        $receiver_0.put_xwzc9p$(key, value);
      }
      $receiver.unaryPlus_pdl1vz$('Remove group');
      set_onClickFunction($receiver, GroupCommands$render$lambda$lambda$lambda_1(this$GroupCommands));
      return Unit;
    };
  }
  function GroupCommands$render$lambda(this$GroupCommands) {
    return function ($receiver) {
      set_style($receiver, 'margin-top: 20px;');
      a($receiver, void 0, void 0, 'btn btn-success btn-sm', GroupCommands$render$lambda$lambda(this$GroupCommands));
      a($receiver, void 0, void 0, 'btn btn-primary btn-sm', GroupCommands$render$lambda$lambda_0(this$GroupCommands));
      a($receiver, void 0, void 0, 'btn btn-danger btn-sm', GroupCommands$render$lambda$lambda_1(this$GroupCommands));
      return Unit;
    };
  }
  GroupCommands.prototype.render_9mbe17$ = function (consumer) {
    return div_1(consumer, 'col-md-6', GroupCommands$render$lambda(this));
  };
  GroupCommands.$metadata$ = {kind: Kind_CLASS, simpleName: 'GroupCommands', interfaces: [Komponent]};
  function GroupOverview(container) {
    Komponent.call(this);
    this.container = container;
    this.style_j4vlwp$('selected', [Styles_getInstance().selected]);
    this.style_j4vlwp$('found', [Styles_getInstance().found]);
  }
  function GroupOverview$createGroup$lambda$lambda$lambda(closure$group) {
    return function ($receiver) {
      set_style($receiver, 'margin-right: 10px;');
      set_classes($receiver, plus(get_classes($receiver), 'glyphicon'));
      if (!closure$group.children.isEmpty()) {
        set_classes($receiver, plus(get_classes($receiver), 'glyphicon-folder-open'));
      }
       else {
        set_classes($receiver, plus(get_classes($receiver), 'glyphicon-folder-close'));
        set_style($receiver, 'color: transparent;');
      }
      return Unit;
    };
  }
  function GroupOverview$createGroup$lambda$lambda$lambda$lambda(closure$group, this$GroupOverview) {
    return function (it) {
      UserState_getInstance().currentGroup = closure$group;
      UserState_getInstance().currentSearch = '';
      this$GroupOverview.container.update();
      return Unit;
    };
  }
  function GroupOverview$createGroup$lambda$lambda$lambda_0(closure$group, this$GroupOverview) {
    return function ($receiver) {
      $receiver.href = '#';
      var name = closure$group.name;
      if (name.length > 14) {
        name = slice(name, new IntRange(0, 11)) + '...';
      }
      $receiver.unaryPlus_pdl1vz$(name);
      if (closure$group.found) {
        set_classes($receiver, plus(get_classes($receiver), 'found'));
      }
      if (equals(closure$group, UserState_getInstance().currentGroup)) {
        set_classes($receiver, plus(get_classes($receiver), 'selected'));
      }
      set_onClickFunction($receiver, GroupOverview$createGroup$lambda$lambda$lambda$lambda(closure$group, this$GroupOverview));
      return Unit;
    };
  }
  function GroupOverview$createGroup$lambda$lambda$lambda_1(closure$group) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$group.passwords.size.toString() + '/' + closure$group.getPasswordsCountInGroup());
      return Unit;
    };
  }
  function GroupOverview$createGroup$lambda$lambda(closure$group, this$GroupOverview, closure$consumer, closure$topGroup) {
    return function ($receiver) {
      span($receiver, void 0, GroupOverview$createGroup$lambda$lambda$lambda(closure$group));
      a($receiver, void 0, void 0, void 0, GroupOverview$createGroup$lambda$lambda$lambda_0(closure$group, this$GroupOverview));
      span($receiver, 'badge', GroupOverview$createGroup$lambda$lambda$lambda_1(closure$group));
      var $receiver_0 = closure$group.children;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$consumer_0 = closure$consumer;
        var closure$topGroup_0 = closure$topGroup;
        this$GroupOverview.createGroup_0(closure$consumer_0, closure$topGroup_0, element);
      }
      return Unit;
    };
  }
  function GroupOverview$createGroup$lambda(closure$group, this$GroupOverview, closure$consumer, closure$topGroup) {
    return function ($receiver) {
      li($receiver, void 0, GroupOverview$createGroup$lambda$lambda(closure$group, this$GroupOverview, closure$consumer, closure$topGroup));
      return Unit;
    };
  }
  GroupOverview.prototype.createGroup_0 = function (consumer, topGroup, group) {
    ul(consumer, 'tree', GroupOverview$createGroup$lambda(group, this, consumer, topGroup));
  };
  function GroupOverview$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Password groups');
    return Unit;
  }
  function GroupOverview$render$lambda$lambda$lambda($receiver) {
    h4($receiver, void 0, GroupOverview$render$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function GroupOverview$render$lambda$lambda(closure$consumer, this$GroupOverview) {
    return function ($receiver) {
      div_0($receiver, 'col-md-12', GroupOverview$render$lambda$lambda$lambda);
      var tg = UserState_getInstance().topGroup;
      if (tg != null) {
        this$GroupOverview.createGroup_0(closure$consumer, tg, tg);
      }
      return Unit;
    };
  }
  function GroupOverview$render$lambda(closure$consumer, this$GroupOverview) {
    return function ($receiver) {
      div_0($receiver, 'row', GroupOverview$render$lambda$lambda(closure$consumer, this$GroupOverview));
      return Unit;
    };
  }
  GroupOverview.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'col-md-3', GroupOverview$render$lambda(consumer, this));
  };
  GroupOverview.$metadata$ = {kind: Kind_CLASS, simpleName: 'GroupOverview', interfaces: [Komponent]};
  function LoginTab(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LoginTab_initFields() {
    LoginTab_initFields = function () {
    };
    LoginTab$LOGIN_instance = new LoginTab('LOGIN', 0);
    LoginTab$REGISTER_instance = new LoginTab('REGISTER', 1);
  }
  var LoginTab$LOGIN_instance;
  function LoginTab$LOGIN_getInstance() {
    LoginTab_initFields();
    return LoginTab$LOGIN_instance;
  }
  var LoginTab$REGISTER_instance;
  function LoginTab$REGISTER_getInstance() {
    LoginTab_initFields();
    return LoginTab$REGISTER_instance;
  }
  LoginTab.$metadata$ = {kind: Kind_CLASS, simpleName: 'LoginTab', interfaces: [Enum]};
  function LoginTab$values() {
    return [LoginTab$LOGIN_getInstance(), LoginTab$REGISTER_getInstance()];
  }
  LoginTab.values = LoginTab$values;
  function LoginTab$valueOf(name) {
    switch (name) {
      case 'LOGIN':
        return LoginTab$LOGIN_getInstance();
      case 'REGISTER':
        return LoginTab$REGISTER_getInstance();
      default:throwISE('No enum constant spm.view.LoginTab.' + name);
    }
  }
  LoginTab.valueOf_61zpoe$ = LoginTab$valueOf;
  function LoginForm(login, pwd1, pwd2) {
    if (login === void 0)
      login = '';
    if (pwd1 === void 0)
      pwd1 = '';
    if (pwd2 === void 0)
      pwd2 = '';
    this.login = login;
    this.pwd1 = pwd1;
    this.pwd2 = pwd2;
  }
  LoginForm.$metadata$ = {kind: Kind_CLASS, simpleName: 'LoginForm', interfaces: []};
  function Login() {
    Komponent.call(this);
    this.activeTab = LoginTab$LOGIN_getInstance();
    this.loginForm = new LoginForm();
    this.style_j4vlwp$('version', [], Login_init$lambda);
  }
  function Login$login$lambda(this$Login) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      UserState_getInstance().setPassword_61zpoe$(this$Login.loginForm.pwd1);
      tmp$_1 = WebSocketConnection_getInstance();
      tmp$ = UserState_getInstance().loginname;
      if (tmp$ == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_0 = UserState_getInstance().loginPasswordHash;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_1.send_vqirvp$(['LOGIN', tmp$, tmp$_0]);
      return Unit;
    };
  }
  Login.prototype.login = function () {
    if (isBlank(this.loginForm.login)) {
      Modal_getInstance().showAlert_6hosri$('Error', 'Login name must be filled in!');
    }
     else if (isBlank(this.loginForm.pwd1)) {
      Modal_getInstance().showAlert_6hosri$('Error', 'Password must be filled in!');
    }
     else {
      UserState_getInstance().loginname = this.loginForm.login;
      WebSocketConnection_getInstance().loadingWork_o14v8n$(Login$login$lambda(this));
    }
  };
  function Login$register$lambda(this$Login) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      UserState_getInstance().setPassword_61zpoe$(this$Login.loginForm.pwd1);
      tmp$_1 = WebSocketConnection_getInstance();
      tmp$ = UserState_getInstance().loginname;
      if (tmp$ == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_0 = UserState_getInstance().loginPasswordHash;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_1.send_vqirvp$(['REGISTER', tmp$, tmp$_0, UserState_getInstance().createEncryptionKey()]);
      return Unit;
    };
  }
  Login.prototype.register = function () {
    if (isBlank(this.loginForm.login)) {
      Modal_getInstance().showAlert_6hosri$('Error', 'Login name must be filled in!');
    }
     else if (isBlank(this.loginForm.pwd1)) {
      Modal_getInstance().showAlert_6hosri$('Error', 'Password must be filled in!');
    }
     else if (!equals(this.loginForm.pwd1, this.loginForm.pwd2)) {
      Modal_getInstance().showAlert_6hosri$('Error', 'Passwords must match!');
    }
     else {
      UserState_getInstance().loginname = this.loginForm.login;
      WebSocketConnection_getInstance().loadingWork_o14v8n$(Login$register$lambda(this));
    }
  };
  function Login$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$(Version_getInstance().version);
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'text-align: center; margin-top: 40px;');
    $receiver.unaryPlus_pdl1vz$('Simple password manager');
    span($receiver, 'version', Login$render$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Login$render$lambda$lambda$lambda($receiver) {
    h2($receiver, void 0, Login$render$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login) {
    return function (it) {
      this$Login.activeTab = LoginTab$LOGIN_getInstance();
      this$Login.update();
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Login');
      set_onClickFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_0(this$Login) {
    return function ($receiver) {
      if (this$Login.activeTab === LoginTab$LOGIN_getInstance()) {
        set_classes($receiver, plus(get_classes($receiver), 'active'));
      }
      set_role($receiver, 'presentation');
      a($receiver, void 0, void 0, void 0, Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login) {
    return function (it) {
      this$Login.activeTab = LoginTab$REGISTER_getInstance();
      this$Login.update();
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Register');
      set_onClickFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_1(this$Login) {
    return function ($receiver) {
      if (this$Login.activeTab === LoginTab$REGISTER_getInstance()) {
        set_classes($receiver, plus(get_classes($receiver), 'active'));
      }
      set_role($receiver, 'presentation');
      a($receiver, void 0, void 0, void 0, Login$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda_0(this$Login) {
    return function ($receiver) {
      li($receiver, void 0, Login$render$lambda$lambda$lambda$lambda$lambda_0(this$Login));
      li($receiver, void 0, Login$render$lambda$lambda$lambda$lambda$lambda_1(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('<span>&nbsp;<\/span>');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda_1($receiver) {
    unsafe($receiver, Login$render$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_for_($receiver, 'login_name');
    $receiver.unaryPlus_pdl1vz$('Login name');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login) {
    return function (e) {
      var target = e.target;
      if (Kotlin.isType(target, HTMLInputElement)) {
        this$Login.loginForm.login = target.value;
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Login) {
    return function ($receiver) {
      set_id($receiver, 'login_name');
      $receiver.type = InputType.text;
      set_onInputFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_3(this$Login) {
    return function ($receiver) {
      label($receiver, 'col-md-4', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_1);
      div_0($receiver, 'col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    set_for_($receiver, 'login_password');
    $receiver.unaryPlus_pdl1vz$('Passphrase');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login) {
    return function (e) {
      var target = e.target;
      if (Kotlin.isType(target, HTMLInputElement)) {
        this$Login.loginForm.pwd1 = target.value;
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Login) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        if (e.keyCode === 13) {
          this$Login.login();
        }
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login) {
    return function ($receiver) {
      set_id($receiver, 'login_password');
      $receiver.type = InputType.password;
      set_onInputFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Login));
      set_onKeyDownFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_4(this$Login) {
    return function ($receiver) {
      label($receiver, 'col-md-4', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      div_0($receiver, 'col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login) {
    return function (it) {
      this$Login.login();
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$Login) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Login');
      set_onClickFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login) {
    return function ($receiver) {
      a($receiver, void 0, void 0, 'btn btn-success', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_5(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'col-sm-offset-4 col-sm-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda_2(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_3(this$Login));
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_4(this$Login));
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_5(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    set_for_($receiver, 'register_name');
    $receiver.unaryPlus_pdl1vz$('Login name');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$Login) {
    return function (e) {
      var target = e.target;
      if (Kotlin.isType(target, HTMLInputElement)) {
        this$Login.loginForm.login = target.value;
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login) {
    return function ($receiver) {
      set_id($receiver, 'register_name');
      $receiver.type = InputType.text;
      set_onInputFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_6(this$Login) {
    return function ($receiver) {
      label($receiver, 'col-md-4', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_6);
      div_0($receiver, 'col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    set_for_($receiver, 'register_password');
    $receiver.unaryPlus_pdl1vz$('Passphrase');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login) {
    return function (e) {
      var target = e.target;
      if (Kotlin.isType(target, HTMLInputElement)) {
        this$Login.loginForm.pwd1 = target.value;
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login) {
    return function ($receiver) {
      set_id($receiver, 'register_password');
      $receiver.type = InputType.password;
      set_onInputFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_9(this$Login) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_7(this$Login) {
    return function ($receiver) {
      label($receiver, 'col-md-4', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_8);
      div_0($receiver, 'col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_9(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    set_for_($receiver, 'register_password2');
    $receiver.unaryPlus_pdl1vz$('Confirm passphrase');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login) {
    return function (e) {
      var target = e.target;
      if (Kotlin.isType(target, HTMLInputElement)) {
        this$Login.loginForm.pwd2 = target.value;
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$Login) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        if (e.keyCode === 13) {
          this$Login.register();
        }
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$Login) {
    return function ($receiver) {
      set_id($receiver, 'register_password2');
      $receiver.type = InputType.password;
      set_onInputFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$Login));
      set_onKeyDownFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_11(this$Login) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_8(this$Login) {
    return function ($receiver) {
      label($receiver, 'col-md-4', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_10);
      div_0($receiver, 'col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_11(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    set_style($receiver, 'color: red;');
    $receiver.unaryPlus_pdl1vz$("Please note that if you lose your passphrase there is no way to restore it. We don't know and we don't store your passphrase, so make sure you don't forget it!");
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    span($receiver, 'help-block', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_12);
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login) {
    return function (it) {
      this$Login.register();
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Register');
      set_onClickFunction($receiver, Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda_13(this$Login) {
    return function ($receiver) {
      a($receiver, void 0, void 0, 'btn btn-warning', Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda_10(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'col-sm-offset-4 col-sm-8', Login$render$lambda$lambda$lambda$lambda$lambda$lambda_13(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda_3(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_6(this$Login));
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_7(this$Login));
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_8(this$Login));
      div_0($receiver, 'col-md-offset-4 col-md-8', Login$render$lambda$lambda$lambda$lambda$lambda_9);
      div_0($receiver, 'form-group', Login$render$lambda$lambda$lambda$lambda$lambda_10(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda_0(this$Login) {
    return function ($receiver) {
      set_style($receiver, 'margin-top: 50px;');
      ul_0($receiver, 'nav nav-tabs nav-justified', Login$render$lambda$lambda$lambda$lambda_0(this$Login));
      div_0($receiver, 'row', Login$render$lambda$lambda$lambda$lambda_1);
      if (this$Login.activeTab === LoginTab$LOGIN_getInstance()) {
        div_0($receiver, 'form-horizontal', Login$render$lambda$lambda$lambda$lambda_2(this$Login));
      }
       else {
        div_0($receiver, 'form-horizontal', Login$render$lambda$lambda$lambda$lambda_3(this$Login));
      }
      return Unit;
    };
  }
  function Login$render$lambda$lambda(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'col-md-6 col-md-offset-3', Login$render$lambda$lambda$lambda);
      div_0($receiver, 'col-md-6 col-md-offset-3', Login$render$lambda$lambda$lambda_0(this$Login));
      return Unit;
    };
  }
  function Login$render$lambda(this$Login) {
    return function ($receiver) {
      div_0($receiver, 'row', Login$render$lambda$lambda(this$Login));
      return Unit;
    };
  }
  Login.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'container', Login$render$lambda(this));
  };
  function Login_init$lambda($receiver) {
    $receiver.marginLeft = '15px';
    $receiver.fontSize = '12px';
    return Unit;
  }
  Login.$metadata$ = {kind: Kind_CLASS, simpleName: 'Login', interfaces: [Komponent]};
  function Main() {
    Komponent.call(this);
    this.navbar = new Navbar(this, this);
    CommandDispatcher_getInstance().setLoginListener_kfkw3g$(getCallableRef('login', function ($receiver, ws, tk) {
      return $receiver.login_389r8l$(ws, tk), Unit;
    }.bind(null, this)));
  }
  Main.prototype.login_389r8l$ = function (ws, tk) {
    UserState_getInstance().encryptedEncryptionKey = tk.next();
    UserState_getInstance().loggedIn = true;
    UserState_getInstance().loadData_61zpoe$(tk.next());
    UserState_getInstance().readOnly = equals(tk.next(), 'true');
    this.update();
  };
  function Main$render$lambda(this$Main) {
    return function ($receiver) {
      if (!UserState_getInstance().loggedIn) {
        include($receiver, new Login());
      }
       else {
        include($receiver, this$Main.navbar);
        include($receiver, new Container(this$Main));
      }
      return Unit;
    };
  }
  Main.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, void 0, Main$render$lambda(this));
  };
  Main.$metadata$ = {kind: Kind_CLASS, simpleName: 'Main', interfaces: [Komponent]};
  function ModalComponent(modalId, modalTitle, body, okText, cancelText, okButtonClass, modalSize, showCancel, disabledOk, ok, cancel) {
    if (okText === void 0)
      okText = 'Ok';
    if (cancelText === void 0)
      cancelText = 'Cancel';
    if (okButtonClass === void 0)
      okButtonClass = 'btn-primary';
    if (modalSize === void 0)
      modalSize = '';
    if (showCancel === void 0)
      showCancel = true;
    if (disabledOk === void 0)
      disabledOk = false;
    if (ok === void 0)
      ok = ModalComponent_init$lambda;
    if (cancel === void 0)
      cancel = ModalComponent_init$lambda_0;
    Komponent.call(this);
    this.modalId = modalId;
    this.modalTitle = modalTitle;
    this.body = body;
    this.okText = okText;
    this.cancelText = cancelText;
    this.okButtonClass = okButtonClass;
    this.modalSize = modalSize;
    this.showCancel = showCancel;
    this.disabledOk = disabledOk;
    this.ok = ok;
    this.cancel = cancel;
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    $receiver.unaryPlus_pdl1vz$('\xD7');
    return Unit;
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModalComponent) {
    return function (it) {
      this$ModalComponent.cancel();
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda(this$ModalComponent) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'data-dismiss';
      $receiver_0.put_xwzc9p$(key, 'modal');
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'aria-label';
      $receiver_1.put_xwzc9p$(key_0, 'Close');
      span($receiver, void 0, ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda);
      set_onClickFunction($receiver, ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$ModalComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$ModalComponent.modalTitle);
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda(this$ModalComponent) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, 'close', ModalComponent$render$lambda$lambda$lambda$lambda$lambda(this$ModalComponent));
      h4($receiver, 'modal-title', ModalComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda_0(this$ModalComponent) {
    return function ($receiver) {
      include($receiver, this$ModalComponent.body);
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ModalComponent) {
    return function (e) {
      e.preventDefault();
      this$ModalComponent.cancel();
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$ModalComponent) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'data-dismiss';
      $receiver_0.put_xwzc9p$(key, 'modal');
      $receiver.unaryPlus_pdl1vz$(this$ModalComponent.cancelText);
      set_onClickFunction($receiver, ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ModalComponent) {
    return function (e) {
      e.preventDefault();
      this$ModalComponent.ok();
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$ModalComponent) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      $receiver.unaryPlus_pdl1vz$(this$ModalComponent.okText);
      $receiver.disabled = this$ModalComponent.disabledOk;
      set_onClickFunction($receiver, ModalComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda$lambda_1(this$ModalComponent) {
    return function ($receiver) {
      if (this$ModalComponent.showCancel) {
        button($receiver, void 0, void 0, void 0, void 0, 'btn btn-default', ModalComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$ModalComponent));
      }
      button($receiver, void 0, void 0, void 0, void 0, 'btn ' + this$ModalComponent.okButtonClass, ModalComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda$lambda(this$ModalComponent) {
    return function ($receiver) {
      div_0($receiver, 'modal-header', ModalComponent$render$lambda$lambda$lambda$lambda(this$ModalComponent));
      div_0($receiver, 'modal-body', ModalComponent$render$lambda$lambda$lambda$lambda_0(this$ModalComponent));
      div_0($receiver, 'modal-footer', ModalComponent$render$lambda$lambda$lambda$lambda_1(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda$lambda(this$ModalComponent) {
    return function ($receiver) {
      set_role($receiver, 'document');
      div_0($receiver, 'modal-content', ModalComponent$render$lambda$lambda$lambda(this$ModalComponent));
      return Unit;
    };
  }
  function ModalComponent$render$lambda(this$ModalComponent) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'data-backkdrop';
      $receiver_0.put_xwzc9p$(key, 'true');
      set_id($receiver, this$ModalComponent.modalId);
      set_tabIndex($receiver, '1');
      set_role($receiver, 'dialog');
      div_0($receiver, 'modal-dialog ' + this$ModalComponent.modalSize, ModalComponent$render$lambda$lambda(this$ModalComponent));
      return Unit;
    };
  }
  ModalComponent.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'modal fade', ModalComponent$render$lambda(this));
  };
  function ModalComponent_init$lambda() {
    return Unit;
  }
  function ModalComponent_init$lambda_0() {
    return Unit;
  }
  ModalComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'ModalComponent', interfaces: [Komponent]};
  function AlertComponent(message) {
    Komponent.call(this);
    this.message = message;
  }
  function AlertComponent$render$lambda$lambda(this$AlertComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$AlertComponent.message);
      return Unit;
    };
  }
  function AlertComponent$render$lambda(this$AlertComponent) {
    return function ($receiver) {
      println('render AlertComponent ' + this$AlertComponent.message);
      span($receiver, void 0, AlertComponent$render$lambda$lambda(this$AlertComponent));
      return Unit;
    };
  }
  AlertComponent.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, void 0, AlertComponent$render$lambda(this));
  };
  AlertComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlertComponent', interfaces: [Komponent]};
  function Modal() {
    Modal_instance = this;
    this.id = 0;
  }
  Modal.prototype.nextId = function () {
    return 'modal_' + (this.id = this.id + 1 | 0, this.id);
  };
  function Modal$openModal$lambda() {
    return Unit;
  }
  function Modal$openModal$lambda_0(closure$ok, closure$id, this$Modal) {
    return function () {
      if (closure$ok()) {
        this$Modal.hideModal_61zpoe$(closure$id);
      }
      return Unit;
    };
  }
  Modal.prototype.openModal_1zcf62$ = function (title, body, okText, cancelText, modalSize, okButtonClass, showCancel, disabledOk, ok, cancel) {
    if (okText === void 0)
      okText = 'Ok';
    if (cancelText === void 0)
      cancelText = 'Cancel';
    if (modalSize === void 0)
      modalSize = '';
    if (okButtonClass === void 0)
      okButtonClass = 'btn-primary';
    if (showCancel === void 0)
      showCancel = false;
    if (disabledOk === void 0)
      disabledOk = false;
    if (cancel === void 0)
      cancel = Modal$openModal$lambda;
    var tmp$, tmp$_0;
    var id = this.nextId();
    var modal = new ModalComponent(id, title, body, okText, cancelText, okButtonClass, modalSize, showCancel, disabledOk, void 0, cancel);
    modal.ok = Modal$openModal$lambda_0(ok, id, this);
    tmp$_0 = Komponent.Companion;
    tmp$ = document.body;
    if (tmp$ == null) {
      throw IllegalStateException_init('Document.body not found!');
    }
    tmp$_0.create_nkol39$(tmp$, modal);
    this.attachHideEvent_0(id, modal);
    this.showModal_61zpoe$(id);
    return id;
  };
  function Modal$showAlert$lambda() {
    return true;
  }
  Modal.prototype.showAlert_6hosri$ = function (title, message, buttonText) {
    if (buttonText === void 0)
      buttonText = 'Close';
    this.openModal_1zcf62$(title, new AlertComponent(message), buttonText, void 0, void 0, void 0, false, void 0, Modal$showAlert$lambda);
  };
  function Modal$showConfirm$lambda() {
    return true;
  }
  function Modal$showConfirm$lambda_0(closure$confirm) {
    return function () {
      return closure$confirm();
    };
  }
  Modal.prototype.showConfirm_l8qp7r$ = function (title, body, confirmText, denyText, showCancel, disabledConfirm, confirm) {
    if (confirmText === void 0)
      confirmText = 'Yes';
    if (denyText === void 0)
      denyText = 'No';
    if (showCancel === void 0)
      showCancel = false;
    if (disabledConfirm === void 0)
      disabledConfirm = false;
    if (confirm === void 0)
      confirm = Modal$showConfirm$lambda;
    this.openModal_1zcf62$(title, body, confirmText, denyText, void 0, void 0, showCancel, disabledConfirm, Modal$showConfirm$lambda_0(confirm));
  };
  Modal.prototype.attachHideEvent_0 = function (id, komponent) {
    $('#' + id).on('hidden.bs.modal', function (event) {
      komponent.remove();
    });
  };
  Modal.prototype.hideModal_61zpoe$ = function (id) {
    return $('#' + id).modal('hide');
  };
  Modal.prototype.showModal_61zpoe$ = function (id) {
    return $('#' + id).modal({backdrop: 'static', keyboard: false});
  };
  Modal.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Modal', interfaces: []};
  var Modal_instance = null;
  function Modal_getInstance() {
    if (Modal_instance === null) {
      new Modal();
    }
    return Modal_instance;
  }
  function Navbar(main, container) {
    Komponent.call(this);
    this.main = main;
    this.container = container;
    this.search = UserState_getInstance().currentSearch;
    this.style_j4vlwp$('version', [], Navbar_init$lambda);
  }
  Navbar.prototype.searchPasswords_9ojx7i$ = function (e) {
    e.preventDefault();
    UserState_getInstance().currentSearch = this.search;
    UserState_getInstance().currentGroup = null;
    this.container.update();
  };
  Navbar.prototype.logout_9ojx7i$ = function (e) {
    UserState_getInstance().logout();
    this.main.update();
  };
  function Navbar$settings$lambda(closure$changePassword) {
    return function () {
      UserState_getInstance().updatePassword_6hosri$(closure$changePassword.currentPassword, closure$changePassword.newPassword1, closure$changePassword.newPassword2);
      return true;
    };
  }
  Navbar.prototype.settings_9ojx7i$ = function (e) {
    var changePassword = new ChangePassword();
    Modal_getInstance().openModal_1zcf62$('Change passphrase', changePassword, 'Update passphrase', void 0, void 0, void 0, true, void 0, Navbar$settings$lambda(changePassword));
  };
  function Navbar$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Toggle navigation');
    return Unit;
  }
  function Navbar$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.attributes.put_xwzc9p$('data-toggle', 'collapse');
    $receiver.attributes.put_xwzc9p$('data-target', '#bs-example-navbar-collapse-1');
    $receiver.attributes.put_xwzc9p$('aria-expanded', 'false');
    span($receiver, 'sr-only', Navbar$render$lambda$lambda$lambda$lambda$lambda);
    span($receiver, 'icon-bar');
    span($receiver, 'icon-bar');
    span($receiver, 'icon-bar');
    return Unit;
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$(Version_getInstance().version);
    return Unit;
  }
  function Navbar$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.href = '#';
    if (UserState_getInstance().readOnly) {
      $receiver.unaryPlus_pdl1vz$('Simple password manager (read only)');
    }
     else {
      $receiver.unaryPlus_pdl1vz$('Simple password manager');
    }
    span($receiver, 'version', Navbar$render$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Navbar$render$lambda$lambda$lambda($receiver) {
    button($receiver, void 0, void 0, void 0, void 0, 'navbar-toggle collapsed', Navbar$render$lambda$lambda$lambda$lambda);
    a($receiver, void 0, void 0, 'navbar-brand', Navbar$render$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Navbar) {
    return function ($receiver) {
      $receiver.href = '#';
      set_style($receiver, 'font-size: large;');
      span($receiver, 'glyphicon glyphicon-cog');
      set_onClickFunction($receiver, getCallableRef('settings', function ($receiver, e) {
        return $receiver.settings_9ojx7i$(e), Unit;
      }.bind(null, this$Navbar)));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda_1(this$Navbar) {
    return function ($receiver) {
      a($receiver, void 0, void 0, void 0, Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Navbar) {
    return function ($receiver) {
      $receiver.href = '#';
      set_style($receiver, 'font-size: large;');
      span($receiver, 'glyphicon glyphicon-off');
      set_onClickFunction($receiver, getCallableRef('logout', function ($receiver, e) {
        return $receiver.logout_9ojx7i$(e), Unit;
      }.bind(null, this$Navbar)));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda_2(this$Navbar) {
    return function ($receiver) {
      a($receiver, void 0, void 0, void 0, Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda_1(this$Navbar) {
    return function ($receiver) {
      li($receiver, void 0, Navbar$render$lambda$lambda$lambda$lambda$lambda_1(this$Navbar));
      li($receiver, void 0, Navbar$render$lambda$lambda$lambda$lambda$lambda_2(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Navbar) {
    return function (e) {
      var tmp$;
      this$Navbar.search = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Navbar) {
    return function ($receiver) {
      $receiver.type = InputType.text;
      $receiver.placeholder = 'Search';
      $receiver.value = this$Navbar.search;
      set_onKeyUpFunction($receiver, Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda_3(this$Navbar) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', Navbar$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda$lambda_4(this$Navbar) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      $receiver.unaryPlus_pdl1vz$('Search');
      set_onClickFunction($receiver, getCallableRef('searchPasswords', function ($receiver, e) {
        return $receiver.searchPasswords_9ojx7i$(e), Unit;
      }.bind(null, this$Navbar)));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda$lambda_2(this$Navbar) {
    return function ($receiver) {
      set_onSubmitFunction($receiver, getCallableRef('searchPasswords', function ($receiver, e) {
        return $receiver.searchPasswords_9ojx7i$(e), Unit;
      }.bind(null, this$Navbar)));
      div_0($receiver, 'form-group', Navbar$render$lambda$lambda$lambda$lambda$lambda_3(this$Navbar));
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-default', Navbar$render$lambda$lambda$lambda$lambda$lambda_4(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda$lambda_0(this$Navbar) {
    return function ($receiver) {
      set_id($receiver, 'bs-example-navbar-collapse-1');
      ul_0($receiver, 'nav navbar-nav navbar-right', Navbar$render$lambda$lambda$lambda$lambda_1(this$Navbar));
      form($receiver, void 0, void 0, void 0, 'navbar-form navbar-right', Navbar$render$lambda$lambda$lambda$lambda_2(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda$lambda(this$Navbar) {
    return function ($receiver) {
      if (UserState_getInstance().obtainedLock) {
        set_style($receiver, 'background-color: #ffabab');
      }
       else if (UserState_getInstance().readOnly) {
        set_style($receiver, 'background-color: #fffdab');
      }
      div_0($receiver, 'navbar-header', Navbar$render$lambda$lambda$lambda);
      div_0($receiver, 'collapse navbar-collapse', Navbar$render$lambda$lambda$lambda_0(this$Navbar));
      return Unit;
    };
  }
  function Navbar$render$lambda(this$Navbar) {
    return function ($receiver) {
      div_0($receiver, 'container-fluid', Navbar$render$lambda$lambda(this$Navbar));
      return Unit;
    };
  }
  Navbar.prototype.render_9mbe17$ = function (consumer) {
    return nav(consumer, 'navbar navbar-default navbar-static-top', Navbar$render$lambda(this));
  };
  function Navbar_init$lambda($receiver) {
    $receiver.marginLeft = '15px';
    $receiver.fontSize = '12px';
    return Unit;
  }
  Navbar.$metadata$ = {kind: Kind_CLASS, simpleName: 'Navbar', interfaces: [Komponent]};
  function Notify() {
    Notify_instance = this;
  }
  Notify.prototype.show_puj7f4$ = function (message, type) {
    if (type === void 0)
      type = '';
    $.notify(message, type);
  };
  Notify.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Notify', interfaces: []};
  var Notify_instance = null;
  function Notify_getInstance() {
    if (Notify_instance === null) {
      new Notify();
    }
    return Notify_instance;
  }
  function RemoveHistoryEntryConfirm(history) {
    Komponent.call(this);
    this.history = history;
  }
  function RemoveHistoryEntryConfirm$render$lambda(this$RemoveHistoryEntryConfirm) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$("Are you sure you want to remove the history entry from '" + this$RemoveHistoryEntryConfirm.history.from + "' until '" + this$RemoveHistoryEntryConfirm.history.until + '?');
      return Unit;
    };
  }
  RemoveHistoryEntryConfirm.prototype.render_9mbe17$ = function (consumer) {
    return span_0(consumer, void 0, RemoveHistoryEntryConfirm$render$lambda(this));
  };
  RemoveHistoryEntryConfirm.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveHistoryEntryConfirm', interfaces: [Komponent]};
  function ClearHistoryConfirm() {
    Komponent.call(this);
  }
  function ClearHistoryConfirm$render$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Are you sure you want to clear the history for this password?');
    return Unit;
  }
  ClearHistoryConfirm.prototype.render_9mbe17$ = function (consumer) {
    return span_0(consumer, void 0, ClearHistoryConfirm$render$lambda);
  };
  ClearHistoryConfirm.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClearHistoryConfirm', interfaces: [Komponent]};
  function PasswordEditor(group, originalPassword) {
    if (originalPassword === void 0)
      originalPassword = null;
    Komponent.call(this);
    this.group = group;
    this.originalPassword = originalPassword;
    this.password = null;
    this.showPassword = false;
    if (this.originalPassword != null) {
      this.password = Password_init_0(this.originalPassword);
      this.password.decrypt();
    }
     else {
      this.password = Password_init(this.group);
    }
    this.style_j4vlwp$('nowrap', [Styles_getInstance().nowrap]);
  }
  PasswordEditor.prototype.validate = function () {
    return true;
  };
  PasswordEditor.prototype.updateGroup_0 = function (e) {
    var tmp$, tmp$_0;
    var target = e.target;
    if (Kotlin.isType(target, HTMLSelectElement)) {
      tmp$_0 = (tmp$ = UserState_getInstance().topGroup) != null ? tmp$.findById_s8cxhz$(toLong(target.value)) : null;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Group with id ' + target.value + ' not found!');
      }
      var group = tmp$_0;
      this.password.group = group;
    }
  };
  function PasswordEditor$render$lambda$lambda$lambda(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.title = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_0(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.title = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_1(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.website = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_2(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.website = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_3(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.username = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_4(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.username = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda($receiver) {
    set_for_($receiver, 'password_password1');
    $receiver.unaryPlus_pdl1vz$('Password');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$changePwd1(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.password1 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      set_id($receiver, 'password_password1');
      $receiver.name = 'password_password1';
      $receiver.type = closure$pwType;
      $receiver.value = this$PasswordEditor.password.password1;
      $receiver.readonly = UserState_getInstance().readOnly;
      var changePwd1 = PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$changePwd1(this$PasswordEditor);
      set_onBlurFunction($receiver, getCallableRef('changePwd1', function (e) {
        return changePwd1(e), Unit;
      }));
      set_onKeyUpFunction($receiver, getCallableRef('changePwd1', function (e) {
        return changePwd1(e), Unit;
      }));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_0(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda(closure$pwType, this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor) {
    return function (e) {
      e.preventDefault();
      this$PasswordEditor.showPassword = !this$PasswordEditor.showPassword;
      this$PasswordEditor.update();
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$PasswordEditor) {
    return function (e) {
      e.preventDefault();
      this$PasswordEditor.showPassword = !this$PasswordEditor.showPassword;
      this$PasswordEditor.update();
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'aria-label';
      $receiver_0.put_xwzc9p$(key, 'Show');
      if (this$PasswordEditor.showPassword) {
        span($receiver, 'glyphicon glyphicon-eye-open', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda);
        set_onClickFunction($receiver, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor));
      }
       else {
        span($receiver, 'glyphicon glyphicon-eye-close', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_1);
        set_onClickFunction($receiver, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$PasswordEditor));
      }
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_1(this$PasswordEditor) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-default', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_5(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      label($receiver, 'col-md-3', PasswordEditor$render$lambda$lambda$lambda$lambda);
      div_0($receiver, 'col-md-7', PasswordEditor$render$lambda$lambda$lambda$lambda_0(closure$pwType, this$PasswordEditor));
      div_0($receiver, 'col-md-2', PasswordEditor$render$lambda$lambda$lambda$lambda_1(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_2($receiver) {
    set_for_($receiver, 'password_password2');
    $receiver.unaryPlus_pdl1vz$('Confirm password');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$changePwd2(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.password2 = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_1(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      set_id($receiver, 'password_password2');
      $receiver.name = 'password_password2';
      $receiver.type = closure$pwType;
      $receiver.value = this$PasswordEditor.password.password2;
      $receiver.readonly = UserState_getInstance().readOnly;
      var changePwd2 = PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$changePwd2(this$PasswordEditor);
      set_onBlurFunction($receiver, getCallableRef('changePwd2', function (e) {
        return changePwd2(e), Unit;
      }));
      set_onKeyUpFunction($receiver, getCallableRef('changePwd2', function (e) {
        return changePwd2(e), Unit;
      }));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_3(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_1(closure$pwType, this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$generator, this$PasswordEditor) {
    return function () {
      this$PasswordEditor.password.password1 = closure$generator.generatedPassword;
      this$PasswordEditor.password.password2 = closure$generator.generatedPassword;
      this$PasswordEditor.update();
      return true;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$PasswordEditor) {
    return function (e) {
      e.preventDefault();
      var generator = new PasswordGenerator(this$PasswordEditor.password);
      Modal_getInstance().openModal_1zcf62$('Generate password', generator, void 0, void 0, void 0, void 0, void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(generator, this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_2(this$PasswordEditor) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'aria-label';
      $receiver_0.put_xwzc9p$(key, 'Show');
      span($receiver, 'glyphicon glyphicon-cog', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      set_onClickFunction($receiver, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_4(this$PasswordEditor) {
    return function ($receiver) {
      if (!UserState_getInstance().readOnly) {
        button($receiver, void 0, void 0, void 0, void 0, 'btn btn-default', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_2(this$PasswordEditor));
      }
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_6(closure$pwType, this$PasswordEditor) {
    return function ($receiver) {
      label($receiver, 'col-md-3', PasswordEditor$render$lambda$lambda$lambda$lambda_2);
      div_0($receiver, 'col-md-7', PasswordEditor$render$lambda$lambda$lambda$lambda_3(closure$pwType, this$PasswordEditor));
      div_0($receiver, 'col-md-2', PasswordEditor$render$lambda$lambda$lambda$lambda_4(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_5($receiver) {
    set_for_($receiver, 'password_notes');
    $receiver.unaryPlus_pdl1vz$('Notes');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_3(this$PasswordEditor) {
    return function ($receiver) {
      set_id($receiver, 'password_notes');
      $receiver.rows = '4';
      $receiver.readonly = UserState_getInstance().readOnly;
      $receiver.unaryPlus_pdl1vz$(this$PasswordEditor.password.description);
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_6(this$PasswordEditor) {
    return function ($receiver) {
      textArea($receiver, void 0, void 0, void 0, 'form-control', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_3(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$updateNotes(this$PasswordEditor) {
    return function (e) {
      var tmp$;
      this$PasswordEditor.password.description = (Kotlin.isType(tmp$ = e.target, HTMLTextAreaElement) ? tmp$ : throwCCE()).value;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_7(this$PasswordEditor) {
    return function ($receiver) {
      label($receiver, 'col-md-3', PasswordEditor$render$lambda$lambda$lambda$lambda_5);
      div_0($receiver, 'col-md-9', PasswordEditor$render$lambda$lambda$lambda$lambda_6(this$PasswordEditor));
      var updateNotes = PasswordEditor$render$lambda$lambda$lambda$updateNotes(this$PasswordEditor);
      set_onBlurFunction($receiver, getCallableRef('updateNotes', function (e) {
        return updateNotes(e), Unit;
      }));
      set_onKeyUpFunction($receiver, getCallableRef('updateNotes', function (e) {
        return updateNotes(e), Unit;
      }));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda(this$PasswordEditor, closure$pwType) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      include($receiver, new SelectInput('password_group', this$PasswordEditor.password.group.id.toString(), (tmp$_0 = (tmp$ = UserState_getInstance().topGroup) != null ? tmp$.getGroups_61zpoe$() : null) != null ? tmp$_0 : ArrayList_init(), void 0, void 0, 'Group', UserState_getInstance().readOnly, void 0, getCallableRef('updateGroup', function ($receiver, e) {
        return $receiver.updateGroup_0(e), Unit;
      }.bind(null, this$PasswordEditor))));
      include($receiver, new TextInput('password_title', 'Title', this$PasswordEditor.password.title, void 0, void 0, void 0, UserState_getInstance().readOnly, void 0, PasswordEditor$render$lambda$lambda$lambda(this$PasswordEditor), PasswordEditor$render$lambda$lambda$lambda_0(this$PasswordEditor)));
      include($receiver, new TextInput('password_url', 'Url', this$PasswordEditor.password.website, void 0, void 0, void 0, UserState_getInstance().readOnly, void 0, PasswordEditor$render$lambda$lambda$lambda_1(this$PasswordEditor), PasswordEditor$render$lambda$lambda$lambda_2(this$PasswordEditor)));
      include($receiver, new TextInput('password_username', 'Username', this$PasswordEditor.password.username, void 0, void 0, void 0, UserState_getInstance().readOnly, void 0, PasswordEditor$render$lambda$lambda$lambda_3(this$PasswordEditor), PasswordEditor$render$lambda$lambda$lambda_4(this$PasswordEditor)));
      div_0($receiver, 'form-group', PasswordEditor$render$lambda$lambda$lambda_5(closure$pwType, this$PasswordEditor));
      div_0($receiver, 'form-group', PasswordEditor$render$lambda$lambda$lambda_6(closure$pwType, this$PasswordEditor));
      div_0($receiver, 'form-group', PasswordEditor$render$lambda$lambda$lambda_7(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Password history');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda_8($receiver) {
    h5($receiver, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$PasswordEditor) {
    return function () {
      this$PasswordEditor.originalPassword.history.clear();
      UserState_getInstance().saveData();
      this$PasswordEditor.update();
      return true;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_4(this$PasswordEditor) {
    return function (it) {
      Modal_getInstance().openModal_1zcf62$('Remove password', new ClearHistoryConfirm(), void 0, void 0, void 0, 'btn-danger', void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_8(this$PasswordEditor) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'aria-label';
      var value = 'Clear history';
      $receiver_0.put_xwzc9p$(key, value);
      set_title($receiver, 'Clear password history');
      $receiver.unaryPlus_pdl1vz$('Clear');
      set_onClickFunction($receiver, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_4(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_9(this$PasswordEditor) {
    return function ($receiver) {
      if (!UserState_getInstance().readOnly) {
        button($receiver, void 0, void 0, void 0, void 0, 'btn btn-danger btn-xs', PasswordEditor$render$lambda$lambda$lambda$lambda_8(this$PasswordEditor));
      }
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda_0(this$PasswordEditor) {
    return function ($receiver) {
      div_0($receiver, 'col-md-10', PasswordEditor$render$lambda$lambda$lambda_8);
      div_0($receiver, 'col-md-2', PasswordEditor$render$lambda$lambda$lambda_9(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Password');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('From');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Until');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_9($receiver) {
    th($receiver, void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_5);
    th($receiver, void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_6);
    th($receiver, void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_7);
    th($receiver, void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.unaryPlus_pdl1vz$('********');
    return Unit;
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_10(closure$history) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$history.from);
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_11(closure$history) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$history.until);
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$history, this$PasswordEditor) {
    return function (it) {
      var tmp$;
      copyToClipboard(UserState_getInstance().decryptPassword_61zpoe$(closure$history.encryptedPassword), Kotlin.isType(tmp$ = this$PasswordEditor.element, HTMLElement) ? tmp$ : throwCCE());
      Notify_getInstance().show_puj7f4$('Copied password to clipboard.', 'success');
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor, closure$history) {
    return function () {
      this$PasswordEditor.originalPassword.history.remove_11rb$(closure$history);
      UserState_getInstance().saveData();
      this$PasswordEditor.update();
      return true;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$history, this$PasswordEditor) {
    return function (it) {
      Modal_getInstance().openModal_1zcf62$('Remove password', new RemoveHistoryEntryConfirm(closure$history), void 0, void 0, void 0, 'btn-danger', void 0, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordEditor, closure$history));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_12(closure$history, this$PasswordEditor) {
    return function ($receiver) {
      include($receiver, new PasswordButton('copy', 'P ', 'Copy password', 'margin-left: 5px;', 'btn-xs btn-warning', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$history, this$PasswordEditor)));
      if (!UserState_getInstance().readOnly) {
        include($receiver, new PasswordButton('remove', void 0, 'Remove history entry', 'margin-left: 5px;', 'btn-xs btn-danger', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$history, this$PasswordEditor)));
      }
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda$lambda_10(closure$history, this$PasswordEditor) {
    return function ($receiver) {
      td_0($receiver, 'col-md-4', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_9);
      td_0($receiver, 'col-md-3 nowrap', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_10(closure$history));
      td_0($receiver, 'col-md-3 nowrap', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_11(closure$history));
      td_0($receiver, 'col-md-2 nowrap', PasswordEditor$render$lambda$lambda$lambda$lambda$lambda_12(closure$history, this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda$lambda_10(this$PasswordEditor) {
    return function ($receiver) {
      var tmp$;
      tr($receiver, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda_9);
      tmp$ = this$PasswordEditor.originalPassword.history.iterator();
      while (tmp$.hasNext()) {
        var history = tmp$.next();
        tr($receiver, void 0, PasswordEditor$render$lambda$lambda$lambda$lambda_10(history, this$PasswordEditor));
      }
      return Unit;
    };
  }
  function PasswordEditor$render$lambda$lambda_1(this$PasswordEditor) {
    return function ($receiver) {
      table($receiver, 'table table-striped table-condensed table-hover', PasswordEditor$render$lambda$lambda$lambda_10(this$PasswordEditor));
      return Unit;
    };
  }
  function PasswordEditor$render$lambda(this$PasswordEditor) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      if (this$PasswordEditor.showPassword) {
        tmp$ = InputType.text;
      }
       else {
        tmp$ = InputType.password;
      }
      var pwType = tmp$;
      form($receiver, void 0, void 0, void 0, 'form form-horizontal', PasswordEditor$render$lambda$lambda(this$PasswordEditor, pwType));
      if (((tmp$_0 = this$PasswordEditor.originalPassword) != null ? tmp$_0.hasHistory() : null) === true) {
        div_0($receiver, 'row', PasswordEditor$render$lambda$lambda_0(this$PasswordEditor));
        div_0($receiver, 'row', PasswordEditor$render$lambda$lambda_1(this$PasswordEditor));
      }
      return Unit;
    };
  }
  PasswordEditor.prototype.render_9mbe17$ = function (consumer) {
    return div_1(consumer, 'col-md-12', PasswordEditor$render$lambda(this));
  };
  PasswordEditor.$metadata$ = {kind: Kind_CLASS, simpleName: 'PasswordEditor', interfaces: [Komponent]};
  var basic;
  var numbers;
  var special;
  var specialNumbers;
  function PasswordGenerator(password) {
    Komponent.call(this);
    this.password = password;
    this.passwordLength = 26;
    this.includeNumbers = true;
    this.includeSpecial = true;
    this.generatedPassword = UserState_getInstance().decryptPassword_61zpoe$(this.password.encryptedPassword);
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda($receiver) {
    set_for_($receiver, 'password_length');
    $receiver.unaryPlus_pdl1vz$('Password length');
    return Unit;
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$changeLength(this$PasswordGenerator) {
    return function (e) {
      var tmp$;
      this$PasswordGenerator.passwordLength = toInt((Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      set_id($receiver, 'password_length');
      $receiver.value = this$PasswordGenerator.passwordLength.toString();
      var changeLength = PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$changeLength(this$PasswordGenerator);
      set_onBlurFunction($receiver, getCallableRef('changeLength', function (e) {
        return changeLength(e), Unit;
      }));
      set_onKeyUpFunction($receiver, getCallableRef('changeLength', function (e) {
        return changeLength(e), Unit;
      }));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      label($receiver, 'col-md-3', PasswordGenerator$render$lambda$lambda$lambda$lambda);
      div_0($receiver, 'col-md-9', PasswordGenerator$render$lambda$lambda$lambda$lambda_0(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator) {
    return function (it) {
      this$PasswordGenerator.includeNumbers = !this$PasswordGenerator.includeNumbers;
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      set_id($receiver, 'password_numbers');
      $receiver.type = InputType.checkBox;
      $receiver.checked = this$PasswordGenerator.includeNumbers;
      set_onClickFunction($receiver, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      $receiver.htmlFor = 'password_numbers';
      input($receiver, void 0, void 0, void 0, void 0, void 0, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator));
      $receiver.unaryPlus_pdl1vz$("Numbers '0..9'");
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function ($receiver) {
      label($receiver, void 0, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_1(this$PasswordGenerator) {
    return function ($receiver) {
      div_0($receiver, 'checkbox', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function ($receiver) {
      div_0($receiver, 'col-md-offset-3 col-md-9', PasswordGenerator$render$lambda$lambda$lambda$lambda_1(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function (it) {
      this$PasswordGenerator.includeSpecial = !this$PasswordGenerator.includeSpecial;
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function ($receiver) {
      set_id($receiver, 'password_special');
      $receiver.type = InputType.checkBox;
      $receiver.checked = this$PasswordGenerator.includeSpecial;
      set_onClickFunction($receiver, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator) {
    return function ($receiver) {
      set_for_($receiver, 'password_special');
      input($receiver, void 0, void 0, void 0, void 0, void 0, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator));
      $receiver.unaryPlus_pdl1vz$("Special '!@#$'<`~' etc");
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_1(this$PasswordGenerator) {
    return function ($receiver) {
      label($receiver, void 0, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_2(this$PasswordGenerator) {
    return function ($receiver) {
      div_0($receiver, 'checkbox', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_1(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda_1(this$PasswordGenerator) {
    return function ($receiver) {
      div_0($receiver, 'col-md-offset-3 col-md-9', PasswordGenerator$render$lambda$lambda$lambda$lambda_2(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_3($receiver) {
    set_for_($receiver, 'password_generated');
    $receiver.unaryPlus_pdl1vz$('Generated pwd');
    return Unit;
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_2(this$PasswordGenerator) {
    return function ($receiver) {
      set_id($receiver, 'password_generated');
      $receiver.value = this$PasswordGenerator.generatedPassword;
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_4(this$PasswordGenerator) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_2(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    return Unit;
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$PasswordGenerator) {
    return function (e) {
      e.preventDefault();
      this$PasswordGenerator.generatedPassword = this$PasswordGenerator.generatePassword_0(this$PasswordGenerator.passwordLength, this$PasswordGenerator.includeNumbers, this$PasswordGenerator.includeSpecial);
      this$PasswordGenerator.update();
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_3(this$PasswordGenerator) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'aria-label';
      $receiver_0.put_xwzc9p$(key, 'Refresh');
      span($receiver, 'glyphicon glyphicon-refresh', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_1);
      set_onClickFunction($receiver, PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda$lambda_5(this$PasswordGenerator) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-default', PasswordGenerator$render$lambda$lambda$lambda$lambda$lambda_3(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda$lambda_2(this$PasswordGenerator) {
    return function ($receiver) {
      label($receiver, 'col-md-3', PasswordGenerator$render$lambda$lambda$lambda$lambda_3);
      div_0($receiver, 'col-md-7', PasswordGenerator$render$lambda$lambda$lambda$lambda_4(this$PasswordGenerator));
      div_0($receiver, 'col-md-2', PasswordGenerator$render$lambda$lambda$lambda$lambda_5(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      div_0($receiver, 'form-group', PasswordGenerator$render$lambda$lambda$lambda(this$PasswordGenerator));
      div_0($receiver, 'form-group', PasswordGenerator$render$lambda$lambda$lambda_0(this$PasswordGenerator));
      div_0($receiver, 'form-group', PasswordGenerator$render$lambda$lambda$lambda_1(this$PasswordGenerator));
      div_0($receiver, 'form-group', PasswordGenerator$render$lambda$lambda$lambda_2(this$PasswordGenerator));
      return Unit;
    };
  }
  function PasswordGenerator$render$lambda(this$PasswordGenerator) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'form form-horizontal', PasswordGenerator$render$lambda$lambda(this$PasswordGenerator));
      return Unit;
    };
  }
  PasswordGenerator.prototype.render_9mbe17$ = function (consumer) {
    return div_1(consumer, 'col-md-12', PasswordGenerator$render$lambda(this));
  };
  PasswordGenerator.prototype.generatePassword_0 = function (length, includeNumbers, includeSpecial) {
    var tmp$;
    var builder = StringBuilder_init();
    var source;
    var select = 0;
    if (includeNumbers) {
      select = select + 1 | 0;
    }
    if (includeSpecial) {
      select = select + 2 | 0;
    }
    switch (select) {
      case 0:
        tmp$ = basic;
        break;
      case 1:
        tmp$ = numbers;
        break;
      case 2:
        tmp$ = special;
        break;
      case 3:
        tmp$ = specialNumbers;
        break;
      default:tmp$ = specialNumbers;
        break;
    }
    source = tmp$;
    for (var index = 0; index < length; index++) {
      builder.append_s8itvh$(source.charCodeAt(numberToInt(source.length * Math.random())));
    }
    return builder.toString();
  };
  PasswordGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'PasswordGenerator', interfaces: [Komponent]};
  function RemovePasswordConfirm(password) {
    Komponent.call(this);
    this.password = password;
  }
  function RemovePasswordConfirm$render$lambda(this$RemovePasswordConfirm) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$("Are you sure you want to remove password '" + this$RemovePasswordConfirm.password.title + "'?");
      return Unit;
    };
  }
  RemovePasswordConfirm.prototype.render_9mbe17$ = function (consumer) {
    return span_0(consumer, void 0, RemovePasswordConfirm$render$lambda(this));
  };
  RemovePasswordConfirm.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemovePasswordConfirm', interfaces: [Komponent]};
  function RemoveGroupConfirm(groupName) {
    Komponent.call(this);
    this.groupName = groupName;
  }
  function RemoveGroupConfirm$render$lambda(this$RemoveGroupConfirm) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$("Are you sure you want to remove group '" + this$RemoveGroupConfirm.groupName + "'?");
      return Unit;
    };
  }
  RemoveGroupConfirm.prototype.render_9mbe17$ = function (consumer) {
    return span_0(consumer, void 0, RemoveGroupConfirm$render$lambda(this));
  };
  RemoveGroupConfirm.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveGroupConfirm', interfaces: [Komponent]};
  function GroupNameEdit(groupname) {
    if (groupname === void 0)
      groupname = '';
    Komponent.call(this);
    this.groupname = groupname;
  }
  function GroupNameEdit$render$lambda$lambda$lambda$lambda($receiver) {
    set_for_($receiver, 'groupname');
    $receiver.unaryPlus_pdl1vz$('Group name');
    return Unit;
  }
  function GroupNameEdit$render$lambda$lambda$lambda$lambda$lambda$changeName(this$GroupNameEdit) {
    return function (e) {
      var tmp$;
      e.preventDefault();
      this$GroupNameEdit.groupname = (Kotlin.isType(tmp$ = e.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
    };
  }
  function GroupNameEdit$render$lambda$lambda$lambda$lambda$lambda(this$GroupNameEdit) {
    return function ($receiver) {
      set_id($receiver, 'groupname');
      $receiver.value = this$GroupNameEdit.groupname;
      var changeName = GroupNameEdit$render$lambda$lambda$lambda$lambda$lambda$changeName(this$GroupNameEdit);
      set_onBlurFunction($receiver, getCallableRef('changeName', function (e) {
        return changeName(e), Unit;
      }));
      set_onKeyUpFunction($receiver, getCallableRef('changeName', function (e) {
        return changeName(e), Unit;
      }));
      return Unit;
    };
  }
  function GroupNameEdit$render$lambda$lambda$lambda$lambda_0(this$GroupNameEdit) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', GroupNameEdit$render$lambda$lambda$lambda$lambda$lambda(this$GroupNameEdit));
      return Unit;
    };
  }
  function GroupNameEdit$render$lambda$lambda$lambda(this$GroupNameEdit) {
    return function ($receiver) {
      label($receiver, 'col-md-3', GroupNameEdit$render$lambda$lambda$lambda$lambda);
      div_0($receiver, 'col-md-9', GroupNameEdit$render$lambda$lambda$lambda$lambda_0(this$GroupNameEdit));
      return Unit;
    };
  }
  function GroupNameEdit$render$lambda$lambda(this$GroupNameEdit) {
    return function ($receiver) {
      div_0($receiver, 'form-group', GroupNameEdit$render$lambda$lambda$lambda(this$GroupNameEdit));
      return Unit;
    };
  }
  function GroupNameEdit$render$lambda(this$GroupNameEdit) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'form form-horizontal', GroupNameEdit$render$lambda$lambda(this$GroupNameEdit));
      return Unit;
    };
  }
  GroupNameEdit.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, '', GroupNameEdit$render$lambda(this));
  };
  GroupNameEdit.$metadata$ = {kind: Kind_CLASS, simpleName: 'GroupNameEdit', interfaces: [Komponent]};
  function PasswordOverview(container) {
    Komponent.call(this);
    this.container = container;
  }
  function PasswordOverview$addPassword$lambda$lambda(closure$editor, this$PasswordOverview) {
    return function () {
      if (closure$editor.validate()) {
        if (closure$editor.originalPassword == null) {
          closure$editor.password.encryptedPassword = UserState_getInstance().encryptPassword_61zpoe$(closure$editor.password.password1);
          closure$editor.password.group.passwords.add_11rb$(closure$editor.password);
        }
         else {
          throw IllegalStateException_init('Add button modal has existing password!?');
        }
        UserState_getInstance().saveData();
        this$PasswordOverview.container.update();
        return true;
      }
       else {
        return false;
      }
    };
  }
  function PasswordOverview$addPassword$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function PasswordOverview$addPassword$lambda(closure$cg, this$PasswordOverview) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        var editor = new PasswordEditor(closure$cg);
        editor.password.group = closure$cg;
        Modal_getInstance().openModal_1zcf62$('Edit password', editor, 'Save', void 0, void 0, 'btn-success', void 0, void 0, PasswordOverview$addPassword$lambda$lambda(editor, this$PasswordOverview), PasswordOverview$addPassword$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  PasswordOverview.prototype.addPassword_1pjq3o$ = function (cg) {
    WebSocketConnection_getInstance().lock_kfkw3g$(PasswordOverview$addPassword$lambda(cg, this));
  };
  function PasswordOverview$render$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'text-align: center; padding: 10px; margin: 5px');
    var group = UserState_getInstance().currentGroup;
    if (group != null) {
      $receiver.unaryPlus_pdl1vz$(group.name);
    }
    return Unit;
  }
  function PasswordOverview$render$lambda$lambda$lambda($receiver) {
    h3($receiver, void 0, PasswordOverview$render$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function PasswordOverview$render$lambda$lambda(closure$cg, this$PasswordOverview) {
    return function ($receiver) {
      div_0($receiver, 'col-md-6', PasswordOverview$render$lambda$lambda$lambda);
      if (!UserState_getInstance().readOnly) {
        include($receiver, new GroupCommands(closure$cg, this$PasswordOverview.container));
      }
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda_0($receiver) {
    return Unit;
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg) {
    return function (it) {
      this$PasswordOverview.addPassword_1pjq3o$(closure$cg);
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Add');
      set_onClickFunction($receiver, PasswordOverview$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg));
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg) {
    return function ($receiver) {
      if (!UserState_getInstance().readOnly) {
        a($receiver, void 0, void 0, 'btn btn-success btn-sm', PasswordOverview$render$lambda$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg));
      }
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda_0(this$PasswordOverview, closure$cg) {
    return function ($receiver) {
      div_0($receiver, 'button-group', PasswordOverview$render$lambda$lambda$lambda$lambda$lambda(this$PasswordOverview, closure$cg));
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Passwords');
    return Unit;
  }
  function PasswordOverview$render$lambda$lambda$lambda_0(this$PasswordOverview, closure$cg) {
    return function ($receiver) {
      div_0($receiver, 'btn-toolbar pull-right', PasswordOverview$render$lambda$lambda$lambda$lambda_0(this$PasswordOverview, closure$cg));
      h4($receiver, void 0, PasswordOverview$render$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda$lambda_2(closure$cg, this$PasswordOverview) {
    return function ($receiver) {
      passwordTable($receiver, closure$cg.passwords, this$PasswordOverview.container);
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda$lambda_1(closure$cg, this$PasswordOverview) {
    return function ($receiver) {
      div_0($receiver, 'col-md-12', PasswordOverview$render$lambda$lambda$lambda$lambda_2(closure$cg, this$PasswordOverview));
      return Unit;
    };
  }
  function PasswordOverview$render$lambda$lambda_1(this$PasswordOverview, closure$cg) {
    return function ($receiver) {
      div_0($receiver, 'page-header', PasswordOverview$render$lambda$lambda$lambda_0(this$PasswordOverview, closure$cg));
      div_0($receiver, 'row', PasswordOverview$render$lambda$lambda$lambda_1(closure$cg, this$PasswordOverview));
      return Unit;
    };
  }
  function PasswordOverview$render$lambda(this$PasswordOverview) {
    return function ($receiver) {
      var cg = UserState_getInstance().currentGroup;
      if (cg != null) {
        div_0($receiver, 'row', PasswordOverview$render$lambda$lambda(cg, this$PasswordOverview));
        hr($receiver, void 0, PasswordOverview$render$lambda$lambda_0);
        div_0($receiver, void 0, PasswordOverview$render$lambda$lambda_1(this$PasswordOverview, cg));
      }
      return Unit;
    };
  }
  PasswordOverview.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'col-md-9', PasswordOverview$render$lambda(this));
  };
  PasswordOverview.prototype.copyToClipboard_61zpoe$ = function (text) {
    var tmp$;
    var ta = document.createElement('textarea');
    ta.innerHTML = text;
    if (Kotlin.isType(ta, HTMLTextAreaElement)) {
      tmp$ = document.body;
      if (tmp$ == null) {
        throw IllegalStateException_init('The body was not found!');
      }
      var body = tmp$;
      body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      body.removeChild(ta);
    }
  };
  PasswordOverview.$metadata$ = {kind: Kind_CLASS, simpleName: 'PasswordOverview', interfaces: [Komponent]};
  function passwordTable$lambda(closure$container, closure$showGroup) {
    return function ($receiver, password) {
      include($receiver, new PasswordOverviewRow(password, closure$container, closure$showGroup));
      return Unit;
    };
  }
  function passwordTable($receiver, passwords, container, showGroup) {
    if (showGroup === void 0)
      showGroup = false;
    var tmp$;
    if (showGroup) {
      tmp$ = ['Group', 'Title', 'Url', 'Username', 'Hist', ''];
    }
     else {
      tmp$ = ['Title', 'Url', 'Username', 'Hist', ''];
    }
    include($receiver, new Table(tmp$, passwords, passwordTable$lambda(container, showGroup)));
  }
  function PasswordOverviewRow(password, container, showGroup) {
    if (showGroup === void 0)
      showGroup = false;
    Komponent.call(this);
    this.password = password;
    this.container = container;
    this.showGroup = showGroup;
    this.style_j4vlwp$('nowrap', [Styles_getInstance().nowrap]);
  }
  function PasswordOverviewRow$editPassword$lambda(closure$password, this$PasswordOverviewRow) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        this$PasswordOverviewRow.openEditPasswordModal_0(closure$password, true);
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  PasswordOverviewRow.prototype.editPassword_0 = function (password) {
    if (UserState_getInstance().readOnly) {
      this.openEditPasswordModal_0(password);
    }
     else {
      WebSocketConnection_getInstance().lock_kfkw3g$(PasswordOverviewRow$editPassword$lambda(password, this));
    }
  };
  function PasswordOverviewRow$openEditPasswordModal$okCallback(closure$editor, closure$locked, this$PasswordOverviewRow) {
    return function () {
      if (!UserState_getInstance().readOnly) {
        if (closure$editor.validate()) {
          if (closure$editor.originalPassword != null) {
            closure$editor.originalPassword.title = closure$editor.password.title;
            closure$editor.originalPassword.website = closure$editor.password.website;
            closure$editor.originalPassword.username = closure$editor.password.username;
            closure$editor.originalPassword.description = closure$editor.password.description;
            var originalGroup = closure$editor.originalPassword.group;
            var newGroup = closure$editor.password.group;
            if (!(originalGroup != null ? originalGroup.equals(newGroup) : null)) {
              originalGroup.passwords.remove_11rb$(closure$editor.originalPassword);
              newGroup.passwords.add_11rb$(closure$editor.originalPassword);
              closure$editor.originalPassword.group = closure$editor.password.group;
            }
            if (!isBlank(closure$editor.password.password1)) {
              var oldPassword = UserState_getInstance().decryptPassword_61zpoe$(closure$editor.originalPassword.encryptedPassword);
              if (!equals(oldPassword, closure$editor.password.password1)) {
                closure$editor.originalPassword.archivePassword();
                closure$editor.originalPassword.encryptedPassword = UserState_getInstance().encryptPassword_61zpoe$(closure$editor.password.password1);
                closure$editor.originalPassword.created = formatted(new Date());
              }
            }
          }
           else {
            throw IllegalStateException_init("Edit button doesn't have original password!?");
          }
          if (closure$locked) {
            UserState_getInstance().saveData();
            this$PasswordOverviewRow.container.update();
          }
          return true;
        }
         else {
          return false;
        }
      }
       else {
        return true;
      }
    };
  }
  function PasswordOverviewRow$openEditPasswordModal$lambda(closure$okCallback) {
    return function () {
      return closure$okCallback();
    };
  }
  function PasswordOverviewRow$openEditPasswordModal$lambda_0() {
    WebSocketConnection_getInstance().send_61zpoe$('UNLOCK');
    return Unit;
  }
  function PasswordOverviewRow$openEditPasswordModal$lambda_1() {
    return Unit;
  }
  PasswordOverviewRow.prototype.openEditPasswordModal_0 = function (password, locked) {
    if (locked === void 0)
      locked = false;
    var tmp$, tmp$_0;
    var editor = new PasswordEditor(password.group, password);
    var okCallback = PasswordOverviewRow$openEditPasswordModal$okCallback(editor, locked, this);
    tmp$_0 = Modal_getInstance();
    if (locked) {
      tmp$ = PasswordOverviewRow$openEditPasswordModal$lambda_0;
    }
     else {
      tmp$ = PasswordOverviewRow$openEditPasswordModal$lambda_1;
    }
    tmp$_0.openModal_1zcf62$('Edit password', editor, void 0, void 0, void 0, void 0, void 0, void 0, PasswordOverviewRow$openEditPasswordModal$lambda(okCallback), tmp$);
  };
  function PasswordOverviewRow$removePassword$lambda$lambda(closure$password, this$PasswordOverviewRow) {
    return function () {
      closure$password.delete();
      UserState_getInstance().saveData();
      this$PasswordOverviewRow.container.update();
      return true;
    };
  }
  function PasswordOverviewRow$removePassword$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function PasswordOverviewRow$removePassword$lambda(closure$password, this$PasswordOverviewRow) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        Modal_getInstance().openModal_1zcf62$('Remove password', new RemovePasswordConfirm(closure$password), void 0, void 0, void 0, 'btn-danger', void 0, void 0, PasswordOverviewRow$removePassword$lambda$lambda(closure$password, this$PasswordOverviewRow), PasswordOverviewRow$removePassword$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  PasswordOverviewRow.prototype.removePassword_0 = function (password) {
    WebSocketConnection_getInstance().lock_kfkw3g$(PasswordOverviewRow$removePassword$lambda(password, this));
  };
  function PasswordOverviewRow$removeHistory$lambda$lambda(closure$password, this$PasswordOverviewRow) {
    return function () {
      closure$password.history.clear();
      UserState_getInstance().saveData();
      this$PasswordOverviewRow.update();
      return true;
    };
  }
  function PasswordOverviewRow$removeHistory$lambda$lambda_0(closure$ws) {
    return function () {
      closure$ws.send('UNLOCK');
      return Unit;
    };
  }
  function PasswordOverviewRow$removeHistory$lambda(closure$password, this$PasswordOverviewRow) {
    return function (ws, tk) {
      var response = tk.next();
      if (equals(response, 'LOCKED')) {
        Modal_getInstance().openModal_1zcf62$('Remove password', new ClearHistoryConfirm(), void 0, void 0, void 0, 'btn-danger', void 0, void 0, PasswordOverviewRow$removeHistory$lambda$lambda(closure$password, this$PasswordOverviewRow), PasswordOverviewRow$removeHistory$lambda$lambda_0(ws));
      }
       else {
        Modal_getInstance().showAlert_6hosri$('Blocked', 'Unable to obtain modify lock.');
      }
      return Unit;
    };
  }
  PasswordOverviewRow.prototype.removeHistory_0 = function (password) {
    WebSocketConnection_getInstance().lock_kfkw3g$(PasswordOverviewRow$removeHistory$lambda(password, this));
  };
  function PasswordOverviewRow$render$lambda$lambda$lambda(this$PasswordOverviewRow) {
    return function (it) {
      this$PasswordOverviewRow.removeHistory_0(this$PasswordOverviewRow.password);
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda(this$PasswordOverviewRow) {
    return function ($receiver) {
      if (!this$PasswordOverviewRow.password.history.isEmpty()) {
        include($receiver, new PasswordButton('', this$PasswordOverviewRow.password.history.size.toString() + ' ', 'Clear history', void 0, 'btn-xs btn-danger', PasswordOverviewRow$render$lambda$lambda$lambda(this$PasswordOverviewRow)));
      }
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_0(this$PasswordOverviewRow) {
    return function (it) {
      copyToClipboard(this$PasswordOverviewRow.password.username);
      Notify_getInstance().show_puj7f4$('Copied username to clipboard.', 'success');
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_1(this$PasswordOverviewRow) {
    return function (it) {
      copyToClipboard(UserState_getInstance().decryptPassword_61zpoe$(this$PasswordOverviewRow.password.encryptedPassword));
      Notify_getInstance().show_puj7f4$('Copied password to clipboard.', 'success');
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_2(this$PasswordOverviewRow) {
    return function (it) {
      copyToClipboard(this$PasswordOverviewRow.password.website);
      Notify_getInstance().show_puj7f4$('Copied password to clipboard.', 'success');
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_3(this$PasswordOverviewRow) {
    return function (it) {
      window.open(this$PasswordOverviewRow.password.website, '_blank');
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_4(this$PasswordOverviewRow) {
    return function (it) {
      this$PasswordOverviewRow.editPassword_0(this$PasswordOverviewRow.password);
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda$lambda_5(this$PasswordOverviewRow) {
    return function (it) {
      this$PasswordOverviewRow.removePassword_0(this$PasswordOverviewRow.password);
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda$lambda_0(this$PasswordOverviewRow) {
    return function ($receiver) {
      include($receiver, new PasswordButton('copy', 'U ', 'Copy username', void 0, 'btn-xs btn-default', PasswordOverviewRow$render$lambda$lambda$lambda_0(this$PasswordOverviewRow)));
      include($receiver, new PasswordButton('copy', 'P ', 'Copy password', 'margin-left: 5px;', 'btn-xs btn-warning', PasswordOverviewRow$render$lambda$lambda$lambda_1(this$PasswordOverviewRow)));
      include($receiver, new PasswordButton('copy', 'U ', 'Copy url', 'margin-left: 5px;', 'btn-xs btn-default', PasswordOverviewRow$render$lambda$lambda$lambda_2(this$PasswordOverviewRow)));
      include($receiver, new PasswordButton('new-window', 'U ', 'Open url in a new window', 'margin-left: 5px;', 'btn-xs btn-default', PasswordOverviewRow$render$lambda$lambda$lambda_3(this$PasswordOverviewRow)));
      include($receiver, new PasswordButton('folder-open', void 0, 'Edit password entry', 'margin-left: 5px;', 'btn-xs btn-success', PasswordOverviewRow$render$lambda$lambda$lambda_4(this$PasswordOverviewRow)));
      if (!UserState_getInstance().readOnly) {
        include($receiver, new PasswordButton('remove', void 0, 'Remove password entry', 'margin-left: 5px;', 'btn-xs btn-danger', PasswordOverviewRow$render$lambda$lambda$lambda_5(this$PasswordOverviewRow)));
      }
      return Unit;
    };
  }
  function PasswordOverviewRow$render$lambda(this$PasswordOverviewRow) {
    return function ($receiver) {
      if (this$PasswordOverviewRow.showGroup) {
        trimmed($receiver, this$PasswordOverviewRow.password.group.name, 8);
      }
      trimmed($receiver, this$PasswordOverviewRow.password.title, 12);
      trimmed($receiver, this$PasswordOverviewRow.password.website, 24);
      trimmed($receiver, this$PasswordOverviewRow.password.username, 12);
      td_0($receiver, void 0, PasswordOverviewRow$render$lambda$lambda(this$PasswordOverviewRow));
      td_0($receiver, 'col-md-4 nowrap', PasswordOverviewRow$render$lambda$lambda_0(this$PasswordOverviewRow));
      return Unit;
    };
  }
  PasswordOverviewRow.prototype.render_9mbe17$ = function (consumer) {
    return tr_0(consumer, void 0, PasswordOverviewRow$render$lambda(this));
  };
  PasswordOverviewRow.$metadata$ = {kind: Kind_CLASS, simpleName: 'PasswordOverviewRow', interfaces: [Komponent]};
  function SearchResult(container) {
    Komponent.call(this);
    this.container = container;
  }
  SearchResult.prototype.findPasswords_1pjq3o$ = function (group) {
    var tmp$, tmp$_0;
    var result = ArrayList_init();
    var $receiver = UserState_getInstance().currentSearch;
    var tmp$_1;
    var searchValue = trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString().toLowerCase();
    tmp$ = group.passwords.iterator();
    while (tmp$.hasNext()) {
      var password = tmp$.next();
      if (password.search_61zpoe$(searchValue)) {
        result.add_11rb$(password);
      }
    }
    tmp$_0 = group.children.iterator();
    while (tmp$_0.hasNext()) {
      var child = tmp$_0.next();
      result.addAll_brywnq$(this.findPasswords_1pjq3o$(child));
    }
    return result;
  };
  function SearchResult$render$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'text-align: center; padding: 10px; margin: 5px');
    $receiver.unaryPlus_pdl1vz$("Search result for '" + UserState_getInstance().currentSearch + "'");
    return Unit;
  }
  function SearchResult$render$lambda$lambda$lambda($receiver) {
    h3($receiver, void 0, SearchResult$render$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function SearchResult$render$lambda$lambda($receiver) {
    div_0($receiver, 'col-md-6', SearchResult$render$lambda$lambda$lambda);
    return Unit;
  }
  function SearchResult$render$lambda$lambda_0($receiver) {
    return Unit;
  }
  function SearchResult$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Found passwords');
    return Unit;
  }
  function SearchResult$render$lambda$lambda$lambda_0($receiver) {
    h4($receiver, void 0, SearchResult$render$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function SearchResult$render$lambda$lambda$lambda$lambda_1(closure$searchResult, this$SearchResult) {
    return function ($receiver) {
      passwordTable($receiver, closure$searchResult.v, this$SearchResult.container, true);
      return Unit;
    };
  }
  function SearchResult$render$lambda$lambda$lambda_1(closure$searchResult, this$SearchResult) {
    return function ($receiver) {
      div_0($receiver, 'col-md-12', SearchResult$render$lambda$lambda$lambda$lambda_1(closure$searchResult, this$SearchResult));
      return Unit;
    };
  }
  function SearchResult$render$lambda$lambda_1(closure$searchResult, this$SearchResult) {
    return function ($receiver) {
      div_0($receiver, 'page-header', SearchResult$render$lambda$lambda$lambda_0);
      div_0($receiver, 'row', SearchResult$render$lambda$lambda$lambda_1(closure$searchResult, this$SearchResult));
      return Unit;
    };
  }
  function SearchResult$render$lambda(this$SearchResult) {
    return function ($receiver) {
      var topGroup = UserState_getInstance().topGroup;
      var searchResult = {v: ArrayList_init()};
      if (topGroup != null) {
        searchResult.v = this$SearchResult.findPasswords_1pjq3o$(topGroup);
      }
      div_0($receiver, 'row', SearchResult$render$lambda$lambda);
      hr($receiver, void 0, SearchResult$render$lambda$lambda_0);
      div_0($receiver, void 0, SearchResult$render$lambda$lambda_1(searchResult, this$SearchResult));
      return Unit;
    };
  }
  SearchResult.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'col-md-9', SearchResult$render$lambda(this));
  };
  SearchResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'SearchResult', interfaces: [Komponent]};
  function Styles() {
    Styles_instance = this;
    this.primaryColor_0 = '#eeeeee';
    this.color = Styles$color$lambda(this);
    this.font = Styles$font$lambda;
    this.selected = Styles$selected$lambda;
    this.found = Styles$found$lambda;
    this.nowrap = Styles$nowrap$lambda;
  }
  function Styles$color$lambda(this$Styles) {
    return function ($receiver) {
      $receiver.color = this$Styles.primaryColor_0;
      return Unit;
    };
  }
  function Styles$font$lambda($receiver) {
    $receiver.fontFamily = 'Arial, courier';
    return Unit;
  }
  function Styles$selected$lambda($receiver) {
    $receiver.color = '#444444';
    $receiver.backgroundColor = '#FFEB91';
    return Unit;
  }
  function Styles$found$lambda($receiver) {
    $receiver.backgroundColor = '#FFEB91';
    return Unit;
  }
  function Styles$nowrap$lambda($receiver) {
    $receiver.whiteSpace = 'nowrap';
    return Unit;
  }
  Styles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styles', interfaces: []};
  var Styles_instance = null;
  function Styles_getInstance() {
    if (Styles_instance === null) {
      new Styles();
    }
    return Styles_instance;
  }
  function PasswordButton(icon, text, tooltip, buttonStyle, btnClass, click) {
    if (text === void 0)
      text = '';
    if (tooltip === void 0)
      tooltip = null;
    if (buttonStyle === void 0)
      buttonStyle = '';
    if (btnClass === void 0)
      btnClass = 'btn-default';
    if (click === void 0)
      click = PasswordButton_init$lambda;
    Komponent.call(this);
    this.icon = icon;
    this.text = text;
    this.tooltip = tooltip;
    this.buttonStyle = buttonStyle;
    this.btnClass = btnClass;
    this.click = click;
  }
  function PasswordButton$render$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    return Unit;
  }
  function PasswordButton$render$lambda(this$PasswordButton) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      if (!isBlank(this$PasswordButton.buttonStyle)) {
        set_style($receiver, this$PasswordButton.buttonStyle);
      }
      var $receiver_0 = $receiver.attributes;
      var key = 'aria-label';
      var value = this$PasswordButton.text;
      $receiver_0.put_xwzc9p$(key, value);
      if (this$PasswordButton.tooltip != null) {
        set_title($receiver, this$PasswordButton.tooltip);
      }
      $receiver.unaryPlus_pdl1vz$(this$PasswordButton.text);
      if (!isBlank(this$PasswordButton.icon)) {
        span($receiver, 'glyphicon glyphicon-' + this$PasswordButton.icon, PasswordButton$render$lambda$lambda);
      }
      set_onClickFunction($receiver, this$PasswordButton.click);
      return Unit;
    };
  }
  PasswordButton.prototype.render_9mbe17$ = function (consumer) {
    return button_0(consumer, void 0, void 0, void 0, void 0, 'btn ' + this.btnClass, PasswordButton$render$lambda(this));
  };
  function PasswordButton_init$lambda(it) {
    return Unit;
  }
  PasswordButton.$metadata$ = {kind: Kind_CLASS, simpleName: 'PasswordButton', interfaces: [Komponent]};
  function SelectInput(inputId, inputValue, options, placeholderText, error, label, readOnly, blur, change) {
    if (inputValue === void 0)
      inputValue = '';
    if (options === void 0)
      options = ArrayList_init();
    if (placeholderText === void 0)
      placeholderText = '';
    if (error === void 0)
      error = '';
    if (label === void 0)
      label = '';
    if (readOnly === void 0)
      readOnly = false;
    if (blur === void 0)
      blur = SelectInput_init$lambda;
    if (change === void 0)
      change = SelectInput_init$lambda_0;
    Komponent.call(this);
    this.inputId = inputId;
    this.inputValue = inputValue;
    this.options = options;
    this.placeholderText = placeholderText;
    this.error = error;
    this.label = label;
    this.readOnly = readOnly;
    this.blur = blur;
    this.change = change;
  }
  function SelectInput$render$lambda$lambda(this$SelectInput) {
    return function ($receiver) {
      set_for_($receiver, this$SelectInput.inputId);
      $receiver.unaryPlus_pdl1vz$(this$SelectInput.label);
      return Unit;
    };
  }
  function SelectInput$render$lambda$lambda$lambda$lambda(closure$option, this$SelectInput) {
    return function ($receiver) {
      $receiver.value = closure$option.first;
      if (equals($receiver.value, this$SelectInput.inputValue)) {
        $receiver.selected = true;
      }
      $receiver.unaryPlus_pdl1vz$(closure$option.second);
      return Unit;
    };
  }
  function SelectInput$render$lambda$lambda$lambda(this$SelectInput) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, this$SelectInput.inputId);
      $receiver.name = this$SelectInput.inputId;
      this$SelectInput.readOnly = this$SelectInput.readOnly;
      $receiver.disabled = this$SelectInput.readOnly;
      tmp$ = this$SelectInput.options.iterator();
      while (tmp$.hasNext()) {
        var option_0 = tmp$.next();
        option($receiver, void 0, SelectInput$render$lambda$lambda$lambda$lambda(option_0, this$SelectInput));
      }
      return Unit;
    };
  }
  function SelectInput$render$lambda$lambda$lambda_0(this$SelectInput) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$SelectInput.error);
      return Unit;
    };
  }
  function SelectInput$render$lambda$lambda_0(this$SelectInput) {
    return function ($receiver) {
      select($receiver, 'form-control', SelectInput$render$lambda$lambda$lambda(this$SelectInput));
      if (!isBlank(this$SelectInput.placeholderText)) {
        var $receiver_0 = $receiver.attributes;
        var key = 'placeholder';
        var value = this$SelectInput.placeholderText;
        $receiver_0.put_xwzc9p$(key, value);
      }
      if (!isBlank(this$SelectInput.error)) {
        span($receiver, 'help-block', SelectInput$render$lambda$lambda$lambda_0(this$SelectInput));
      }
      return Unit;
    };
  }
  function SelectInput$render$lambda(this$SelectInput) {
    return function ($receiver) {
      if (!isBlank(this$SelectInput.error)) {
        set_classes($receiver, plus(get_classes($receiver), 'has-error'));
      }
      if (!isBlank(this$SelectInput.label)) {
        label($receiver, 'col-md-3', SelectInput$render$lambda$lambda(this$SelectInput));
      }
      div_0($receiver, 'col-md-9', SelectInput$render$lambda$lambda_0(this$SelectInput));
      set_onBlurFunction($receiver, this$SelectInput.blur);
      set_onChangeFunction($receiver, this$SelectInput.change);
      return Unit;
    };
  }
  SelectInput.prototype.render_9mbe17$ = function (consumer) {
    return div(consumer, 'form-group', SelectInput$render$lambda(this));
  };
  function SelectInput_init$lambda(it) {
    return Unit;
  }
  function SelectInput_init$lambda_0(it) {
    return Unit;
  }
  SelectInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectInput', interfaces: [Komponent]};
  function TextInput(inputId, label, inputValue, inputType, placeholderText, error, readOnly, labelWidth, blur, change) {
    if (label === void 0)
      label = '';
    if (inputValue === void 0)
      inputValue = '';
    if (inputType === void 0)
      inputType = InputType.text;
    if (placeholderText === void 0)
      placeholderText = '';
    if (error === void 0)
      error = '';
    if (readOnly === void 0)
      readOnly = false;
    if (labelWidth === void 0)
      labelWidth = 3;
    if (blur === void 0)
      blur = TextInput_init$lambda;
    if (change === void 0)
      change = TextInput_init$lambda_0;
    Komponent.call(this);
    this.inputId = inputId;
    this.label = label;
    this.inputValue = inputValue;
    this.inputType = inputType;
    this.placeholderText = placeholderText;
    this.error = error;
    this.readOnly = readOnly;
    this.labelWidth = labelWidth;
    this.blur = blur;
    this.change = change;
  }
  function TextInput$render$lambda$lambda(this$TextInput) {
    return function ($receiver) {
      set_for_($receiver, this$TextInput.inputId);
      $receiver.unaryPlus_pdl1vz$(this$TextInput.label);
      return Unit;
    };
  }
  function TextInput$render$lambda$lambda$lambda(this$TextInput) {
    return function ($receiver) {
      set_id($receiver, this$TextInput.inputId);
      $receiver.name = this$TextInput.inputId;
      $receiver.type = this$TextInput.inputType;
      $receiver.value = this$TextInput.inputValue;
      $receiver.readonly = this$TextInput.readOnly;
      return Unit;
    };
  }
  function TextInput$render$lambda$lambda$lambda_0(this$TextInput) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$TextInput.error);
      return Unit;
    };
  }
  function TextInput$render$lambda$lambda_0(this$TextInput) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, 'form-control', TextInput$render$lambda$lambda$lambda(this$TextInput));
      if (!isBlank(this$TextInput.placeholderText)) {
        var $receiver_0 = $receiver.attributes;
        var key = 'placeholder';
        var value = this$TextInput.placeholderText;
        $receiver_0.put_xwzc9p$(key, value);
      }
      if (!isBlank(this$TextInput.error)) {
        span($receiver, 'help-block', TextInput$render$lambda$lambda$lambda_0(this$TextInput));
      }
      return Unit;
    };
  }
  function TextInput$render$lambda(this$TextInput) {
    return function ($receiver) {
      if (!isBlank(this$TextInput.error)) {
        set_classes($receiver, plus(get_classes($receiver), 'has-error'));
      }
      if (!isBlank(this$TextInput.label)) {
        label($receiver, 'col-md-' + this$TextInput.labelWidth, TextInput$render$lambda$lambda(this$TextInput));
      }
      div_0($receiver, 'col-md-' + (12 - this$TextInput.labelWidth | 0), TextInput$render$lambda$lambda_0(this$TextInput));
      set_onBlurFunction($receiver, this$TextInput.blur);
      set_onKeyUpFunction($receiver, this$TextInput.change);
      return Unit;
    };
  }
  TextInput.prototype.render_9mbe17$ = function (consumer) {
    return div_1(consumer, 'form-group', TextInput$render$lambda(this));
  };
  function TextInput_init$lambda(it) {
    return Unit;
  }
  function TextInput_init$lambda_0(it) {
    return Unit;
  }
  TextInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextInput', interfaces: [Komponent]};
  function Table(headers, rows, rowRenderer) {
    Komponent.call(this);
    this.headers = headers;
    this.rows = rows;
    this.rowRenderer = rowRenderer;
  }
  function Table$render$lambda$lambda$lambda$lambda(closure$header) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$header);
      return Unit;
    };
  }
  function Table$render$lambda$lambda$lambda(this$Table) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = this$Table.headers;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var header = tmp$[tmp$_0];
        th($receiver, void 0, void 0, Table$render$lambda$lambda$lambda$lambda(header));
      }
      return Unit;
    };
  }
  function Table$render$lambda$lambda(this$Table) {
    return function ($receiver) {
      tr_1($receiver, void 0, Table$render$lambda$lambda$lambda(this$Table));
      return Unit;
    };
  }
  function Table$render$lambda$lambda_0(this$Table) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Table.rows.iterator();
      while (tmp$.hasNext()) {
        var row = tmp$.next();
        this$Table.rowRenderer($receiver, row);
      }
      return Unit;
    };
  }
  function Table$render$lambda(this$Table) {
    return function ($receiver) {
      thead($receiver, void 0, Table$render$lambda$lambda(this$Table));
      tbody($receiver, void 0, Table$render$lambda$lambda_0(this$Table));
      return Unit;
    };
  }
  Table.prototype.render_9mbe17$ = function (consumer) {
    return table_0(consumer, 'table table-condensed table-hover', Table$render$lambda(this));
  };
  Table.$metadata$ = {kind: Kind_CLASS, simpleName: 'Table', interfaces: [Komponent]};
  var nextCallbackId;
  function nextCallbackId_0() {
    return nextCallbackId = nextCallbackId.inc(), nextCallbackId;
  }
  function CommandDispatcher() {
    CommandDispatcher_instance = this;
    this.commands = HashMap_init();
    this.loginListener = null;
    this.callbacks = LinkedHashMap_init();
    var $receiver = this.commands;
    var value = getCallableRef('login', function ($receiver, ws, tk) {
      return $receiver.login_389r8l$(ws, tk), Unit;
    }.bind(null, this));
    $receiver.put_xwzc9p$('LOGIN', value);
    this.commands.put_xwzc9p$('ALERT', CommandDispatcher_init$lambda);
    var $receiver_0 = this.commands;
    var key = 'RESPONSE';
    $receiver_0.put_xwzc9p$(key, CommandDispatcher_init$lambda_0(this));
    var $receiver_1 = this.commands;
    var key_0 = 'PASSWORD_UPDATED';
    $receiver_1.put_xwzc9p$(key_0, CommandDispatcher_init$lambda_1);
    var $receiver_2 = this.commands;
    var key_1 = 'UNLOCKED';
    $receiver_2.put_xwzc9p$(key_1, CommandDispatcher_init$lambda_2);
    this.commands.put_xwzc9p$('BLOCKED', CommandDispatcher_init$lambda_3);
  }
  CommandDispatcher.prototype.login_389r8l$ = function (ws, tk) {
    var ll = this.loginListener;
    if (ll != null) {
      ll(ws, tk);
    }
  };
  CommandDispatcher.prototype.handle_yw3f44$ = function (ws, msg) {
    var tmp$;
    var tk = new Tokenizer(msg);
    var cmd = tk.next();
    tmp$ = this.commands.get_11rb$(cmd);
    if (tmp$ == null) {
      throw IllegalStateException_init("Don't know how to handle command [" + cmd + ']');
    }
    var command = tmp$;
    command(ws, tk);
  };
  CommandDispatcher.prototype.setLoginListener_kfkw3g$ = function (func) {
    this.loginListener = func;
  };
  function CommandDispatcher_init$lambda(ws, tk) {
    Modal_getInstance().showAlert_6hosri$(tk.next(), tk.next());
    return Unit;
  }
  function CommandDispatcher_init$lambda_0(this$CommandDispatcher) {
    return function (ws, tk) {
      var tmp$;
      var callbackId = tk.next();
      (tmp$ = this$CommandDispatcher.callbacks.get_11rb$(callbackId)) != null ? tmp$(ws, tk) : null;
      this$CommandDispatcher.callbacks.remove_11rb$(callbackId);
      return Unit;
    };
  }
  function CommandDispatcher_init$lambda_1(ws, tk) {
    Modal_getInstance().showAlert_6hosri$('Success', 'Password successfully updated!');
    return Unit;
  }
  function CommandDispatcher_init$lambda_2(ws, tk) {
    var tmp$;
    UserState_getInstance().readOnly = false;
    UserState_getInstance().obtainedLock = false;
    var currentGroupId = (tmp$ = UserState_getInstance().currentGroup) != null ? tmp$.id : null;
    UserState_getInstance().loadData_61zpoe$(tk.next());
    if (currentGroupId != null) {
      var tmp$_0;
      UserState_getInstance().currentGroup = (tmp$_0 = UserState_getInstance().topGroup) != null ? tmp$_0.findById_s8cxhz$(currentGroupId) : null;
    }
    mainComponent.update();
    return Unit;
  }
  function CommandDispatcher_init$lambda_3(ws, tk) {
    UserState_getInstance().readOnly = true;
    UserState_getInstance().obtainedLock = false;
    mainComponent.update();
    return Unit;
  }
  CommandDispatcher.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CommandDispatcher', interfaces: []};
  var CommandDispatcher_instance = null;
  function CommandDispatcher_getInstance() {
    if (CommandDispatcher_instance === null) {
      new CommandDispatcher();
    }
    return CommandDispatcher_instance;
  }
  function Tokenizer(txt, seperator, escape) {
    Tokenizer$Companion_getInstance();
    if (txt === void 0)
      txt = '';
    if (seperator === void 0)
      seperator = 126;
    if (escape === void 0)
      escape = 96;
    this.txt = txt;
    this.seperator = toBoxedChar(seperator);
    this.escape = toBoxedChar(escape);
    this.index = 0;
  }
  Tokenizer.prototype.done = function () {
    return this.index >= this.txt.length;
  };
  Tokenizer.prototype.next = function () {
    var result = StringBuilder_init();
    var escaped = false;
    if (this.done()) {
      return '';
    }
    while (!this.done()) {
      var ch = this.txt.charCodeAt(this.index);
      if (escaped) {
        result.append_s8itvh$(ch);
        escaped = false;
      }
       else {
        if (ch === unboxChar(this.escape))
          escaped = true;
        else if (ch === unboxChar(this.seperator)) {
          this.index = this.index + 1 | 0;
          return result.toString();
        }
         else {
          result.append_s8itvh$(ch);
        }
      }
      this.index = this.index + 1 | 0;
    }
    return result.toString();
  };
  Tokenizer.prototype.tokenize_vqirvp$ = function (parts) {
    var tmp$;
    var result = StringBuilder_init();
    for (tmp$ = 0; tmp$ !== parts.length; ++tmp$) {
      var part = parts[tmp$];
      if (result.length > 0) {
        result.append_s8itvh$(unboxChar(this.seperator));
      }
      result.append_gw00v9$(this.escape_61zpoe$(part));
    }
    return result.toString();
  };
  Tokenizer.prototype.toString = function () {
    return 'Tokenizer(index=' + this.index + ", txt='" + this.txt + "')";
  };
  Tokenizer.prototype.escape_61zpoe$ = function (txt) {
    var tmp$;
    var result = StringBuilder_init();
    tmp$ = txt.length - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      var ch = txt.charCodeAt(index);
      if (ch === unboxChar(this.escape))
        result.append_gw00v9$(String.fromCharCode(unboxChar(this.escape)) + String.fromCharCode(unboxChar(this.escape)));
      else if (ch === unboxChar(this.seperator))
        result.append_gw00v9$(String.fromCharCode(unboxChar(this.escape)) + String.fromCharCode(unboxChar(this.seperator)));
      else {
        result.append_s8itvh$(ch);
      }
    }
    return result.toString();
  };
  function Tokenizer$Companion() {
    Tokenizer$Companion_instance = this;
  }
  Tokenizer$Companion.prototype.tokenize_vqirvp$ = function (parts) {
    var tokenizer = new Tokenizer();
    return tokenizer.tokenize_vqirvp$(parts.slice());
  };
  Tokenizer$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Tokenizer$Companion_instance = null;
  function Tokenizer$Companion_getInstance() {
    if (Tokenizer$Companion_instance === null) {
      new Tokenizer$Companion();
    }
    return Tokenizer$Companion_instance;
  }
  Tokenizer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Tokenizer', interfaces: []};
  function WebSocketConnection() {
    WebSocketConnection_instance = this;
    this.websocket = null;
    this.loadingCalls = 0;
    this.interval = 0;
  }
  function WebSocketConnection$open$lambda(closure$ws, this$WebSocketConnection) {
    return function (it) {
      this$WebSocketConnection.onOpen_2k9zmk$(closure$ws, it);
      return Unit;
    };
  }
  function WebSocketConnection$open$lambda_0(closure$ws, this$WebSocketConnection) {
    return function (it) {
      this$WebSocketConnection.onMessage_2k9zmk$(closure$ws, it);
      return Unit;
    };
  }
  function WebSocketConnection$open$lambda_1(closure$ws, this$WebSocketConnection) {
    return function (it) {
      return this$WebSocketConnection.onClose_2k9zmk$(closure$ws, it);
    };
  }
  function WebSocketConnection$open$lambda_2(closure$ws, this$WebSocketConnection) {
    return function (it) {
      return this$WebSocketConnection.onError_2k9zmk$(closure$ws, it);
    };
  }
  WebSocketConnection.prototype.open = function () {
    this.close();
    if (contains(window.location.hostname, 'localhost') || contains(window.location.hostname, '192.168')) {
      this.websocket = new WebSocket('ws://' + window.location.hostname + ':' + window.location.port + '/ws');
    }
     else {
      this.websocket = new WebSocket('wss://' + window.location.hostname + '/ws');
    }
    var ws = this.websocket;
    if (ws != null) {
      ws.onopen = WebSocketConnection$open$lambda(ws, this);
      ws.onmessage = WebSocketConnection$open$lambda_0(ws, this);
      ws.onclose = WebSocketConnection$open$lambda_1(ws, this);
      ws.onerror = WebSocketConnection$open$lambda_2(ws, this);
    }
  };
  WebSocketConnection.prototype.close = function () {
    var tmp$;
    (tmp$ = this.websocket) != null ? (tmp$.close(-1 | 0, 'Application closed socket.'), Unit) : null;
  };
  function WebSocketConnection$onOpen$lambda(this$WebSocketConnection, closure$ws) {
    return function () {
      var actualWs = this$WebSocketConnection.websocket;
      if (actualWs != null) {
        closure$ws.send('OK');
      }
       else {
        window.clearInterval(this$WebSocketConnection.interval);
        Modal_getInstance().showAlert_6hosri$('Error', 'Connection to the server was lost!\nPlease try again later.');
        WebSocketConnection_getInstance().loading_o14v8n$();
        this$WebSocketConnection.reconnect();
      }
      return Unit;
    };
  }
  WebSocketConnection.prototype.onOpen_2k9zmk$ = function (ws, event) {
    var tmp$, tmp$_0;
    WebSocketConnection_getInstance().doneLoading();
    if (UserState_getInstance().loginname != null && UserState_getInstance().loginPasswordHash != null) {
      tmp$ = UserState_getInstance().loginname;
      if (tmp$ == null) {
        throw IllegalStateException_init('Whut!');
      }
      tmp$_0 = UserState_getInstance().loginPasswordHash;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Whut!');
      }
      this.send_vqirvp$(['LOGIN', tmp$, tmp$_0]);
    }
    this.interval = window.setInterval(WebSocketConnection$onOpen$lambda(this, ws), 10000);
  };
  function WebSocketConnection$reconnect$lambda(this$WebSocketConnection) {
    return function () {
      this$WebSocketConnection.reconnect();
      return Unit;
    };
  }
  WebSocketConnection.prototype.reconnect = function () {
    var actualWs = this.websocket;
    if (actualWs != null) {
      Modal_getInstance().showAlert_6hosri$('Succes', 'Connection with the server was restored!');
    }
     else {
      this.open();
      window.setTimeout(WebSocketConnection$reconnect$lambda(this), 1000);
    }
  };
  WebSocketConnection.prototype.onMessage_2k9zmk$ = function (ws, event) {
    if (Kotlin.isType(event, MessageEvent)) {
      var data = event.data;
      if (typeof data === 'string') {
        CommandDispatcher_getInstance().handle_yw3f44$(ws, data);
      }
    }
  };
  WebSocketConnection.prototype.onClose_2k9zmk$ = function (ws, event) {
    this.websocket = null;
    return 'dynamic';
  };
  WebSocketConnection.prototype.onError_2k9zmk$ = function (ws, event) {
    println('Error websocket! ' + ws);
    this.websocket = null;
    return 'dynamic';
  };
  WebSocketConnection.prototype.send_61zpoe$ = function (message) {
    var tmp$;
    (tmp$ = this.websocket) != null ? (tmp$.send(message), Unit) : null;
    if (this.websocket == null) {
      if (!UserState_getInstance().loggedIn) {
        UserState_getInstance().clear();
      }
      Modal_getInstance().showAlert_6hosri$('Error', 'Cannot connect to the server!');
    }
  };
  WebSocketConnection.prototype.send_vqirvp$ = function (args) {
    this.send_61zpoe$(Tokenizer$Companion_getInstance().tokenize_vqirvp$(args.slice()));
  };
  WebSocketConnection.prototype.lock_kfkw3g$ = function (callback) {
    var nextId = nextCallbackId_0().toString();
    CommandDispatcher_getInstance().callbacks.put_xwzc9p$(nextId, callback);
    this.send_61zpoe$(Tokenizer$Companion_getInstance().tokenize_vqirvp$(['LOCK', nextId]));
  };
  function WebSocketConnection$getLoadingDiv$lambda($receiver) {
    set_id($receiver, 'loading_div');
    $receiver.unaryPlus_pdl1vz$('Loading&8230;');
    return Unit;
  }
  WebSocketConnection.prototype.getLoadingDiv = function () {
    var tmp$, tmp$_0;
    var result = document.getElementById('loading_div');
    if (result == null) {
      result = div(get_create(document), 'loading', WebSocketConnection$getLoadingDiv$lambda);
      (tmp$ = document.body) != null ? tmp$.appendChild(result) : null;
    }
    return Kotlin.isType(tmp$_0 = result, HTMLElement) ? tmp$_0 : throwCCE();
  };
  function WebSocketConnection$loadingWork$lambda() {
    return Unit;
  }
  function WebSocketConnection$loadingWork$lambda$lambda(closure$callback, this$WebSocketConnection) {
    return function (it) {
      try {
        closure$callback();
      }
      finally {
        this$WebSocketConnection.doneLoading();
      }
      return Unit;
    };
  }
  function WebSocketConnection$loadingWork$lambda_0(closure$callback, this$WebSocketConnection) {
    return function (it) {
      window.requestAnimationFrame(WebSocketConnection$loadingWork$lambda$lambda(closure$callback, this$WebSocketConnection));
      return Unit;
    };
  }
  WebSocketConnection.prototype.loadingWork_o14v8n$ = function (callback) {
    if (callback === void 0)
      callback = WebSocketConnection$loadingWork$lambda;
    this.loadingCalls = this.loadingCalls + 1 | 0;
    if (this.loadingCalls >= 1) {
      this.getLoadingDiv().style.display = 'block';
    }
    window.requestAnimationFrame(WebSocketConnection$loadingWork$lambda_0(callback, this));
  };
  function WebSocketConnection$loading$lambda() {
    return Unit;
  }
  WebSocketConnection.prototype.loading_o14v8n$ = function (callback) {
    if (callback === void 0)
      callback = WebSocketConnection$loading$lambda;
    this.loadingCalls = this.loadingCalls + 1 | 0;
    if (this.loadingCalls >= 1) {
      this.getLoadingDiv().style.display = 'block';
    }
    try {
      callback();
    }
    finally {
      this.doneLoading();
    }
  };
  WebSocketConnection.prototype.doneLoading = function () {
    if (this.loadingCalls > 0) {
      this.loadingCalls = this.loadingCalls - 1 | 0;
    }
    if (this.loadingCalls === 0) {
      this.getLoadingDiv().style.display = 'none';
    }
  };
  WebSocketConnection.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WebSocketConnection', interfaces: []};
  var WebSocketConnection_instance = null;
  function WebSocketConnection_getInstance() {
    if (WebSocketConnection_instance === null) {
      new WebSocketConnection();
    }
    return WebSocketConnection_instance;
  }
  var package$spm = _.spm || (_.spm = {});
  package$spm.main = main;
  var package$crypt = package$spm.crypt || (package$spm.crypt = {});
  Object.defineProperty(package$crypt, 'Aes', {get: Aes_getInstance});
  Object.defineProperty(Group, 'Companion', {get: Group$Companion_getInstance});
  var package$model = package$spm.model || (package$spm.model = {});
  package$model.Group_init_h3dt5e$ = Group_init;
  package$model.Group_init_xlec65$ = Group_init_0;
  package$model.Group = Group;
  package$model.HistoryEntry_init_xlec65$ = HistoryEntry_init;
  package$model.HistoryEntry = HistoryEntry;
  Object.defineProperty(Password, 'Companion', {get: Password$Companion_getInstance});
  package$model.Password_init_1pjq3o$ = Password_init;
  package$model.Password_init_8avi72$ = Password_init_0;
  package$model.Password_init_ux8i1f$ = Password_init_1;
  package$model.Password = Password;
  var package$state = package$spm.state || (package$spm.state = {});
  Object.defineProperty(package$state, 'UserState', {get: UserState_getInstance});
  var package$util = package$spm.util || (package$spm.util = {});
  package$util.formatted_t5kl13$ = formatted;
  package$util.trimmed_hpg8up$ = trimmed;
  package$util.copyToClipboard_ugp1mi$ = copyToClipboard;
  Object.defineProperty(package$util, 'Version', {get: Version_getInstance});
  var package$view = package$spm.view || (package$spm.view = {});
  package$view.ChangePassword = ChangePassword;
  package$view.Container = Container;
  package$view.GroupCommands = GroupCommands;
  package$view.GroupOverview = GroupOverview;
  Object.defineProperty(LoginTab, 'LOGIN', {get: LoginTab$LOGIN_getInstance});
  Object.defineProperty(LoginTab, 'REGISTER', {get: LoginTab$REGISTER_getInstance});
  package$view.LoginTab = LoginTab;
  package$view.LoginForm = LoginForm;
  package$view.Login = Login;
  package$view.Main = Main;
  package$view.ModalComponent = ModalComponent;
  package$view.AlertComponent = AlertComponent;
  Object.defineProperty(package$view, 'Modal', {get: Modal_getInstance});
  package$view.Navbar = Navbar;
  Object.defineProperty(package$view, 'Notify', {get: Notify_getInstance});
  package$view.RemoveHistoryEntryConfirm = RemoveHistoryEntryConfirm;
  package$view.ClearHistoryConfirm = ClearHistoryConfirm;
  package$view.PasswordEditor = PasswordEditor;
  package$view.PasswordGenerator = PasswordGenerator;
  package$view.RemovePasswordConfirm = RemovePasswordConfirm;
  package$view.RemoveGroupConfirm = RemoveGroupConfirm;
  package$view.GroupNameEdit = GroupNameEdit;
  package$view.PasswordOverview = PasswordOverview;
  package$view.passwordTable_vj3h27$ = passwordTable;
  package$view.PasswordOverviewRow = PasswordOverviewRow;
  package$view.SearchResult = SearchResult;
  Object.defineProperty(package$view, 'Styles', {get: Styles_getInstance});
  var package$button = package$view.button || (package$view.button = {});
  package$button.PasswordButton = PasswordButton;
  var package$input = package$view.input || (package$view.input = {});
  package$input.SelectInput = SelectInput;
  package$input.TextInput = TextInput;
  var package$table = package$view.table || (package$view.table = {});
  package$table.Table = Table;
  var package$ws = package$spm.ws || (package$spm.ws = {});
  package$ws.nextCallbackId = nextCallbackId_0;
  Object.defineProperty(package$ws, 'CommandDispatcher', {get: CommandDispatcher_getInstance});
  Object.defineProperty(Tokenizer, 'Companion', {get: Tokenizer$Companion_getInstance});
  package$ws.Tokenizer = Tokenizer;
  Object.defineProperty(package$ws, 'WebSocketConnection', {get: WebSocketConnection_getInstance});
  mainComponent = new Main();
  basic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  special = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%*()_+-={}[]:"|;\'\\<>?,./';
  specialNumbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%*()_+-={}[]:"|;\'\\<>?,./0123456789';
  nextCallbackId = L0;
  main();
  return _;
}(typeof spm === 'undefined' ? {} : spm, kotlin, komp, this['kotlinx-html-js']);

//# sourceMappingURL=spm.js.map
