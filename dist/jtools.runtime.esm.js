/*!
 * jtools v0.1.3
 * jlb web team
 */
import regeneratorRuntime from 'regenerator-runtime';

// 7.1.4 ToInteger

// 7.2.1 RequireObjectCoercible(argument)

// 7.1.4 ToInteger
var ceil$1 = Math.ceil;
var floor$1 = Math.floor;
var _toInteger$1 = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined$1 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction$1 = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _isObject$1 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _fails$1 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails$1(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var _global$1 = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var document$1 = _global$1.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject$1(document$1) && _isObject$1(document$1.createElement);

// Thank's IE8 for his funny defineProperty
var _descriptors$1 = !_fails$1(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$2 = _global$1.document;
// typeof document.createElement is 'object' in old IE
var is$1 = _isObject$1(document$2) && _isObject$1(document$2.createElement);
var _domCreate$1 = function (it) {
  return is$1 ? document$2.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors$1 && !_fails$1(function () {
  return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
});

var _anObject$1 = function (it) {
  if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
  return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$1 = function (it, S) {
  if (!_isObject$1(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$1 = Object.defineProperty;

var f$1 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject$1(O);
  P = _toPrimitive$1(P, true);
  _anObject$1(Attributes);
  if (_ie8DomDefine$1) try {
    return dP$1(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp$1 = {
	f: f$1
};

var _propertyDesc$1 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _core$1 = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1$1 = _core$1.version;

// optional / simple context binding

var _ctx$1 = function (fn, that, length) {
  _aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _hide$1 = _descriptors$1 ? function (object, key, value) {
  return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has$1 = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};

var toString$2 = {}.toString;

var _cof$1 = function (it) {
  return toString$2.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof$1(it) == 'String' ? it.split('') : Object(it);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof$1(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject$1 = function (it) {
  return _iobject$1(_defined$1(it));
};

// 7.1.15 ToLength

var min$2 = Math.min;
var _toLength$1 = function (it) {
  return it > 0 ? min$2(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max$1 = Math.max;
var min$3 = Math.min;
var _toAbsoluteIndex$1 = function (index, length) {
  index = _toInteger$1(index);
  return index < 0 ? max$1(index + length, 0) : min$3(index, length);
};

var _library$1 = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global$1[SHARED] || (_global$1[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core$1.version,
  mode: 'pure',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var _shared$1 = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global$1[SHARED] || (_global$1[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core$1.version,
  mode: 'pure',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id$1 = 0;
var px$1 = Math.random();
var _uid$1 = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px$1).toString(36));
};

var shared = _shared$1('keys');

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject$1($this);
    var length = _toLength$1(O.length);
    var index = _toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var shared$1 = _shared$1('keys');

var _sharedKey$1 = function (key) {
  return shared$1[key] || (shared$1[key] = _uid$1(key));
};

var IE_PROTO = _sharedKey$1('IE_PROTO');

// IE 8- don't enum bug keys

var arrayIndexOf$1 = _arrayIncludes$1(false);
var IE_PROTO$1 = _sharedKey$1('IE_PROTO');

var _objectKeysInternal$1 = function (object, names) {
  var O = _toIobject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has$1(O, key = names[i++])) {
    ~arrayIndexOf$1(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys$1 = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys$1 = Object.keys || function keys(O) {
  return _objectKeysInternal$1(O, _enumBugKeys$1);
};

var document$3 = _global$1.document;
var _html = document$3 && document$3.documentElement;

var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject$1(O);
  var keys = _objectKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp$1.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$4 = _global$1.document;
var _html$1 = document$4 && document$4.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$2 = _sharedKey$1('IE_PROTO');

var _wks = createCommonjsModule(function (module) {
var store = _shared$1('wks');

var Symbol = _global$1.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$1 = createCommonjsModule(function (module) {
var store = _shared$1('wks');

var Symbol = _global$1.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
};

$exports.store = store;
});

var TAG = _wks$1('toStringTag');

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$3 = _sharedKey$1('IE_PROTO');
var Empty$1 = function () { /* empty */ };
var PROTOTYPE$2 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict$1 = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate$1('iframe');
  var i = _enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html$1.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict$1 = iframeDocument.F;
  while (i--) delete createDict$1[PROTOTYPE$2][_enumBugKeys$1[i]];
  return createDict$1();
};

var _objectCreate$1 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty$1[PROTOTYPE$2] = _anObject$1(O);
    result = new Empty$1();
    Empty$1[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$3] = O;
  } else result = createDict$1();
  return Properties === undefined ? result : _objectDps$1(result, Properties);
};

var def$1 = _objectDp$1.f;

var TAG$1 = _wks$1('toStringTag');

var _setToStringTag$1 = function (it, tag, stat) {
  if (it && !_has$1(it = stat ? it : it.prototype, TAG$1)) def$1(it, TAG$1, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide$1(IteratorPrototype, _wks$1('iterator'), function () { return this; });

// 7.1.13 ToObject(argument)

var _toObject$1 = function (it) {
  return Object(_defined$1(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$4 = _sharedKey$1('IE_PROTO');

var PROTOTYPE$3 = 'prototype';

var $export$1 = function (type, name, source) {
  var IS_FORCED = type & $export$1.F;
  var IS_GLOBAL = type & $export$1.G;
  var IS_STATIC = type & $export$1.S;
  var IS_PROTO = type & $export$1.P;
  var IS_BIND = type & $export$1.B;
  var IS_WRAP = type & $export$1.W;
  var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
  var expProto = exports[PROTOTYPE$3];
  var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$3];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has$1(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx$1(out, _global$1)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE$3] = C[PROTOTYPE$3];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export$1.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
    }
  }
};
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library`
var _export$1 = $export$1;

var _redefine$1 = _hide$1;

var _iterators$1 = {};

var IteratorPrototype$1 = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide$1(IteratorPrototype$1, _wks$1('iterator'), function () { return this; });

var _iterCreate$1 = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate$1(IteratorPrototype$1, { next: _propertyDesc$1(1, next) });
  _setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$5 = _sharedKey$1('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo$1 = Object.getPrototypeOf || function (O) {
  O = _toObject$1(O);
  if (_has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};

var ITERATOR = _wks$1('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

// true  -> String#at
// false -> String#codePointAt
var _stringAt$1 = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined$1(that));
    var i = _toInteger$1(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var ITERATOR$1 = _wks$1('iterator');
var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR$1 = '@@iterator';
var KEYS$1 = 'keys';
var VALUES$1 = 'values';

var returnThis$1 = function () { return this; };

var _iterDefine$1 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate$1(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY$1 && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS$1: return function keys() { return new Constructor(this, kind); };
      case VALUES$1: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES$1;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$1] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag$1(IteratorPrototype, TAG, true);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$1])) {
    _hide$1(proto, ITERATOR$1, $default);
  }
  // Plug for library
  _iterators$1[NAME] = $default;
  _iterators$1[TAG] = returnThis$1;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES$1),
      keys: IS_SET ? $default : getMethod(KEYS$1),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine$1(proto, key, methods[key]);
    } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt$1(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine$1(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep$1 = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine$1(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject$1(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep$1(1);
  }
  if (kind == 'keys') return _iterStep$1(0, index);
  if (kind == 'values') return _iterStep$1(0, O[index]);
  return _iterStep$1(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators$1.Arguments = _iterators$1.Array;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject$1(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep$1(1);
  }
  if (kind == 'keys') return _iterStep$1(0, index);
  if (kind == 'values') return _iterStep$1(0, O[index]);
  return _iterStep$1(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators$1.Arguments = _iterators$1.Array;

var TO_STRING_TAG = _wks$1('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global$1[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide$1(proto, TO_STRING_TAG, NAME);
  _iterators$1[NAME] = _iterators$1.Array;
}

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$2 = _wks$1('toStringTag');
// ES3 wrong here
var ARG = _cof$1(function () { return arguments; }()) == 'Arguments';

// check on default Array iterator

var ITERATOR$2 = _wks$1('iterator');

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$3 = _wks$1('toStringTag');
// ES3 wrong here
var ARG$1 = _cof$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof$1 = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet$1(O = Object(it), TAG$3)) == 'string' ? T
    // builtinTag case
    : ARG$1 ? _cof$1(O)
    // ES3 arguments fallback
    : (B = _cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$3 = _wks$1('iterator');

var core_getIteratorMethod = _core$1.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3]
    || it['@@iterator']
    || _iterators$1[_classof$1(it)];
};

// call something on iterator step with safe closing on error

var _iterCall$1 = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject$1(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject$1(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$4 = _wks$1('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter$1 = function (it) {
  return it !== undefined && (_iterators$1.Array === it || ArrayProto$1[ITERATOR$4] === it);
};

var ITERATOR$5 = _wks$1('iterator');

var core_getIteratorMethod$1 = _core$1.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$5]
    || it['@@iterator']
    || _iterators$1[_classof$1(it)];
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod$1(iterable);
  var f = _ctx$1(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter$1(iterFn)) for (length = _toLength$1(iterable.length); length > index; index++) {
    result = entries ? f(_anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall$1(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES = _wks$1('species');

// fast apply, http://jsperf.lnkit.com/fast-apply/5

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke$1 = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process$1 = _global$1.process;
var setTask = _global$1.setImmediate;
var clearTask = _global$1.clearImmediate;
var MessageChannel = _global$1.MessageChannel;
var Dispatch = _global$1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof$1(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx$1(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx$1(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx$1(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global$1.addEventListener && typeof postMessage == 'function' && !_global$1.importScripts) {
    defer = function (id) {
      _global$1.postMessage(id + '', '*');
    };
    _global$1.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate$1('script')) {
    defer = function (id) {
      _html$1.appendChild(_domCreate$1('script'))[ONREADYSTATECHANGE] = function () {
        _html$1.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx$1(run, id, 1), 0);
    };
  }
}

var process$2 = _global$1.process;
var setTask$1 = _global$1.setImmediate;
var clearTask$1 = _global$1.clearImmediate;
var MessageChannel$1 = _global$1.MessageChannel;
var Dispatch$1 = _global$1.Dispatch;
var counter$1 = 0;
var queue$1 = {};
var ONREADYSTATECHANGE$1 = 'onreadystatechange';
var defer$1, channel$1, port$1;
var run$1 = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue$1.hasOwnProperty(id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};
var listener$1 = function (event) {
  run$1.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask$1 || !clearTask$1) {
  setTask$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue$1[++counter$1] = function () {
      // eslint-disable-next-line no-new-func
      _invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer$1(counter$1);
    return counter$1;
  };
  clearTask$1 = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (_cof$1(process$2) == 'process') {
    defer$1 = function (id) {
      process$2.nextTick(_ctx$1(run$1, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer$1 = function (id) {
      Dispatch$1.now(_ctx$1(run$1, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel$1) {
    channel$1 = new MessageChannel$1();
    port$1 = channel$1.port2;
    channel$1.port1.onmessage = listener$1;
    defer$1 = _ctx$1(port$1.postMessage, port$1, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global$1.addEventListener && typeof postMessage == 'function' && !_global$1.importScripts) {
    defer$1 = function (id) {
      _global$1.postMessage(id + '', '*');
    };
    _global$1.addEventListener('message', listener$1, false);
  // IE8-
  } else if (ONREADYSTATECHANGE$1 in _domCreate$1('script')) {
    defer$1 = function (id) {
      _html$1.appendChild(_domCreate$1('script'))[ONREADYSTATECHANGE$1] = function () {
        _html$1.removeChild(this);
        run$1.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer$1 = function (id) {
      setTimeout(_ctx$1(run$1, id, 1), 0);
    };
  }
}
var _task$1 = {
  set: setTask$1,
  clear: clearTask$1
};

var Observer = _global$1.MutationObserver || _global$1.WebKitMutationObserver;
var process$3 = _global$1.process;
var Promise$1 = _global$1.Promise;
var isNode = _cof$1(process$3) == 'process';

var navigator$1 = _global$1.navigator;

var _userAgent = navigator$1 && navigator$1.userAgent || '';

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability$1(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction$1(resolve);
  this.reject = _aFunction$1(reject);
}

var f$3 = function (C) {
  return new PromiseCapability$1(C);
};

var _newPromiseCapability$1 = {
	f: f$3
};

var SPECIES$1 = _wks$1('species');

var ITERATOR$6 = _wks$1('iterator');

try {
  var riter = [7][ITERATOR$6]();
  riter['return'] = function () { };
} catch (e) { /* empty */ }

var _anInstance$1 = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf$1 = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod$1(iterable);
  var f = _ctx$1(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter$1(iterFn)) for (length = _toLength$1(iterable.length); length > index; index++) {
    result = entries ? f(_anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall$1(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$2 = _wks$1('species');
var _speciesConstructor$1 = function (O, D) {
  var C = _anObject$1(O).constructor;
  var S;
  return C === undefined || (S = _anObject$1(C)[SPECIES$2]) == undefined ? D : _aFunction$1(S);
};

var macrotask$1 = _task$1.set;
var Observer$1 = _global$1.MutationObserver || _global$1.WebKitMutationObserver;
var process$4 = _global$1.process;
var Promise$2 = _global$1.Promise;
var isNode$1 = _cof$1(process$4) == 'process';

var _microtask$1 = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$4.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$1) {
    notify = function () {
      process$4.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer$1 && !(_global$1.navigator && _global$1.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer$1(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$2 && Promise$2.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$2.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask$1.call(_global$1, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

var _perform$1 = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var navigator$2 = _global$1.navigator;

var _userAgent$1 = navigator$2 && navigator$2.userAgent || '';

var _promiseResolve$1 = function (C, x) {
  _anObject$1(C);
  if (_isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll$1 = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide$1(target, key, src[key]);
  } return target;
};

var SPECIES$3 = _wks$1('species');

var _setSpecies$1 = function (KEY) {
  var C = typeof _core$1[KEY] == 'function' ? _core$1[KEY] : _global$1[KEY];
  if (_descriptors$1 && C && !C[SPECIES$3]) _objectDp$1.f(C, SPECIES$3, {
    configurable: true,
    get: function () { return this; }
  });
};

var ITERATOR$7 = _wks$1('iterator');
var SAFE_CLOSING$1 = false;

try {
  var riter$1 = [7][ITERATOR$7]();
  riter$1['return'] = function () { SAFE_CLOSING$1 = true; };
} catch (e) { /* empty */ }

var _iterDetect$1 = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING$1) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$7]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$7] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var task = _task$1.set;
var microtask = _microtask$1();




var PROMISE = 'Promise';
var TypeError$1 = _global$1.TypeError;
var process$5 = _global$1.process;
var versions = process$5 && process$5.versions;
var v8 = versions && versions.v8 || '';
var $Promise = _global$1[PROMISE];
var isNode$2 = _classof$1(process$5) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability$1.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks$1('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$2 || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && _userAgent$1.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global$1, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform$1(function () {
        if (isNode$2) {
          process$5.emit('unhandledRejection', value, promise);
        } else if (handler = _global$1.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global$1.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$2 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(_global$1, function () {
    var handler;
    if (isNode$2) {
      process$5.emit('rejectionHandled', promise);
    } else if (handler = _global$1.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx$1($resolve, wrapper, 1), _ctx$1($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance$1(this, $Promise, PROMISE, '_h');
    _aFunction$1(executor);
    Internal.call(this);
    try {
      executor(_ctx$1($resolve, this, 1), _ctx$1($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll$1($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor$1(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$2 ? process$5.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx$1($resolve, promise, 1);
    this.reject = _ctx$1($reject, promise, 1);
  };
  _newPromiseCapability$1.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag$1($Promise, PROMISE);
_setSpecies$1(PROMISE);
Wrapper = _core$1[PROMISE];

// statics
_export$1(_export$1.S + _export$1.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export$1(_export$1.S + _export$1.F * (_library$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve$1(_library$1 && this === Wrapper ? $Promise : this, x);
  }
});
_export$1(_export$1.S + _export$1.F * !(USE_NATIVE && _iterDetect$1(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform$1(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf$1(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform$1(function () {
      _forOf$1(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

_export$1(_export$1.P + _export$1.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor$1(this, _core$1.Promise || _global$1.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve$1(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve$1(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




_export$1(_export$1.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability$1.f(this);
  var result = _perform$1(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });



var es6_object_toString = /*#__PURE__*/Object.freeze({

});

getCjsExportFromNamespace(es6_object_toString);

var $at$1 = _stringAt$1(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine$1(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at$1(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var TO_STRING_TAG$1 = _wks$1('toStringTag');

var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i$1 = 0; i$1 < DOMIterables$1.length; i$1++) {
  var NAME$1 = DOMIterables$1[i$1];
  var Collection$1 = _global$1[NAME$1];
  var proto$1 = Collection$1 && Collection$1.prototype;
  if (proto$1 && !proto$1[TO_STRING_TAG$1]) _hide$1(proto$1, TO_STRING_TAG$1, NAME$1);
  _iterators$1[NAME$1] = _iterators$1.Array;
}

var task$1 = _task$1.set;
var microtask$1 = _microtask$1();




var PROMISE$1 = 'Promise';
var TypeError$2 = _global$1.TypeError;
var process$6 = _global$1.process;
var versions$1 = process$6 && process$6.versions;
var v8$1 = versions$1 && versions$1.v8 || '';
var $Promise$1 = _global$1[PROMISE$1];
var isNode$3 = _classof$1(process$6) == 'process';
var empty$1 = function () { /* empty */ };
var Internal$1, newGenericPromiseCapability$1, OwnPromiseCapability$1, Wrapper$1;
var newPromiseCapability$1 = newGenericPromiseCapability$1 = _newPromiseCapability$1.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise$1.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks$1('species')] = function (exec) {
      exec(empty$1, empty$1);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$3 || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty$1) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8$1.indexOf('6.6') !== 0
      && _userAgent$1.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable$1 = function (it) {
  var then;
  return _isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify$1 = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask$1(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled$1(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$2('Promise-chain cycle'));
          } else if (then = isThenable$1(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled$1(promise);
  });
};
var onUnhandled$1 = function (promise) {
  task$1.call(_global$1, function () {
    var value = promise._v;
    var unhandled = isUnhandled$1(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform$1(function () {
        if (isNode$3) {
          process$6.emit('unhandledRejection', value, promise);
        } else if (handler = _global$1.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global$1.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$3 || isUnhandled$1(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled$1 = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled$1 = function (promise) {
  task$1.call(_global$1, function () {
    var handler;
    if (isNode$3) {
      process$6.emit('rejectionHandled', promise);
    } else if (handler = _global$1.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject$1 = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify$1(promise, true);
};
var $resolve$1 = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$2("Promise can't be resolved itself");
    if (then = isThenable$1(value)) {
      microtask$1(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx$1($resolve$1, wrapper, 1), _ctx$1($reject$1, wrapper, 1));
        } catch (e) {
          $reject$1.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify$1(promise, false);
    }
  } catch (e) {
    $reject$1.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise$1 = function Promise(executor) {
    _anInstance$1(this, $Promise$1, PROMISE$1, '_h');
    _aFunction$1(executor);
    Internal$1.call(this);
    try {
      executor(_ctx$1($resolve$1, this, 1), _ctx$1($reject$1, this, 1));
    } catch (err) {
      $reject$1.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal$1 = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal$1.prototype = _redefineAll$1($Promise$1.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(_speciesConstructor$1(this, $Promise$1));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$3 ? process$6.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify$1(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability$1 = function () {
    var promise = new Internal$1();
    this.promise = promise;
    this.resolve = _ctx$1($resolve$1, promise, 1);
    this.reject = _ctx$1($reject$1, promise, 1);
  };
  _newPromiseCapability$1.f = newPromiseCapability$1 = function (C) {
    return C === $Promise$1 || C === Wrapper$1
      ? new OwnPromiseCapability$1(C)
      : newGenericPromiseCapability$1(C);
  };
}

_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$1, { Promise: $Promise$1 });
_setToStringTag$1($Promise$1, PROMISE$1);
_setSpecies$1(PROMISE$1);
Wrapper$1 = _core$1[PROMISE$1];

// statics
_export$1(_export$1.S + _export$1.F * !USE_NATIVE$1, PROMISE$1, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export$1(_export$1.S + _export$1.F * (_library$1), PROMISE$1, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve$1(this === Wrapper$1 ? $Promise$1 : this, x);
  }
});
_export$1(_export$1.S + _export$1.F * !(USE_NATIVE$1 && _iterDetect$1(function (iter) {
  $Promise$1.all(iter)['catch'](empty$1);
})), PROMISE$1, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform$1(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf$1(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = _perform$1(function () {
      _forOf$1(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

_export$1(_export$1.P + _export$1.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor$1(this, _core$1.Promise || _global$1.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve$1(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve$1(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




_export$1(_export$1.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability$1.f(this);
  var result = _perform$1(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise = _core$1.Promise;

var promise$1 = promise;

/**
 * 获取图片的base64 url
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
function getImgBase64(url) {
  /* eslint-disable */
  var Img = new Image(),
      dataURL = "";
  Img.setAttribute("crossOrigin", "anonymous");
  Img.src = url;
  return new promise$1(function (resolve, reject) {
    Img.onload = function () {
      var canvas = document.createElement("canvas"),
          width = Img.width,
          height = Img.height;
      var ctx = canvas.getContext("2d");
      var scale = 1;
      ctx.scale(scale, scale);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(Img, 0, 0, width * scale, height * scale); // ctx.drawImage(img, 0, 0);
      // const dataURL = canvas.toDataURL(outputFormat);

      dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
  });
}
/**
 * @description: 获取图片的base64
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */

function getHttpBase64(url) {

  var imgUrl = url;
  window.URL = window.URL || window.webkitURL;
  var xhr = new XMLHttpRequest();
  xhr.open('get', imgUrl, true); // 至关重要

  xhr.responseType = 'blob';
  xhr.send();
  return new promise$1(function (resolve, reject) {
    xhr.onload = function () {
      if (this.status == 200) {
        // 得到一个blob对象
        var blob = this.response; // 至关重要

        var oFileReader = new FileReader();

        oFileReader.onloadend = function (e) {
          // 此处拿到的已经是 base64的图片了
          var base64 = e.target.result;
          resolve(base64);
        };

        oFileReader.readAsDataURL(blob); // ====为了在页面显示图片，可以删除====
        // var img = document.createElement('img');
        // img.onload = function (e) {
        //   window.URL.revokeObjectURL(img.src); // 清除释放
        // };
        // const src = window.URL.createObjectURL(blob);
        // img.src = src
        // console.log(src, 'oFileReader')
        // document.getElementById("container1").appendChild(img);
        // ====为了在页面显示图片，可以删除====
      }
    };
  });
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:31
 * @Description: 
 */

/**
 * 日期格式化
 * 时间规则：
 * 今天显示：xx:xx
 * 昨天显示：昨天 xx:xx
 * 一周内显示：星期x xx:xx
 * 一年内显示：xx月xx日 xx:xx
 * 更早日期显示：xx年xx月xx日 xx:xx
 * @param {*} value 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat1(value) {
  if (!value) return "";
  var time = value * 1000;
  var now = new Date().getTime();
  var year = new Date(time).getFullYear();
  var month = new Date(time).getMonth() + 1;
  var date = new Date(time).getDate();
  var hour = new Date(time).getHours();
  var min = new Date(time).getMinutes();
  var weekType = ["日", "一", "二", "三", "四", "五", "六"];
  var week = "星期" + weekType[new Date(time).getDay()];

  if (min < 10) {
    min = "0" + min;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (new Date().getDate() - new Date(time).getDate() === 0) {
    return hour + ":" + min;
  } else if (new Date().getDate() - new Date(time).getDate() === 1) {
    return "昨天 " + hour + ":" + min;
  } else if (new Date().getTime() < new Date(time).getTime() && new Date().getDate() - new Date(time).getDate() < 7 && new Date().getDay() - new Date(time).getDay() > 0) {
    return week + hour + ":" + min;
  } else if (year < new Date(now).getFullYear()) {
    return year + "年" + month + "月" + date + "日   " + hour + ":" + min;
  } else {
    return month + "月" + date + "日   " + hour + ":" + min;
  }
}

var _stringWs$1 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space$1 = '[' + _stringWs$1 + ']';
var non$1 = '\u200b\u0085';
var ltrim$1 = RegExp('^' + space$1 + space$1 + '*');
var rtrim$1 = RegExp(space$1 + space$1 + '*$');

var exporter$1 = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails$1(function () {
    return !!_stringWs$1[KEY]() || non$1[KEY]() != non$1;
  });
  var fn = exp[KEY] = FORCE ? exec(trim$1) : _stringWs$1[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export$1(_export$1.P + _export$1.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim$1 = exporter$1.trim = function (string, TYPE) {
  string = String(_defined$1(string));
  if (TYPE & 1) string = string.replace(ltrim$1, '');
  if (TYPE & 2) string = string.replace(rtrim$1, '');
  return string;
};

var _stringTrim$1 = exporter$1;

var $parseInt = _global$1.parseInt;
var $trim = _stringTrim$1.trim;

var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt(_stringWs$1 + '08') !== 8 || $parseInt(_stringWs$1 + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

var $parseInt$1 = _global$1.parseInt;
var $trim$1 = _stringTrim$1.trim;

var hex$1 = /^[-+]?0[xX]/;

var _parseInt$1 = $parseInt$1(_stringWs$1 + '08') !== 8 || $parseInt$1(_stringWs$1 + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim$1(String(str), 3);
  return $parseInt$1(string, (radix >>> 0) || (hex$1.test(string) ? 16 : 10));
} : $parseInt$1;

// 18.2.5 parseInt(string, radix)
_export$1(_export$1.G + _export$1.F * (parseInt != _parseInt$1), { parseInt: _parseInt$1 });

// 18.2.5 parseInt(string, radix)
_export$1(_export$1.G + _export$1.F * (parseInt != _parseInt$1), { parseInt: _parseInt$1 });

var _parseInt$2 = _core$1.parseInt;

var _parseInt$3 = _parseInt$2;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:38
 * @Description: 
 */

/**
 * 日期格式化
 * 时间规则：
 * 小于一分钟显示：刚刚
 * 1分钟-60分钟内显示：xx分钟前
 * 大于60分钟显示：xx小时前
 * 昨天显示：昨天 xx:xx
 * 更早日期显示：xx-xx-xx xx:xx
 * @param {*} dateTimeStamp 时间戳，单位s
 * @return {*} 格式化后的日期
 */
function dateFormat2(dateTimeStamp) {
  if (!dateTimeStamp) return "";
  dateTimeStamp = dateTimeStamp * 1000;
  var minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示

  var hour = minute * 60;
  var now = new Date().getTime(); // 获取当前时间毫秒

  var result = "";
  var diffValue = now - dateTimeStamp; // 时间差

  if (diffValue < 0) {
    return;
  }

  var minC = diffValue / minute; // 计算时间差的分，时，天，周，月

  var hourC = diffValue / hour;
  var datetime = new Date();
  datetime.setTime(dateTimeStamp);
  var Nyear = datetime.getFullYear();
  var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
  var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
  var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

  if (hourC >= 1 && hourC < 24) {
    result = " " + _parseInt$3(hourC) + "小时前";
  } else if (hourC >= 24 && hourC < 48 && new Date().getDate() - Ndate === 1) {
    result = "昨天 " + Nhour + ":" + Nminute;
  } else if (minC >= 1 && minC < 60) {
    result = " " + _parseInt$3(minC) + "分钟前";
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚";
  } else {
    result = Nyear + "-" + Nmonth + "-" + Ndate + " " + Nhour + ":" + Nminute;
  }

  return result;
}

// 7.2.2 IsArray(argument)

var _isArray$1 = Array.isArray || function isArray(arg) {
  return _cof$1(arg) == 'Array';
};

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


_export$1(_export$1.S, 'Array', { isArray: _isArray$1 });

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


_export$1(_export$1.S, 'Array', { isArray: _isArray$1 });

var isArray = _core$1.Array.isArray;

var isArray$1 = isArray;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:16:55
 * @Description:
 */

/**
 * 获取饿了么框架时间选择器时间戳
 * @param {*} time 时间
 * @param {*} type 类型  默认值 0  0 开始时间  1  结束时间
 * @returns {number|string|null} 时间戳
 */
function elDateFormat(time) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!time) {
    return null;
  }

  var timeStamp = null;

  if (isArray$1(time) && time.length > 0) {
    if (type == 1) {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(23, 59, 59, 0)) / 1000);
    } else {
      timeStamp = Math.floor(new Date(new Date(time[type]).setHours(0, 0, 0, 0)) / 1000);
    }
  } else if (isArray$1(time) && time.length == 0) {
    return null;
  } else if (!isArray$1(time)) {
    timeStamp = Math.floor(new Date(time).getTime() / 1000);
  } else {
    return null;
  }

  return timeStamp;
}

/**
 * 获取浏览器类型和版本
 * @return {string}
 * @example
 * getBrowserModel() => "Chrome:70.0.3538.102"
 */
function getBrowserModel() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s = null;
  /* eslint-disable */

  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : (s = ua.match(/micromessenger\/([\d\.]+)/)) ? sys.micromessenger = s[1] : (s = ua.match(/QQ\/([\d\.]+)/gi)) ? sys.qq = s[1] : 0; // 根据关系进行判断

  if (sys.ie) return "IE:" + sys.ie;
  if (sys.edge) return "Edge:" + sys.edge;
  if (sys.firefox) return "Firefox:" + sys.firefox;
  if (sys.chrome) return "Chrome:" + sys.chrome;
  if (sys.opera) return "Opera:" + sys.opera;
  if (sys.safari) return "Safari:" + sys.safari;
  if (sys.micromessenger) return "Micromessenger:" + sys.micromessenger;
  if (sys.qq) return "QQ:" + sys.qq;
  return "Unknown";
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 10:44:45
 * @Description: 
 */

/**
 * @description: 判断操作系统类型 安卓 苹果 浏览器等
 * @return {*} object device: 操作系统； language：当前语音
 */
var getDeviceModel = {
  device: function () {
    var u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1,
      // IE内核
      presto: u.indexOf('Presto') > -1,
      // opera内核
      webKit: u.indexOf('AppleWebKit') > -1,
      // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      // android终端
      iPhone: u.indexOf('iPhone') > -1,
      // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1,
      // 是否iPad
      webApp: u.indexOf('Safari') === -1,
      // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1,
      // 是否微信 （2015-01-22新增）
      qq: u.indexOf(' QQ') > -1 // 是否QQ

    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:59:15
 * @Description:
 */

/**
 * 删除对象里面value值为null的键值对
 * @param {*} data 接口返回的blob数据
 * @param {*} name excel名称
 * @param {*} callBack 导出成功/失败回调  回调返回{type:fail/success}  fail情况下 返回{ type: "fail", code, msg }
 */
function exportXls(data) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "jtools";
  var callBack = arguments.length > 2 ? arguments[2] : undefined;

  if (!data || data.size == 0) {
    callBack && callBack({
      type: "fail",
      msg: "数据为空"
    });
    return false;
  }

  var reader = new FileReader();
  reader.readAsText(data, "utf-8");

  reader.onload = function (e) {
    try {
      var _JSON$parse = JSON.parse(reader.result),
          code = _JSON$parse.code,
          msg = _JSON$parse.msg;

      if (code && code != 200) {
        callBack && callBack({
          type: "fail",
          code: code,
          msg: msg
        });
        return false;
      } else {
        _downFile(data, name);
      }

      callBack && callBack({
        type: "success"
      });
    } catch (error) {
      _downFile(data, name);

      callBack && callBack({
        type: "success"
      });
    }
  };
}

function _downFile(data, fileName) {
  var blob = new Blob([data], {
    type: "application/vnd.ms-excel,charset=UTF-8"
  });

  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName + ".xlsx");
  } else {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + ".xlsx";
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:19:43
 * @Description: 
 */

/**
 * 图像处理获取缩略图
 * @param   {Object}  opts - 参数对象
 * @param   {string}  opts.src - 处理源路径
 * @param   {string}  opts.type - 处理类型 2:图片 4:视频
 * @param   {string}  opts.payload - 负载参数: https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1148.4d7d176cZS0ozx
 * @param   {boolean} opts.ifSelf - 返回源路径
 * @param   {string}  opts.ossdomain - 图片对应的oss域名
 * @returns {string} 处理后的图片路径
 */
function getThumbnails() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    src: "",
    type: "",
    payload: {
      width: 750
    },
    ifSelf: true,
    ossdomain: "https://images2.bestjlb.com/"
  };
  var src = opts.src,
      type = opts.type,
      payload = opts.payload,
      ifSelf = opts.ifSelf,
      ossdomain = opts.ossdomain;
  if (!src) return "";
  if (src.indexOf("?") > -1) return src;

  if (src.indexOf(ossdomain) > -1) {
    return src.indexOf("v2jlboss") > -1 ? handleoss(true) : handleoss();
  } else {
    if (src.indexOf("jlboss") > -1) {
      return ossdomain + handleoss();
    } else if (src.indexOf("v2jlboss") > -1) {
      return ossdomain + handleoss(true);
    }
  }

  return src;

  function handleoss(oss) {
    if (type === 2 && !ifSelf) {
      return "".concat(src, "?x-oss-process=image/resize,w_").concat(payload.width, "/auto-orient,1");
    } else if (type === 4 && !ifSelf) {
      if (oss) {
        return "".concat(src, ".jpeg?x-oss-process=image/format,jpg/resize,w_").concat(payload.width, "/auto-orient,1");
      } else {
        return "".concat(src, "?x-oss-process=video/snapshot,t_1000,w_").concat(payload.width);
      }
    } else {
      return src;
    }
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:14:20
 * @Description: 
 */

/**
 * 获取默认头像
 * @param {*} userId
 */
function getDefaultAvatar() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userId: 0,
    imageDomain: ""
  },
      userId = _ref.userId,
      imageDomain = _ref.imageDomain;

  if (!imageDomain) return "";
  return imageDomain + "/photo/user_header" + (userId || 0) % 10 + ".png";
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-22 10:16:38
 * @Description:
 */

/**
 * 检查是否是emoji表情
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果 true: 是emoji表情 false: 不是emoji表情
 */
function isEmoji(value) {
  var arr = ["\uD83C[\uDF00-\uDFFF]", "\uD83D[\uDC00-\uDE4F]", "\uD83D[\uDE80-\uDEFF]"];
  return new RegExp(arr.join("|"), "g").test(value);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:34:12
 * @Description:
 */

/**
 * 校验十八位身份证号码
 * @param {*} idcard 身份证号码
 * @return {boolean} 验证结果true/false
 */
function isIDCard(idcard) {
  // 身份证号（15位或18位数字）
  var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/; // let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

  return reg.test(idcard);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-22 10:17:05
 * @Description:
 */

/**
 * @description 检查是否为特殊字符
 * @author pengyong
 * @param {string} value 正则校验的变量
 * @returns {boolean} 正则校验结果 true: 是特殊字符 false: 不是特殊字符
 */
function isSpecialChar(value) {
  var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/im;
  var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]\s]/im;
  return regEn.test(value) || regCn.test(value);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-21 19:52:26
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:39:58
 * @Description:
 */

/**
 * @description: 常用正则 cellPhone手机号码验证;landline座机;email邮件验证;domain网址验证 不精确到后缀; pwd 密码由数字和字母6-16位
 * @param {*}
 * @return {*}
 */
var Regs = {
  cellPhone: /^1[3456789][0-9]{9}$/,
  pwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
  landline: /^[0-9]{6,16}$/,
  email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,
  chinese: /^[\u4e00-\u9fa5]+$/,
  integer: /^-?\d+$/,
  floatplus: /^\d+(\.\d+)?$/,
  floatminus: /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:54:42
 * @Description: 
 */

/**
 * utf16字符串转实体字符
 * @param {string} str 待编译的字符串
 */
function utf16toEntities(str) {
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("需要编译的数据类型需要是字符串类型");
    return str;
  }

  var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则

  str = str.replace(patt, function (_char) {
    var H, L, code;

    if (_char.length === 2) {
      H = _char.charCodeAt(0); // 取出高位

      L = _char.charCodeAt(1); // 取出低位

      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法

      return "&#" + code + ";";
    } else {
      return _char;
    }
  });
  return str;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:05:13
 * @Description: 
 */
/**
 * 实体字符转utf16字符串
 * @param {*} str 待解析的字符串
 */

function entitiestoUtf16(str) {
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("需要解析的数据类型需要是字符串类型");
    return str;
  } // 检测出形如&#12345;形式的字符串


  var strObj = utf16toEntities(str);
  var patt = /&#\d+;/g;
  var H, L, code;
  var arr = strObj.match(patt) || [];

  for (var i = 0; i < arr.length; i++) {
    code = arr[i];
    code = code.replace("&#", "").replace(";", ""); // 高位

    H = Math.floor((code - 0x10000) / 0x400) + 0xd800; // 低位

    L = (code - 0x10000) % 0x400 + 0xdc00;
    code = "&#" + code + ";";
    var s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }

  return strObj;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:02:21
 * @Description: 
 */
/**
 * @description 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/解析的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/解析后的字符串
 * @example
 * handleEmoji("😃", "encode") => "&#128515;"
 * handleEmoji("&#128522;", "decode") => "😊"
 */

function handleEmoji() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "encode";
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("handleEmoji数据类型需要是字符串类型");
    return str;
  }

  if (type === "encode") {
    return utf16toEntities(str);
  } else if (type === "decode") {
    return entitiestoUtf16(str);
  } else {
    return str;
  }
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:02:48
 * @Description: 
 */
/**
 * @description 处理文本，客户端无法识别h5的br标签和空格符，因此需要处理br标签为\n和空格符为 ''
 * @param {string} str 需要编译/转义的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/转义后的字符串
 * @example
 * handleText("<br>&nbsp;&lt;&gt;", "encode") => "\n <>"
 * handleText("\n <>", "decode") => "<br>&nbsp;&lt;&gt;"
 */

function handleText() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "encode";
  if (!str) return "";

  if (typeof str !== "string") {
    console.error("handleText数据类型需要是字符串类型");
    return str;
  }
  /* eslint-disable no-unused-vars */


  var newStr = null;

  if (type === "encode") {
    newStr = entitiestoUtf16(str).replace(/<br>/gi, "\n").replace(/&nbsp;/g, " ").replace("&lt;", "<").replace("&gt;", ">");
  } else if (type === "decode") {
    newStr = utf16toEntities(str).replace("<", "&lt;").replace(">", "&gt;").replace(/\n|\r\n/g, "<br>").replace(/[ ]/g, "&nbsp;");
  } else {
    return str;
  }

  return newStr;
}

var $JSON = _core$1.JSON || (_core$1.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

var stringify$1 = stringify;

// most Object methods by ES6 should accept primitives



var _objectSap$1 = function (KEY, exec) {
  var fn = (_core$1.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export$1(_export$1.S + _export$1.F * _fails$1(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap$1('keys', function () {
  return function keys(it) {
    return _objectKeys$1(_toObject$1(it));
  };
});

// 19.1.2.14 Object.keys(O)



_objectSap$1('keys', function () {
  return function keys(it) {
    return _objectKeys$1(_toObject$1(it));
  };
});

var keys = _core$1.Object.keys;

var keys$1 = keys;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 18:00:33
 * @Description: 
 */

/**
 * 删除对象里面value值为null的键值对
 * @param {*} obj 需要处理的参数
 * @return {object} 返回结果
 */
function handleParam() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (stringify$1(obj) === "{}") return {};
  var res = {};

  var arr = keys$1(obj);

  arr.forEach(function (item) {
    if (obj[item] !== null) {
      res[item] = obj[item];
    }
  });
  return res;
}

var $parseFloat = _global$1.parseFloat;
var $trim$2 = _stringTrim$1.trim;

var _parseFloat = 1 / $parseFloat(_stringWs$1 + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$2(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

var $parseFloat$1 = _global$1.parseFloat;
var $trim$3 = _stringTrim$1.trim;

var _parseFloat$1 = 1 / $parseFloat$1(_stringWs$1 + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$3(String(str), 3);
  var result = $parseFloat$1(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat$1;

// 18.2.4 parseFloat(string)
_export$1(_export$1.G + _export$1.F * (parseFloat != _parseFloat$1), { parseFloat: _parseFloat$1 });

// 18.2.4 parseFloat(string)
_export$1(_export$1.G + _export$1.F * (parseFloat != _parseFloat$1), { parseFloat: _parseFloat$1 });

var _parseFloat$2 = _core$1.parseFloat;

var _parseFloat$3 = _parseFloat$2;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 09:14:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:52:35
 * @Description:
 */

/**
 * @description: 转换文件大小 B=>KB 等
 * @param {*} bytes B
 * @return {string} String KB 等
 */
var b2size = function b2size(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  var result = _parseFloat$3((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  return result;
};
/**进位 */

function _carryBit(t, index) {
  return t * Math.pow(1024, index - 1) * 8;
}
/**降位 */


function _dropBit(t, index) {
  return t / Math.pow(1024, index - 1) / 8;
}

function _up(t, index) {
  // return t >> (index * 10)
  return t / Math.pow(1024, index);
}

function _down(t, index) {
  // return t << (index * 10)
  return t * Math.pow(1024, index);
}
/**
* 字节转换 转换成多种格式
* @param {number} b byte
*/


function bytes(target) {
  return {
    Bit: {
      toByte: function toByte() {
        return _dropBit(target, 1);
      },
      toKB: function toKB() {
        return _dropBit(target, 2);
      },
      toMB: function toMB() {
        return _dropBit(target, 3);
      },
      toGB: function toGB() {
        return _dropBit(target, 4);
      },
      toTB: function toTB() {
        return _dropBit(target, 5);
      }
    },
    Byte: {
      toBit: function toBit() {
        return _carryBit(target, 1);
      },
      toKB: function toKB() {
        return _up(target, 1);
      },
      toMB: function toMB() {
        return _up(target, 2);
      },
      toGB: function toGB() {
        return _up(target, 3);
      },
      toTB: function toTB() {
        return _up(target, 4);
      }
    },
    KB: {
      toBit: function toBit() {
        return _carryBit(target, 2);
      },
      toByte: function toByte() {
        return _down(target, 1);
      },
      toMB: function toMB() {
        return _up(target, 1);
      },
      toGB: function toGB() {
        return _up(target, 2);
      },
      toTB: function toTB() {
        return _up(target, 3);
      }
    },
    MB: {
      toBit: function toBit() {
        return _carryBit(target, 3);
      },
      toByte: function toByte() {
        return _down(target, 2);
      },
      toKB: function toKB() {
        return _down(target, 1);
      },
      toGB: function toGB() {
        return _up(target, 1);
      },
      toTB: function toTB() {
        return _up(target, 2);
      }
    },
    GB: {
      toBit: function toBit() {
        return _carryBit(target, 4);
      },
      toByte: function toByte() {
        return _down(target, 3);
      },
      toKB: function toKB() {
        return _down(target, 2);
      },
      toMB: function toMB() {
        return _down(target, 1);
      },
      toTB: function toTB() {
        return _up(target, 1);
      }
    },
    TB: {
      toBit: function toBit() {
        return _carryBit(target, 5);
      },
      toByte: function toByte() {
        return _down(target, 4);
      },
      toKB: function toKB() {
        return _down(target, 3);
      },
      toMB: function toMB() {
        return _down(target, 2);
      },
      toGB: function toGB() {
        return _down(target, 1);
      }
    }
  };
}
var bytes$1 = {
  b2size: b2size,
  bytes: bytes
};

var byteTools = /*#__PURE__*/Object.freeze({
  b2size: b2size,
  bytes: bytes,
  default: bytes$1
});

var _meta = createCommonjsModule(function (module) {
var META = _uid$1('meta');


var setDesc = _objectDp$1.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails$1(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has$1(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has$1(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var f$5 = _wks$1;

var _wksExt$1 = {
	f: f$5
};

var f$8 = Object.getOwnPropertySymbols;

var _objectGops$1 = {
	f: f$8
};

var f$9 = {}.propertyIsEnumerable;

var _objectPie$1 = {
	f: f$9
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys$1 = _enumBugKeys$1.concat('length', 'prototype');

var f$b = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal$1(O, hiddenKeys$1);
};

var _objectGopn$1 = {
	f: f$b
};

var _meta$1 = createCommonjsModule(function (module) {
var META = _uid$1('meta');


var setDesc = _objectDp$1.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails$1(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has$1(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has$1(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1$1 = _meta$1.KEY;
var _meta_2$1 = _meta$1.NEED;
var _meta_3$1 = _meta$1.fastKey;
var _meta_4$1 = _meta$1.getWeak;
var _meta_5$1 = _meta$1.onFreeze;

var defineProperty$1 = _objectDp$1.f;
var _wksDefine$1 = function (name) {
  var $Symbol = _core$1.Symbol || (_core$1.Symbol = {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt$1.f(name) });
};

// all enumerable object keys, includes symbols



var _enumKeys$1 = function (it) {
  var result = _objectKeys$1(it);
  var getSymbols = _objectGops$1.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie$1.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn$1.f;
var toString$4 = {}.toString;

var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames$1 = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames$1.slice();
  }
};

var f$e = function getOwnPropertyNames(it) {
  return windowNames$1 && toString$4.call(it) == '[object Window]' ? getWindowNames$1(it) : gOPN$1(_toIobject$1(it));
};

var _objectGopnExt$1 = {
	f: f$e
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$f = _descriptors$1 ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject$1(O);
  P = _toPrimitive$1(P, true);
  if (_ie8DomDefine$1) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has$1(O, P)) return _propertyDesc$1(!_objectPie$1.f.call(O, P), O[P]);
};

var _objectGopd$1 = {
	f: f$f
};

// ECMAScript 6 symbols shim





var META = _meta$1.KEY;





















var gOPD$2 = _objectGopd$1.f;
var dP$2 = _objectDp$1.f;
var gOPN$2 = _objectGopnExt$1.f;
var $Symbol = _global$1.Symbol;
var $JSON$1 = _global$1.JSON;
var _stringify = $JSON$1 && $JSON$1.stringify;
var PROTOTYPE$4 = 'prototype';
var HIDDEN = _wks$1('_hidden');
var TO_PRIMITIVE = _wks$1('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared$1('symbol-registry');
var AllSymbols = _shared$1('symbols');
var OPSymbols = _shared$1('op-symbols');
var ObjectProto$2 = Object[PROTOTYPE$4];
var USE_NATIVE$2 = typeof $Symbol == 'function' && !!_objectGops$1.f;
var QObject = _global$1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$4] || !QObject[PROTOTYPE$4].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors$1 && _fails$1(function () {
  return _objectCreate$1(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$2(ObjectProto$2, key);
  if (protoDesc) delete ObjectProto$2[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto$2) dP$2(ObjectProto$2, key, protoDesc);
} : dP$2;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate$1($Symbol[PROTOTYPE$4]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE$2 && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$2) $defineProperty(OPSymbols, key, D);
  _anObject$1(it);
  key = _toPrimitive$1(key, true);
  _anObject$1(D);
  if (_has$1(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has$1(it, HIDDEN)) dP$2(it, HIDDEN, _propertyDesc$1(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has$1(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate$1(D, { enumerable: _propertyDesc$1(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$2(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject$1(it);
  var keys = _enumKeys$1(P = _toIobject$1(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate$1(it) : $defineProperties(_objectCreate$1(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive$1(key, true));
  if (this === ObjectProto$2 && _has$1(AllSymbols, key) && !_has$1(OPSymbols, key)) return false;
  return E || !_has$1(this, key) || !_has$1(AllSymbols, key) || _has$1(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject$1(it);
  key = _toPrimitive$1(key, true);
  if (it === ObjectProto$2 && _has$1(AllSymbols, key) && !_has$1(OPSymbols, key)) return;
  var D = gOPD$2(it, key);
  if (D && _has$1(AllSymbols, key) && !(_has$1(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$2(_toIobject$1(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has$1(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$2;
  var names = gOPN$2(IS_OP ? OPSymbols : _toIobject$1(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has$1(AllSymbols, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$2, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE$2) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid$1(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$2) $set.call(OPSymbols, value);
      if (_has$1(this, HIDDEN) && _has$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc$1(1, value));
    };
    if (_descriptors$1 && setter) setSymbolDesc(ObjectProto$2, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine$1($Symbol[PROTOTYPE$4], 'toString', function toString() {
    return this._k;
  });

  _objectGopd$1.f = $getOwnPropertyDescriptor;
  _objectDp$1.f = $defineProperty;
  _objectGopn$1.f = _objectGopnExt$1.f = $getOwnPropertyNames;
  _objectPie$1.f = $propertyIsEnumerable;
  _objectGops$1.f = $getOwnPropertySymbols;

  if (_descriptors$1 && !_library$1) {
    _redefine$1(ObjectProto$2, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt$1.f = function (name) {
    return wrap(_wks$1(name));
  };
}

_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$2, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks$1(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys$1(_wks$1.store), k = 0; wellKnownSymbols.length > k;) _wksDefine$1(wellKnownSymbols[k++]);

_export$1(_export$1.S + _export$1.F * !USE_NATIVE$2, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has$1(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export$1(_export$1.S + _export$1.F * !USE_NATIVE$2, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = _fails$1(function () { _objectGops$1.f(1); });

_export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return _objectGops$1.f(_toObject$1(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON$1 && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE$2 || _fails$1(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray$1(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON$1, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$4][TO_PRIMITIVE] || _hide$1($Symbol[PROTOTYPE$4], TO_PRIMITIVE, $Symbol[PROTOTYPE$4].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag$1($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag$1(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag$1(_global$1.JSON, 'JSON', true);

_wksDefine$1('asyncIterator');

_wksDefine$1('observable');

// ECMAScript 6 symbols shim





var META$1 = _meta$1.KEY;





















var gOPD$3 = _objectGopd$1.f;
var dP$3 = _objectDp$1.f;
var gOPN$3 = _objectGopnExt$1.f;
var $Symbol$1 = _global$1.Symbol;
var $JSON$2 = _global$1.JSON;
var _stringify$1 = $JSON$2 && $JSON$2.stringify;
var PROTOTYPE$5 = 'prototype';
var HIDDEN$1 = _wks$1('_hidden');
var TO_PRIMITIVE$1 = _wks$1('toPrimitive');
var isEnum$1 = {}.propertyIsEnumerable;
var SymbolRegistry$1 = _shared$1('symbol-registry');
var AllSymbols$1 = _shared$1('symbols');
var OPSymbols$1 = _shared$1('op-symbols');
var ObjectProto$3 = Object[PROTOTYPE$5];
var USE_NATIVE$3 = typeof $Symbol$1 == 'function' && !!_objectGops$1.f;
var QObject$1 = _global$1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter$1 = !QObject$1 || !QObject$1[PROTOTYPE$5] || !QObject$1[PROTOTYPE$5].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc$1 = _descriptors$1 && _fails$1(function () {
  return _objectCreate$1(dP$3({}, 'a', {
    get: function () { return dP$3(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$3(ObjectProto$3, key);
  if (protoDesc) delete ObjectProto$3[key];
  dP$3(it, key, D);
  if (protoDesc && it !== ObjectProto$3) dP$3(ObjectProto$3, key, protoDesc);
} : dP$3;

var wrap$1 = function (tag) {
  var sym = AllSymbols$1[tag] = _objectCreate$1($Symbol$1[PROTOTYPE$5]);
  sym._k = tag;
  return sym;
};

var isSymbol$1 = USE_NATIVE$3 && typeof $Symbol$1.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol$1;
};

var $defineProperty$1 = function defineProperty(it, key, D) {
  if (it === ObjectProto$3) $defineProperty$1(OPSymbols$1, key, D);
  _anObject$1(it);
  key = _toPrimitive$1(key, true);
  _anObject$1(D);
  if (_has$1(AllSymbols$1, key)) {
    if (!D.enumerable) {
      if (!_has$1(it, HIDDEN$1)) dP$3(it, HIDDEN$1, _propertyDesc$1(1, {}));
      it[HIDDEN$1][key] = true;
    } else {
      if (_has$1(it, HIDDEN$1) && it[HIDDEN$1][key]) it[HIDDEN$1][key] = false;
      D = _objectCreate$1(D, { enumerable: _propertyDesc$1(0, false) });
    } return setSymbolDesc$1(it, key, D);
  } return dP$3(it, key, D);
};
var $defineProperties$1 = function defineProperties(it, P) {
  _anObject$1(it);
  var keys = _enumKeys$1(P = _toIobject$1(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty$1(it, key = keys[i++], P[key]);
  return it;
};
var $create$1 = function create(it, P) {
  return P === undefined ? _objectCreate$1(it) : $defineProperties$1(_objectCreate$1(it), P);
};
var $propertyIsEnumerable$1 = function propertyIsEnumerable(key) {
  var E = isEnum$1.call(this, key = _toPrimitive$1(key, true));
  if (this === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return false;
  return E || !_has$1(this, key) || !_has$1(AllSymbols$1, key) || _has$1(this, HIDDEN$1) && this[HIDDEN$1][key] ? E : true;
};
var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject$1(it);
  key = _toPrimitive$1(key, true);
  if (it === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return;
  var D = gOPD$3(it, key);
  if (D && _has$1(AllSymbols$1, key) && !(_has$1(it, HIDDEN$1) && it[HIDDEN$1][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
  var names = gOPN$3(_toIobject$1(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has$1(AllSymbols$1, key = names[i++]) && key != HIDDEN$1 && key != META$1) result.push(key);
  } return result;
};
var $getOwnPropertySymbols$1 = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$3;
  var names = gOPN$3(IS_OP ? OPSymbols$1 : _toIobject$1(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has$1(AllSymbols$1, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$3, key) : true)) result.push(AllSymbols$1[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE$3) {
  $Symbol$1 = function Symbol() {
    if (this instanceof $Symbol$1) throw TypeError('Symbol is not a constructor!');
    var tag = _uid$1(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$3) $set.call(OPSymbols$1, value);
      if (_has$1(this, HIDDEN$1) && _has$1(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
      setSymbolDesc$1(this, tag, _propertyDesc$1(1, value));
    };
    if (_descriptors$1 && setter$1) setSymbolDesc$1(ObjectProto$3, tag, { configurable: true, set: $set });
    return wrap$1(tag);
  };
  _redefine$1($Symbol$1[PROTOTYPE$5], 'toString', function toString() {
    return this._k;
  });

  _objectGopd$1.f = $getOwnPropertyDescriptor$1;
  _objectDp$1.f = $defineProperty$1;
  _objectGopn$1.f = _objectGopnExt$1.f = $getOwnPropertyNames$1;
  _objectPie$1.f = $propertyIsEnumerable$1;
  _objectGops$1.f = $getOwnPropertySymbols$1;

  if (_descriptors$1 && !_library$1) {
    _redefine$1(ObjectProto$3, 'propertyIsEnumerable', $propertyIsEnumerable$1, true);
  }

  _wksExt$1.f = function (name) {
    return wrap$1(_wks$1(name));
  };
}

_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$3, { Symbol: $Symbol$1 });

for (var es6Symbols$1 = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j$1 = 0; es6Symbols$1.length > j$1;)_wks$1(es6Symbols$1[j$1++]);

for (var wellKnownSymbols$1 = _objectKeys$1(_wks$1.store), k$1 = 0; wellKnownSymbols$1.length > k$1;) _wksDefine$1(wellKnownSymbols$1[k$1++]);

_export$1(_export$1.S + _export$1.F * !USE_NATIVE$3, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has$1(SymbolRegistry$1, key += '')
      ? SymbolRegistry$1[key]
      : SymbolRegistry$1[key] = $Symbol$1(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry$1) if (SymbolRegistry$1[key] === sym) return key;
  },
  useSetter: function () { setter$1 = true; },
  useSimple: function () { setter$1 = false; }
});

_export$1(_export$1.S + _export$1.F * !USE_NATIVE$3, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create$1,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty$1,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties$1,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames$1,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols$1
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES$1 = _fails$1(function () { _objectGops$1.f(1); });

_export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES$1, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return _objectGops$1.f(_toObject$1(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON$2 && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE$3 || _fails$1(function () {
  var S = $Symbol$1();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify$1([S]) != '[null]' || _stringify$1({ a: S }) != '{}' || _stringify$1(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject$1(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined
    if (!_isArray$1(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol$1(value)) return value;
    };
    args[1] = replacer;
    return _stringify$1.apply($JSON$2, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol$1[PROTOTYPE$5][TO_PRIMITIVE$1] || _hide$1($Symbol$1[PROTOTYPE$5], TO_PRIMITIVE$1, $Symbol$1[PROTOTYPE$5].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag$1($Symbol$1, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag$1(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag$1(_global$1.JSON, 'JSON', true);

_wksDefine$1('asyncIterator');

_wksDefine$1('observable');

var D__code_demo_npm_commonUtils_node_modules_coreJs_library_fn_symbol = _core$1.Symbol;

var symbol = D__code_demo_npm_commonUtils_node_modules_coreJs_library_fn_symbol;

var iterator = _wksExt$1.f('iterator');

var iterator$1 = iterator;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof symbol === "function" && typeof iterator$1 === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof symbol === "function" && obj.constructor === symbol && obj !== symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof = unwrapExports(_typeof_1);

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-22 10:40:09
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 17:04:17
 * @Description: 
 */
//Node.js中闭包外部this并非global eg:(function(g){})(this); //this not global
//严格模式下this不指向全局变量
var GLOBAL = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" ? global : window,
    toString$5 = Object.prototype.toString;
 //严格模式与window识别检测
//2018/10/10: uglify压缩会导致此检测函数失效
//function detect_strict_mode() {
//    var f = function (arg) {
//        arguments[0] = 1;
//        return arg != arguments[0];
//    };
//    return f(0);
//}
//默认严格模式,不再通过检测判断

var //detect_strict_mode(),
is_window_mode = GLOBAL == GLOBAL.window;
/**
 * 获取数据类型(小写) undefined|null|string|number|array|function|date|regexp|window|node|list
 * @param {object} obj 要检测的数据
 */

function getType(obj) {
  if (obj == undefined) return "" + obj; //内置函数,性能最好 (注意：safari querySelectorAll返回值类型为function)

  if (_typeof(obj) !== "object" && typeof obj !== "function") return _typeof(obj); //非window模式(Node)下禁用以下检测

  if (is_window_mode) {
    if (typeof obj.nodeType === "number") return "node";

    if (typeof obj.length === "number") {
      //严格模式禁止使用 arguments.callee,调用会报错
      //IE9+等使用 toString.call 会返回 [object Arguments],此为兼容低版本IE
      //if (!is_strict_mode && obj.callee) return "arguments";
      //IE9+等使用 toString.call 会返回 [object Window],此为兼容低版本IE
      if (obj == obj.window) return "window"; //document.getElementsByTagName("*") => HTMLCollection
      //document.querySelectorAll("*")     => NodeList
      //此处统一为 list

      if (obj.item) return "list";
    }
  } //在某些最新的浏览器中(IE11、Firefox、Chrome)性能与hash读取差不多 eg: return class2type[toString.call(obj)];


  return toString$5.call(obj).slice(8, -1).toLowerCase();
}
/**
 * 检测是否为函数
 * @param {object} fn 要检测的数据
 */

function isFunc(fn) {
  //在IE11兼容模式（ie6-8）下存在bug,当调用次数过多时可能返回不正确的结果
  //return typeof fn == "function";
  return toString$5.call(fn) === "[object Function]" || toString$5.call(fn) === "[object AsyncFunction]";
}
/**
 * 检测是否为对象
 * @param {object} obj 要检测的数据
 */

function isObject(obj) {
  //typeof null => object
  //toString.call(null) => [object Object]
  return obj && toString$5.call(obj) === "[object Object]";
}
/**
 * 检测是否为数组
 * @param {object} obj 要检测的数据
 */

function isArray$2(obj) {
  return toString$5.call(obj) === "[object Array]";
}
/**
 * 检测是否为数组或类数组
 * @param {object} obj 要检测的数据
 */

function isArrayLike(obj) {
  var type = getType(obj);
  return type == "array" || type == "list" || type == "arguments";
}
/**
 * 若value不为undefine,则返回value;否则返回defValue
 * @param {object} value 
 * @param {object} defValue value不存在时返回的值
 */

function def$2(value, defValue) {
  return value !== undefined ? value : defValue;
}
/**
 * 检测是否是符合条件的数字(n必须为数字类型)
 * @param {number} n 数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 * @param {number|undefined} max_decimal_len 最大小数位数
 */

function isNum(n, min, max, max_decimal_len) {
  if (typeof n != "number" || isNaN(n)) return false;
  if (min != undefined && n < min) return false;
  if (max != undefined && n > max) return false;

  if (max_decimal_len) {
    var l = ((n + '').split('.')[1] || '').length;
    if (l > max_decimal_len) return false;
  }

  return true;
}
/**
 * 检测是否为大于0的数字(n必须为数字类型)
 * @param {number} n 数字
 */

function isUNum(n) {
  return !isNaN(n) && n > 0;
}
/**
 * 检测是否为整数(n必须为数字类型)
 * @param {number} n 数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 */

function isInt(n, min, max) {
  return isNum(n, min, max) && n === Math.floor(n);
}
/**
 * 检测是否为大于0的整数
 * @param {number} n 数字
 */

function isUInt(n) {
  return isInt(n, 1);
}
/**
 * 判断是否是符合条件的数字
 * @param {string|number} str 要检测的字符串或数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 * @param {number|undefined} max_decimal_len 最大小数位数
 */

function checkNum(str, min, max, max_decimal_len) {
  if (typeof str == "number") return isNum(str, min, max, max_decimal_len);

  if (typeof str == "string") {
    str = str.trim();
    return str && isNum(+str, min, max, max_decimal_len);
  }

  return false;
}
/**
 * 判断是否是符合条件的整数
 * @param {string|number} str 要检测的字符串或数字
 * @param {number|undefined} min 允许的最小值
 * @param {number|undefined} max 允许的最大值
 */

function checkInt(str, min, max) {
  if (typeof str == "number") return isInt(str, min, max);

  if (typeof str == "string") {
    str = str.trim();
    return str && isInt(+str, min, max);
  }

  return false;
}
var judgeTools = {
  getType: getType,
  isArrayLike: isArrayLike,
  isArray: isArray$2,
  isObject: isObject,
  def: def$2,
  isNum: isNum,
  isUNum: isUNum,
  isFunc: isFunc,
  isInt: isInt,
  isUInt: isUInt,
  checkNum: checkNum,
  checkInt: checkInt
};

/**
 * 解码url参数值 eg:%E6%B5%8B%E8%AF%95 => 测试
 * @param {string} param 要解码的字符串 eg:%E6%B5%8B%E8%AF%95
 */

function decode_url_param(param) {
  try {
    return decodeURIComponent(param);
  } catch (e) {
    return param;
  }
} //----------------------- JSON.js -----------------------

var has$1 = Object.prototype.hasOwnProperty,
    JSON_SPECIAL = {
  '\b': '\\b',
  '\t': '\\t',
  '\n': '\\n',
  '\f': '\\f',
  '\r': '\\r',
  '"': '\\"',
  '\\': '\\\\'
},
    JSON_NULL = "null"; //字符转义

function json_replace(c) {
  //return JSON_SPECIAL[c]||'\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
  return JSON_SPECIAL[c] || c;
} //json转化


function json_encode(obj) {
  switch (getType(obj)) {
    case "string":
      return '"' + obj.replace(/[\x00-\x1f\\"]/g, json_replace) + '"';

    case "list":
    case "array":
      var tmp = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        if (typeof obj[i] !== "function") tmp.push(obj[i] != undefined ? json_encode(obj[i]) : JSON_NULL);
      }

      return "[" + tmp + "]";

    case "object":
    case "arguments":
      var tmp = [];

      for (var k in obj) {
        if (has$1.call(obj, k) && typeof obj[k] !== "function") tmp.push("\"" + k + "\":" + json_encode(obj[k]));
      }

      return "{" + tmp.toString() + "}";

    case "boolean":
      return obj + "";

    case "number":
      return isFinite(obj) ? obj + "" : JSON_NULL;

    case "date":
      return isFinite(obj.valueOf()) ? "\"" + obj.toUTC().format("yyyy-MM-ddTHH:mm:ss.SZ") + "\"" : JSON_NULL;

    case "function":
      return;

    default:
      return _typeof(obj) == "object" ? "{}" : JSON_NULL;
  }
} //json解析
//secure:是否进行安全检测


function json_decode(text, secure) {
  //安全检测
  if (secure !== false && !/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) throw new Error("JSON SyntaxError");

  try {
    return new Function("return " + text)();
  } catch (e) {}
}

if (!window.JSON) {
  window.JSON = {
    stringify: json_encode,
    parse: json_decode
  };
}

JSON.encode = json_encode;
JSON.decode = json_decode;
var jsonTools = {
  decode_url_param: decode_url_param,
  json_replace: json_replace,
  json_encode: json_encode,
  json_decode: json_decode
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 15:22:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:55:21
 * @Description:
 */

/**
 * 判断字符串是否是十六进制的颜色值
 * @param {*} string string
 * @return {*} boolean
 */
function isColor(value) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
} // module.exports = isColor;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 14:28:20
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 10:39:11
 * @Description:
 */

/**
 * @description: 設置url參數
 * @param {*} url url
 * @param {*} obj 參數對象
 * @return {*} url + 參數
 */
function setParam(url, obj) {
  if (_typeof(obj) !== 'object') {
    return url;
  }

  for (var key in obj) {
    var value = obj[key];

    if (value === false) {
      value = String(value);
    }

    if (value) {
      url = url.replace(new RegExp('(^|\\?|&)' + key + '=[^&]*(?=&|$|#)', 'g'), '');
      value = value.splice ? value : [value];

      for (var i = value.length - 1; i >= 0; i--) {
        value[i] = encodeURIComponent(value[i]);
      }

      var p = key + '=' + value.join('&' + key + '=');
      url = url + (/\?/.test(url) ? '&' : '?') + p;
    }
  }

  return url;
}
/**
 * @description: 獲取url 參數
 * @param {*} key key 指定參數返回字符串  默認返回對象
 * @param {*} type 获取参数的类型 可传值search hash  默认search
 * @return {*} 字符串或对象
 */

function getParam(type, key) {
  var url = location.search || ''; // 获取url中'?'符后的字串

  var params = {};

  if (type && type === 'hash') {
    url = location.hash || '';
  }

  if (url.indexOf('?') != -1) {
    var str = url.substr(1) || '';
    var strs = str.split('&');

    if (strs && strs.length) {
      for (var i = 0; i < strs.length; i++) {
        var strsItem = strs[i].split('=');

        if (strsItem.length == 2) {
          params[strsItem[0]] = decodeURIComponent(strsItem[1]);
        }
      }
    }
  }

  if (key && keys$1(params).length) {
    return params[key] || '';
  } else {
    return params;
  }
}

var asyncToGenerator = createCommonjsModule(function (module) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise$1.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise$1(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

var D__code_demo_npm_commonUtils_node_modules__babel_runtimeCorejs2_regenerator = regeneratorRuntime;

/*
* @Author: zhangyu
* @Email: zhangdulin@outlook.com
* @Date: 2021-06-11 11:00:48
* @LastEditors: zhangyu
* @LastEditTime: 2021-06-11 14:05:50
* @Description: 
*/
// 注册方法获取WebViewJavascriptBridge对象

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  }

  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  } // 兼容安卓


  document.addEventListener('WebViewJavascriptBridgeReady', function () {
    return callback(window.WebViewJavascriptBridge);
  }, false); // 兼容ios

  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
} //  获取WebViewJavascriptBridge对象


function getBirdge() {
  return new promise$1(function (resolve) {
    if (window.WebViewJavascriptBridge) {
      return resolve(window.WebViewJavascriptBridge);
    }

    setupWebViewJavascriptBridge(function (bridge) {
      // 初始化
      bridge.init(function (message, responseCallback) {
        var data = {
          'Javascript Responds': 'Wee!'
        };
        responseCallback(data);
      });
      resolve(bridge);
    });
  });
} // 重写之后的birdge

/**
* @description: jsbridge callHandler
* @param {*} callHandlerData 
* @param {*} name n请求的方法
* @param {*} data 请求时传的参数
* @return {*} function
*/


var jsBridge = {
  ctx: null,
  // WebViewJavascriptBridge
  callHandler: function callHandler() {
    var _this = this;

    var callHandlerData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '',
      data: {}
    };
    return new promise$1( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/D__code_demo_npm_commonUtils_node_modules__babel_runtimeCorejs2_regenerator.mark(function _callee(resolve) {
        return D__code_demo_npm_commonUtils_node_modules__babel_runtimeCorejs2_regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.ctx) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return getBirdge();

              case 3:
                _this.ctx = _context.sent;

              case 4:
                _this.ctx.callHandler(callHandlerData.name, callHandlerData.data, function (res) {
                  return resolve(res);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  registerHandler: function registerHandler(jsHandlerName) {
    // 重写事件注册方法
    this.ctx.registerHandler(jsHandlerName, function (data, callback) {
      if (callback) {
        callback("\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u544A\u8BC9ObjC\uFF1A\u6211\u5DF2\u6536\u5230\u6570\u636E".concat(stringify$1(data)));
      }
    });
  }
};

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 10:18:51
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-18 10:24:28
 * @Description: 
 */

/**
 * @description: 加载高德地图
 * @param {*} p  数组 插件名称
 * @return {*}
 */
function AMaploader(p) {
  return new promise$1(function (resolve, reject) {
    var plugin = p && p.join(',') || '';

    if (window.AMap) {
      resolve(window.AMap);
    } else {
      // 加载高德地图代码
      var id = 'gaode-map';
      var oldjs = document.getElementById(id);
      if (oldjs) oldjs.parentNode.removeChild(oldjs);
      var url = "https://webapi.amap.com/maps?v=1.4.15&plugin=".concat(plugin, "&key=").concat(process.env.VUE_APP_MAPKEY, "&callback=initAMap");
      var jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      jsapi.id = id;
      document.head.appendChild(jsapi);

      window.initAMap = function () {
        resolve(window.AMap);
      };
    }
  });
} // 用法
// 引用
// import AMaploader from '*/AMap.js';
// 同时引入工具条插件，比例尺插件和鹰眼插件
// AMaploader([
//   'AMap.ToolBar',
//   'AMap.Scale',
//   'AMap.Autocomplete',
//   'AMap.PlaceSearch',
//   'AMap.Geolocation',
//   'AMap.Geocoder'
// ]).then(
//   AMap => {
//     this.map = new AMap.Map('container', {
//       resizeEnable: true, // 是否监控地图容器尺寸变化
//       zoom: 14, // 设置地图显示的缩放级别
//       // center: [], //设置地图中心点坐标
//       viewMode: '2D', // 设置地图模式
//       lang: 'zh_cn' // 设置地图语言类型
//     });
//     this.map.on('complete', () => {
//       // 地图图块加载完成后触发
//     });
//     this.map.on('click', ev => {
//       // 触发事件的对象
//       // const target = ev.target
//       // 触发事件的地理坐标，AMap.LngLat 类型 精度lng 纬度lat
//       const lnglat = ev.lnglat;
//       // 触发事件的像素坐标，AMap.Pixel 类型 x y
//       // const pixel = ev.pixel
//       // 触发事件类型
//       // const type = ev.type
//     });
//     this.map.on('dragend', () => {
//     });
//     this.map.on('dragging', () => {
//     });
//     this.map.on('zoomend', e => {
//       // 获取地图缩放级别
//       console.log(e, 'zoomend');
//     });
//     this.map.addControl(new AMap.ToolBar());
//     // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
//     const scale = new AMap.Scale({
//       offset: new AMap.Pixel(10, 20),
//       position: 'RB'
//     });
//     this.map.addControl(scale);
//     this.map.addControl(new AMap.PlaceSearch());
//     // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
//     const geocoder = new AMap.Geocoder({
//       radius: this.mapInfoDefault.radius // 范围，默认：500
//     });
//     this.map.addControl(geocoder);
//     // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
//     const geolocation = new AMap.Geolocation({
//       // 是否使用高精度定位，默认：true
//       enableHighAccuracy: true,
//       // 设置定位超时时间，默认：无穷大
//       timeout: 3000,
//       // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
//       convert: true,
//       // 是否使用安卓定位sdk用来进行定位，
//       useNative: true,
//       // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
//       buttonOffset: new AMap.Pixel(10, 20),
//       //  定位按钮的排放位置,  RB表示右下
//       buttonPosition: 'LB',
//       showMarker: false, // 定位成功后在定位到的位置显示点标记，默认：true
//       showCircle: false, // 定位成功后用圆圈表示定位精度范围，默认：true
//       panToLocation: false, // 定位成功后将定位到的位置作为地图中心点，默认：true
//       zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//     });
//     // AMap.event.addListener(
//     //   geolocation,
//     //   'complete',
//     //   _this.geolocationComplete
//     // );
//     // AMap.event.addListener(geolocation, 'error', console.log(e));
//     this.map.addControl(geolocation);
//   },
//   e => {
//     this.$toast.fail('地图加载失败！请重新进入页面');
//     console.log(e);
//   }
// )

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-21 20:09:32
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 15:17:00
 * @Description:
 */

/**
 *  获得UUId
 */
function getUUID() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}
/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {(Function | undefined)} cb
 */

function appendJs(src, cb) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = cb;
  document.body.appendChild(script);
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-11 14:27:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-15 10:48:26
 * @Description: 
 */
// chrom浏览器禁止自动播放 video标签添加muted属性静音可以自动：
// android h5 webview
// android 4.2 webview添加了是否需要用户手势去触发音视频的播放开关，默认为true(需要用户手势触发)。
// 将webview的这个开关设置为不需要用户触发：
// mWebview.getSettings().setMediaPlaybackRequiresUserGesture(false);
// IOS h5 webview
// IOS APP给webview设置mediaPlaybackRequiresUserAction后可以允许自动播放.

/**
 * @description: 设置video 自动播放 
 * @param {*} id video的dom的id
 * @return {*}
 */
function setVideoPlay(id) {
  /**video.play()返回一个promise，未禁止则resolve，禁止则reject**/
  var video = document.getElementById(id);
  video.addEventListener('ended', function () {
    //结束
    console.log("播放结束"); // this.$bridgePromise.closeWebView()
  }, false);
  video.muted = false; // 设置有音

  var videoPlay = video.play(); // document.body.addEventListener('mousedown', function () {
  //   video.muted = false;
  // }, false);

  videoPlay.then(function () {
    console.log('可以自动播放');
  })["catch"](function (err) {
    console.log(err);
    console.log("不允许自动播放"); //视频元素可以选择静音后再播放,提示用户打开声音

    video.muted = true; // video.play();

    video.onloadedmetadata = function () {
      video.muted = false;
      video.play();
    };

    video.load(); // 重新
  }); //也可以在用户交互后调用.play()
  // ...
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-22 09:05:29
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:09:39
 * @Description: 
 */
function isDOM(dom) {
  return typeof HTMLElement === 'function' ? dom instanceof HTMLElement : dom && _typeof(dom) === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string';
}

function pasteEvent(event) {
  //谷歌浏览器的的粘贴文件在这个对象下面
  if (event.clipboardData || event.originalEvent) {
    var clipboardData = event.clipboardData || event.originalEvent.clipboardData;
    var items = clipboardData.items; //获取文件的属性就在这里获取，打印该对象可以看到相关属性，结果的操作就在items里面，所以需要循环items

    var fileObj = null;

    for (var i = 0; i < items.length; i++) {
      // (items[i].type.indexOf("image")  
      //getAsFile() 此方法只是该浏览器下才会有的方法 
      fileObj = items[i].getAsFile();
    }

    return fileObj; // 第一种
    // 在上面的代码if处接着写
    // if(fileObj !== null) {
    //     var fileUrl=URL.createObjectURL(blob);
    //     document.getElementById("imgNode").src=fileUrl;
    // }
    // URL是一个公用的对象
    // 第二种方法是用base64的方法可以实现， 需要借助FileReader对象
    // var reader = new FileReader();
    // reader.onload = function (event) {
    //   //event.target.result 即为图片的Base64编码字符串
    //    var base64_str = event.target.result;
    //    document.getElementById("imgNode").src=base64_str;
    // }
    //  reader.readAsDataURL(blob);
  } else {
    return 'errpr-nonsupport';
  }
}
/**
 * @description: 获取黏贴内容 复制文本内容
 * @param {*} clipboardObj.getClipboardData 获取黏贴内容传参dom; clipboardObj.copyToClipBoard 复制传参字符串
 * @return {*} Boolean
 */


var clipboardObj = {
  dom: '',
  value: '',
  getClipboardData: function getClipboardData(dom) {
    var domPaste = dom && isDOM(dom) || document.body;
    domPaste && dom.addEventListener('paste', pasteEvent);
  },
  copyToClipBoard: function copyToClipBoard(value) {
    if (document.execCommand) {
      var x = document.createElement("INPUT");
      console.log(x);
      x.setAttribute("type", "text");
      x.value = value;
      document.body.appendChild(x);
      x.select();
      document.execCommand("Copy");
      x.style.display = 'none';
      document.body.removeChild(x);
      return true;
    }

    if (window.clipboardData) {
      window.clipboardData.setData("Text", value);
      return true;
    }

    return false;
  }
};
/**
 * @description: 焦点相关功能函数
 * @param {*} focus：获取焦点 传入dom；insertAfterText：插入文本 传参dom 文本；getCursortPosition：获取光标位置 传参dom; setCaretPosition: 设置光标位置 传参dom 位置
 * @return {*} 
 */

var cursortPosition = {
  textDom: '',
  value: '',
  focus: function focus(textDom) {
    if (window.getSelection) {
      // ie11 10 9 ff safari
      textDom.focus(); // 解决ff不获取焦点无法定位问题

      var range = window.getSelection(); // 创建range

      range.selectAllChildren(textDom); // range 选择textDom下所有子内容

      range.collapseToEnd(); // 光标移至最后
    } else if (document.selection) {
      // ie10 9 8 7 6 5
      var _range = document.selection.createRange(); // 创建选择对象
      // var range = document.body.createTextRange();


      _range.moveToElementText(textDom); // range定位到textDom


      _range.collapse(false); // 光标移至最后


      _range.select();
    } else {
      textDom.focus();
    }
  },
  // 插入文本
  insertAfterText: function insertAfterText(textDom, value) {
    var selectRange; // 文本长度

    var length = textDom.value && String(textDom.value + value).length || String(value).length;

    if (document.selection) {
      // IE Support
      textDom.focus();
      selectRange = document.selection.createRange();
      selectRange.text = value;
      textDom.focus();
      this.setCaretPosition(textDom, length);
      return selectRange.text;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support
      var startPos = textDom.selectionStart;
      var endPos = textDom.selectionEnd;
      var scrollTop = textDom.scrollTop;
      textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length);
      textDom.focus();
      textDom.selectionStart = startPos + value.length;
      textDom.selectionEnd = startPos + value.length;
      textDom.scrollTop = scrollTop;
      this.setCaretPosition(textDom, length);
      return textDom.value;
    } else {
      textDom.value += value;
      textDom.focus();
      this.setCaretPosition(textDom, length);
      return textDom.value;
    }
  },
  // 获取光标位置
  getCursortPosition: function getCursortPosition(textDom) {
    var cursorPos = 0;

    if (document.selection) {
      // IE Support
      textDom.focus();
      var selectRange = document.selection.createRange();
      selectRange.moveStart('character', -textDom.value.length);
      cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support
      cursorPos = textDom.selectionStart;
    }

    return cursorPos;
  },
  // 设置光标位置
  setCaretPosition: function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
      // IE Support
      textDom.focus();
      textDom.setSelectionRange(pos, pos);
    } else if (textDom.createTextRange) {
      // Firefox support
      var range = textDom.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
};

// 20.3.3.1 / 15.9.4.4 Date.now()


_export$1(_export$1.S, 'Date', { now: function () { return new Date().getTime(); } });

// 20.3.3.1 / 15.9.4.4 Date.now()


_export$1(_export$1.S, 'Date', { now: function () { return new Date().getTime(); } });

var now = _core$1.Date.now;

var now$1 = now;

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:44:08
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:18:37
 * @Description: 
 */

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
};
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */

var throttle = function throttle(func, wait, type) {

  return function () {
    var context = this;
    var args = arguments;

    if (type === 1) {
      var now = now$1();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
};
/**
 * @description: 延迟执行函数
 * @param {number|string} ms
 * @param {function} callback
 * @return {void}
 */

var sleepAction = function sleepAction(ms, callback) {
  setTimeout(function () {
    callback();
  }, ms);
};
/**
 * sync
 *
 * @description 睡眠
 * @param {number|string} ms
 * @returns {Promise<void>}
 */

function sleepSync(ms) {
  return new promise$1(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 17:43:38
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:16:15
 * @Description: 
 */
var has$2 = Object.prototype.hasOwnProperty;
/**
 * 检测是否为对象
 * @param {object} obj 要检测的数据
 */

function isObject$1(obj) {
  //typeof null => object
  //toString.call(null) => [object Object]
  return obj && toString.call(obj) === "[object Object]";
}
/**
 * 检测是否为数组
 * @param {object} obj 要检测的数据
 */


function isArray$3(obj) {
  return toString.call(obj) === "[object Array]";
}
/* 
* 数据克隆(深拷贝)
* @param {object} data 要克隆的对象
*/


function deepCopy(data) {
  if (!data) return data;

  switch (_typeof(data)) {
    case "string":
    case "number":
    case "boolean":
      return data;
  }

  var result;

  if (isArray$3(data)) {
    result = [];

    for (var i = 0, len = data.length; i < len; i++) {
      result[i] = deepCopy(data[i]);
    }
  } else if (isObject$1(data)) {
    result = {};

    for (var key in data) {
      if (has$2.call(data, key)) result[key] = deepCopy(data[key]);
    }
  }

  return result;
}
/**
 * @description: 对象方法工具 hasKey:判断一个对象是否存在key; objEqual: 两个对象是否相等这两个对象的值只能是数字或字符串
 * @param {*}
 * @returns {number|boolean}
 */

var objTools = {
  /**
   * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
   * 如果没有传入key这个参数，则判断obj对象是否有键值对
   */
  hasKey: function hasKey(obj, key) {
    if (key) return key in obj;else {
      var keysArr = keys$1(obj);

      return keysArr.length;
    }
  },
  // 两个对象是否相等这两个对象的值只能是数字或字符串
  objEqual: function objEqual(obj1, obj2) {
    var keysArr1 = keys$1(obj1);

    var keysArr2 = keys$1(obj2);

    if (keysArr1.length !== keysArr2.length) return false;else if (keysArr1.length === 0 && keysArr2.length === 0) return true;
    /* eslint-disable-next-line */
    else {
        return !keysArr1.some(function (key) {
          return obj1[key] != obj2[key];
        });
      }
  }
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 11:30:34
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 13:20:20
 * @Description:
 */
/**
 * @description: 数组转对象
 * @param {string} key
 * @param {any} arr
 * @return {*object}
 */

function arrayToObject(key, arr) {
  if (arr === void 0) {
    arr = [];
  }

  var mapping = {};
  arr.forEach(function (item) {
    if (item[key]) {
      mapping[item[key]] = item;
    }
  });
  return mapping;
}
/**
 * 引用数组位移，性能优化
 * @param {<any[]>} array
 * @param {number} from
 * @param {number} to
 */

function arrayMoveMutate(array, from, to) {
  var startIndex = from < 0 ? array.length + from : from;

  if (startIndex >= 0 && startIndex < array.length) {
    var endIndex = to < 0 ? array.length + to : to;
    var item = array.splice(from, 1)[0];
    array.splice(endIndex, 0, item);
  }
}
/**
 * 数组位移
 * @param {<any[]>} array
 * @param {number} from
 * @param {number} to
 * @returns
 * @example
    ```
        const { arrayMove } = require('@alrale/common-lib');

        const input = ['a', 'b', 'c'];

        const array1 = arrayMove(input, 1, 2);
        console.log(array1);
        //=> ['a', 'c', 'b']

        const array2 = arrayMove(input, -1, 0);
        console.log(array2);
        //=> ['c', 'a', 'b']

        const array3 = arrayMove(input, -2, -3);
        console.log(array3);
        //=> ['b', 'a', 'c']
    ```
 */

function arrayMove(array, from, to) {
  var _array = __spreadArrays(array);

  arrayMoveMutate(_array, from, to);
  return _array;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 11:30:34
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 13:20:29
 * @Description:
 */
var arrayTools = {
  arrayToObject: arrayToObject,
  arrayMoveMutate: arrayMoveMutate,
  arrayMove: arrayMove
};

//解析cookie值

function parseCookieValue(s) {
  if (s.indexOf('"') === 0) s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  return decode_url_param(s.replace(/\+/g, ' '));
} //读取cookie值或返回整个对象

/**
 * @description: 
 * @param {*} key
 * @return {*}
 */


function getCookie(key) {
  var result = key ? undefined : {},
      cookies = document.cookie ? document.cookie.split('; ') : [];

  for (var i = 0, len = cookies.length; i < len; i++) {
    var parts = cookies[i].split('='),
        name = decode_url_param(parts[0]),
        cookie = parts.slice(1).join('=');

    if (key && key === name) {
      result = parseCookieValue(cookie);
      break;
    }

    if (!key && (cookie = parseCookieValue(cookie)) !== undefined) {
      result[name] = cookie;
    }
  }

  return result;
} //设置cookie


function setCookie(key, value, ops) {
  ops = ops || {};
  var expires = ops.expires;
  if (typeof expires === "number") expires = new Date().add("d", expires);
  document.cookie = [encode_url_param(key), '=', encode_url_param(value), expires ? '; expires=' + expires.toUTCString() : '', ops.path ? '; path=' + ops.path : '', ops.domain ? '; domain=' + ops.domain : '', ops.secure ? '; secure' : ''].join('');
} //移除cookie


function removeCookie(key) {
  if (getCookie(key) != undefined) setCookie(key, '', {
    expires: -1
  });
} //清空cookie


function clearCookie() {
  var cookies = document.cookie ? document.cookie.split('; ') : [];

  for (var i = 0, len = cookies.length; i < len; i++) {
    var parts = cookies[i].split('='),
        key = decode_url_param(parts[0]);
    removeCookie(key);
  }
}
/**
 * @description: 获取设置清除cookie 
 * @param {*}
 * @return {object}
 */


var cookie = {
  get: getCookie,
  set: setCookie,
  remove: removeCookie,
  clear: clearCookie
}; //------------------------------- Storage.js -------------------------------
//type:localStorage | sessionStorage
//useCookie:在其它特性不支持的情况下是否启用cookie模拟

/**
 * @description: 获取设置清除Storage 
 * @param {*} type type:localStorage | sessionStorage
 * @param {*} useCookie 是否用cookie 模拟store
 * @return {object}
 */

function storage(type, useCookie) {
  var isLocal = type != "sessionStorage";
  if (!isLocal && !location.host) return;
  var STORE_NAME = type,
      storage = window[STORE_NAME],
      adapter = storage && "getItem" in storage ? "storage" : null;

  if (!adapter) {
    var userData = document.documentElement,
        TEST_KEY = "_TEST_";

    try {
      //ie userdata
      userData.addBehavior('#default#userdata'); //7天后过期

      if (isLocal) userData.expires = new Date().add("d", 7).toUTCString();
      STORE_NAME = location.hostname || "local";
      userData.save(STORE_NAME);
      storage = {
        getItem: function getItem(key) {
          userData.load(STORE_NAME);
          return userData.getAttribute(key);
        },
        setItem: function setItem(key, value) {
          userData.setAttribute(key, value);
          userData.save(STORE_NAME);
        },
        removeItem: function removeItem(key) {
          userData.removeAttribute(key);
          userData.save(STORE_NAME);
        },
        clear: function clear() {
          userData.load(STORE_NAME);
          var now = new Date().add("d", -1);
          userData.expires = now.toUTCString();
          userData.save(STORE_NAME);
        }
      };

      if (storage.getItem(TEST_KEY) === undefined) {
        storage.setItem(TEST_KEY, 1);
        storage.removeItem(TEST_KEY);
      }

      adapter = "userdata";
    } catch (e) {} //cookie 模拟


    if (!adapter && useCookie) {
      storage = {
        getItem: getCookie,
        //setItem: setCookie,
        setItem: isLocal ? function (key, value) {
          setCookie(key, value, {
            expires: 7
          });
        } : setCookie,
        removeItem: removeCookie,
        clear: clearCookie
      };
      adapter = "cookie";
    }
  }

  var support = !!adapter;
  var store = {
    //是否支持本地缓存
    support: support,
    //适配器:storage|userdata|cookie|null
    adapter: adapter,
    //获取本地缓存
    get: function get(key, isJSON) {
      if (support) {
        try {
          var value = storage.getItem(key);
          return isJSON ? value ? JSON.parse(value) : null : value;
        } catch (e) {}
      }

      return undefined;
    },
    //设置本地缓存
    set: function set(key, value) {
      if (support) {
        try {
          storage.setItem(key, typeof value == "string" ? value : stringify$1(value));
          return true;
        } catch (e) {}
      }

      return false;
    },
    //删除本地缓存
    remove: function remove(key) {
      if (support) {
        try {
          storage.removeItem(key);
          return true;
        } catch (e) {}
      }

      return false;
    },
    //清空本地缓存
    clear: function clear() {
      if (support) {
        try {
          storage.clear();
          return true;
        } catch (e) {}
      }

      return false;
    }
  };
  return store;
}
var index = {
  cookie: cookie,
  storage: storage
};

var store = /*#__PURE__*/Object.freeze({
  cookie: cookie,
  storage: storage,
  default: index
});

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-24 14:20:26
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:22:09
 * @Description:  window 对象
 */

/**
 * 获取全局对象
 */
function globalLib() {
  var _secret = '__COMMON_LIB__';

  var _g = window || global;

  if (_g[_secret]) return _g[_secret];
  return _g[_secret] = {};
}
/**
 * set 全局对象
 * @param {string} key
 * @param {any} value
 * @param {boolean} cover
 */

function setGlobal(key, value, cover) {
  if (cover === void 0) {
    cover = true;
  }

  var _g = globalLib();

  if (!cover && _g[key]) return false;
  _g[key] = value;
  return true;
}
/**
 * get 全局对象
 * @param {string} key
 */

function getGlobal(key) {
  var _g = globalLib();

  return _g[key];
}
/**
 * 删除 对象数据
 * @param {string} key
 */

function removeGlobalItem(key) {
  var _g = globalLib();

  var bool = delete _g[key];
  return bool;
}

/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 17:16:50
 * @Description: 
 */
var index$1 = {
  getParam: getParam,
  setParam: setParam,
  getImgBase64: getImgBase64,
  getHttpBase64: getHttpBase64,
  dateFormat1: dateFormat1,
  dateFormat2: dateFormat2,
  elDateFormat: elDateFormat,
  getBrowserModel: getBrowserModel,
  getDeviceModel: getDeviceModel,
  exportXls: exportXls,
  getThumbnails: getThumbnails,
  getDefaultAvatar: getDefaultAvatar,
  Regs: Regs,
  isColor: isColor,
  isEmoji: isEmoji,
  isIDCard: isIDCard,
  isSpecialChar: isSpecialChar,
  handleEmoji: handleEmoji,
  handleText: handleText,
  handleParam: handleParam,
  byteTools: byteTools,
  jsonTools: jsonTools,
  jsBridge: jsBridge,
  AMaploader: AMaploader,
  getUUID: getUUID,
  appendJs: appendJs,
  store: store,
  debounce: debounce,
  throttle: throttle,
  sleepSync: sleepSync,
  sleepAction: sleepAction,
  deepCopy: deepCopy,
  objTools: objTools,
  arrayTools: arrayTools,
  judgeTools: judgeTools,
  setVideoPlay: setVideoPlay,
  cursortPosition: cursortPosition,
  clipboardObj: clipboardObj,
  getGlobal: getGlobal,
  setGlobal: setGlobal,
  globalLib: globalLib,
  removeGlobalItem: removeGlobalItem
};

export default index$1;
