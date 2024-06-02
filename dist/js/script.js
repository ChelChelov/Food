/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/autoprefixer/data/prefixes.js":
/*!****************************************************!*\
  !*** ./node_modules/autoprefixer/data/prefixes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let unpack = __webpack_require__(/*! caniuse-lite/dist/unpacker/feature */ "./node_modules/caniuse-lite/dist/unpacker/feature.js")

function browsersSort(a, b) {
  a = a.split(' ')
  b = b.split(' ')
  if (a[0] > b[0]) {
    return 1
  } else if (a[0] < b[0]) {
    return -1
  } else {
    return Math.sign(parseFloat(a[1]) - parseFloat(b[1]))
  }
}

// Convert Can I Use data
function f(data, opts, callback) {
  data = unpack(data)

  if (!callback) {
    ;[callback, opts] = [opts, {}]
  }

  let match = opts.match || /\sx($|\s)/
  let need = []

  for (let browser in data.stats) {
    let versions = data.stats[browser]
    for (let version in versions) {
      let support = versions[version]
      if (support.match(match)) {
        need.push(browser + ' ' + version)
      }
    }
  }

  callback(need.sort(browsersSort))
}

// Add data for all properties
let result = {}

function prefix(names, data) {
  for (let name of names) {
    result[name] = Object.assign({}, data)
  }
}

function add(names, data) {
  for (let name of names) {
    result[name].browsers = result[name].browsers
      .concat(data.browsers)
      .sort(browsersSort)
  }
}

module.exports = result

// Border Radius
let prefixBorderRadius = __webpack_require__(/*! caniuse-lite/data/features/border-radius */ "./node_modules/caniuse-lite/data/features/border-radius.js")

f(prefixBorderRadius, browsers =>
  prefix(
    [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius'
    ],
    {
      browsers,
      feature: 'border-radius',
      mistakes: ['-khtml-', '-ms-', '-o-']
    }
  )
)

// Box Shadow
let prefixBoxshadow = __webpack_require__(/*! caniuse-lite/data/features/css-boxshadow */ "./node_modules/caniuse-lite/data/features/css-boxshadow.js")

f(prefixBoxshadow, browsers =>
  prefix(['box-shadow'], {
    browsers,
    feature: 'css-boxshadow',
    mistakes: ['-khtml-']
  })
)

// Animation
let prefixAnimation = __webpack_require__(/*! caniuse-lite/data/features/css-animation */ "./node_modules/caniuse-lite/data/features/css-animation.js")

f(prefixAnimation, browsers =>
  prefix(
    [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-delay',
      'animation-direction',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-play-state',
      'animation-timing-function',
      '@keyframes'
    ],
    {
      browsers,
      feature: 'css-animation',
      mistakes: ['-khtml-', '-ms-']
    }
  )
)

// Transition
let prefixTransition = __webpack_require__(/*! caniuse-lite/data/features/css-transitions */ "./node_modules/caniuse-lite/data/features/css-transitions.js")

f(prefixTransition, browsers =>
  prefix(
    [
      'transition',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'transition-timing-function'
    ],
    {
      browsers,
      feature: 'css-transitions',
      mistakes: ['-khtml-', '-ms-']
    }
  )
)

// Transform 2D
let prefixTransform2d = __webpack_require__(/*! caniuse-lite/data/features/transforms2d */ "./node_modules/caniuse-lite/data/features/transforms2d.js")

f(prefixTransform2d, browsers =>
  prefix(['transform', 'transform-origin'], {
    browsers,
    feature: 'transforms2d'
  })
)

// Transform 3D
let prefixTransforms3d = __webpack_require__(/*! caniuse-lite/data/features/transforms3d */ "./node_modules/caniuse-lite/data/features/transforms3d.js")

f(prefixTransforms3d, browsers => {
  prefix(['perspective', 'perspective-origin'], {
    browsers,
    feature: 'transforms3d'
  })
  return prefix(['transform-style'], {
    browsers,
    feature: 'transforms3d',
    mistakes: ['-ms-', '-o-']
  })
})

f(prefixTransforms3d, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backface-visibility'], {
    browsers,
    feature: 'transforms3d',
    mistakes: ['-ms-', '-o-']
  })
)

// Gradients
let prefixGradients = __webpack_require__(/*! caniuse-lite/data/features/css-gradients */ "./node_modules/caniuse-lite/data/features/css-gradients.js")

f(prefixGradients, { match: /y\sx/ }, browsers =>
  prefix(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      browsers,
      feature: 'css-gradients',
      mistakes: ['-ms-'],
      props: [
        'background',
        'background-image',
        'border-image',
        'mask',
        'list-style',
        'list-style-image',
        'content',
        'mask-image'
      ]
    }
  )
)

f(prefixGradients, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/firefox|op/.test(i)) {
      return i
    } else {
      return `${i} old`
    }
  })
  return add(
    [
      'linear-gradient',
      'repeating-linear-gradient',
      'radial-gradient',
      'repeating-radial-gradient'
    ],
    {
      browsers,
      feature: 'css-gradients'
    }
  )
})

// Box sizing
let prefixBoxsizing = __webpack_require__(/*! caniuse-lite/data/features/css3-boxsizing */ "./node_modules/caniuse-lite/data/features/css3-boxsizing.js")

f(prefixBoxsizing, browsers =>
  prefix(['box-sizing'], {
    browsers,
    feature: 'css3-boxsizing'
  })
)

// Filter Effects
let prefixFilters = __webpack_require__(/*! caniuse-lite/data/features/css-filters */ "./node_modules/caniuse-lite/data/features/css-filters.js")

f(prefixFilters, browsers =>
  prefix(['filter'], {
    browsers,
    feature: 'css-filters'
  })
)

// filter() function
let prefixFilterFunction = __webpack_require__(/*! caniuse-lite/data/features/css-filter-function */ "./node_modules/caniuse-lite/data/features/css-filter-function.js")

f(prefixFilterFunction, browsers =>
  prefix(['filter-function'], {
    browsers,
    feature: 'css-filter-function',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Backdrop-filter
let prefixBackdropFilter = __webpack_require__(/*! caniuse-lite/data/features/css-backdrop-filter */ "./node_modules/caniuse-lite/data/features/css-backdrop-filter.js")

f(prefixBackdropFilter, { match: /y\sx|y\s#2/ }, browsers =>
  prefix(['backdrop-filter'], {
    browsers,
    feature: 'css-backdrop-filter'
  })
)

// element() function
let prefixElementFunction = __webpack_require__(/*! caniuse-lite/data/features/css-element-function */ "./node_modules/caniuse-lite/data/features/css-element-function.js")

f(prefixElementFunction, browsers =>
  prefix(['element'], {
    browsers,
    feature: 'css-element-function',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Multicolumns
let prefixMulticolumns = __webpack_require__(/*! caniuse-lite/data/features/multicolumn */ "./node_modules/caniuse-lite/data/features/multicolumn.js")

f(prefixMulticolumns, browsers => {
  prefix(
    [
      'columns',
      'column-width',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-width',
      'column-count',
      'column-rule-style',
      'column-span',
      'column-fill'
    ],
    {
      browsers,
      feature: 'multicolumn'
    }
  )

  let noff = browsers.filter(i => !/firefox/.test(i))
  prefix(['break-before', 'break-after', 'break-inside'], {
    browsers: noff,
    feature: 'multicolumn'
  })
})

// User select
let prefixUserSelect = __webpack_require__(/*! caniuse-lite/data/features/user-select-none */ "./node_modules/caniuse-lite/data/features/user-select-none.js")

f(prefixUserSelect, browsers =>
  prefix(['user-select'], {
    browsers,
    feature: 'user-select-none',
    mistakes: ['-khtml-']
  })
)

// Flexible Box Layout
let prefixFlexbox = __webpack_require__(/*! caniuse-lite/data/features/flexbox */ "./node_modules/caniuse-lite/data/features/flexbox.js")

f(prefixFlexbox, { match: /a\sx/ }, browsers => {
  browsers = browsers.map(i => {
    if (/ie|firefox/.test(i)) {
      return i
    } else {
      return `${i} 2009`
    }
  })
  prefix(['display-flex', 'inline-flex'], {
    browsers,
    feature: 'flexbox',
    props: ['display']
  })
  prefix(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    browsers,
    feature: 'flexbox'
  })
  prefix(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      browsers,
      feature: 'flexbox'
    }
  )
})

f(prefixFlexbox, { match: /y\sx/ }, browsers => {
  add(['display-flex', 'inline-flex'], {
    browsers,
    feature: 'flexbox'
  })
  add(['flex', 'flex-grow', 'flex-shrink', 'flex-basis'], {
    browsers,
    feature: 'flexbox'
  })
  add(
    [
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'order',
      'align-items',
      'align-self',
      'align-content'
    ],
    {
      browsers,
      feature: 'flexbox'
    }
  )
})

// calc() unit
let prefixCalc = __webpack_require__(/*! caniuse-lite/data/features/calc */ "./node_modules/caniuse-lite/data/features/calc.js")

f(prefixCalc, browsers =>
  prefix(['calc'], {
    browsers,
    feature: 'calc',
    props: ['*']
  })
)

// Background options
let prefixBackgroundOptions = __webpack_require__(/*! caniuse-lite/data/features/background-img-opts */ "./node_modules/caniuse-lite/data/features/background-img-opts.js")

f(prefixBackgroundOptions, browsers =>
  prefix(['background-origin', 'background-size'], {
    browsers,
    feature: 'background-img-opts'
  })
)

// background-clip: text
let prefixBackgroundClipText = __webpack_require__(/*! caniuse-lite/data/features/background-clip-text */ "./node_modules/caniuse-lite/data/features/background-clip-text.js")

f(prefixBackgroundClipText, browsers =>
  prefix(['background-clip'], {
    browsers,
    feature: 'background-clip-text'
  })
)

// Font feature settings
let prefixFontFeature = __webpack_require__(/*! caniuse-lite/data/features/font-feature */ "./node_modules/caniuse-lite/data/features/font-feature.js")

f(prefixFontFeature, browsers =>
  prefix(
    [
      'font-feature-settings',
      'font-variant-ligatures',
      'font-language-override'
    ],
    {
      browsers,
      feature: 'font-feature'
    }
  )
)

// CSS font-kerning property
let prefixFontKerning = __webpack_require__(/*! caniuse-lite/data/features/font-kerning */ "./node_modules/caniuse-lite/data/features/font-kerning.js")

f(prefixFontKerning, browsers =>
  prefix(['font-kerning'], {
    browsers,
    feature: 'font-kerning'
  })
)

// Border image
let prefixBorderImage = __webpack_require__(/*! caniuse-lite/data/features/border-image */ "./node_modules/caniuse-lite/data/features/border-image.js")

f(prefixBorderImage, browsers =>
  prefix(['border-image'], {
    browsers,
    feature: 'border-image'
  })
)

// Selection selector
let prefixSelection = __webpack_require__(/*! caniuse-lite/data/features/css-selection */ "./node_modules/caniuse-lite/data/features/css-selection.js")

f(prefixSelection, browsers =>
  prefix(['::selection'], {
    browsers,
    feature: 'css-selection',
    selector: true
  })
)

// Placeholder selector
let prefixPlaceholder = __webpack_require__(/*! caniuse-lite/data/features/css-placeholder */ "./node_modules/caniuse-lite/data/features/css-placeholder.js")

f(prefixPlaceholder, browsers => {
  prefix(['::placeholder'], {
    browsers: browsers.concat(['ie 10 old', 'ie 11 old', 'firefox 18 old']),
    feature: 'css-placeholder',
    selector: true
  })
})

// Placeholder-shown selector
let prefixPlaceholderShown = __webpack_require__(/*! caniuse-lite/data/features/css-placeholder-shown */ "./node_modules/caniuse-lite/data/features/css-placeholder-shown.js")

f(prefixPlaceholderShown, browsers => {
  prefix([':placeholder-shown'], {
    browsers,
    feature: 'css-placeholder-shown',
    selector: true
  })
})

// Hyphenation
let prefixHyphens = __webpack_require__(/*! caniuse-lite/data/features/css-hyphens */ "./node_modules/caniuse-lite/data/features/css-hyphens.js")

f(prefixHyphens, browsers =>
  prefix(['hyphens'], {
    browsers,
    feature: 'css-hyphens'
  })
)

// Fullscreen selector
let prefixFullscreen = __webpack_require__(/*! caniuse-lite/data/features/fullscreen */ "./node_modules/caniuse-lite/data/features/fullscreen.js")

f(prefixFullscreen, browsers =>
  prefix([':fullscreen'], {
    browsers,
    feature: 'fullscreen',
    selector: true
  })
)

// ::backdrop pseudo-element
// https://caniuse.com/mdn-css_selectors_backdrop
let prefixBackdrop = __webpack_require__(/*! caniuse-lite/data/features/mdn-css-backdrop-pseudo-element */ "./node_modules/caniuse-lite/data/features/mdn-css-backdrop-pseudo-element.js")

f(prefixBackdrop, browsers =>
  prefix(['::backdrop'], {
    browsers,
    feature: 'backdrop',
    selector: true
  })
)

// File selector button
let prefixFileSelectorButton = __webpack_require__(/*! caniuse-lite/data/features/css-file-selector-button */ "./node_modules/caniuse-lite/data/features/css-file-selector-button.js")

f(prefixFileSelectorButton, browsers =>
  prefix(['::file-selector-button'], {
    browsers,
    feature: 'file-selector-button',
    selector: true
  })
)

// :autofill
let prefixAutofill = __webpack_require__(/*! caniuse-lite/data/features/css-autofill */ "./node_modules/caniuse-lite/data/features/css-autofill.js")

f(prefixAutofill, browsers =>
  prefix([':autofill'], {
    browsers,
    feature: 'css-autofill',
    selector: true
  })
)

// Tab size
let prefixTabsize = __webpack_require__(/*! caniuse-lite/data/features/css3-tabsize */ "./node_modules/caniuse-lite/data/features/css3-tabsize.js")

f(prefixTabsize, browsers =>
  prefix(['tab-size'], {
    browsers,
    feature: 'css3-tabsize'
  })
)

// Intrinsic & extrinsic sizing
let prefixIntrinsic = __webpack_require__(/*! caniuse-lite/data/features/intrinsic-width */ "./node_modules/caniuse-lite/data/features/intrinsic-width.js")

let sizeProps = [
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'block-size',
  'min-block-size',
  'max-block-size',
  'grid',
  'grid-template',
  'grid-template-rows',
  'grid-template-columns',
  'grid-auto-columns',
  'grid-auto-rows'
]

f(prefixIntrinsic, browsers =>
  prefix(['max-content', 'min-content'], {
    browsers,
    feature: 'intrinsic-width',
    props: sizeProps
  })
)

f(prefixIntrinsic, { match: /x|\s#4/ }, browsers =>
  prefix(['fill', 'fill-available'], {
    browsers,
    feature: 'intrinsic-width',
    props: sizeProps
  })
)

f(prefixIntrinsic, { match: /x|\s#5/ }, browsers =>
  prefix(['fit-content'], {
    browsers,
    feature: 'intrinsic-width',
    props: sizeProps
  })
)

// Stretch value

let prefixStretch = __webpack_require__(/*! caniuse-lite/data/features/css-width-stretch */ "./node_modules/caniuse-lite/data/features/css-width-stretch.js")

f(prefixStretch, browsers =>
  prefix(['stretch'], {
    browsers,
    feature: 'css-width-stretch',
    props: sizeProps
  })
)

// Zoom cursors
let prefixCursorsNewer = __webpack_require__(/*! caniuse-lite/data/features/css3-cursors-newer */ "./node_modules/caniuse-lite/data/features/css3-cursors-newer.js")

f(prefixCursorsNewer, browsers =>
  prefix(['zoom-in', 'zoom-out'], {
    browsers,
    feature: 'css3-cursors-newer',
    props: ['cursor']
  })
)

// Grab cursors
let prefixCursorsGrab = __webpack_require__(/*! caniuse-lite/data/features/css3-cursors-grab */ "./node_modules/caniuse-lite/data/features/css3-cursors-grab.js")

f(prefixCursorsGrab, browsers =>
  prefix(['grab', 'grabbing'], {
    browsers,
    feature: 'css3-cursors-grab',
    props: ['cursor']
  })
)

// Sticky position
let prefixSticky = __webpack_require__(/*! caniuse-lite/data/features/css-sticky */ "./node_modules/caniuse-lite/data/features/css-sticky.js")

f(prefixSticky, browsers =>
  prefix(['sticky'], {
    browsers,
    feature: 'css-sticky',
    props: ['position']
  })
)

// Pointer Events
let prefixPointer = __webpack_require__(/*! caniuse-lite/data/features/pointer */ "./node_modules/caniuse-lite/data/features/pointer.js")

f(prefixPointer, browsers =>
  prefix(['touch-action'], {
    browsers,
    feature: 'pointer'
  })
)

// Text decoration
let prefixDecoration = __webpack_require__(/*! caniuse-lite/data/features/text-decoration */ "./node_modules/caniuse-lite/data/features/text-decoration.js")

f(prefixDecoration, { match: /x.*#[235]/ }, browsers =>
  prefix(['text-decoration-skip', 'text-decoration-skip-ink'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationShorthand = __webpack_require__(/*! caniuse-lite/data/features/mdn-text-decoration-shorthand */ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-shorthand.js")

f(prefixDecorationShorthand, browsers =>
  prefix(['text-decoration'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationColor = __webpack_require__(/*! caniuse-lite/data/features/mdn-text-decoration-color */ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-color.js")

f(prefixDecorationColor, browsers =>
  prefix(['text-decoration-color'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationLine = __webpack_require__(/*! caniuse-lite/data/features/mdn-text-decoration-line */ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-line.js")

f(prefixDecorationLine, browsers =>
  prefix(['text-decoration-line'], {
    browsers,
    feature: 'text-decoration'
  })
)

let prefixDecorationStyle = __webpack_require__(/*! caniuse-lite/data/features/mdn-text-decoration-style */ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-style.js")

f(prefixDecorationStyle, browsers =>
  prefix(['text-decoration-style'], {
    browsers,
    feature: 'text-decoration'
  })
)

// Text Size Adjust
let prefixTextSizeAdjust = __webpack_require__(/*! caniuse-lite/data/features/text-size-adjust */ "./node_modules/caniuse-lite/data/features/text-size-adjust.js")

f(prefixTextSizeAdjust, browsers =>
  prefix(['text-size-adjust'], {
    browsers,
    feature: 'text-size-adjust'
  })
)

// CSS Masks
let prefixCssMasks = __webpack_require__(/*! caniuse-lite/data/features/css-masks */ "./node_modules/caniuse-lite/data/features/css-masks.js")

f(prefixCssMasks, browsers => {
  prefix(
    [
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-origin',
      'mask-repeat',
      'mask-border-repeat',
      'mask-border-source'
    ],
    {
      browsers,
      feature: 'css-masks'
    }
  )
  prefix(
    [
      'mask',
      'mask-position',
      'mask-size',
      'mask-border',
      'mask-border-outset',
      'mask-border-width',
      'mask-border-slice'
    ],
    {
      browsers,
      feature: 'css-masks'
    }
  )
})

// CSS clip-path property
let prefixClipPath = __webpack_require__(/*! caniuse-lite/data/features/css-clip-path */ "./node_modules/caniuse-lite/data/features/css-clip-path.js")

f(prefixClipPath, browsers =>
  prefix(['clip-path'], {
    browsers,
    feature: 'css-clip-path'
  })
)

// Fragmented Borders and Backgrounds
let prefixBoxdecoration = __webpack_require__(/*! caniuse-lite/data/features/css-boxdecorationbreak */ "./node_modules/caniuse-lite/data/features/css-boxdecorationbreak.js")

f(prefixBoxdecoration, browsers =>
  prefix(['box-decoration-break'], {
    browsers,
    feature: 'css-boxdecorationbreak'
  })
)

// CSS3 object-fit/object-position
let prefixObjectFit = __webpack_require__(/*! caniuse-lite/data/features/object-fit */ "./node_modules/caniuse-lite/data/features/object-fit.js")

f(prefixObjectFit, browsers =>
  prefix(['object-fit', 'object-position'], {
    browsers,
    feature: 'object-fit'
  })
)

// CSS Shapes
let prefixShapes = __webpack_require__(/*! caniuse-lite/data/features/css-shapes */ "./node_modules/caniuse-lite/data/features/css-shapes.js")

f(prefixShapes, browsers =>
  prefix(['shape-margin', 'shape-outside', 'shape-image-threshold'], {
    browsers,
    feature: 'css-shapes'
  })
)

// CSS3 text-overflow
let prefixTextOverflow = __webpack_require__(/*! caniuse-lite/data/features/text-overflow */ "./node_modules/caniuse-lite/data/features/text-overflow.js")

f(prefixTextOverflow, browsers =>
  prefix(['text-overflow'], {
    browsers,
    feature: 'text-overflow'
  })
)

// Viewport at-rule
let prefixDeviceadaptation = __webpack_require__(/*! caniuse-lite/data/features/css-deviceadaptation */ "./node_modules/caniuse-lite/data/features/css-deviceadaptation.js")

f(prefixDeviceadaptation, browsers =>
  prefix(['@viewport'], {
    browsers,
    feature: 'css-deviceadaptation'
  })
)

// Resolution Media Queries
let prefixResolut = __webpack_require__(/*! caniuse-lite/data/features/css-media-resolution */ "./node_modules/caniuse-lite/data/features/css-media-resolution.js")

f(prefixResolut, { match: /( x($| )|a #2)/ }, browsers =>
  prefix(['@resolution'], {
    browsers,
    feature: 'css-media-resolution'
  })
)

// CSS text-align-last
let prefixTextAlignLast = __webpack_require__(/*! caniuse-lite/data/features/css-text-align-last */ "./node_modules/caniuse-lite/data/features/css-text-align-last.js")

f(prefixTextAlignLast, browsers =>
  prefix(['text-align-last'], {
    browsers,
    feature: 'css-text-align-last'
  })
)

// Crisp Edges Image Rendering Algorithm
let prefixCrispedges = __webpack_require__(/*! caniuse-lite/data/features/css-crisp-edges */ "./node_modules/caniuse-lite/data/features/css-crisp-edges.js")

f(prefixCrispedges, { match: /y x|a x #1/ }, browsers =>
  prefix(['pixelated'], {
    browsers,
    feature: 'css-crisp-edges',
    props: ['image-rendering']
  })
)

f(prefixCrispedges, { match: /a x #2/ }, browsers =>
  prefix(['image-rendering'], {
    browsers,
    feature: 'css-crisp-edges'
  })
)

// Logical Properties
let prefixLogicalProps = __webpack_require__(/*! caniuse-lite/data/features/css-logical-props */ "./node_modules/caniuse-lite/data/features/css-logical-props.js")

f(prefixLogicalProps, browsers =>
  prefix(
    [
      'border-inline-start',
      'border-inline-end',
      'margin-inline-start',
      'margin-inline-end',
      'padding-inline-start',
      'padding-inline-end'
    ],
    {
      browsers,
      feature: 'css-logical-props'
    }
  )
)

f(prefixLogicalProps, { match: /x\s#2/ }, browsers =>
  prefix(
    [
      'border-block-start',
      'border-block-end',
      'margin-block-start',
      'margin-block-end',
      'padding-block-start',
      'padding-block-end'
    ],
    {
      browsers,
      feature: 'css-logical-props'
    }
  )
)

// CSS appearance
let prefixAppearance = __webpack_require__(/*! caniuse-lite/data/features/css-appearance */ "./node_modules/caniuse-lite/data/features/css-appearance.js")

f(prefixAppearance, { match: /#2|x/ }, browsers =>
  prefix(['appearance'], {
    browsers,
    feature: 'css-appearance'
  })
)

// CSS Scroll snap points
let prefixSnappoints = __webpack_require__(/*! caniuse-lite/data/features/css-snappoints */ "./node_modules/caniuse-lite/data/features/css-snappoints.js")

f(prefixSnappoints, browsers =>
  prefix(
    [
      'scroll-snap-type',
      'scroll-snap-coordinate',
      'scroll-snap-destination',
      'scroll-snap-points-x',
      'scroll-snap-points-y'
    ],
    {
      browsers,
      feature: 'css-snappoints'
    }
  )
)

// CSS Regions
let prefixRegions = __webpack_require__(/*! caniuse-lite/data/features/css-regions */ "./node_modules/caniuse-lite/data/features/css-regions.js")

f(prefixRegions, browsers =>
  prefix(['flow-into', 'flow-from', 'region-fragment'], {
    browsers,
    feature: 'css-regions'
  })
)

// CSS image-set
let prefixImageSet = __webpack_require__(/*! caniuse-lite/data/features/css-image-set */ "./node_modules/caniuse-lite/data/features/css-image-set.js")

f(prefixImageSet, browsers =>
  prefix(['image-set'], {
    browsers,
    feature: 'css-image-set',
    props: [
      'background',
      'background-image',
      'border-image',
      'cursor',
      'mask',
      'mask-image',
      'list-style',
      'list-style-image',
      'content'
    ]
  })
)

// Writing Mode
let prefixWritingMode = __webpack_require__(/*! caniuse-lite/data/features/css-writing-mode */ "./node_modules/caniuse-lite/data/features/css-writing-mode.js")

f(prefixWritingMode, { match: /a|x/ }, browsers =>
  prefix(['writing-mode'], {
    browsers,
    feature: 'css-writing-mode'
  })
)

// Cross-Fade Function
let prefixCrossFade = __webpack_require__(/*! caniuse-lite/data/features/css-cross-fade */ "./node_modules/caniuse-lite/data/features/css-cross-fade.js")

f(prefixCrossFade, browsers =>
  prefix(['cross-fade'], {
    browsers,
    feature: 'css-cross-fade',
    props: [
      'background',
      'background-image',
      'border-image',
      'mask',
      'list-style',
      'list-style-image',
      'content',
      'mask-image'
    ]
  })
)

// Read Only selector
let prefixReadOnly = __webpack_require__(/*! caniuse-lite/data/features/css-read-only-write */ "./node_modules/caniuse-lite/data/features/css-read-only-write.js")

f(prefixReadOnly, browsers =>
  prefix([':read-only', ':read-write'], {
    browsers,
    feature: 'css-read-only-write',
    selector: true
  })
)

// Text Emphasize
let prefixTextEmphasis = __webpack_require__(/*! caniuse-lite/data/features/text-emphasis */ "./node_modules/caniuse-lite/data/features/text-emphasis.js")

f(prefixTextEmphasis, browsers =>
  prefix(
    [
      'text-emphasis',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-emphasis-color'
    ],
    {
      browsers,
      feature: 'text-emphasis'
    }
  )
)

// CSS Grid Layout
let prefixGrid = __webpack_require__(/*! caniuse-lite/data/features/css-grid */ "./node_modules/caniuse-lite/data/features/css-grid.js")

f(prefixGrid, browsers => {
  prefix(['display-grid', 'inline-grid'], {
    browsers,
    feature: 'css-grid',
    props: ['display']
  })
  prefix(
    [
      'grid-template-columns',
      'grid-template-rows',
      'grid-row-start',
      'grid-column-start',
      'grid-row-end',
      'grid-column-end',
      'grid-row',
      'grid-column',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'place-self'
    ],
    {
      browsers,
      feature: 'css-grid'
    }
  )
})

f(prefixGrid, { match: /a x/ }, browsers =>
  prefix(['grid-column-align', 'grid-row-align'], {
    browsers,
    feature: 'css-grid'
  })
)

// CSS text-spacing
let prefixTextSpacing = __webpack_require__(/*! caniuse-lite/data/features/css-text-spacing */ "./node_modules/caniuse-lite/data/features/css-text-spacing.js")

f(prefixTextSpacing, browsers =>
  prefix(['text-spacing'], {
    browsers,
    feature: 'css-text-spacing'
  })
)

// :any-link selector
let prefixAnyLink = __webpack_require__(/*! caniuse-lite/data/features/css-any-link */ "./node_modules/caniuse-lite/data/features/css-any-link.js")

f(prefixAnyLink, browsers =>
  prefix([':any-link'], {
    browsers,
    feature: 'css-any-link',
    selector: true
  })
)

// unicode-bidi

let bidiIsolate = __webpack_require__(/*! caniuse-lite/data/features/mdn-css-unicode-bidi-isolate */ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate.js")

f(bidiIsolate, browsers =>
  prefix(['isolate'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

let bidiPlaintext = __webpack_require__(/*! caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext */ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext.js")

f(bidiPlaintext, browsers =>
  prefix(['plaintext'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

let bidiOverride = __webpack_require__(/*! caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override */ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override.js")

f(bidiOverride, { match: /y x/ }, browsers =>
  prefix(['isolate-override'], {
    browsers,
    feature: 'css-unicode-bidi',
    props: ['unicode-bidi']
  })
)

// overscroll-behavior selector
let prefixOverscroll = __webpack_require__(/*! caniuse-lite/data/features/css-overscroll-behavior */ "./node_modules/caniuse-lite/data/features/css-overscroll-behavior.js")

f(prefixOverscroll, { match: /a #1/ }, browsers =>
  prefix(['overscroll-behavior'], {
    browsers,
    feature: 'css-overscroll-behavior'
  })
)

// text-orientation
let prefixTextOrientation = __webpack_require__(/*! caniuse-lite/data/features/css-text-orientation */ "./node_modules/caniuse-lite/data/features/css-text-orientation.js")

f(prefixTextOrientation, browsers =>
  prefix(['text-orientation'], {
    browsers,
    feature: 'css-text-orientation'
  })
)

// print-color-adjust
let prefixPrintAdjust = __webpack_require__(/*! caniuse-lite/data/features/css-print-color-adjust */ "./node_modules/caniuse-lite/data/features/css-print-color-adjust.js")

f(prefixPrintAdjust, browsers =>
  prefix(['print-color-adjust', 'color-adjust'], {
    browsers,
    feature: 'css-print-color-adjust'
  })
)


/***/ }),

/***/ "./node_modules/autoprefixer/lib/at-rule.js":
/*!**************************************************!*\
  !*** ./node_modules/autoprefixer/lib/at-rule.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/autoprefixer/lib/prefixer.js")

class AtRule extends Prefixer {
  /**
   * Clone and add prefixes for at-rule
   */
  add(rule, prefix) {
    let prefixed = prefix + rule.name

    let already = rule.parent.some(
      i => i.name === prefixed && i.params === rule.params
    )
    if (already) {
      return undefined
    }

    let cloned = this.clone(rule, { name: prefixed })
    return rule.parent.insertBefore(rule, cloned)
  }

  /**
   * Clone node with prefixes
   */
  process(node) {
    let parent = this.parentPrefix(node)

    for (let prefix of this.prefixes) {
      if (!parent || parent === prefix) {
        this.add(node, prefix)
      }
    }
  }
}

module.exports = AtRule


/***/ }),

/***/ "./node_modules/autoprefixer/lib/autoprefixer.js":
/*!*******************************************************!*\
  !*** ./node_modules/autoprefixer/lib/autoprefixer.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let browserslist = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js")
let { agents } = __webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js")
let pico = __webpack_require__(/*! picocolors */ "./node_modules/picocolors/picocolors.browser.js")

let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let Prefixes = __webpack_require__(/*! ./prefixes */ "./node_modules/autoprefixer/lib/prefixes.js")
let dataPrefixes = __webpack_require__(/*! ../data/prefixes */ "./node_modules/autoprefixer/data/prefixes.js")
let getInfo = __webpack_require__(/*! ./info */ "./node_modules/autoprefixer/lib/info.js")

let autoprefixerData = { browsers: agents, prefixes: dataPrefixes }

const WARNING =
  '\n' +
  '  Replace Autoprefixer `browsers` option to Browserslist config.\n' +
  '  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n' +
  '\n' +
  '  Using `browsers` option can cause errors. Browserslist config can\n' +
  '  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n' +
  '\n' +
  '  If you really need to use option, rename it to `overrideBrowserslist`.\n' +
  '\n' +
  '  Learn more at:\n' +
  '  https://github.com/browserslist/browserslist#readme\n' +
  '  https://twitter.com/browserslist\n' +
  '\n'

function isPlainObject(obj) {
  return Object.prototype.toString.apply(obj) === '[object Object]'
}

let cache = new Map()

function timeCapsule(result, prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return
  }
  if (prefixes.add.selectors.length > 0) {
    return
  }
  if (Object.keys(prefixes.add).length > 2) {
    return
  }
  /* c8 ignore next 11 */
  result.warn(
    'Autoprefixer target browsers do not need any prefixes.' +
      'You do not need Autoprefixer anymore.\n' +
      'Check your Browserslist config to be sure that your targets ' +
      'are set up correctly.\n' +
      '\n' +
      '  Learn more at:\n' +
      '  https://github.com/postcss/autoprefixer#readme\n' +
      '  https://github.com/browserslist/browserslist#readme\n' +
      '\n'
  )
}

module.exports = plugin

function plugin(...reqs) {
  let options
  if (reqs.length === 1 && isPlainObject(reqs[0])) {
    options = reqs[0]
    reqs = undefined
  } else if (reqs.length === 0 || (reqs.length === 1 && !reqs[0])) {
    reqs = undefined
  } else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
    options = reqs[1]
    reqs = reqs[0]
  } else if (typeof reqs[reqs.length - 1] === 'object') {
    options = reqs.pop()
  }

  if (!options) {
    options = {}
  }

  if (options.browser) {
    throw new Error(
      'Change `browser` option to `overrideBrowserslist` in Autoprefixer'
    )
  } else if (options.browserslist) {
    throw new Error(
      'Change `browserslist` option to `overrideBrowserslist` in Autoprefixer'
    )
  }

  if (options.overrideBrowserslist) {
    reqs = options.overrideBrowserslist
  } else if (options.browsers) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(
        pico.red(WARNING.replace(/`[^`]+`/g, i => pico.yellow(i.slice(1, -1))))
      )
    }
    reqs = options.browsers
  }

  let brwlstOpts = {
    env: options.env,
    ignoreUnknownVersions: options.ignoreUnknownVersions,
    stats: options.stats
  }

  function loadPrefixes(opts) {
    let d = autoprefixerData
    let browsers = new Browsers(d.browsers, reqs, opts, brwlstOpts)
    let key = browsers.selected.join(', ') + JSON.stringify(options)

    if (!cache.has(key)) {
      cache.set(key, new Prefixes(d.prefixes, browsers, options))
    }

    return cache.get(key)
  }

  return {
    browsers: reqs,

    info(opts) {
      opts = opts || {}
      opts.from = opts.from || process.cwd()
      return getInfo(loadPrefixes(opts))
    },

    options,

    postcssPlugin: 'autoprefixer',
    prepare(result) {
      let prefixes = loadPrefixes({
        env: options.env,
        from: result.opts.from
      })

      return {
        OnceExit(root) {
          timeCapsule(result, prefixes)
          if (options.remove !== false) {
            prefixes.processor.remove(root, result)
          }
          if (options.add !== false) {
            prefixes.processor.add(root, result)
          }
        }
      }
    }
  }
}

plugin.postcss = true

/**
 * Autoprefixer data
 */
plugin.data = autoprefixerData

/**
 * Autoprefixer default browsers
 */
plugin.defaults = browserslist.defaults

/**
 * Inspect with default Autoprefixer
 */
plugin.info = () => plugin().info()


/***/ }),

/***/ "./node_modules/autoprefixer/lib/brackets.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/brackets.js ***!
  \***************************************************/
/***/ ((module) => {

function last(array) {
  return array[array.length - 1]
}

let brackets = {
  /**
   * Parse string to nodes tree
   */
  parse(str) {
    let current = ['']
    let stack = [current]

    for (let sym of str) {
      if (sym === '(') {
        current = ['']
        last(stack).push(current)
        stack.push(current)
        continue
      }

      if (sym === ')') {
        stack.pop()
        current = last(stack)
        current.push('')
        continue
      }

      current[current.length - 1] += sym
    }

    return stack[0]
  },

  /**
   * Generate output string by nodes tree
   */
  stringify(ast) {
    let result = ''
    for (let i of ast) {
      if (typeof i === 'object') {
        result += `(${brackets.stringify(i)})`
        continue
      }

      result += i
    }
    return result
  }
}

module.exports = brackets


/***/ }),

/***/ "./node_modules/autoprefixer/lib/browsers.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/browsers.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let browserslist = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js")
let { agents } = __webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js")

let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

class Browsers {
  constructor(data, requirements, options, browserslistOpts) {
    this.data = data
    this.options = options || {}
    this.browserslistOpts = browserslistOpts || {}
    this.selected = this.parse(requirements)
  }

  /**
   * Return all prefixes for default browser data
   */
  static prefixes() {
    if (this.prefixesCache) {
      return this.prefixesCache
    }

    this.prefixesCache = []
    for (let name in agents) {
      this.prefixesCache.push(`-${agents[name].prefix}-`)
    }

    this.prefixesCache = utils
      .uniq(this.prefixesCache)
      .sort((a, b) => b.length - a.length)

    return this.prefixesCache
  }

  /**
   * Check is value contain any possible prefix
   */
  static withPrefix(value) {
    if (!this.prefixesRegexp) {
      this.prefixesRegexp = new RegExp(this.prefixes().join('|'))
    }

    return this.prefixesRegexp.test(value)
  }

  /**
   * Is browser is selected by requirements
   */
  isSelected(browser) {
    return this.selected.includes(browser)
  }

  /**
   * Return browsers selected by requirements
   */
  parse(requirements) {
    let opts = {}
    for (let i in this.browserslistOpts) {
      opts[i] = this.browserslistOpts[i]
    }
    opts.path = this.options.from
    return browserslist(requirements, opts)
  }

  /**
   * Return prefix for selected browser
   */
  prefix(browser) {
    let [name, version] = browser.split(' ')
    let data = this.data[name]

    let prefix = data.prefix_exceptions && data.prefix_exceptions[version]
    if (!prefix) {
      prefix = data.prefix
    }
    return `-${prefix}-`
  }
}

module.exports = Browsers


/***/ }),

/***/ "./node_modules/autoprefixer/lib/declaration.js":
/*!******************************************************!*\
  !*** ./node_modules/autoprefixer/lib/declaration.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/autoprefixer/lib/prefixer.js")
let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

class Declaration extends Prefixer {
  /**
   * Clone and add prefixes for declaration
   */
  add(decl, prefix, prefixes, result) {
    let prefixed = this.prefixed(decl.prop, prefix)
    if (
      this.isAlready(decl, prefixed) ||
      this.otherPrefixes(decl.value, prefix)
    ) {
      return undefined
    }
    return this.insert(decl, prefix, prefixes, result)
  }

  /**
   * Calculate indentation to create visual cascade
   */
  calcBefore(prefixes, decl, prefix = '') {
    let max = this.maxPrefixed(prefixes, decl)
    let diff = max - utils.removeNote(prefix).length

    let before = decl.raw('before')
    if (diff > 0) {
      before += Array(diff).fill(' ').join('')
    }

    return before
  }

  /**
   * Always true, because we already get prefixer by property name
   */
  check(/* decl */) {
    return true
  }

  /**
   * Clone and insert new declaration
   */
  insert(decl, prefix, prefixes) {
    let cloned = this.set(this.clone(decl), prefix)
    if (!cloned) return undefined

    let already = decl.parent.some(
      i => i.prop === cloned.prop && i.value === cloned.value
    )
    if (already) {
      return undefined
    }

    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }

  /**
   * Did this declaration has this prefix above
   */
  isAlready(decl, prefixed) {
    let already = this.all.group(decl).up(i => i.prop === prefixed)
    if (!already) {
      already = this.all.group(decl).down(i => i.prop === prefixed)
    }
    return already
  }

  /**
   * Return maximum length of possible prefixed property
   */
  maxPrefixed(prefixes, decl) {
    if (decl._autoprefixerMax) {
      return decl._autoprefixerMax
    }

    let max = 0
    for (let prefix of prefixes) {
      prefix = utils.removeNote(prefix)
      if (prefix.length > max) {
        max = prefix.length
      }
    }
    decl._autoprefixerMax = max

    return decl._autoprefixerMax
  }

  /**
   * Should we use visual cascade for prefixes
   */
  needCascade(decl) {
    if (!decl._autoprefixerCascade) {
      decl._autoprefixerCascade =
        this.all.options.cascade !== false && decl.raw('before').includes('\n')
    }
    return decl._autoprefixerCascade
  }

  /**
   * Return unprefixed version of property
   */
  normalize(prop) {
    return prop
  }

  /**
   * Return list of prefixed properties to clean old prefixes
   */
  old(prop, prefix) {
    return [this.prefixed(prop, prefix)]
  }

  /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */
  otherPrefixes(value, prefix) {
    for (let other of Browsers.prefixes()) {
      if (other === prefix) {
        continue
      }
      if (value.includes(other)) {
        return value.replace(/var\([^)]+\)/, '').includes(other)
      }
    }
    return false
  }

  /**
   * Return prefixed version of property
   */
  prefixed(prop, prefix) {
    return prefix + prop
  }

  /**
   * Add spaces for visual cascade
   */
  process(decl, result) {
    if (!this.needCascade(decl)) {
      super.process(decl, result)
      return
    }

    let prefixes = super.process(decl, result)

    if (!prefixes || !prefixes.length) {
      return
    }

    this.restoreBefore(decl)
    decl.raws.before = this.calcBefore(prefixes, decl)
  }

  /**
   * Remove visual cascade
   */
  restoreBefore(decl) {
    let lines = decl.raw('before').split('\n')
    let min = lines[lines.length - 1]

    this.all.group(decl).up(prefixed => {
      let array = prefixed.raw('before').split('\n')
      let last = array[array.length - 1]
      if (last.length < min.length) {
        min = last
      }
    })

    lines[lines.length - 1] = min
    decl.raws.before = lines.join('\n')
  }

  /**
   * Set prefix to declaration
   */
  set(decl, prefix) {
    decl.prop = this.prefixed(decl.prop, prefix)
    return decl
  }
}

module.exports = Declaration


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/align-content.js":
/*!**************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/align-content.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class AlignContent extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-content'
  }

  /**
   * Change property name for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-line-pack'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2012) {
      decl.value = AlignContent.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

AlignContent.names = ['align-content', 'flex-line-pack']

AlignContent.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start',
  'space-around': 'distribute',
  'space-between': 'justify'
}

module.exports = AlignContent


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/align-items.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/align-items.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class AlignItems extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-items'
  }

  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-align'
    }
    if (spec === 2012) {
      return prefix + 'flex-align'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change value for 2009 and 2012 specs
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 || spec === 2012) {
      decl.value = AlignItems.oldValues[decl.value] || decl.value
    }
    return super.set(decl, prefix)
  }
}

AlignItems.names = ['align-items', 'flex-align', 'box-align']

AlignItems.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start'
}

module.exports = AlignItems


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/align-self.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/align-self.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class AlignSelf extends Declaration {
  check(decl) {
    return (
      decl.parent &&
      !decl.parent.some(i => {
        return i.prop && i.prop.startsWith('grid-')
      })
    )
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'align-self'
  }

  /**
   * Change property name for 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-item-align'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2012) {
      decl.value = AlignSelf.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

AlignSelf.names = ['align-self', 'flex-item-align']

AlignSelf.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start'
}

module.exports = AlignSelf


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/animation.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/animation.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class Animation extends Declaration {
  /**
   * Don’t add prefixes for modern values.
   */
  check(decl) {
    return !decl.value.split(/\s+/).some(i => {
      let lower = i.toLowerCase()
      return lower === 'reverse' || lower === 'alternate-reverse'
    })
  }
}

Animation.names = ['animation', 'animation-direction']

module.exports = Animation


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/appearance.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/appearance.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class Appearance extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          if (i === '-ms-') {
            return '-webkit-'
          }
          return i
        })
      )
    }
  }
}

Appearance.names = ['appearance']

module.exports = Appearance


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/autofill.js":
/*!*********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/autofill.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(/*! ../selector */ "./node_modules/autoprefixer/lib/selector.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class Autofill extends Selector {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(this.prefixes.map(() => '-webkit-'))
    }
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return ':-webkit-autofill'
    }
    return `:${prefix}autofill`
  }
}

Autofill.names = [':autofill']

module.exports = Autofill


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/backdrop-filter.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/backdrop-filter.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class BackdropFilter extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          return i === '-ms-' ? '-webkit-' : i
        })
      )
    }
  }
}

BackdropFilter.names = ['backdrop-filter']

module.exports = BackdropFilter


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/background-clip.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/background-clip.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class BackgroundClip extends Declaration {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(
        this.prefixes.map(i => {
          return i === '-ms-' ? '-webkit-' : i
        })
      )
    }
  }

  check(decl) {
    return decl.value.toLowerCase() === 'text'
  }
}

BackgroundClip.names = ['background-clip']

module.exports = BackgroundClip


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/background-size.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/background-size.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class BackgroundSize extends Declaration {
  /**
   * Duplication parameter for -webkit- browsers
   */
  set(decl, prefix) {
    let value = decl.value.toLowerCase()
    if (
      prefix === '-webkit-' &&
      !value.includes(' ') &&
      value !== 'contain' &&
      value !== 'cover'
    ) {
      decl.value = decl.value + ' ' + decl.value
    }
    return super.set(decl, prefix)
  }
}

BackgroundSize.names = ['background-size']

module.exports = BackgroundSize


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/block-logical.js":
/*!**************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/block-logical.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class BlockLogical extends Declaration {
  /**
   * Return property name by spec
   */
  normalize(prop) {
    if (prop.includes('-before')) {
      return prop.replace('-before', '-block-start')
    }
    return prop.replace('-after', '-block-end')
  }

  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    if (prop.includes('-start')) {
      return prefix + prop.replace('-block-start', '-before')
    }
    return prefix + prop.replace('-block-end', '-after')
  }
}

BlockLogical.names = [
  'border-block-start',
  'border-block-end',
  'margin-block-start',
  'margin-block-end',
  'padding-block-start',
  'padding-block-end',
  'border-before',
  'border-after',
  'margin-before',
  'margin-after',
  'padding-before',
  'padding-after'
]

module.exports = BlockLogical


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/border-image.js":
/*!*************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/border-image.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class BorderImage extends Declaration {
  /**
   * Remove fill parameter for prefixed declarations
   */
  set(decl, prefix) {
    decl.value = decl.value.replace(/\s+fill(\s)/, '$1')
    return super.set(decl, prefix)
  }
}

BorderImage.names = ['border-image']

module.exports = BorderImage


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/border-radius.js":
/*!**************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/border-radius.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class BorderRadius extends Declaration {
  /**
   * Return unprefixed version of property
   */
  normalize(prop) {
    return BorderRadius.toNormal[prop] || prop
  }

  /**
   * Change syntax, when add Mozilla prefix
   */
  prefixed(prop, prefix) {
    if (prefix === '-moz-') {
      return prefix + (BorderRadius.toMozilla[prop] || prop)
    }
    return super.prefixed(prop, prefix)
  }
}

BorderRadius.names = ['border-radius']

BorderRadius.toMozilla = {}
BorderRadius.toNormal = {}

for (let ver of ['top', 'bottom']) {
  for (let hor of ['left', 'right']) {
    let normal = `border-${ver}-${hor}-radius`
    let mozilla = `border-radius-${ver}${hor}`

    BorderRadius.names.push(normal)
    BorderRadius.names.push(mozilla)

    BorderRadius.toMozilla[normal] = mozilla
    BorderRadius.toNormal[mozilla] = normal
  }
}

module.exports = BorderRadius


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/break-props.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/break-props.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class BreakProps extends Declaration {
  /**
   * Don’t prefix some values
   */
  insert(decl, prefix, prefixes) {
    if (decl.prop !== 'break-inside') {
      return super.insert(decl, prefix, prefixes)
    }
    if (/region/i.test(decl.value) || /page/i.test(decl.value)) {
      return undefined
    }
    return super.insert(decl, prefix, prefixes)
  }

  /**
   * Return property name by final spec
   */
  normalize(prop) {
    if (prop.includes('inside')) {
      return 'break-inside'
    }
    if (prop.includes('before')) {
      return 'break-before'
    }
    return 'break-after'
  }

  /**
   * Change name for -webkit- and -moz- prefix
   */
  prefixed(prop, prefix) {
    return `${prefix}column-${prop}`
  }

  /**
   * Change prefixed value for avoid-column and avoid-page
   */
  set(decl, prefix) {
    if (
      (decl.prop === 'break-inside' && decl.value === 'avoid-column') ||
      decl.value === 'avoid-page'
    ) {
      decl.value = 'avoid'
    }
    return super.set(decl, prefix)
  }
}

BreakProps.names = [
  'break-inside',
  'page-break-inside',
  'column-break-inside',
  'break-before',
  'page-break-before',
  'column-break-before',
  'break-after',
  'page-break-after',
  'column-break-after'
]

module.exports = BreakProps


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/cross-fade.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/cross-fade.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let list = (__webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js").list)

let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class CrossFade extends Value {
  replace(string, prefix) {
    return list
      .space(string)
      .map(value => {
        if (value.slice(0, +this.name.length + 1) !== this.name + '(') {
          return value
        }

        let close = value.lastIndexOf(')')
        let after = value.slice(close + 1)
        let args = value.slice(this.name.length + 1, close)

        if (prefix === '-webkit-') {
          let match = args.match(/\d*.?\d+%?/)
          if (match) {
            args = args.slice(match[0].length).trim()
            args += `, ${match[0]}`
          } else {
            args += ', 0.5'
          }
        }
        return prefix + this.name + '(' + args + ')' + after
      })
      .join(' ')
  }
}

CrossFade.names = ['cross-fade']

module.exports = CrossFade


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/display-flex.js":
/*!*************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/display-flex.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let OldValue = __webpack_require__(/*! ../old-value */ "./node_modules/autoprefixer/lib/old-value.js")
let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class DisplayFlex extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-flex') {
      this.name = 'flex'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }

  /**
   * Change value for old specs
   */
  old(prefix) {
    let prefixed = this.prefixed(prefix)
    if (!prefixed) return undefined
    return new OldValue(this.name, prefixed)
  }

  /**
   * Return value by spec
   */
  prefixed(prefix) {
    let spec, value
    ;[spec, prefix] = flexSpec(prefix)

    if (spec === 2009) {
      if (this.name === 'flex') {
        value = 'box'
      } else {
        value = 'inline-box'
      }
    } else if (spec === 2012) {
      if (this.name === 'flex') {
        value = 'flexbox'
      } else {
        value = 'inline-flexbox'
      }
    } else if (spec === 'final') {
      value = this.name
    }

    return prefix + value
  }

  /**
   * Add prefix to value depend on flebox spec version
   */
  replace(string, prefix) {
    return this.prefixed(prefix)
  }
}

DisplayFlex.names = ['display-flex', 'inline-flex']

module.exports = DisplayFlex


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/display-grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/display-grid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class DisplayGrid extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-grid') {
      this.name = 'grid'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }
}

DisplayGrid.names = ['display-grid', 'inline-grid']

module.exports = DisplayGrid


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/file-selector-button.js":
/*!*********************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/file-selector-button.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(/*! ../selector */ "./node_modules/autoprefixer/lib/selector.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class FileSelectorButton extends Selector {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)

    if (this.prefixes) {
      this.prefixes = utils.uniq(this.prefixes.map(() => '-webkit-'))
    }
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return '::-webkit-file-upload-button'
    }
    return `::${prefix}file-selector-button`
  }
}

FileSelectorButton.names = ['::file-selector-button']

module.exports = FileSelectorButton


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/filter-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/filter-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class FilterValue extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'filter-function') {
      this.name = 'filter'
    }
  }
}

FilterValue.names = ['filter', 'filter-function']

module.exports = FilterValue


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/filter.js":
/*!*******************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/filter.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class Filter extends Declaration {
  /**
   * Check is it Internet Explorer filter
   */
  check(decl) {
    let v = decl.value
    return (
      !v.toLowerCase().includes('alpha(') &&
      !v.includes('DXImageTransform.Microsoft') &&
      !v.includes('data:image/svg+xml')
    )
  }
}

Filter.names = ['filter']

module.exports = Filter


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-basis.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-basis.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class FlexBasis extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-basis'
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-preferred-size'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(decl, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012 || spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexBasis.names = ['flex-basis', 'flex-preferred-size']

module.exports = FlexBasis


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-direction.js":
/*!***************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-direction.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class FlexDirection extends Declaration {
  /**
   * Use two properties for 2009 spec
   */
  insert(decl, prefix, prefixes) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec !== 2009) {
      return super.insert(decl, prefix, prefixes)
    }
    let already = decl.parent.some(
      i =>
        i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction'
    )
    if (already) {
      return undefined
    }

    let v = decl.value
    let orient, dir
    if (v === 'inherit' || v === 'initial' || v === 'unset') {
      orient = v
      dir = v
    } else {
      orient = v.includes('row') ? 'horizontal' : 'vertical'
      dir = v.includes('reverse') ? 'reverse' : 'normal'
    }

    let cloned = this.clone(decl)
    cloned.prop = prefix + 'box-orient'
    cloned.value = orient
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    decl.parent.insertBefore(decl, cloned)

    cloned = this.clone(decl)
    cloned.prop = prefix + 'box-direction'
    cloned.value = dir
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }

  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-direction'
  }

  /**
   * Clean two properties for 2009 spec
   */
  old(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return [prefix + 'box-orient', prefix + 'box-direction']
    } else {
      return super.old(prop, prefix)
    }
  }
}

FlexDirection.names = ['flex-direction', 'box-direction', 'box-orient']

module.exports = FlexDirection


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-flow.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-flow.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class FlexFlow extends Declaration {
  /**
   * Use two properties for 2009 spec
   */
  insert(decl, prefix, prefixes) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec !== 2009) {
      return super.insert(decl, prefix, prefixes)
    }
    let values = decl.value
      .split(/\s+/)
      .filter(i => i !== 'wrap' && i !== 'nowrap' && 'wrap-reverse')
    if (values.length === 0) {
      return undefined
    }

    let already = decl.parent.some(
      i =>
        i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction'
    )
    if (already) {
      return undefined
    }

    let value = values[0]
    let orient = value.includes('row') ? 'horizontal' : 'vertical'
    let dir = value.includes('reverse') ? 'reverse' : 'normal'

    let cloned = this.clone(decl)
    cloned.prop = prefix + 'box-orient'
    cloned.value = orient
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    decl.parent.insertBefore(decl, cloned)

    cloned = this.clone(decl)
    cloned.prop = prefix + 'box-direction'
    cloned.value = dir
    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, cloned)
  }
}

FlexFlow.names = ['flex-flow', 'box-direction', 'box-orient']

module.exports = FlexFlow


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-grow.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-grow.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class Flex extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex'
  }

  /**
   * Return flex property for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-flex'
    }
    if (spec === 2012) {
      return prefix + 'flex-positive'
    }
    return super.prefixed(prop, prefix)
  }
}

Flex.names = ['flex-grow', 'flex-positive']

module.exports = Flex


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-shrink.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-shrink.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class FlexShrink extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex-shrink'
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012) {
      return prefix + 'flex-negative'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(decl, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2012 || spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexShrink.names = ['flex-shrink', 'flex-negative']

module.exports = FlexShrink


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-spec.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-spec.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * Return flexbox spec versions by prefix
 */
module.exports = function (prefix) {
  let spec
  if (prefix === '-webkit- 2009' || prefix === '-moz-') {
    spec = 2009
  } else if (prefix === '-ms-') {
    spec = 2012
  } else if (prefix === '-webkit-') {
    spec = 'final'
  }

  if (prefix === '-webkit- 2009') {
    prefix = '-webkit-'
  }

  return [spec, prefix]
}


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex-wrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex-wrap.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class FlexWrap extends Declaration {
  /**
   * Don't add prefix for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec !== 2009) {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

FlexWrap.names = ['flex-wrap']

module.exports = FlexWrap


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/flex.js":
/*!*****************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/flex.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let list = (__webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js").list)

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class Flex extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'flex'
  }

  /**
   * Change property name for 2009 spec
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-flex'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009) {
      decl.value = list.space(decl.value)[0]
      decl.value = Flex.oldValues[decl.value] || decl.value
      return super.set(decl, prefix)
    }
    if (spec === 2012) {
      let components = list.space(decl.value)
      if (components.length === 3 && components[2] === '0') {
        decl.value = components.slice(0, 2).concat('0px').join(' ')
      }
    }
    return super.set(decl, prefix)
  }
}

Flex.names = ['flex', 'box-flex']

Flex.oldValues = {
  auto: '1',
  none: '0'
}

module.exports = Flex


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/fullscreen.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/fullscreen.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(/*! ../selector */ "./node_modules/autoprefixer/lib/selector.js")

class Fullscreen extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return ':-webkit-full-screen'
    }
    if (prefix === '-moz-') {
      return ':-moz-full-screen'
    }
    return `:${prefix}fullscreen`
  }
}

Fullscreen.names = [':fullscreen']

module.exports = Fullscreen


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/gradient.js":
/*!*********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/gradient.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let parser = __webpack_require__(/*! postcss-value-parser */ "./node_modules/postcss-value-parser/lib/index.js")
let range = __webpack_require__(/*! normalize-range */ "./node_modules/normalize-range/index.js")

let OldValue = __webpack_require__(/*! ../old-value */ "./node_modules/autoprefixer/lib/old-value.js")
let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")
let utils = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

let IS_DIRECTION = /top|left|right|bottom/gi

class Gradient extends Value {
  /**
   * Do not add non-webkit prefixes for list-style and object
   */
  add(decl, prefix) {
    let p = decl.prop
    if (p.includes('mask')) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else if (
      p === 'list-style' ||
      p === 'list-style-image' ||
      p === 'content'
    ) {
      if (prefix === '-webkit-' || prefix === '-webkit- old') {
        return super.add(decl, prefix)
      }
    } else {
      return super.add(decl, prefix)
    }
    return undefined
  }

  /**
   * Get div token from exists parameters
   */
  cloneDiv(params) {
    for (let i of params) {
      if (i.type === 'div' && i.value === ',') {
        return i
      }
    }
    return { after: ' ', type: 'div', value: ',' }
  }

  /**
   * Change colors syntax to old webkit
   */
  colorStops(params) {
    let result = []
    for (let i = 0; i < params.length; i++) {
      let pos
      let param = params[i]
      let item
      if (i === 0) {
        continue
      }

      let color = parser.stringify(param[0])
      if (param[1] && param[1].type === 'word') {
        pos = param[1].value
      } else if (param[2] && param[2].type === 'word') {
        pos = param[2].value
      }

      let stop
      if (i === 1 && (!pos || pos === '0%')) {
        stop = `from(${color})`
      } else if (i === params.length - 1 && (!pos || pos === '100%')) {
        stop = `to(${color})`
      } else if (pos) {
        stop = `color-stop(${pos}, ${color})`
      } else {
        stop = `color-stop(${color})`
      }

      let div = param[param.length - 1]
      params[i] = [{ type: 'word', value: stop }]
      if (div.type === 'div' && div.value === ',') {
        item = params[i].push(div)
      }
      result.push(item)
    }
    return result
  }

  /**
   * Change new direction to old
   */
  convertDirection(params) {
    if (params.length > 0) {
      if (params[0].value === 'to') {
        this.fixDirection(params)
      } else if (params[0].value.includes('deg')) {
        this.fixAngle(params)
      } else if (this.isRadial(params)) {
        this.fixRadial(params)
      }
    }
    return params
  }

  /**
   * Add 90 degrees
   */
  fixAngle(params) {
    let first = params[0].value
    first = parseFloat(first)
    first = Math.abs(450 - first) % 360
    first = this.roundFloat(first, 3)
    params[0].value = `${first}deg`
  }

  /**
   * Replace `to top left` to `bottom right`
   */
  fixDirection(params) {
    params.splice(0, 2)

    for (let param of params) {
      if (param.type === 'div') {
        break
      }
      if (param.type === 'word') {
        param.value = this.revertDirection(param.value)
      }
    }
  }

  /**
   * Fix radial direction syntax
   */
  fixRadial(params) {
    let first = []
    let second = []
    let a, b, c, i, next

    for (i = 0; i < params.length - 2; i++) {
      a = params[i]
      b = params[i + 1]
      c = params[i + 2]
      if (a.type === 'space' && b.value === 'at' && c.type === 'space') {
        next = i + 3
        break
      } else {
        first.push(a)
      }
    }

    let div
    for (i = next; i < params.length; i++) {
      if (params[i].type === 'div') {
        div = params[i]
        break
      } else {
        second.push(params[i])
      }
    }

    params.splice(0, i, ...second, div, ...first)
  }

  /**
   * Look for at word
   */
  isRadial(params) {
    let state = 'before'
    for (let param of params) {
      if (state === 'before' && param.type === 'space') {
        state = 'at'
      } else if (state === 'at' && param.value === 'at') {
        state = 'after'
      } else if (state === 'after' && param.type === 'space') {
        return true
      } else if (param.type === 'div') {
        break
      } else {
        state = 'before'
      }
    }
    return false
  }

  /**
   * Replace old direction to new
   */
  newDirection(params) {
    if (params[0].value === 'to') {
      return params
    }
    IS_DIRECTION.lastIndex = 0 // reset search index of global regexp
    if (!IS_DIRECTION.test(params[0].value)) {
      return params
    }

    params.unshift(
      {
        type: 'word',
        value: 'to'
      },
      {
        type: 'space',
        value: ' '
      }
    )

    for (let i = 2; i < params.length; i++) {
      if (params[i].type === 'div') {
        break
      }
      if (params[i].type === 'word') {
        params[i].value = this.revertDirection(params[i].value)
      }
    }

    return params
  }

  /**
   * Normalize angle
   */
  normalize(nodes, gradientName) {
    if (!nodes[0]) return nodes

    if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 400)
    } else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 2 * Math.PI)
    } else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) {
      nodes[0].value = this.normalizeUnit(nodes[0].value, 1)
    } else if (nodes[0].value.includes('deg')) {
      let num = parseFloat(nodes[0].value)
      num = range.wrap(0, 360, num)
      nodes[0].value = `${num}deg`
    }

    if (
      gradientName === 'linear-gradient' ||
      gradientName === 'repeating-linear-gradient'
    ) {
      let direction = nodes[0].value

      // Unitless zero for `<angle>` values are allowed in CSS gradients and transforms.
      // Spec: https://github.com/w3c/csswg-drafts/commit/602789171429b2231223ab1e5acf8f7f11652eb3
      if (direction === '0deg' || direction === '0') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'top')
      } else if (direction === '90deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'right')
      } else if (direction === '180deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'bottom') // default value
      } else if (direction === '270deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'left')
      }
    }

    return nodes
  }

  /**
   * Convert angle unit to deg
   */
  normalizeUnit(str, full) {
    let num = parseFloat(str)
    let deg = (num / full) * 360
    return `${deg}deg`
  }

  /**
   * Remove old WebKit gradient too
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      let type
      if (this.name === 'linear-gradient') {
        type = 'linear'
      } else if (this.name === 'repeating-linear-gradient') {
        type = 'repeating-linear'
      } else if (this.name === 'repeating-radial-gradient') {
        type = 'repeating-radial'
      } else {
        type = 'radial'
      }
      let string = '-gradient'
      let regexp = utils.regexp(
        `-webkit-(${type}-gradient|gradient\\(\\s*${type})`,
        false
      )

      return new OldValue(this.name, prefix + this.name, string, regexp)
    } else {
      return super.old(prefix)
    }
  }

  /**
   * Change direction syntax to old webkit
   */
  oldDirection(params) {
    let div = this.cloneDiv(params[0])

    if (params[0][0].value !== 'to') {
      return params.unshift([
        { type: 'word', value: Gradient.oldDirections.bottom },
        div
      ])
    } else {
      let words = []
      for (let node of params[0].slice(2)) {
        if (node.type === 'word') {
          words.push(node.value.toLowerCase())
        }
      }

      words = words.join(' ')
      let old = Gradient.oldDirections[words] || words

      params[0] = [{ type: 'word', value: old }, div]
      return params[0]
    }
  }

  /**
   * Convert to old webkit syntax
   */
  oldWebkit(node) {
    let { nodes } = node
    let string = parser.stringify(node.nodes)

    if (this.name !== 'linear-gradient') {
      return false
    }
    if (nodes[0] && nodes[0].value.includes('deg')) {
      return false
    }
    if (
      string.includes('px') ||
      string.includes('-corner') ||
      string.includes('-side')
    ) {
      return false
    }

    let params = [[]]
    for (let i of nodes) {
      params[params.length - 1].push(i)
      if (i.type === 'div' && i.value === ',') {
        params.push([])
      }
    }

    this.oldDirection(params)
    this.colorStops(params)

    node.nodes = []
    for (let param of params) {
      node.nodes = node.nodes.concat(param)
    }

    node.nodes.unshift(
      { type: 'word', value: 'linear' },
      this.cloneDiv(node.nodes)
    )
    node.value = '-webkit-gradient'

    return true
  }

  /**
   * Change degrees for webkit prefix
   */
  replace(string, prefix) {
    let ast = parser(string)
    for (let node of ast.nodes) {
      let gradientName = this.name // gradient name
      if (node.type === 'function' && node.value === gradientName) {
        node.nodes = this.newDirection(node.nodes)
        node.nodes = this.normalize(node.nodes, gradientName)
        if (prefix === '-webkit- old') {
          let changes = this.oldWebkit(node)
          if (!changes) {
            return false
          }
        } else {
          node.nodes = this.convertDirection(node.nodes)
          node.value = prefix + node.value
        }
      }
    }
    return ast.toString()
  }

  /**
   * Replace first token
   */
  replaceFirst(params, ...words) {
    let prefix = words.map(i => {
      if (i === ' ') {
        return { type: 'space', value: i }
      }
      return { type: 'word', value: i }
    })
    return prefix.concat(params.slice(1))
  }

  revertDirection(word) {
    return Gradient.directions[word.toLowerCase()] || word
  }

  /**
   * Round float and save digits under dot
   */
  roundFloat(float, digits) {
    return parseFloat(float.toFixed(digits))
  }
}

Gradient.names = [
  'linear-gradient',
  'repeating-linear-gradient',
  'radial-gradient',
  'repeating-radial-gradient'
]

Gradient.directions = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom' // default value
}

// Direction to replace
Gradient.oldDirections = {
  'bottom': 'left top, left bottom',
  'bottom left': 'right top, left bottom',
  'bottom right': 'left top, right bottom',
  'left': 'right top, left top',

  'left bottom': 'right top, left bottom',
  'left top': 'right bottom, left top',
  'right': 'left top, right top',
  'right bottom': 'left top, right bottom',
  'right top': 'left bottom, right top',
  'top': 'left bottom, left top',
  'top left': 'right bottom, left top',
  'top right': 'left bottom, right top'
}

module.exports = Gradient


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-area.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-area.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")

class GridArea extends Declaration {
  /**
   * Translate grid-area to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let values = utils.parse(decl)

    let [rowStart, rowSpan] = utils.translate(values, 0, 2)
    let [columnStart, columnSpan] = utils.translate(values, 1, 3)

    ;[
      ['grid-row', rowStart],
      ['grid-row-span', rowSpan],
      ['grid-column', columnStart],
      ['grid-column-span', columnSpan]
    ].forEach(([prop, value]) => {
      utils.insertDecl(decl, prop, value)
    })

    utils.warnTemplateSelectorNotFound(decl, result)
    utils.warnIfGridRowColumnExists(decl, result)

    return undefined
  }
}

GridArea.names = ['grid-area']

module.exports = GridArea


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-column-align.js":
/*!******************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-column-align.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class GridColumnAlign extends Declaration {
  /**
   * Do not prefix flexbox values
   */
  check(decl) {
    return !decl.value.includes('flex-') && decl.value !== 'baseline'
  }

  /**
   * Change IE property back
   */
  normalize() {
    return 'justify-self'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'grid-column-align'
  }
}

GridColumnAlign.names = ['grid-column-align']

module.exports = GridColumnAlign


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-end.js":
/*!*********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-end.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let { isPureNumber } = __webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js")

class GridEnd extends Declaration {
  /**
   * Change repeating syntax for IE
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let clonedDecl = this.clone(decl)

    let startProp = decl.prop.replace(/end$/, 'start')
    let spanProp = prefix + decl.prop.replace(/end$/, 'span')

    if (decl.parent.some(i => i.prop === spanProp)) {
      return undefined
    }

    clonedDecl.prop = spanProp

    if (decl.value.includes('span')) {
      clonedDecl.value = decl.value.replace(/span\s/i, '')
    } else {
      let startDecl
      decl.parent.walkDecls(startProp, d => {
        startDecl = d
      })
      if (startDecl) {
        if (isPureNumber(startDecl.value)) {
          let value = Number(decl.value) - Number(startDecl.value) + ''
          clonedDecl.value = value
        } else {
          return undefined
        }
      } else {
        decl.warn(
          result,
          `Can not prefix ${decl.prop} (${startProp} is not found)`
        )
      }
    }

    decl.cloneBefore(clonedDecl)

    return undefined
  }
}

GridEnd.names = ['grid-row-end', 'grid-column-end']

module.exports = GridEnd


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-row-align.js":
/*!***************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-row-align.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class GridRowAlign extends Declaration {
  /**
   * Do not prefix flexbox values
   */
  check(decl) {
    return !decl.value.includes('flex-') && decl.value !== 'baseline'
  }

  /**
   * Change IE property back
   */
  normalize() {
    return 'align-self'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'grid-row-align'
  }
}

GridRowAlign.names = ['grid-row-align']

module.exports = GridRowAlign


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-row-column.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-row-column.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")

class GridRowColumn extends Declaration {
  /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let values = utils.parse(decl)
    let [start, span] = utils.translate(values, 0, 1)

    let hasStartValueSpan = values[0] && values[0].includes('span')

    if (hasStartValueSpan) {
      span = values[0].join('').replace(/\D/g, '')
    }

    ;[
      [decl.prop, start],
      [`${decl.prop}-span`, span]
    ].forEach(([prop, value]) => {
      utils.insertDecl(decl, prop, value)
    })

    return undefined
  }
}

GridRowColumn.names = ['grid-row', 'grid-column']

module.exports = GridRowColumn


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-rows-columns.js":
/*!******************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-rows-columns.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let {
  autoplaceGridItems,
  getGridGap,
  inheritGridGap,
  prefixTrackProp,
  prefixTrackValue
} = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")
let Processor = __webpack_require__(/*! ../processor */ "./node_modules/autoprefixer/lib/processor.js")

class GridRowsColumns extends Declaration {
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let { parent, prop, value } = decl
    let isRowProp = prop.includes('rows')
    let isColumnProp = prop.includes('columns')

    let hasGridTemplate = parent.some(
      i => i.prop === 'grid-template' || i.prop === 'grid-template-areas'
    )

    /**
     * Not to prefix rows declaration if grid-template(-areas) is present
     */
    if (hasGridTemplate && isRowProp) {
      return false
    }

    let processor = new Processor({ options: {} })
    let status = processor.gridStatus(parent, result)
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    let gapValue = isRowProp ? gap.row : gap.column

    if ((status === 'no-autoplace' || status === true) && !hasGridTemplate) {
      gapValue = null
    }

    let prefixValue = prefixTrackValue({
      gap: gapValue,
      value
    })

    /**
     * Insert prefixes
     */
    decl.cloneBefore({
      prop: prefixTrackProp({ prefix, prop }),
      value: prefixValue
    })

    let autoflow = parent.nodes.find(i => i.prop === 'grid-auto-flow')
    let autoflowValue = 'row'

    if (autoflow && !processor.disabled(autoflow, result)) {
      autoflowValue = autoflow.value.trim()
    }
    if (status === 'autoplace') {
      /**
       * Show warning if grid-template-rows decl is not found
       */
      let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')

      if (!rowDecl && hasGridTemplate) {
        return undefined
      } else if (!rowDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-rows property'
        )
        return undefined
      }

      /**
       * Show warning if grid-template-columns decl is not found
       */
      let columnDecl = parent.nodes.find(i => {
        return i.prop === 'grid-template-columns'
      })
      if (!columnDecl && !hasGridTemplate) {
        decl.warn(
          result,
          'Autoplacement does not work without grid-template-columns property'
        )
      }

      /**
       * Autoplace grid items
       */
      if (isColumnProp && !hasGridTemplate) {
        autoplaceGridItems(decl, result, gap, autoflowValue)
      }
    }

    return undefined
  }

  /**
   * Change IE property back
   */
  normalize(prop) {
    return prop.replace(/^grid-(rows|columns)/, 'grid-template-$1')
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return prefixTrackProp({ prefix, prop })
    }
    return super.prefixed(prop, prefix)
  }
}

GridRowsColumns.names = [
  'grid-template-rows',
  'grid-template-columns',
  'grid-rows',
  'grid-columns'
]

module.exports = GridRowsColumns


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-start.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-start.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class GridStart extends Declaration {
  /**
   * Do not add prefix for unsupported value in IE
   */
  check(decl) {
    let value = decl.value
    return !value.includes('/') && !value.includes('span')
  }

  /**
   * Return a final spec property
   */
  normalize(prop) {
    return prop.replace('-start', '')
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    let result = super.prefixed(prop, prefix)
    if (prefix === '-ms-') {
      result = result.replace('-start', '')
    }
    return result
  }
}

GridStart.names = ['grid-row-start', 'grid-column-start']

module.exports = GridStart


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-template-areas.js":
/*!********************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-template-areas.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let {
  getGridGap,
  inheritGridGap,
  parseGridAreas,
  prefixTrackProp,
  prefixTrackValue,
  warnGridGap,
  warnMissedAreas
} = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")

function getGridRows(tpl) {
  return tpl
    .trim()
    .slice(1, -1)
    .split(/["']\s*["']?/g)
}

class GridTemplateAreas extends Declaration {
  /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    let hasColumns = false
    let hasRows = false
    let parent = decl.parent
    let gap = getGridGap(decl)
    gap = inheritGridGap(decl, gap) || gap

    // remove already prefixed rows
    // to prevent doubling prefixes
    parent.walkDecls(/-ms-grid-rows/, i => i.remove())

    // add empty tracks to rows
    parent.walkDecls(/grid-template-(rows|columns)/, trackDecl => {
      if (trackDecl.prop === 'grid-template-rows') {
        hasRows = true
        let { prop, value } = trackDecl
        trackDecl.cloneBefore({
          prop: prefixTrackProp({ prefix, prop }),
          value: prefixTrackValue({ gap: gap.row, value })
        })
      } else {
        hasColumns = true
      }
    })

    let gridRows = getGridRows(decl.value)

    if (hasColumns && !hasRows && gap.row && gridRows.length > 1) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        raws: {},
        value: prefixTrackValue({
          gap: gap.row,
          value: `repeat(${gridRows.length}, auto)`
        })
      })
    }

    // warnings
    warnGridGap({
      decl,
      gap,
      hasColumns,
      result
    })

    let areas = parseGridAreas({
      gap,
      rows: gridRows
    })

    warnMissedAreas(areas, decl, result)

    return decl
  }
}

GridTemplateAreas.names = ['grid-template-areas']

module.exports = GridTemplateAreas


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-template.js":
/*!**************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-template.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let {
  getGridGap,
  inheritGridGap,
  parseTemplate,
  warnGridGap,
  warnMissedAreas
} = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")

class GridTemplate extends Declaration {
  /**
   * Translate grid-template to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes, result) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    if (decl.parent.some(i => i.prop === '-ms-grid-rows')) {
      return undefined
    }

    let gap = getGridGap(decl)

    /**
     * we must insert inherited gap values in some cases:
     * if we are inside media query && if we have no grid-gap value
     */
    let inheritedGap = inheritGridGap(decl, gap)

    let { areas, columns, rows } = parseTemplate({
      decl,
      gap: inheritedGap || gap
    })

    let hasAreas = Object.keys(areas).length > 0
    let hasRows = Boolean(rows)
    let hasColumns = Boolean(columns)

    warnGridGap({
      decl,
      gap,
      hasColumns,
      result
    })

    warnMissedAreas(areas, decl, result)

    if ((hasRows && hasColumns) || hasAreas) {
      decl.cloneBefore({
        prop: '-ms-grid-rows',
        raws: {},
        value: rows
      })
    }

    if (hasColumns) {
      decl.cloneBefore({
        prop: '-ms-grid-columns',
        raws: {},
        value: columns
      })
    }

    return decl
  }
}

GridTemplate.names = ['grid-template']

module.exports = GridTemplate


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/grid-utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/grid-utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

let parser = __webpack_require__(/*! postcss-value-parser */ "./node_modules/postcss-value-parser/lib/index.js")
let list = (__webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js").list)

let uniq = (__webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js").uniq)
let escapeRegexp = (__webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js").escapeRegexp)
let splitSelector = (__webpack_require__(/*! ../utils */ "./node_modules/autoprefixer/lib/utils.js").splitSelector)

function convert(value) {
  if (
    value &&
    value.length === 2 &&
    value[0] === 'span' &&
    parseInt(value[1], 10) > 0
  ) {
    return [false, parseInt(value[1], 10)]
  }

  if (value && value.length === 1 && parseInt(value[0], 10) > 0) {
    return [parseInt(value[0], 10), false]
  }

  return [false, false]
}

exports.translate = translate

function translate(values, startIndex, endIndex) {
  let startValue = values[startIndex]
  let endValue = values[endIndex]

  if (!startValue) {
    return [false, false]
  }

  let [start, spanStart] = convert(startValue)
  let [end, spanEnd] = convert(endValue)

  if (start && !endValue) {
    return [start, false]
  }

  if (spanStart && end) {
    return [end - spanStart, spanStart]
  }

  if (start && spanEnd) {
    return [start, spanEnd]
  }

  if (start && end) {
    return [start, end - start]
  }

  return [false, false]
}

exports.parse = parse

function parse(decl) {
  let node = parser(decl.value)

  let values = []
  let current = 0
  values[current] = []

  for (let i of node.nodes) {
    if (i.type === 'div') {
      current += 1
      values[current] = []
    } else if (i.type === 'word') {
      values[current].push(i.value)
    }
  }

  return values
}

exports.insertDecl = insertDecl

function insertDecl(decl, prop, value) {
  if (value && !decl.parent.some(i => i.prop === `-ms-${prop}`)) {
    decl.cloneBefore({
      prop: `-ms-${prop}`,
      value: value.toString()
    })
  }
}

// Track transforms

exports.prefixTrackProp = prefixTrackProp

function prefixTrackProp({ prefix, prop }) {
  return prefix + prop.replace('template-', '')
}

function transformRepeat({ nodes }, { gap }) {
  let { count, size } = nodes.reduce(
    (result, node) => {
      if (node.type === 'div' && node.value === ',') {
        result.key = 'size'
      } else {
        result[result.key].push(parser.stringify(node))
      }
      return result
    },
    {
      count: [],
      key: 'count',
      size: []
    }
  )

  // insert gap values
  if (gap) {
    size = size.filter(i => i.trim())
    let val = []
    for (let i = 1; i <= count; i++) {
      size.forEach((item, index) => {
        if (index > 0 || i > 1) {
          val.push(gap)
        }
        val.push(item)
      })
    }

    return val.join(' ')
  }

  return `(${size.join('')})[${count.join('')}]`
}

exports.prefixTrackValue = prefixTrackValue

function prefixTrackValue({ gap, value }) {
  let result = parser(value).nodes.reduce((nodes, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      return nodes.concat({
        type: 'word',
        value: transformRepeat(node, { gap })
      })
    }
    if (gap && node.type === 'space') {
      return nodes.concat(
        {
          type: 'space',
          value: ' '
        },
        {
          type: 'word',
          value: gap
        },
        node
      )
    }
    return nodes.concat(node)
  }, [])

  return parser.stringify(result)
}

// Parse grid-template-areas

let DOTS = /^\.+$/

function track(start, end) {
  return { end, span: end - start, start }
}

function getColumns(line) {
  return line.trim().split(/\s+/g)
}

exports.parseGridAreas = parseGridAreas

function parseGridAreas({ gap, rows }) {
  return rows.reduce((areas, line, rowIndex) => {
    if (gap.row) rowIndex *= 2

    if (line.trim() === '') return areas

    getColumns(line).forEach((area, columnIndex) => {
      if (DOTS.test(area)) return

      if (gap.column) columnIndex *= 2

      if (typeof areas[area] === 'undefined') {
        areas[area] = {
          column: track(columnIndex + 1, columnIndex + 2),
          row: track(rowIndex + 1, rowIndex + 2)
        }
      } else {
        let { column, row } = areas[area]

        column.start = Math.min(column.start, columnIndex + 1)
        column.end = Math.max(column.end, columnIndex + 2)
        column.span = column.end - column.start

        row.start = Math.min(row.start, rowIndex + 1)
        row.end = Math.max(row.end, rowIndex + 2)
        row.span = row.end - row.start
      }
    })

    return areas
  }, {})
}

// Parse grid-template

function testTrack(node) {
  return node.type === 'word' && /^\[.+]$/.test(node.value)
}

function verifyRowSize(result) {
  if (result.areas.length > result.rows.length) {
    result.rows.push('auto')
  }
  return result
}

exports.parseTemplate = parseTemplate

function parseTemplate({ decl, gap }) {
  let gridTemplate = parser(decl.value).nodes.reduce(
    (result, node) => {
      let { type, value } = node

      if (testTrack(node) || type === 'space') return result

      // area
      if (type === 'string') {
        result = verifyRowSize(result)
        result.areas.push(value)
      }

      // values and function
      if (type === 'word' || type === 'function') {
        result[result.key].push(parser.stringify(node))
      }

      // divider(/)
      if (type === 'div' && value === '/') {
        result.key = 'columns'
        result = verifyRowSize(result)
      }

      return result
    },
    {
      areas: [],
      columns: [],
      key: 'rows',
      rows: []
    }
  )

  return {
    areas: parseGridAreas({
      gap,
      rows: gridTemplate.areas
    }),
    columns: prefixTrackValue({
      gap: gap.column,
      value: gridTemplate.columns.join(' ')
    }),
    rows: prefixTrackValue({
      gap: gap.row,
      value: gridTemplate.rows.join(' ')
    })
  }
}

// Insert parsed grid areas

/**
 * Get an array of -ms- prefixed props and values
 * @param  {Object} [area] area object with column and row data
 * @param  {Boolean} [addRowSpan] should we add grid-column-row value?
 * @param  {Boolean} [addColumnSpan] should we add grid-column-span value?
 * @return {Array<Object>}
 */
function getMSDecls(area, addRowSpan = false, addColumnSpan = false) {
  let result = [
    {
      prop: '-ms-grid-row',
      value: String(area.row.start)
    }
  ]
  if (area.row.span > 1 || addRowSpan) {
    result.push({
      prop: '-ms-grid-row-span',
      value: String(area.row.span)
    })
  }
  result.push({
    prop: '-ms-grid-column',
    value: String(area.column.start)
  })
  if (area.column.span > 1 || addColumnSpan) {
    result.push({
      prop: '-ms-grid-column-span',
      value: String(area.column.span)
    })
  }
  return result
}

function getParentMedia(parent) {
  if (parent.type === 'atrule' && parent.name === 'media') {
    return parent
  }
  if (!parent.parent) {
    return false
  }
  return getParentMedia(parent.parent)
}

/**
 * change selectors for rules with duplicate grid-areas.
 * @param  {Array<Rule>} rules
 * @param  {Array<String>} templateSelectors
 * @return {Array<Rule>} rules with changed selectors
 */
function changeDuplicateAreaSelectors(ruleSelectors, templateSelectors) {
  ruleSelectors = ruleSelectors.map(selector => {
    let selectorBySpace = list.space(selector)
    let selectorByComma = list.comma(selector)

    if (selectorBySpace.length > selectorByComma.length) {
      selector = selectorBySpace.slice(-1).join('')
    }
    return selector
  })

  return ruleSelectors.map(ruleSelector => {
    let newSelector = templateSelectors.map((tplSelector, index) => {
      let space = index === 0 ? '' : ' '
      return `${space}${tplSelector} > ${ruleSelector}`
    })

    return newSelector
  })
}

/**
 * check if selector of rules are equal
 * @param  {Rule} ruleA
 * @param  {Rule} ruleB
 * @return {Boolean}
 */
function selectorsEqual(ruleA, ruleB) {
  return ruleA.selectors.some(sel => {
    return ruleB.selectors.includes(sel)
  })
}

/**
 * Parse data from all grid-template(-areas) declarations
 * @param  {Root} css css root
 * @return {Object} parsed data
 */
function parseGridTemplatesData(css) {
  let parsed = []

  // we walk through every grid-template(-areas) declaration and store
  // data with the same area names inside the item
  css.walkDecls(/grid-template(-areas)?$/, d => {
    let rule = d.parent
    let media = getParentMedia(rule)
    let gap = getGridGap(d)
    let inheritedGap = inheritGridGap(d, gap)
    let { areas } = parseTemplate({ decl: d, gap: inheritedGap || gap })
    let areaNames = Object.keys(areas)

    // skip node if it doesn't have areas
    if (areaNames.length === 0) {
      return true
    }

    // check parsed array for item that include the same area names
    // return index of that item
    let index = parsed.reduce((acc, { allAreas }, idx) => {
      let hasAreas = allAreas && areaNames.some(area => allAreas.includes(area))
      return hasAreas ? idx : acc
    }, null)

    if (index !== null) {
      // index is found, add the grid-template data to that item
      let { allAreas, rules } = parsed[index]

      // check if rule has no duplicate area names
      let hasNoDuplicates = rules.some(r => {
        return r.hasDuplicates === false && selectorsEqual(r, rule)
      })

      let duplicatesFound = false

      // check need to gather all duplicate area names
      let duplicateAreaNames = rules.reduce((acc, r) => {
        if (!r.params && selectorsEqual(r, rule)) {
          duplicatesFound = true
          return r.duplicateAreaNames
        }
        if (!duplicatesFound) {
          areaNames.forEach(name => {
            if (r.areas[name]) {
              acc.push(name)
            }
          })
        }
        return uniq(acc)
      }, [])

      // update grid-row/column-span values for areas with duplicate
      // area names. @see #1084 and #1146
      rules.forEach(r => {
        areaNames.forEach(name => {
          let area = r.areas[name]
          if (area && area.row.span !== areas[name].row.span) {
            areas[name].row.updateSpan = true
          }

          if (area && area.column.span !== areas[name].column.span) {
            areas[name].column.updateSpan = true
          }
        })
      })

      parsed[index].allAreas = uniq([...allAreas, ...areaNames])
      parsed[index].rules.push({
        areas,
        duplicateAreaNames,
        hasDuplicates: !hasNoDuplicates,
        node: rule,
        params: media.params,
        selectors: rule.selectors
      })
    } else {
      // index is NOT found, push the new item to the parsed array
      parsed.push({
        allAreas: areaNames,
        areasCount: 0,
        rules: [
          {
            areas,
            duplicateAreaNames: [],
            duplicateRules: [],
            hasDuplicates: false,
            node: rule,
            params: media.params,
            selectors: rule.selectors
          }
        ]
      })
    }

    return undefined
  })

  return parsed
}

/**
 * insert prefixed grid-area declarations
 * @param  {Root}  css css root
 * @param  {Function} isDisabled check if the rule is disabled
 * @return {void}
 */
exports.insertAreas = insertAreas

function insertAreas(css, isDisabled) {
  // parse grid-template declarations
  let gridTemplatesData = parseGridTemplatesData(css)

  // return undefined if no declarations found
  if (gridTemplatesData.length === 0) {
    return undefined
  }

  // we need to store the rules that we will insert later
  let rulesToInsert = {}

  css.walkDecls('grid-area', gridArea => {
    let gridAreaRule = gridArea.parent
    let hasPrefixedRow = gridAreaRule.first.prop === '-ms-grid-row'
    let gridAreaMedia = getParentMedia(gridAreaRule)

    if (isDisabled(gridArea)) {
      return undefined
    }

    let gridAreaRuleIndex = css.index(gridAreaMedia || gridAreaRule)

    let value = gridArea.value
    // found the data that matches grid-area identifier
    let data = gridTemplatesData.filter(d => d.allAreas.includes(value))[0]

    if (!data) {
      return true
    }

    let lastArea = data.allAreas[data.allAreas.length - 1]
    let selectorBySpace = list.space(gridAreaRule.selector)
    let selectorByComma = list.comma(gridAreaRule.selector)
    let selectorIsComplex =
      selectorBySpace.length > 1 &&
      selectorBySpace.length > selectorByComma.length

    // prevent doubling of prefixes
    if (hasPrefixedRow) {
      return false
    }

    // create the empty object with the key as the last area name
    // e.g if we have templates with "a b c" values, "c" will be the last area
    if (!rulesToInsert[lastArea]) {
      rulesToInsert[lastArea] = {}
    }

    let lastRuleIsSet = false

    // walk through every grid-template rule data
    for (let rule of data.rules) {
      let area = rule.areas[value]
      let hasDuplicateName = rule.duplicateAreaNames.includes(value)

      // if we can't find the area name, update lastRule and continue
      if (!area) {
        let lastRule = rulesToInsert[lastArea].lastRule
        let lastRuleIndex
        if (lastRule) {
          lastRuleIndex = css.index(lastRule)
        } else {
          /* c8 ignore next 2 */
          lastRuleIndex = -1
        }

        if (gridAreaRuleIndex > lastRuleIndex) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
        continue
      }

      // for grid-templates inside media rule we need to create empty
      // array to push prefixed grid-area rules later
      if (rule.params && !rulesToInsert[lastArea][rule.params]) {
        rulesToInsert[lastArea][rule.params] = []
      }

      if ((!rule.hasDuplicates || !hasDuplicateName) && !rule.params) {
        // grid-template has no duplicates and not inside media rule

        getMSDecls(area, false, false)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        rulesToInsert[lastArea].lastRule = gridAreaRule
        lastRuleIsSet = true
      } else if (rule.hasDuplicates && !rule.params && !selectorIsComplex) {
        // grid-template has duplicates and not inside media rule
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        cloned.selectors = changeDuplicateAreaSelectors(
          cloned.selectors,
          rule.selectors
        )

        if (rulesToInsert[lastArea].lastRule) {
          rulesToInsert[lastArea].lastRule.after(cloned)
        }
        rulesToInsert[lastArea].lastRule = cloned
        lastRuleIsSet = true
      } else if (
        rule.hasDuplicates &&
        !rule.params &&
        selectorIsComplex &&
        gridAreaRule.selector.includes(rule.selectors[0])
      ) {
        // grid-template has duplicates and not inside media rule
        // and the selector is complex
        gridAreaRule.walkDecls(/-ms-grid-(row|column)/, d => d.remove())
        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            gridAreaRule.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )
      } else if (rule.params) {
        // grid-template is inside media rule
        // if we're inside media rule, we need to store prefixed rules
        // inside rulesToInsert object to be able to preserve the order of media
        // rules and merge them easily
        let cloned = gridAreaRule.clone()
        cloned.removeAll()

        getMSDecls(area, area.row.updateSpan, area.column.updateSpan)
          .reverse()
          .forEach(i =>
            cloned.prepend(
              Object.assign(i, {
                raws: {
                  between: gridArea.raws.between
                }
              })
            )
          )

        if (rule.hasDuplicates && hasDuplicateName) {
          cloned.selectors = changeDuplicateAreaSelectors(
            cloned.selectors,
            rule.selectors
          )
        }

        cloned.raws = rule.node.raws

        if (css.index(rule.node.parent) > gridAreaRuleIndex) {
          // append the prefixed rules right inside media rule
          // with grid-template
          rule.node.parent.append(cloned)
        } else {
          // store the rule to insert later
          rulesToInsert[lastArea][rule.params].push(cloned)
        }

        // set new rule as last rule ONLY if we didn't set lastRule for
        // this grid-area before
        if (!lastRuleIsSet) {
          rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule
        }
      }
    }

    return undefined
  })

  // append stored rules inside the media rules
  Object.keys(rulesToInsert).forEach(area => {
    let data = rulesToInsert[area]
    let lastRule = data.lastRule
    Object.keys(data)
      .reverse()
      .filter(p => p !== 'lastRule')
      .forEach(params => {
        if (data[params].length > 0 && lastRule) {
          lastRule.after({ name: 'media', params })
          lastRule.next().append(data[params])
        }
      })
  })

  return undefined
}

/**
 * Warn user if grid area identifiers are not found
 * @param  {Object} areas
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnMissedAreas = warnMissedAreas

function warnMissedAreas(areas, decl, result) {
  let missed = Object.keys(areas)

  decl.root().walkDecls('grid-area', gridArea => {
    missed = missed.filter(e => e !== gridArea.value)
  })

  if (missed.length > 0) {
    decl.warn(result, 'Can not find grid areas: ' + missed.join(', '))
  }

  return undefined
}

/**
 * compare selectors with grid-area rule and grid-template rule
 * show warning if grid-template selector is not found
 * (this function used for grid-area rule)
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnTemplateSelectorNotFound = warnTemplateSelectorNotFound

function warnTemplateSelectorNotFound(decl, result) {
  let rule = decl.parent
  let root = decl.root()
  let duplicatesFound = false

  // slice selector array. Remove the last part (for comparison)
  let slicedSelectorArr = list
    .space(rule.selector)
    .filter(str => str !== '>')
    .slice(0, -1)

  // we need to compare only if selector is complex.
  // e.g '.grid-cell' is simple, but '.parent > .grid-cell' is complex
  if (slicedSelectorArr.length > 0) {
    let gridTemplateFound = false
    let foundAreaSelector = null

    root.walkDecls(/grid-template(-areas)?$/, d => {
      let parent = d.parent
      let templateSelectors = parent.selectors

      let { areas } = parseTemplate({ decl: d, gap: getGridGap(d) })
      let hasArea = areas[decl.value]

      // find the the matching selectors
      for (let tplSelector of templateSelectors) {
        if (gridTemplateFound) {
          break
        }
        let tplSelectorArr = list.space(tplSelector).filter(str => str !== '>')

        gridTemplateFound = tplSelectorArr.every(
          (item, idx) => item === slicedSelectorArr[idx]
        )
      }

      if (gridTemplateFound || !hasArea) {
        return true
      }

      if (!foundAreaSelector) {
        foundAreaSelector = parent.selector
      }

      // if we found the duplicate area with different selector
      if (foundAreaSelector && foundAreaSelector !== parent.selector) {
        duplicatesFound = true
      }

      return undefined
    })

    // warn user if we didn't find template
    if (!gridTemplateFound && duplicatesFound) {
      decl.warn(
        result,
        'Autoprefixer cannot find a grid-template ' +
          `containing the duplicate grid-area "${decl.value}" ` +
          `with full selector matching: ${slicedSelectorArr.join(' ')}`
      )
    }
  }
}

/**
 * warn user if both grid-area and grid-(row|column)
 * declarations are present in the same rule
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */
exports.warnIfGridRowColumnExists = warnIfGridRowColumnExists

function warnIfGridRowColumnExists(decl, result) {
  let rule = decl.parent
  let decls = []
  rule.walkDecls(/^grid-(row|column)/, d => {
    if (
      !d.prop.endsWith('-end') &&
      !d.value.startsWith('span') &&
      !d.prop.endsWith('-gap')
    ) {
      decls.push(d)
    }
  })
  if (decls.length > 0) {
    decls.forEach(d => {
      d.warn(
        result,
        'You already have a grid-area declaration present in the rule. ' +
          `You should use either grid-area or ${d.prop}, not both`
      )
    })
  }

  return undefined
}

// Gap utils

exports.getGridGap = getGridGap

function getGridGap(decl) {
  let gap = {}

  // try to find gap
  let testGap = /^(grid-)?((row|column)-)?gap$/
  decl.parent.walkDecls(testGap, ({ prop, value }) => {
    if (/^(grid-)?gap$/.test(prop)) {
      let [row, , column] = parser(value).nodes

      gap.row = row && parser.stringify(row)
      gap.column = column ? parser.stringify(column) : gap.row
    }
    if (/^(grid-)?row-gap$/.test(prop)) gap.row = value
    if (/^(grid-)?column-gap$/.test(prop)) gap.column = value
  })

  return gap
}

/**
 * parse media parameters (for example 'min-width: 500px')
 * @param  {String} params parameter to parse
 * @return {}
 */
function parseMediaParams(params) {
  if (!params) {
    return []
  }
  let parsed = parser(params)
  let prop
  let value

  parsed.walk(node => {
    if (node.type === 'word' && /min|max/g.test(node.value)) {
      prop = node.value
    } else if (node.value.includes('px')) {
      value = parseInt(node.value.replace(/\D/g, ''))
    }
  })

  return [prop, value]
}

/**
 * Compare the selectors and decide if we
 * need to inherit gap from compared selector or not.
 * @type {String} selA
 * @type {String} selB
 * @return {Boolean}
 */
function shouldInheritGap(selA, selB) {
  let result

  // get arrays of selector split in 3-deep array
  let splitSelectorArrA = splitSelector(selA)
  let splitSelectorArrB = splitSelector(selB)

  if (splitSelectorArrA[0].length < splitSelectorArrB[0].length) {
    // abort if selectorA has lower descendant specificity then selectorB
    // (e.g '.grid' and '.hello .world .grid')
    return false
  } else if (splitSelectorArrA[0].length > splitSelectorArrB[0].length) {
    // if selectorA has higher descendant specificity then selectorB
    // (e.g '.foo .bar .grid' and '.grid')

    let idx = splitSelectorArrA[0].reduce((res, [item], index) => {
      let firstSelectorPart = splitSelectorArrB[0][0][0]
      if (item === firstSelectorPart) {
        return index
      }
      return false
    }, false)

    if (idx) {
      result = splitSelectorArrB[0].every((arr, index) => {
        return arr.every(
          (part, innerIndex) =>
            // because selectorA has more space elements, we need to slice
            // selectorA array by 'idx' number to compare them
            splitSelectorArrA[0].slice(idx)[index][innerIndex] === part
        )
      })
    }
  } else {
    // if selectorA has the same descendant specificity as selectorB
    // this condition covers cases such as: '.grid.foo.bar' and '.grid'
    result = splitSelectorArrB.some(byCommaArr => {
      return byCommaArr.every((bySpaceArr, index) => {
        return bySpaceArr.every(
          (part, innerIndex) => splitSelectorArrA[0][index][innerIndex] === part
        )
      })
    })
  }

  return result
}
/**
 * inherit grid gap values from the closest rule above
 * with the same selector
 * @param  {Declaration} decl
 * @param  {Object} gap gap values
 * @return {Object | Boolean} return gap values or false (if not found)
 */
exports.inheritGridGap = inheritGridGap

function inheritGridGap(decl, gap) {
  let rule = decl.parent
  let mediaRule = getParentMedia(rule)
  let root = rule.root()

  // get an array of selector split in 3-deep array
  let splitSelectorArr = splitSelector(rule.selector)

  // abort if the rule already has gaps
  if (Object.keys(gap).length > 0) {
    return false
  }

  // e.g ['min-width']
  let [prop] = parseMediaParams(mediaRule.params)

  let lastBySpace = splitSelectorArr[0]

  // get escaped value from the selector
  // if we have '.grid-2.foo.bar' selector, will be '\.grid\-2'
  let escaped = escapeRegexp(lastBySpace[lastBySpace.length - 1][0])

  let regexp = new RegExp(`(${escaped}$)|(${escaped}[,.])`)

  // find the closest rule with the same selector
  let closestRuleGap
  root.walkRules(regexp, r => {
    let gridGap

    // abort if are checking the same rule
    if (rule.toString() === r.toString()) {
      return false
    }

    // find grid-gap values
    r.walkDecls('grid-gap', d => (gridGap = getGridGap(d)))

    // skip rule without gaps
    if (!gridGap || Object.keys(gridGap).length === 0) {
      return true
    }

    // skip rules that should not be inherited from
    if (!shouldInheritGap(rule.selector, r.selector)) {
      return true
    }

    let media = getParentMedia(r)
    if (media) {
      // if we are inside media, we need to check that media props match
      // e.g ('min-width' === 'min-width')
      let propToCompare = parseMediaParams(media.params)[0]
      if (propToCompare === prop) {
        closestRuleGap = gridGap
        return true
      }
    } else {
      closestRuleGap = gridGap
      return true
    }

    return undefined
  })

  // if we find the closest gap object
  if (closestRuleGap && Object.keys(closestRuleGap).length > 0) {
    return closestRuleGap
  }
  return false
}

exports.warnGridGap = warnGridGap

function warnGridGap({ decl, gap, hasColumns, result }) {
  let hasBothGaps = gap.row && gap.column
  if (!hasColumns && (hasBothGaps || (gap.column && !gap.row))) {
    delete gap.column
    decl.warn(
      result,
      'Can not implement grid-gap without grid-template-columns'
    )
  }
}

/**
 * normalize the grid-template-rows/columns values
 * @param  {String} str grid-template-rows/columns value
 * @return {Array} normalized array with values
 * @example
 * let normalized = normalizeRowColumn('1fr repeat(2, 20px 50px) 1fr')
 * normalized // <= ['1fr', '20px', '50px', '20px', '50px', '1fr']
 */
function normalizeRowColumn(str) {
  let normalized = parser(str).nodes.reduce((result, node) => {
    if (node.type === 'function' && node.value === 'repeat') {
      let key = 'count'

      let [count, value] = node.nodes.reduce(
        (acc, n) => {
          if (n.type === 'word' && key === 'count') {
            acc[0] = Math.abs(parseInt(n.value))
            return acc
          }
          if (n.type === 'div' && n.value === ',') {
            key = 'value'
            return acc
          }
          if (key === 'value') {
            acc[1] += parser.stringify(n)
          }
          return acc
        },
        [0, '']
      )

      if (count) {
        for (let i = 0; i < count; i++) {
          result.push(value)
        }
      }

      return result
    }
    if (node.type === 'space') {
      return result
    }
    return result.concat(parser.stringify(node))
  }, [])

  return normalized
}

exports.autoplaceGridItems = autoplaceGridItems

/**
 * Autoplace grid items
 * @param {Declaration} decl
 * @param {Result} result
 * @param {Object} gap gap values
 * @param {String} autoflowValue grid-auto-flow value
 * @return {void}
 * @see https://github.com/postcss/autoprefixer/issues/1148
 */
function autoplaceGridItems(decl, result, gap, autoflowValue = 'row') {
  let { parent } = decl

  let rowDecl = parent.nodes.find(i => i.prop === 'grid-template-rows')
  let rows = normalizeRowColumn(rowDecl.value)
  let columns = normalizeRowColumn(decl.value)

  // Build array of area names with dummy values. If we have 3 columns and
  // 2 rows, filledRows will be equal to ['1 2 3', '4 5 6']
  let filledRows = rows.map((_, rowIndex) => {
    return Array.from(
      { length: columns.length },
      (v, k) => k + rowIndex * columns.length + 1
    ).join(' ')
  })

  let areas = parseGridAreas({ gap, rows: filledRows })
  let keys = Object.keys(areas)
  let items = keys.map(i => areas[i])

  // Change the order of cells if grid-auto-flow value is 'column'
  if (autoflowValue.includes('column')) {
    items = items.sort((a, b) => a.column.start - b.column.start)
  }

  // Insert new rules
  items.reverse().forEach((item, index) => {
    let { column, row } = item
    let nodeSelector = parent.selectors
      .map(sel => sel + ` > *:nth-child(${keys.length - index})`)
      .join(', ')

    // create new rule
    let node = parent.clone().removeAll()

    // change rule selector
    node.selector = nodeSelector

    // insert prefixed row/column values
    node.append({ prop: '-ms-grid-row', value: row.start })
    node.append({ prop: '-ms-grid-column', value: column.start })

    // insert rule
    parent.after(node)
  })

  return undefined
}


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/image-rendering.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/image-rendering.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class ImageRendering extends Declaration {
  /**
   * Add hack only for crisp-edges
   */
  check(decl) {
    return decl.value === 'pixelated'
  }

  /**
   * Return property name by spec
   */
  normalize() {
    return 'image-rendering'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    if (prefix === '-ms-') {
      return '-ms-interpolation-mode'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Warn on old value
   */
  process(node, result) {
    return super.process(node, result)
  }

  /**
   * Change property and value for IE
   */
  set(decl, prefix) {
    if (prefix !== '-ms-') return super.set(decl, prefix)
    decl.prop = '-ms-interpolation-mode'
    decl.value = 'nearest-neighbor'
    return decl
  }
}

ImageRendering.names = ['image-rendering', 'interpolation-mode']

module.exports = ImageRendering


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/image-set.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/image-set.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class ImageSet extends Value {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    let fixed = super.replace(string, prefix)
    if (prefix === '-webkit-') {
      fixed = fixed.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, 'url($1)$2')
    }
    return fixed
  }
}

ImageSet.names = ['image-set']

module.exports = ImageSet


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/inline-logical.js":
/*!***************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/inline-logical.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class InlineLogical extends Declaration {
  /**
   * Return property name by spec
   */
  normalize(prop) {
    return prop.replace(/(margin|padding|border)-(start|end)/, '$1-inline-$2')
  }

  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(prop, prefix) {
    return prefix + prop.replace('-inline', '')
  }
}

InlineLogical.names = [
  'border-inline-start',
  'border-inline-end',
  'margin-inline-start',
  'margin-inline-end',
  'padding-inline-start',
  'padding-inline-end',
  'border-start',
  'border-end',
  'margin-start',
  'margin-end',
  'padding-start',
  'padding-end'
]

module.exports = InlineLogical


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/intrinsic.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/intrinsic.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let OldValue = __webpack_require__(/*! ../old-value */ "./node_modules/autoprefixer/lib/old-value.js")
let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

function regexp(name) {
  return new RegExp(`(^|[\\s,(])(${name}($|[\\s),]))`, 'gi')
}

class Intrinsic extends Value {
  add(decl, prefix) {
    if (decl.prop.includes('grid') && prefix !== '-webkit-') {
      return undefined
    }
    return super.add(decl, prefix)
  }

  isStretch() {
    return (
      this.name === 'stretch' ||
      this.name === 'fill' ||
      this.name === 'fill-available'
    )
  }

  old(prefix) {
    let prefixed = prefix + this.name
    if (this.isStretch()) {
      if (prefix === '-moz-') {
        prefixed = '-moz-available'
      } else if (prefix === '-webkit-') {
        prefixed = '-webkit-fill-available'
      }
    }
    return new OldValue(this.name, prefixed, prefixed, regexp(prefixed))
  }

  regexp() {
    if (!this.regexpCache) this.regexpCache = regexp(this.name)
    return this.regexpCache
  }

  replace(string, prefix) {
    if (prefix === '-moz-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-moz-available$3')
    }
    if (prefix === '-webkit-' && this.isStretch()) {
      return string.replace(this.regexp(), '$1-webkit-fill-available$3')
    }
    return super.replace(string, prefix)
  }
}

Intrinsic.names = [
  'max-content',
  'min-content',
  'fit-content',
  'fill',
  'fill-available',
  'stretch'
]

module.exports = Intrinsic


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/justify-content.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/justify-content.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class JustifyContent extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'justify-content'
  }

  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-pack'
    }
    if (spec === 2012) {
      return prefix + 'flex-pack'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Change value for 2009 and 2012 specs
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 || spec === 2012) {
      let value = JustifyContent.oldValues[decl.value] || decl.value
      decl.value = value
      if (spec !== 2009 || value !== 'distribute') {
        return super.set(decl, prefix)
      }
    } else if (spec === 'final') {
      return super.set(decl, prefix)
    }
    return undefined
  }
}

JustifyContent.names = ['justify-content', 'flex-pack', 'box-pack']

JustifyContent.oldValues = {
  'flex-end': 'end',
  'flex-start': 'start',
  'space-around': 'distribute',
  'space-between': 'justify'
}

module.exports = JustifyContent


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/mask-border.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/mask-border.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class MaskBorder extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return this.name.replace('box-image', 'border')
  }

  /**
   * Return flex property for 2012 spec
   */
  prefixed(prop, prefix) {
    let result = super.prefixed(prop, prefix)
    if (prefix === '-webkit-') {
      result = result.replace('border', 'box-image')
    }
    return result
  }
}

MaskBorder.names = [
  'mask-border',
  'mask-border-source',
  'mask-border-slice',
  'mask-border-width',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-box-image',
  'mask-box-image-source',
  'mask-box-image-slice',
  'mask-box-image-width',
  'mask-box-image-outset',
  'mask-box-image-repeat'
]

module.exports = MaskBorder


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/mask-composite.js":
/*!***************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/mask-composite.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class MaskComposite extends Declaration {
  /**
   * Prefix mask-composite for webkit
   */
  insert(decl, prefix, prefixes) {
    let isCompositeProp = decl.prop === 'mask-composite'

    let compositeValues

    if (isCompositeProp) {
      compositeValues = decl.value.split(',')
    } else {
      compositeValues = decl.value.match(MaskComposite.regexp) || []
    }

    compositeValues = compositeValues.map(el => el.trim()).filter(el => el)
    let hasCompositeValues = compositeValues.length

    let compositeDecl

    if (hasCompositeValues) {
      compositeDecl = this.clone(decl)
      compositeDecl.value = compositeValues
        .map(value => MaskComposite.oldValues[value] || value)
        .join(', ')

      if (compositeValues.includes('intersect')) {
        compositeDecl.value += ', xor'
      }

      compositeDecl.prop = prefix + 'mask-composite'
    }

    if (isCompositeProp) {
      if (!hasCompositeValues) {
        return undefined
      }

      if (this.needCascade(decl)) {
        compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix)
      }

      return decl.parent.insertBefore(decl, compositeDecl)
    }

    let cloned = this.clone(decl)
    cloned.prop = prefix + cloned.prop

    if (hasCompositeValues) {
      cloned.value = cloned.value.replace(MaskComposite.regexp, '')
    }

    if (this.needCascade(decl)) {
      cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
    }

    decl.parent.insertBefore(decl, cloned)

    if (!hasCompositeValues) {
      return decl
    }

    if (this.needCascade(decl)) {
      compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix)
    }
    return decl.parent.insertBefore(decl, compositeDecl)
  }
}

MaskComposite.names = ['mask', 'mask-composite']

MaskComposite.oldValues = {
  add: 'source-over',
  exclude: 'xor',
  intersect: 'source-in',
  subtract: 'source-out'
}

MaskComposite.regexp = new RegExp(
  `\\s+(${Object.keys(MaskComposite.oldValues).join(
    '|'
  )})\\b(?!\\))\\s*(?=[,])`,
  'ig'
)

module.exports = MaskComposite


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/order.js":
/*!******************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/order.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let flexSpec = __webpack_require__(/*! ./flex-spec */ "./node_modules/autoprefixer/lib/hacks/flex-spec.js")
let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class Order extends Declaration {
  /**
   * Return property name by final spec
   */
  normalize() {
    return 'order'
  }

  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(prop, prefix) {
    let spec
    ;[spec, prefix] = flexSpec(prefix)
    if (spec === 2009) {
      return prefix + 'box-ordinal-group'
    }
    if (spec === 2012) {
      return prefix + 'flex-order'
    }
    return super.prefixed(prop, prefix)
  }

  /**
   * Fix value for 2009 spec
   */
  set(decl, prefix) {
    let spec = flexSpec(prefix)[0]
    if (spec === 2009 && /\d/.test(decl.value)) {
      decl.value = (parseInt(decl.value) + 1).toString()
      return super.set(decl, prefix)
    }
    return super.set(decl, prefix)
  }
}

Order.names = ['order', 'flex-order', 'box-ordinal-group']

module.exports = Order


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/overscroll-behavior.js":
/*!********************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/overscroll-behavior.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class OverscrollBehavior extends Declaration {
  /**
   * Return property name by spec
   */
  normalize() {
    return 'overscroll-behavior'
  }

  /**
   * Change property name for IE
   */
  prefixed(prop, prefix) {
    return prefix + 'scroll-chaining'
  }

  /**
   * Change value for IE
   */
  set(decl, prefix) {
    if (decl.value === 'auto') {
      decl.value = 'chained'
    } else if (decl.value === 'none' || decl.value === 'contain') {
      decl.value = 'none'
    }
    return super.set(decl, prefix)
  }
}

OverscrollBehavior.names = ['overscroll-behavior', 'scroll-chaining']

module.exports = OverscrollBehavior


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/pixelated.js":
/*!**********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/pixelated.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let OldValue = __webpack_require__(/*! ../old-value */ "./node_modules/autoprefixer/lib/old-value.js")
let Value = __webpack_require__(/*! ../value */ "./node_modules/autoprefixer/lib/value.js")

class Pixelated extends Value {
  /**
   * Different name for WebKit and Firefox
   */
  old(prefix) {
    if (prefix === '-webkit-') {
      return new OldValue(this.name, '-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return new OldValue(this.name, '-moz-crisp-edges')
    }
    return super.old(prefix)
  }

  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(string, prefix) {
    if (prefix === '-webkit-') {
      return string.replace(this.regexp(), '$1-webkit-optimize-contrast')
    }
    if (prefix === '-moz-') {
      return string.replace(this.regexp(), '$1-moz-crisp-edges')
    }
    return super.replace(string, prefix)
  }
}

Pixelated.names = ['pixelated']

module.exports = Pixelated


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/place-self.js":
/*!***********************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/place-self.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let utils = __webpack_require__(/*! ./grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js")

class PlaceSelf extends Declaration {
  /**
   * Translate place-self to separate -ms- prefixed properties
   */
  insert(decl, prefix, prefixes) {
    if (prefix !== '-ms-') return super.insert(decl, prefix, prefixes)

    // prevent doubling of prefixes
    if (decl.parent.some(i => i.prop === '-ms-grid-row-align')) {
      return undefined
    }

    let [[first, second]] = utils.parse(decl)

    if (second) {
      utils.insertDecl(decl, 'grid-row-align', first)
      utils.insertDecl(decl, 'grid-column-align', second)
    } else {
      utils.insertDecl(decl, 'grid-row-align', first)
      utils.insertDecl(decl, 'grid-column-align', first)
    }

    return undefined
  }
}

PlaceSelf.names = ['place-self']

module.exports = PlaceSelf


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/placeholder-shown.js":
/*!******************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/placeholder-shown.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(/*! ../selector */ "./node_modules/autoprefixer/lib/selector.js")

class PlaceholderShown extends Selector {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-ms-') {
      return ':-ms-input-placeholder'
    }
    return `:${prefix}placeholder-shown`
  }
}

PlaceholderShown.names = [':placeholder-shown']

module.exports = PlaceholderShown


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/placeholder.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/placeholder.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Selector = __webpack_require__(/*! ../selector */ "./node_modules/autoprefixer/lib/selector.js")

class Placeholder extends Selector {
  /**
   * Add old mozilla to possible prefixes
   */
  possible() {
    return super.possible().concat(['-moz- old', '-ms- old'])
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === '-webkit-') {
      return '::-webkit-input-placeholder'
    }
    if (prefix === '-ms-') {
      return '::-ms-input-placeholder'
    }
    if (prefix === '-ms- old') {
      return ':-ms-input-placeholder'
    }
    if (prefix === '-moz- old') {
      return ':-moz-placeholder'
    }
    return `::${prefix}placeholder`
  }
}

Placeholder.names = ['::placeholder']

module.exports = Placeholder


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/print-color-adjust.js":
/*!*******************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/print-color-adjust.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class PrintColorAdjust extends Declaration {
  /**
   * Return property name by spec
   */
  normalize() {
    return 'print-color-adjust'
  }

  /**
   * Change property name for WebKit-based browsers
   */
  prefixed(prop, prefix) {
    if (prefix === '-moz-') {
      return 'color-adjust'
    } else {
      return prefix + 'print-color-adjust'
    }
  }
}

PrintColorAdjust.names = ['print-color-adjust', 'color-adjust']

module.exports = PrintColorAdjust


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/text-decoration-skip-ink.js":
/*!*************************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/text-decoration-skip-ink.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class TextDecorationSkipInk extends Declaration {
  /**
   * Change prefix for ink value
   */
  set(decl, prefix) {
    if (decl.prop === 'text-decoration-skip-ink' && decl.value === 'auto') {
      decl.prop = prefix + 'text-decoration-skip'
      decl.value = 'ink'
      return decl
    } else {
      return super.set(decl, prefix)
    }
  }
}

TextDecorationSkipInk.names = [
  'text-decoration-skip-ink',
  'text-decoration-skip'
]

module.exports = TextDecorationSkipInk


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/text-decoration.js":
/*!****************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/text-decoration.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

const BASIC = [
  'none',
  'underline',
  'overline',
  'line-through',
  'blink',
  'inherit',
  'initial',
  'unset'
]

class TextDecoration extends Declaration {
  /**
   * Do not add prefixes for basic values.
   */
  check(decl) {
    return decl.value.split(/\s+/).some(i => !BASIC.includes(i))
  }
}

TextDecoration.names = ['text-decoration']

module.exports = TextDecoration


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/text-emphasis-position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/text-emphasis-position.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class TextEmphasisPosition extends Declaration {
  set(decl, prefix) {
    if (prefix === '-webkit-') {
      decl.value = decl.value.replace(/\s*(right|left)\s*/i, '')
    }
    return super.set(decl, prefix)
  }
}

TextEmphasisPosition.names = ['text-emphasis-position']

module.exports = TextEmphasisPosition


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/transform-decl.js":
/*!***************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/transform-decl.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class TransformDecl extends Declaration {
  /**
   * Is transform contain 3D commands
   */
  contain3d(decl) {
    if (decl.prop === 'transform-origin') {
      return false
    }

    for (let func of TransformDecl.functions3d) {
      if (decl.value.includes(`${func}(`)) {
        return true
      }
    }

    return false
  }

  /**
   * Don't add prefix for IE in keyframes
   */
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      if (!this.contain3d(decl) && !this.keyframeParents(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else if (prefix === '-o-') {
      if (!this.contain3d(decl)) {
        return super.insert(decl, prefix, prefixes)
      }
    } else {
      return super.insert(decl, prefix, prefixes)
    }
    return undefined
  }

  /**
   * Recursively check all parents for @keyframes
   */
  keyframeParents(decl) {
    let { parent } = decl
    while (parent) {
      if (parent.type === 'atrule' && parent.name === 'keyframes') {
        return true
      }
      ;({ parent } = parent)
    }
    return false
  }

  /**
   * Replace rotateZ to rotate for IE 9
   */
  set(decl, prefix) {
    decl = super.set(decl, prefix)
    if (prefix === '-ms-') {
      decl.value = decl.value.replace(/rotatez/gi, 'rotate')
    }
    return decl
  }
}

TransformDecl.names = ['transform', 'transform-origin']

TransformDecl.functions3d = [
  'matrix3d',
  'translate3d',
  'translateZ',
  'scale3d',
  'scaleZ',
  'rotate3d',
  'rotateX',
  'rotateY',
  'perspective'
]

module.exports = TransformDecl


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/user-select.js":
/*!************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/user-select.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class UserSelect extends Declaration {
  /**
   * Avoid prefixing all in IE
   */
  insert(decl, prefix, prefixes) {
    if (decl.value === 'all' && prefix === '-ms-') {
      return undefined
    } else if (
      decl.value === 'contain' &&
      (prefix === '-moz-' || prefix === '-webkit-')
    ) {
      return undefined
    } else {
      return super.insert(decl, prefix, prefixes)
    }
  }

  /**
   * Change prefixed value for IE
   */
  set(decl, prefix) {
    if (prefix === '-ms-' && decl.value === 'contain') {
      decl.value = 'element'
    }
    return super.set(decl, prefix)
  }
}

UserSelect.names = ['user-select']

module.exports = UserSelect


/***/ }),

/***/ "./node_modules/autoprefixer/lib/hacks/writing-mode.js":
/*!*************************************************************!*\
  !*** ./node_modules/autoprefixer/lib/hacks/writing-mode.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Declaration = __webpack_require__(/*! ../declaration */ "./node_modules/autoprefixer/lib/declaration.js")

class WritingMode extends Declaration {
  insert(decl, prefix, prefixes) {
    if (prefix === '-ms-') {
      let cloned = this.set(this.clone(decl), prefix)

      if (this.needCascade(decl)) {
        cloned.raws.before = this.calcBefore(prefixes, decl, prefix)
      }
      let direction = 'ltr'

      decl.parent.nodes.forEach(i => {
        if (i.prop === 'direction') {
          if (i.value === 'rtl' || i.value === 'ltr') direction = i.value
        }
      })

      cloned.value = WritingMode.msValues[direction][decl.value] || decl.value
      return decl.parent.insertBefore(decl, cloned)
    }

    return super.insert(decl, prefix, prefixes)
  }
}

WritingMode.names = ['writing-mode']

WritingMode.msValues = {
  ltr: {
    'horizontal-tb': 'lr-tb',
    'vertical-lr': 'tb-lr',
    'vertical-rl': 'tb-rl'
  },
  rtl: {
    'horizontal-tb': 'rl-tb',
    'vertical-lr': 'bt-lr',
    'vertical-rl': 'bt-rl'
  }
}

module.exports = WritingMode


/***/ }),

/***/ "./node_modules/autoprefixer/lib/info.js":
/*!***********************************************!*\
  !*** ./node_modules/autoprefixer/lib/info.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let browserslist = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js")

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

const NAMES = {
  and_chr: 'Chrome for Android',
  and_ff: 'Firefox for Android',
  and_qq: 'QQ Browser',
  and_uc: 'UC for Android',
  baidu: 'Baidu Browser',
  ie: 'IE',
  ie_mob: 'IE Mobile',
  ios_saf: 'iOS Safari',
  kaios: 'KaiOS Browser',
  op_mini: 'Opera Mini',
  op_mob: 'Opera Mobile',
  samsung: 'Samsung Internet'
}

function prefix(name, prefixes, note) {
  let out = `  ${name}`
  if (note) out += ' *'
  out += ': '
  out += prefixes.map(i => i.replace(/^-(.*)-$/g, '$1')).join(', ')
  out += '\n'
  return out
}

module.exports = function (prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return 'No browsers selected'
  }

  let versions = {}
  for (let browser of prefixes.browsers.selected) {
    let parts = browser.split(' ')
    let name = parts[0]
    let version = parts[1]

    name = NAMES[name] || capitalize(name)
    if (versions[name]) {
      versions[name].push(version)
    } else {
      versions[name] = [version]
    }
  }

  let out = 'Browsers:\n'
  for (let browser in versions) {
    let list = versions[browser]
    list = list.sort((a, b) => parseFloat(b) - parseFloat(a))
    out += `  ${browser}: ${list.join(', ')}\n`
  }

  let coverage = browserslist.coverage(prefixes.browsers.selected)
  let round = Math.round(coverage * 100) / 100.0
  out += `\nThese browsers account for ${round}% of all users globally\n`

  let atrules = []
  for (let name in prefixes.add) {
    let data = prefixes.add[name]
    if (name[0] === '@' && data.prefixes) {
      atrules.push(prefix(name, data.prefixes))
    }
  }
  if (atrules.length > 0) {
    out += `\nAt-Rules:\n${atrules.sort().join('')}`
  }

  let selectors = []
  for (let selector of prefixes.add.selectors) {
    if (selector.prefixes) {
      selectors.push(prefix(selector.name, selector.prefixes))
    }
  }
  if (selectors.length > 0) {
    out += `\nSelectors:\n${selectors.sort().join('')}`
  }

  let values = []
  let props = []
  let hadGrid = false
  for (let name in prefixes.add) {
    let data = prefixes.add[name]
    if (name[0] !== '@' && data.prefixes) {
      let grid = name.indexOf('grid-') === 0
      if (grid) hadGrid = true
      props.push(prefix(name, data.prefixes, grid))
    }

    if (!Array.isArray(data.values)) {
      continue
    }
    for (let value of data.values) {
      let grid = value.name.includes('grid')
      if (grid) hadGrid = true
      let string = prefix(value.name, value.prefixes, grid)
      if (!values.includes(string)) {
        values.push(string)
      }
    }
  }

  if (props.length > 0) {
    out += `\nProperties:\n${props.sort().join('')}`
  }
  if (values.length > 0) {
    out += `\nValues:\n${values.sort().join('')}`
  }
  if (hadGrid) {
    out += '\n* - Prefixes will be added only on grid: true option.\n'
  }

  if (!atrules.length && !selectors.length && !props.length && !values.length) {
    out +=
      "\nAwesome! Your browsers don't require any vendor prefixes." +
      '\nNow you can remove Autoprefixer from build steps.'
  }

  return out
}


/***/ }),

/***/ "./node_modules/autoprefixer/lib/old-selector.js":
/*!*******************************************************!*\
  !*** ./node_modules/autoprefixer/lib/old-selector.js ***!
  \*******************************************************/
/***/ ((module) => {

class OldSelector {
  constructor(selector, prefix) {
    this.prefix = prefix
    this.prefixed = selector.prefixed(this.prefix)
    this.regexp = selector.regexp(this.prefix)

    this.prefixeds = selector
      .possible()
      .map(x => [selector.prefixed(x), selector.regexp(x)])

    this.unprefixed = selector.name
    this.nameRegexp = selector.regexp()
  }

  /**
   * Does rule contain an unnecessary prefixed selector
   */
  check(rule) {
    if (!rule.selector.includes(this.prefixed)) {
      return false
    }
    if (!rule.selector.match(this.regexp)) {
      return false
    }
    if (this.isHack(rule)) {
      return false
    }
    return true
  }

  /**
   * Is rule a hack without unprefixed version bottom
   */
  isHack(rule) {
    let index = rule.parent.index(rule) + 1
    let rules = rule.parent.nodes

    while (index < rules.length) {
      let before = rules[index].selector
      if (!before) {
        return true
      }

      if (before.includes(this.unprefixed) && before.match(this.nameRegexp)) {
        return false
      }

      let some = false
      for (let [string, regexp] of this.prefixeds) {
        if (before.includes(string) && before.match(regexp)) {
          some = true
          break
        }
      }

      if (!some) {
        return true
      }

      index += 1
    }

    return true
  }
}

module.exports = OldSelector


/***/ }),

/***/ "./node_modules/autoprefixer/lib/old-value.js":
/*!****************************************************!*\
  !*** ./node_modules/autoprefixer/lib/old-value.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

class OldValue {
  constructor(unprefixed, prefixed, string, regexp) {
    this.unprefixed = unprefixed
    this.prefixed = prefixed
    this.string = string || prefixed
    this.regexp = regexp || utils.regexp(prefixed)
  }

  /**
   * Check, that value contain old value
   */
  check(value) {
    if (value.includes(this.string)) {
      return !!value.match(this.regexp)
    }
    return false
  }
}

module.exports = OldValue


/***/ }),

/***/ "./node_modules/autoprefixer/lib/prefixer.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/prefixer.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let vendor = __webpack_require__(/*! ./vendor */ "./node_modules/autoprefixer/lib/vendor.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

/**
 * Recursively clone objects
 */
function clone(obj, parent) {
  let cloned = new obj.constructor()

  for (let i of Object.keys(obj || {})) {
    let value = obj[i]
    if (i === 'parent' && typeof value === 'object') {
      if (parent) {
        cloned[i] = parent
      }
    } else if (i === 'source' || i === null) {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(x => clone(x, cloned))
    } else if (
      i !== '_autoprefixerPrefix' &&
      i !== '_autoprefixerValues' &&
      i !== 'proxyCache'
    ) {
      if (typeof value === 'object' && value !== null) {
        value = clone(value, cloned)
      }
      cloned[i] = value
    }
  }

  return cloned
}

class Prefixer {
  constructor(name, prefixes, all) {
    this.prefixes = prefixes
    this.name = name
    this.all = all
  }

  /**
   * Clone node and clean autprefixer custom caches
   */
  static clone(node, overrides) {
    let cloned = clone(node)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  /**
   * Add hack to selected names
   */
  static hack(klass) {
    if (!this.hacks) {
      this.hacks = {}
    }
    return klass.names.map(name => {
      this.hacks[name] = klass
      return this.hacks[name]
    })
  }

  /**
   * Load hacks for some names
   */
  static load(name, prefixes, all) {
    let Klass = this.hacks && this.hacks[name]
    if (Klass) {
      return new Klass(name, prefixes, all)
    } else {
      return new this(name, prefixes, all)
    }
  }

  /**
   * Shortcut for Prefixer.clone
   */
  clone(node, overrides) {
    return Prefixer.clone(node, overrides)
  }

  /**
   * Find prefix in node parents
   */
  parentPrefix(node) {
    let prefix

    if (typeof node._autoprefixerPrefix !== 'undefined') {
      prefix = node._autoprefixerPrefix
    } else if (node.type === 'decl' && node.prop[0] === '-') {
      prefix = vendor.prefix(node.prop)
    } else if (node.type === 'root') {
      prefix = false
    } else if (
      node.type === 'rule' &&
      node.selector.includes(':-') &&
      /:(-\w+-)/.test(node.selector)
    ) {
      prefix = node.selector.match(/:(-\w+-)/)[1]
    } else if (node.type === 'atrule' && node.name[0] === '-') {
      prefix = vendor.prefix(node.name)
    } else {
      prefix = this.parentPrefix(node.parent)
    }

    if (!Browsers.prefixes().includes(prefix)) {
      prefix = false
    }

    node._autoprefixerPrefix = prefix

    return node._autoprefixerPrefix
  }

  /**
   * Clone node with prefixes
   */
  process(node, result) {
    if (!this.check(node)) {
      return undefined
    }

    let parent = this.parentPrefix(node)

    let prefixes = this.prefixes.filter(
      prefix => !parent || parent === utils.removeNote(prefix)
    )

    let added = []
    for (let prefix of prefixes) {
      if (this.add(node, prefix, added.concat([prefix]), result)) {
        added.push(prefix)
      }
    }

    return added
  }
}

module.exports = Prefixer


/***/ }),

/***/ "./node_modules/autoprefixer/lib/prefixes.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/prefixes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let vendor = __webpack_require__(/*! ./vendor */ "./node_modules/autoprefixer/lib/vendor.js")
let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/autoprefixer/lib/declaration.js")
let Resolution = __webpack_require__(/*! ./resolution */ "./node_modules/autoprefixer/lib/resolution.js")
let Transition = __webpack_require__(/*! ./transition */ "./node_modules/autoprefixer/lib/transition.js")
let Processor = __webpack_require__(/*! ./processor */ "./node_modules/autoprefixer/lib/processor.js")
let Supports = __webpack_require__(/*! ./supports */ "./node_modules/autoprefixer/lib/supports.js")
let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let Selector = __webpack_require__(/*! ./selector */ "./node_modules/autoprefixer/lib/selector.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/autoprefixer/lib/at-rule.js")
let Value = __webpack_require__(/*! ./value */ "./node_modules/autoprefixer/lib/value.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")
let hackFullscreen = __webpack_require__(/*! ./hacks/fullscreen */ "./node_modules/autoprefixer/lib/hacks/fullscreen.js")
let hackPlaceholder = __webpack_require__(/*! ./hacks/placeholder */ "./node_modules/autoprefixer/lib/hacks/placeholder.js")
let hackPlaceholderShown = __webpack_require__(/*! ./hacks/placeholder-shown */ "./node_modules/autoprefixer/lib/hacks/placeholder-shown.js")
let hackFileSelectorButton = __webpack_require__(/*! ./hacks/file-selector-button */ "./node_modules/autoprefixer/lib/hacks/file-selector-button.js")
let hackFlex = __webpack_require__(/*! ./hacks/flex */ "./node_modules/autoprefixer/lib/hacks/flex.js")
let hackOrder = __webpack_require__(/*! ./hacks/order */ "./node_modules/autoprefixer/lib/hacks/order.js")
let hackFilter = __webpack_require__(/*! ./hacks/filter */ "./node_modules/autoprefixer/lib/hacks/filter.js")
let hackGridEnd = __webpack_require__(/*! ./hacks/grid-end */ "./node_modules/autoprefixer/lib/hacks/grid-end.js")
let hackAnimation = __webpack_require__(/*! ./hacks/animation */ "./node_modules/autoprefixer/lib/hacks/animation.js")
let hackFlexFlow = __webpack_require__(/*! ./hacks/flex-flow */ "./node_modules/autoprefixer/lib/hacks/flex-flow.js")
let hackFlexGrow = __webpack_require__(/*! ./hacks/flex-grow */ "./node_modules/autoprefixer/lib/hacks/flex-grow.js")
let hackFlexWrap = __webpack_require__(/*! ./hacks/flex-wrap */ "./node_modules/autoprefixer/lib/hacks/flex-wrap.js")
let hackGridArea = __webpack_require__(/*! ./hacks/grid-area */ "./node_modules/autoprefixer/lib/hacks/grid-area.js")
let hackPlaceSelf = __webpack_require__(/*! ./hacks/place-self */ "./node_modules/autoprefixer/lib/hacks/place-self.js")
let hackGridStart = __webpack_require__(/*! ./hacks/grid-start */ "./node_modules/autoprefixer/lib/hacks/grid-start.js")
let hackAlignSelf = __webpack_require__(/*! ./hacks/align-self */ "./node_modules/autoprefixer/lib/hacks/align-self.js")
let hackAppearance = __webpack_require__(/*! ./hacks/appearance */ "./node_modules/autoprefixer/lib/hacks/appearance.js")
let hackFlexBasis = __webpack_require__(/*! ./hacks/flex-basis */ "./node_modules/autoprefixer/lib/hacks/flex-basis.js")
let hackMaskBorder = __webpack_require__(/*! ./hacks/mask-border */ "./node_modules/autoprefixer/lib/hacks/mask-border.js")
let hackMaskComposite = __webpack_require__(/*! ./hacks/mask-composite */ "./node_modules/autoprefixer/lib/hacks/mask-composite.js")
let hackAlignItems = __webpack_require__(/*! ./hacks/align-items */ "./node_modules/autoprefixer/lib/hacks/align-items.js")
let hackUserSelect = __webpack_require__(/*! ./hacks/user-select */ "./node_modules/autoprefixer/lib/hacks/user-select.js")
let hackFlexShrink = __webpack_require__(/*! ./hacks/flex-shrink */ "./node_modules/autoprefixer/lib/hacks/flex-shrink.js")
let hackBreakProps = __webpack_require__(/*! ./hacks/break-props */ "./node_modules/autoprefixer/lib/hacks/break-props.js")
let hackWritingMode = __webpack_require__(/*! ./hacks/writing-mode */ "./node_modules/autoprefixer/lib/hacks/writing-mode.js")
let hackBorderImage = __webpack_require__(/*! ./hacks/border-image */ "./node_modules/autoprefixer/lib/hacks/border-image.js")
let hackAlignContent = __webpack_require__(/*! ./hacks/align-content */ "./node_modules/autoprefixer/lib/hacks/align-content.js")
let hackBorderRadius = __webpack_require__(/*! ./hacks/border-radius */ "./node_modules/autoprefixer/lib/hacks/border-radius.js")
let hackBlockLogical = __webpack_require__(/*! ./hacks/block-logical */ "./node_modules/autoprefixer/lib/hacks/block-logical.js")
let hackGridTemplate = __webpack_require__(/*! ./hacks/grid-template */ "./node_modules/autoprefixer/lib/hacks/grid-template.js")
let hackInlineLogical = __webpack_require__(/*! ./hacks/inline-logical */ "./node_modules/autoprefixer/lib/hacks/inline-logical.js")
let hackGridRowAlign = __webpack_require__(/*! ./hacks/grid-row-align */ "./node_modules/autoprefixer/lib/hacks/grid-row-align.js")
let hackTransformDecl = __webpack_require__(/*! ./hacks/transform-decl */ "./node_modules/autoprefixer/lib/hacks/transform-decl.js")
let hackFlexDirection = __webpack_require__(/*! ./hacks/flex-direction */ "./node_modules/autoprefixer/lib/hacks/flex-direction.js")
let hackImageRendering = __webpack_require__(/*! ./hacks/image-rendering */ "./node_modules/autoprefixer/lib/hacks/image-rendering.js")
let hackBackdropFilter = __webpack_require__(/*! ./hacks/backdrop-filter */ "./node_modules/autoprefixer/lib/hacks/backdrop-filter.js")
let hackBackgroundClip = __webpack_require__(/*! ./hacks/background-clip */ "./node_modules/autoprefixer/lib/hacks/background-clip.js")
let hackTextDecoration = __webpack_require__(/*! ./hacks/text-decoration */ "./node_modules/autoprefixer/lib/hacks/text-decoration.js")
let hackJustifyContent = __webpack_require__(/*! ./hacks/justify-content */ "./node_modules/autoprefixer/lib/hacks/justify-content.js")
let hackBackgroundSize = __webpack_require__(/*! ./hacks/background-size */ "./node_modules/autoprefixer/lib/hacks/background-size.js")
let hackGridRowColumn = __webpack_require__(/*! ./hacks/grid-row-column */ "./node_modules/autoprefixer/lib/hacks/grid-row-column.js")
let hackGridRowsColumns = __webpack_require__(/*! ./hacks/grid-rows-columns */ "./node_modules/autoprefixer/lib/hacks/grid-rows-columns.js")
let hackGridColumnAlign = __webpack_require__(/*! ./hacks/grid-column-align */ "./node_modules/autoprefixer/lib/hacks/grid-column-align.js")
let hackPrintColorAdjust = __webpack_require__(/*! ./hacks/print-color-adjust */ "./node_modules/autoprefixer/lib/hacks/print-color-adjust.js")
let hackOverscrollBehavior = __webpack_require__(/*! ./hacks/overscroll-behavior */ "./node_modules/autoprefixer/lib/hacks/overscroll-behavior.js")
let hackGridTemplateAreas = __webpack_require__(/*! ./hacks/grid-template-areas */ "./node_modules/autoprefixer/lib/hacks/grid-template-areas.js")
let hackTextEmphasisPosition = __webpack_require__(/*! ./hacks/text-emphasis-position */ "./node_modules/autoprefixer/lib/hacks/text-emphasis-position.js")
let hackTextDecorationSkipInk = __webpack_require__(/*! ./hacks/text-decoration-skip-ink */ "./node_modules/autoprefixer/lib/hacks/text-decoration-skip-ink.js")
let hackGradient = __webpack_require__(/*! ./hacks/gradient */ "./node_modules/autoprefixer/lib/hacks/gradient.js")
let hackIntrinsic = __webpack_require__(/*! ./hacks/intrinsic */ "./node_modules/autoprefixer/lib/hacks/intrinsic.js")
let hackPixelated = __webpack_require__(/*! ./hacks/pixelated */ "./node_modules/autoprefixer/lib/hacks/pixelated.js")
let hackImageSet = __webpack_require__(/*! ./hacks/image-set */ "./node_modules/autoprefixer/lib/hacks/image-set.js")
let hackCrossFade = __webpack_require__(/*! ./hacks/cross-fade */ "./node_modules/autoprefixer/lib/hacks/cross-fade.js")
let hackDisplayFlex = __webpack_require__(/*! ./hacks/display-flex */ "./node_modules/autoprefixer/lib/hacks/display-flex.js")
let hackDisplayGrid = __webpack_require__(/*! ./hacks/display-grid */ "./node_modules/autoprefixer/lib/hacks/display-grid.js")
let hackFilterValue = __webpack_require__(/*! ./hacks/filter-value */ "./node_modules/autoprefixer/lib/hacks/filter-value.js")
let hackAutofill = __webpack_require__(/*! ./hacks/autofill */ "./node_modules/autoprefixer/lib/hacks/autofill.js")

Selector.hack(hackAutofill)
Selector.hack(hackFullscreen)
Selector.hack(hackPlaceholder)
Selector.hack(hackPlaceholderShown)
Selector.hack(hackFileSelectorButton)
Declaration.hack(hackFlex)
Declaration.hack(hackOrder)
Declaration.hack(hackFilter)
Declaration.hack(hackGridEnd)
Declaration.hack(hackAnimation)
Declaration.hack(hackFlexFlow)
Declaration.hack(hackFlexGrow)
Declaration.hack(hackFlexWrap)
Declaration.hack(hackGridArea)
Declaration.hack(hackPlaceSelf)
Declaration.hack(hackGridStart)
Declaration.hack(hackAlignSelf)
Declaration.hack(hackAppearance)
Declaration.hack(hackFlexBasis)
Declaration.hack(hackMaskBorder)
Declaration.hack(hackMaskComposite)
Declaration.hack(hackAlignItems)
Declaration.hack(hackUserSelect)
Declaration.hack(hackFlexShrink)
Declaration.hack(hackBreakProps)
Declaration.hack(hackWritingMode)
Declaration.hack(hackBorderImage)
Declaration.hack(hackAlignContent)
Declaration.hack(hackBorderRadius)
Declaration.hack(hackBlockLogical)
Declaration.hack(hackGridTemplate)
Declaration.hack(hackInlineLogical)
Declaration.hack(hackGridRowAlign)
Declaration.hack(hackTransformDecl)
Declaration.hack(hackFlexDirection)
Declaration.hack(hackImageRendering)
Declaration.hack(hackBackdropFilter)
Declaration.hack(hackBackgroundClip)
Declaration.hack(hackTextDecoration)
Declaration.hack(hackJustifyContent)
Declaration.hack(hackBackgroundSize)
Declaration.hack(hackGridRowColumn)
Declaration.hack(hackGridRowsColumns)
Declaration.hack(hackGridColumnAlign)
Declaration.hack(hackOverscrollBehavior)
Declaration.hack(hackGridTemplateAreas)
Declaration.hack(hackPrintColorAdjust)
Declaration.hack(hackTextEmphasisPosition)
Declaration.hack(hackTextDecorationSkipInk)
Value.hack(hackGradient)
Value.hack(hackIntrinsic)
Value.hack(hackPixelated)
Value.hack(hackImageSet)
Value.hack(hackCrossFade)
Value.hack(hackDisplayFlex)
Value.hack(hackDisplayGrid)
Value.hack(hackFilterValue)

let declsCache = new Map()

class Prefixes {
  constructor(data, browsers, options = {}) {
    this.data = data
    this.browsers = browsers
    this.options = options
    ;[this.add, this.remove] = this.preprocess(this.select(this.data))
    this.transition = new Transition(this)
    this.processor = new Processor(this)
  }

  /**
   * Return clone instance to remove all prefixes
   */
  cleaner() {
    if (this.cleanerCache) {
      return this.cleanerCache
    }

    if (this.browsers.selected.length) {
      let empty = new Browsers(this.browsers.data, [])
      this.cleanerCache = new Prefixes(this.data, empty, this.options)
    } else {
      return this
    }

    return this.cleanerCache
  }

  /**
   * Declaration loader with caching
   */
  decl(prop) {
    if (!declsCache.has(prop)) {
      declsCache.set(prop, Declaration.load(prop))
    }

    return declsCache.get(prop)
  }

  /**
   * Group declaration by unprefixed property to check them
   */
  group(decl) {
    let rule = decl.parent
    let index = rule.index(decl)
    let { length } = rule.nodes
    let unprefixed = this.unprefixed(decl.prop)

    let checker = (step, callback) => {
      index += step
      while (index >= 0 && index < length) {
        let other = rule.nodes[index]
        if (other.type === 'decl') {
          if (step === -1 && other.prop === unprefixed) {
            if (!Browsers.withPrefix(other.value)) {
              break
            }
          }

          if (this.unprefixed(other.prop) !== unprefixed) {
            break
          } else if (callback(other) === true) {
            return true
          }

          if (step === +1 && other.prop === unprefixed) {
            if (!Browsers.withPrefix(other.value)) {
              break
            }
          }
        }

        index += step
      }
      return false
    }

    return {
      down(callback) {
        return checker(+1, callback)
      },
      up(callback) {
        return checker(-1, callback)
      }
    }
  }

  /**
   * Normalize prefix for remover
   */
  normalize(prop) {
    return this.decl(prop).normalize(prop)
  }

  /**
   * Return prefixed version of property
   */
  prefixed(prop, prefix) {
    prop = vendor.unprefixed(prop)
    return this.decl(prop).prefixed(prop, prefix)
  }

  /**
   * Cache prefixes data to fast CSS processing
   */
  preprocess(selected) {
    let add = {
      '@supports': new Supports(Prefixes, this),
      'selectors': []
    }
    for (let name in selected.add) {
      let prefixes = selected.add[name]
      if (name === '@keyframes' || name === '@viewport') {
        add[name] = new AtRule(name, prefixes, this)
      } else if (name === '@resolution') {
        add[name] = new Resolution(name, prefixes, this)
      } else if (this.data[name].selector) {
        add.selectors.push(Selector.load(name, prefixes, this))
      } else {
        let props = this.data[name].props

        if (props) {
          let value = Value.load(name, prefixes, this)
          for (let prop of props) {
            if (!add[prop]) {
              add[prop] = { values: [] }
            }
            add[prop].values.push(value)
          }
        } else {
          let values = (add[name] && add[name].values) || []
          add[name] = Declaration.load(name, prefixes, this)
          add[name].values = values
        }
      }
    }

    let remove = { selectors: [] }
    for (let name in selected.remove) {
      let prefixes = selected.remove[name]
      if (this.data[name].selector) {
        let selector = Selector.load(name, prefixes)
        for (let prefix of prefixes) {
          remove.selectors.push(selector.old(prefix))
        }
      } else if (name === '@keyframes' || name === '@viewport') {
        for (let prefix of prefixes) {
          let prefixed = `@${prefix}${name.slice(1)}`
          remove[prefixed] = { remove: true }
        }
      } else if (name === '@resolution') {
        remove[name] = new Resolution(name, prefixes, this)
      } else {
        let props = this.data[name].props
        if (props) {
          let value = Value.load(name, [], this)
          for (let prefix of prefixes) {
            let old = value.old(prefix)
            if (old) {
              for (let prop of props) {
                if (!remove[prop]) {
                  remove[prop] = {}
                }
                if (!remove[prop].values) {
                  remove[prop].values = []
                }
                remove[prop].values.push(old)
              }
            }
          }
        } else {
          for (let p of prefixes) {
            let olds = this.decl(name).old(name, p)
            if (name === 'align-self') {
              let a = add[name] && add[name].prefixes
              if (a) {
                if (p === '-webkit- 2009' && a.includes('-webkit-')) {
                  continue
                } else if (p === '-webkit-' && a.includes('-webkit- 2009')) {
                  continue
                }
              }
            }
            for (let prefixed of olds) {
              if (!remove[prefixed]) {
                remove[prefixed] = {}
              }
              remove[prefixed].remove = true
            }
          }
        }
      }
    }

    return [add, remove]
  }

  /**
   * Select prefixes from data, which is necessary for selected browsers
   */
  select(list) {
    let selected = { add: {}, remove: {} }

    for (let name in list) {
      let data = list[name]
      let add = data.browsers.map(i => {
        let params = i.split(' ')
        return {
          browser: `${params[0]} ${params[1]}`,
          note: params[2]
        }
      })

      let notes = add
        .filter(i => i.note)
        .map(i => `${this.browsers.prefix(i.browser)} ${i.note}`)
      notes = utils.uniq(notes)

      add = add
        .filter(i => this.browsers.isSelected(i.browser))
        .map(i => {
          let prefix = this.browsers.prefix(i.browser)
          if (i.note) {
            return `${prefix} ${i.note}`
          } else {
            return prefix
          }
        })
      add = this.sort(utils.uniq(add))

      if (this.options.flexbox === 'no-2009') {
        add = add.filter(i => !i.includes('2009'))
      }

      let all = data.browsers.map(i => this.browsers.prefix(i))
      if (data.mistakes) {
        all = all.concat(data.mistakes)
      }
      all = all.concat(notes)
      all = utils.uniq(all)

      if (add.length) {
        selected.add[name] = add
        if (add.length < all.length) {
          selected.remove[name] = all.filter(i => !add.includes(i))
        }
      } else {
        selected.remove[name] = all
      }
    }

    return selected
  }

  /**
   * Sort vendor prefixes
   */
  sort(prefixes) {
    return prefixes.sort((a, b) => {
      let aLength = utils.removeNote(a).length
      let bLength = utils.removeNote(b).length

      if (aLength === bLength) {
        return b.length - a.length
      } else {
        return bLength - aLength
      }
    })
  }

  /**
   * Return unprefixed version of property
   */
  unprefixed(prop) {
    let value = this.normalize(vendor.unprefixed(prop))
    if (value === 'flex-direction') {
      value = 'flex-flow'
    }
    return value
  }

  /**
   * Return values, which must be prefixed in selected property
   */
  values(type, prop) {
    let data = this[type]

    let global = data['*'] && data['*'].values
    let values = data[prop] && data[prop].values

    if (global && values) {
      return utils.uniq(global.concat(values))
    } else {
      return global || values || []
    }
  }
}

module.exports = Prefixes


/***/ }),

/***/ "./node_modules/autoprefixer/lib/processor.js":
/*!****************************************************!*\
  !*** ./node_modules/autoprefixer/lib/processor.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let parser = __webpack_require__(/*! postcss-value-parser */ "./node_modules/postcss-value-parser/lib/index.js")

let Value = __webpack_require__(/*! ./value */ "./node_modules/autoprefixer/lib/value.js")
let insertAreas = (__webpack_require__(/*! ./hacks/grid-utils */ "./node_modules/autoprefixer/lib/hacks/grid-utils.js").insertAreas)

const OLD_LINEAR = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i
const OLD_RADIAL = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i
const IGNORE_NEXT = /(!\s*)?autoprefixer:\s*ignore\s+next/i
const GRID_REGEX = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i

const SIZES = [
  'width',
  'height',
  'min-width',
  'max-width',
  'min-height',
  'max-height',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'block-size',
  'min-block-size',
  'max-block-size'
]

function hasGridTemplate(decl) {
  return decl.parent.some(
    i => i.prop === 'grid-template' || i.prop === 'grid-template-areas'
  )
}

function hasRowsAndColumns(decl) {
  let hasRows = decl.parent.some(i => i.prop === 'grid-template-rows')
  let hasColumns = decl.parent.some(i => i.prop === 'grid-template-columns')
  return hasRows && hasColumns
}

class Processor {
  constructor(prefixes) {
    this.prefixes = prefixes
  }

  /**
   * Add necessary prefixes
   */
  add(css, result) {
    // At-rules
    let resolution = this.prefixes.add['@resolution']
    let keyframes = this.prefixes.add['@keyframes']
    let viewport = this.prefixes.add['@viewport']
    let supports = this.prefixes.add['@supports']

    css.walkAtRules(rule => {
      if (rule.name === 'keyframes') {
        if (!this.disabled(rule, result)) {
          return keyframes && keyframes.process(rule)
        }
      } else if (rule.name === 'viewport') {
        if (!this.disabled(rule, result)) {
          return viewport && viewport.process(rule)
        }
      } else if (rule.name === 'supports') {
        if (
          this.prefixes.options.supports !== false &&
          !this.disabled(rule, result)
        ) {
          return supports.process(rule)
        }
      } else if (rule.name === 'media' && rule.params.includes('-resolution')) {
        if (!this.disabled(rule, result)) {
          return resolution && resolution.process(rule)
        }
      }

      return undefined
    })

    // Selectors
    css.walkRules(rule => {
      if (this.disabled(rule, result)) return undefined

      return this.prefixes.add.selectors.map(selector => {
        return selector.process(rule, result)
      })
    })

    function insideGrid(decl) {
      return decl.parent.nodes.some(node => {
        if (node.type !== 'decl') return false
        let displayGrid =
          node.prop === 'display' && /(inline-)?grid/.test(node.value)
        let gridTemplate = node.prop.startsWith('grid-template')
        let gridGap = /^grid-([A-z]+-)?gap/.test(node.prop)
        return displayGrid || gridTemplate || gridGap
      })
    }

    let gridPrefixes =
      this.gridStatus(css, result) &&
      this.prefixes.add['grid-area'] &&
      this.prefixes.add['grid-area'].prefixes

    css.walkDecls(decl => {
      if (this.disabledDecl(decl, result)) return undefined

      let parent = decl.parent
      let prop = decl.prop
      let value = decl.value

      if (prop === 'color-adjust') {
        if (parent.every(i => i.prop !== 'print-color-adjust')) {
          result.warn(
            'Replace color-adjust to print-color-adjust. ' +
              'The color-adjust shorthand is currently deprecated.',
            { node: decl }
          )
        }
      } else if (prop === 'grid-row-span') {
        result.warn(
          'grid-row-span is not part of final Grid Layout. Use grid-row.',
          { node: decl }
        )
        return undefined
      } else if (prop === 'grid-column-span') {
        result.warn(
          'grid-column-span is not part of final Grid Layout. Use grid-column.',
          { node: decl }
        )
        return undefined
      } else if (prop === 'display' && value === 'box') {
        result.warn(
          'You should write display: flex by final spec ' +
            'instead of display: box',
          { node: decl }
        )
        return undefined
      } else if (prop === 'text-emphasis-position') {
        if (value === 'under' || value === 'over') {
          result.warn(
            'You should use 2 values for text-emphasis-position ' +
              'For example, `under left` instead of just `under`.',
            { node: decl }
          )
        }
      } else if (prop === 'text-decoration-skip' && value === 'ink') {
        result.warn(
          'Replace text-decoration-skip: ink to ' +
            'text-decoration-skip-ink: auto, because spec had been changed',
          { node: decl }
        )
      } else {
        if (gridPrefixes && this.gridStatus(decl, result)) {
          if (decl.value === 'subgrid') {
            result.warn('IE does not support subgrid', { node: decl })
          }
          if (/^(align|justify|place)-items$/.test(prop) && insideGrid(decl)) {
            let fixed = prop.replace('-items', '-self')
            result.warn(
              `IE does not support ${prop} on grid containers. ` +
                `Try using ${fixed} on child elements instead: ` +
                `${decl.parent.selector} > * { ${fixed}: ${decl.value} }`,
              { node: decl }
            )
          } else if (
            /^(align|justify|place)-content$/.test(prop) &&
            insideGrid(decl)
          ) {
            result.warn(`IE does not support ${decl.prop} on grid containers`, {
              node: decl
            })
          } else if (prop === 'display' && decl.value === 'contents') {
            result.warn(
              'Please do not use display: contents; ' +
                'if you have grid setting enabled',
              { node: decl }
            )
            return undefined
          } else if (decl.prop === 'grid-gap') {
            let status = this.gridStatus(decl, result)
            if (
              status === 'autoplace' &&
              !hasRowsAndColumns(decl) &&
              !hasGridTemplate(decl)
            ) {
              result.warn(
                'grid-gap only works if grid-template(-areas) is being ' +
                  'used or both rows and columns have been declared ' +
                  'and cells have not been manually ' +
                  'placed inside the explicit grid',
                { node: decl }
              )
            } else if (
              (status === true || status === 'no-autoplace') &&
              !hasGridTemplate(decl)
            ) {
              result.warn(
                'grid-gap only works if grid-template(-areas) is being used',
                { node: decl }
              )
            }
          } else if (prop === 'grid-auto-columns') {
            result.warn('grid-auto-columns is not supported by IE', {
              node: decl
            })
            return undefined
          } else if (prop === 'grid-auto-rows') {
            result.warn('grid-auto-rows is not supported by IE', { node: decl })
            return undefined
          } else if (prop === 'grid-auto-flow') {
            let hasRows = parent.some(i => i.prop === 'grid-template-rows')
            let hasCols = parent.some(i => i.prop === 'grid-template-columns')

            if (hasGridTemplate(decl)) {
              result.warn('grid-auto-flow is not supported by IE', {
                node: decl
              })
            } else if (value.includes('dense')) {
              result.warn('grid-auto-flow: dense is not supported by IE', {
                node: decl
              })
            } else if (!hasRows && !hasCols) {
              result.warn(
                'grid-auto-flow works only if grid-template-rows and ' +
                  'grid-template-columns are present in the same rule',
                { node: decl }
              )
            }
            return undefined
          } else if (value.includes('auto-fit')) {
            result.warn('auto-fit value is not supported by IE', {
              node: decl,
              word: 'auto-fit'
            })
            return undefined
          } else if (value.includes('auto-fill')) {
            result.warn('auto-fill value is not supported by IE', {
              node: decl,
              word: 'auto-fill'
            })
            return undefined
          } else if (prop.startsWith('grid-template') && value.includes('[')) {
            result.warn(
              'Autoprefixer currently does not support line names. ' +
                'Try using grid-template-areas instead.',
              { node: decl, word: '[' }
            )
          }
        }
        if (value.includes('radial-gradient')) {
          if (OLD_RADIAL.test(decl.value)) {
            result.warn(
              'Gradient has outdated direction syntax. ' +
                'New syntax is like `closest-side at 0 0` ' +
                'instead of `0 0, closest-side`.',
              { node: decl }
            )
          } else {
            let ast = parser(value)

            for (let i of ast.nodes) {
              if (i.type === 'function' && i.value === 'radial-gradient') {
                for (let word of i.nodes) {
                  if (word.type === 'word') {
                    if (word.value === 'cover') {
                      result.warn(
                        'Gradient has outdated direction syntax. ' +
                          'Replace `cover` to `farthest-corner`.',
                        { node: decl }
                      )
                    } else if (word.value === 'contain') {
                      result.warn(
                        'Gradient has outdated direction syntax. ' +
                          'Replace `contain` to `closest-side`.',
                        { node: decl }
                      )
                    }
                  }
                }
              }
            }
          }
        }
        if (value.includes('linear-gradient')) {
          if (OLD_LINEAR.test(value)) {
            result.warn(
              'Gradient has outdated direction syntax. ' +
                'New syntax is like `to left` instead of `right`.',
              { node: decl }
            )
          }
        }
      }

      if (SIZES.includes(decl.prop)) {
        if (!decl.value.includes('-fill-available')) {
          if (decl.value.includes('fill-available')) {
            result.warn(
              'Replace fill-available to stretch, ' +
                'because spec had been changed',
              { node: decl }
            )
          } else if (decl.value.includes('fill')) {
            let ast = parser(value)
            if (ast.nodes.some(i => i.type === 'word' && i.value === 'fill')) {
              result.warn(
                'Replace fill to stretch, because spec had been changed',
                { node: decl }
              )
            }
          }
        }
      }

      let prefixer

      if (decl.prop === 'transition' || decl.prop === 'transition-property') {
        // Transition
        return this.prefixes.transition.add(decl, result)
      } else if (decl.prop === 'align-self') {
        // align-self flexbox or grid
        let display = this.displayType(decl)
        if (display !== 'grid' && this.prefixes.options.flexbox !== false) {
          prefixer = this.prefixes.add['align-self']
          if (prefixer && prefixer.prefixes) {
            prefixer.process(decl)
          }
        }
        if (this.gridStatus(decl, result) !== false) {
          prefixer = this.prefixes.add['grid-row-align']
          if (prefixer && prefixer.prefixes) {
            return prefixer.process(decl, result)
          }
        }
      } else if (decl.prop === 'justify-self') {
        // justify-self flexbox or grid
        if (this.gridStatus(decl, result) !== false) {
          prefixer = this.prefixes.add['grid-column-align']
          if (prefixer && prefixer.prefixes) {
            return prefixer.process(decl, result)
          }
        }
      } else if (decl.prop === 'place-self') {
        prefixer = this.prefixes.add['place-self']
        if (
          prefixer &&
          prefixer.prefixes &&
          this.gridStatus(decl, result) !== false
        ) {
          return prefixer.process(decl, result)
        }
      } else {
        // Properties
        prefixer = this.prefixes.add[decl.prop]
        if (prefixer && prefixer.prefixes) {
          return prefixer.process(decl, result)
        }
      }

      return undefined
    })

    // Insert grid-area prefixes. We need to be able to store the different
    // rules as a data and hack API is not enough for this
    if (this.gridStatus(css, result)) {
      insertAreas(css, this.disabled)
    }

    // Values
    return css.walkDecls(decl => {
      if (this.disabledValue(decl, result)) return

      let unprefixed = this.prefixes.unprefixed(decl.prop)
      let list = this.prefixes.values('add', unprefixed)
      if (Array.isArray(list)) {
        for (let value of list) {
          if (value.process) value.process(decl, result)
        }
      }
      Value.save(this.prefixes, decl)
    })
  }

  /**
   * Check for control comment and global options
   */
  disabled(node, result) {
    if (!node) return false

    if (node._autoprefixerDisabled !== undefined) {
      return node._autoprefixerDisabled
    }

    if (node.parent) {
      let p = node.prev()
      if (p && p.type === 'comment' && IGNORE_NEXT.test(p.text)) {
        node._autoprefixerDisabled = true
        node._autoprefixerSelfDisabled = true
        return true
      }
    }

    let value = null
    if (node.nodes) {
      let status
      node.each(i => {
        if (i.type !== 'comment') return
        if (/(!\s*)?autoprefixer:\s*(off|on)/i.test(i.text)) {
          if (typeof status !== 'undefined') {
            result.warn(
              'Second Autoprefixer control comment ' +
                'was ignored. Autoprefixer applies control ' +
                'comment to whole block, not to next rules.',
              { node: i }
            )
          } else {
            status = /on/i.test(i.text)
          }
        }
      })

      if (status !== undefined) {
        value = !status
      }
    }
    if (!node.nodes || value === null) {
      if (node.parent) {
        let isParentDisabled = this.disabled(node.parent, result)
        if (node.parent._autoprefixerSelfDisabled === true) {
          value = false
        } else {
          value = isParentDisabled
        }
      } else {
        value = false
      }
    }
    node._autoprefixerDisabled = value
    return value
  }

  /**
   * Check for grid/flexbox options.
   */
  disabledDecl(node, result) {
    if (node.type === 'decl' && this.gridStatus(node, result) === false) {
      if (node.prop.includes('grid') || node.prop === 'justify-items') {
        return true
      }
    }
    if (node.type === 'decl' && this.prefixes.options.flexbox === false) {
      let other = ['order', 'justify-content', 'align-items', 'align-content']
      if (node.prop.includes('flex') || other.includes(node.prop)) {
        return true
      }
    }

    return this.disabled(node, result)
  }

  /**
   * Check for grid/flexbox options.
   */
  disabledValue(node, result) {
    if (this.gridStatus(node, result) === false && node.type === 'decl') {
      if (node.prop === 'display' && node.value.includes('grid')) {
        return true
      }
    }
    if (this.prefixes.options.flexbox === false && node.type === 'decl') {
      if (node.prop === 'display' && node.value.includes('flex')) {
        return true
      }
    }
    if (node.type === 'decl' && node.prop === 'content') {
      return true
    }

    return this.disabled(node, result)
  }

  /**
   * Is it flebox or grid rule
   */
  displayType(decl) {
    for (let i of decl.parent.nodes) {
      if (i.prop !== 'display') {
        continue
      }

      if (i.value.includes('flex')) {
        return 'flex'
      }

      if (i.value.includes('grid')) {
        return 'grid'
      }
    }

    return false
  }

  /**
   * Set grid option via control comment
   */
  gridStatus(node, result) {
    if (!node) return false

    if (node._autoprefixerGridStatus !== undefined) {
      return node._autoprefixerGridStatus
    }

    let value = null
    if (node.nodes) {
      let status
      node.each(i => {
        if (i.type !== 'comment') return
        if (GRID_REGEX.test(i.text)) {
          let hasAutoplace = /:\s*autoplace/i.test(i.text)
          let noAutoplace = /no-autoplace/i.test(i.text)
          if (typeof status !== 'undefined') {
            result.warn(
              'Second Autoprefixer grid control comment was ' +
                'ignored. Autoprefixer applies control comments to the whole ' +
                'block, not to the next rules.',
              { node: i }
            )
          } else if (hasAutoplace) {
            status = 'autoplace'
          } else if (noAutoplace) {
            status = true
          } else {
            status = /on/i.test(i.text)
          }
        }
      })

      if (status !== undefined) {
        value = status
      }
    }

    if (node.type === 'atrule' && node.name === 'supports') {
      let params = node.params
      if (params.includes('grid') && params.includes('auto')) {
        value = false
      }
    }

    if (!node.nodes || value === null) {
      if (node.parent) {
        let isParentGrid = this.gridStatus(node.parent, result)
        if (node.parent._autoprefixerSelfDisabled === true) {
          value = false
        } else {
          value = isParentGrid
        }
      } else if (typeof this.prefixes.options.grid !== 'undefined') {
        value = this.prefixes.options.grid
      } else if (typeof process.env.AUTOPREFIXER_GRID !== 'undefined') {
        if (process.env.AUTOPREFIXER_GRID === 'autoplace') {
          value = 'autoplace'
        } else {
          value = true
        }
      } else {
        value = false
      }
    }

    node._autoprefixerGridStatus = value
    return value
  }

  /**
   * Normalize spaces in cascade declaration group
   */
  reduceSpaces(decl) {
    let stop = false
    this.prefixes.group(decl).up(() => {
      stop = true
      return true
    })
    if (stop) {
      return
    }

    let parts = decl.raw('before').split('\n')
    let prevMin = parts[parts.length - 1].length
    let diff = false

    this.prefixes.group(decl).down(other => {
      parts = other.raw('before').split('\n')
      let last = parts.length - 1

      if (parts[last].length > prevMin) {
        if (diff === false) {
          diff = parts[last].length - prevMin
        }

        parts[last] = parts[last].slice(0, -diff)
        other.raws.before = parts.join('\n')
      }
    })
  }

  /**
   * Remove unnecessary pefixes
   */
  remove(css, result) {
    // At-rules
    let resolution = this.prefixes.remove['@resolution']

    css.walkAtRules((rule, i) => {
      if (this.prefixes.remove[`@${rule.name}`]) {
        if (!this.disabled(rule, result)) {
          rule.parent.removeChild(i)
        }
      } else if (
        rule.name === 'media' &&
        rule.params.includes('-resolution') &&
        resolution
      ) {
        resolution.clean(rule)
      }
    })

    // Selectors
    css.walkRules((rule, i) => {
      if (this.disabled(rule, result)) return

      for (let checker of this.prefixes.remove.selectors) {
        if (checker.check(rule)) {
          rule.parent.removeChild(i)
          return
        }
      }
    })

    return css.walkDecls((decl, i) => {
      if (this.disabled(decl, result)) return

      let rule = decl.parent
      let unprefixed = this.prefixes.unprefixed(decl.prop)

      // Transition
      if (decl.prop === 'transition' || decl.prop === 'transition-property') {
        this.prefixes.transition.remove(decl)
      }

      // Properties
      if (
        this.prefixes.remove[decl.prop] &&
        this.prefixes.remove[decl.prop].remove
      ) {
        let notHack = this.prefixes.group(decl).down(other => {
          return this.prefixes.normalize(other.prop) === unprefixed
        })

        if (unprefixed === 'flex-flow') {
          notHack = true
        }

        if (decl.prop === '-webkit-box-orient') {
          let hacks = { 'flex-direction': true, 'flex-flow': true }
          if (!decl.parent.some(j => hacks[j.prop])) return
        }

        if (notHack && !this.withHackValue(decl)) {
          if (decl.raw('before').includes('\n')) {
            this.reduceSpaces(decl)
          }
          rule.removeChild(i)
          return
        }
      }

      // Values
      for (let checker of this.prefixes.values('remove', unprefixed)) {
        if (!checker.check) continue
        if (!checker.check(decl.value)) continue

        unprefixed = checker.unprefixed
        let notHack = this.prefixes.group(decl).down(other => {
          return other.value.includes(unprefixed)
        })

        if (notHack) {
          rule.removeChild(i)
          return
        }
      }
    })
  }

  /**
   * Some rare old values, which is not in standard
   */
  withHackValue(decl) {
    return (
      (decl.prop === '-webkit-background-clip' && decl.value === 'text') ||
      // Do not remove -webkit-box-orient when -webkit-line-clamp is present.
      // https://github.com/postcss/autoprefixer/issues/1510
      (decl.prop === '-webkit-box-orient' &&
        decl.parent.some(d => d.prop === '-webkit-line-clamp'))
    )
  }
}

module.exports = Processor


/***/ }),

/***/ "./node_modules/autoprefixer/lib/resolution.js":
/*!*****************************************************!*\
  !*** ./node_modules/autoprefixer/lib/resolution.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let FractionJs = __webpack_require__(/*! fraction.js */ "./node_modules/fraction.js/fraction.cjs")

let Prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/autoprefixer/lib/prefixer.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

const REGEXP = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi
const SPLIT = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i

class Resolution extends Prefixer {
  /**
   * Remove prefixed queries
   */
  clean(rule) {
    if (!this.bad) {
      this.bad = []
      for (let prefix of this.prefixes) {
        this.bad.push(this.prefixName(prefix, 'min'))
        this.bad.push(this.prefixName(prefix, 'max'))
      }
    }

    rule.params = utils.editList(rule.params, queries => {
      return queries.filter(query => this.bad.every(i => !query.includes(i)))
    })
  }

  /**
   * Return prefixed query name
   */
  prefixName(prefix, name) {
    if (prefix === '-moz-') {
      return name + '--moz-device-pixel-ratio'
    } else {
      return prefix + name + '-device-pixel-ratio'
    }
  }

  /**
   * Return prefixed query
   */
  prefixQuery(prefix, name, colon, value, units) {
    value = new FractionJs(value)

    // 1dpcm = 2.54dpi
    // 1dppx = 96dpi
    if (units === 'dpi') {
      value = value.div(96)
    } else if (units === 'dpcm') {
      value = value.mul(2.54).div(96)
    }
    value = value.simplify()

    if (prefix === '-o-') {
      value = value.n + '/' + value.d
    }
    return this.prefixName(prefix, name) + colon + value
  }

  /**
   * Add prefixed queries
   */
  process(rule) {
    let parent = this.parentPrefix(rule)
    let prefixes = parent ? [parent] : this.prefixes

    rule.params = utils.editList(rule.params, (origin, prefixed) => {
      for (let query of origin) {
        if (
          !query.includes('min-resolution') &&
          !query.includes('max-resolution')
        ) {
          prefixed.push(query)
          continue
        }

        for (let prefix of prefixes) {
          let processed = query.replace(REGEXP, str => {
            let parts = str.match(SPLIT)
            return this.prefixQuery(
              prefix,
              parts[1],
              parts[2],
              parts[3],
              parts[4]
            )
          })
          prefixed.push(processed)
        }
        prefixed.push(query)
      }

      return utils.uniq(prefixed)
    })
  }
}

module.exports = Resolution


/***/ }),

/***/ "./node_modules/autoprefixer/lib/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/selector.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { list } = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js")

let OldSelector = __webpack_require__(/*! ./old-selector */ "./node_modules/autoprefixer/lib/old-selector.js")
let Prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/autoprefixer/lib/prefixer.js")
let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

class Selector extends Prefixer {
  constructor(name, prefixes, all) {
    super(name, prefixes, all)
    this.regexpCache = new Map()
  }

  /**
   * Clone and add prefixes for at-rule
   */
  add(rule, prefix) {
    let prefixeds = this.prefixeds(rule)

    if (this.already(rule, prefixeds, prefix)) {
      return
    }

    let cloned = this.clone(rule, { selector: prefixeds[this.name][prefix] })
    rule.parent.insertBefore(rule, cloned)
  }

  /**
   * Is rule already prefixed before
   */
  already(rule, prefixeds, prefix) {
    let index = rule.parent.index(rule) - 1

    while (index >= 0) {
      let before = rule.parent.nodes[index]

      if (before.type !== 'rule') {
        return false
      }

      let some = false
      for (let key in prefixeds[this.name]) {
        let prefixed = prefixeds[this.name][key]
        if (before.selector === prefixed) {
          if (prefix === key) {
            return true
          } else {
            some = true
            break
          }
        }
      }
      if (!some) {
        return false
      }

      index -= 1
    }

    return false
  }

  /**
   * Is rule selectors need to be prefixed
   */
  check(rule) {
    if (rule.selector.includes(this.name)) {
      return !!rule.selector.match(this.regexp())
    }

    return false
  }

  /**
   * Return function to fast find prefixed selector
   */
  old(prefix) {
    return new OldSelector(this, prefix)
  }

  /**
   * All possible prefixes
   */
  possible() {
    return Browsers.prefixes()
  }

  /**
   * Return prefixed version of selector
   */
  prefixed(prefix) {
    return this.name.replace(/^(\W*)/, `$1${prefix}`)
  }

  /**
   * Return all possible selector prefixes
   */
  prefixeds(rule) {
    if (rule._autoprefixerPrefixeds) {
      if (rule._autoprefixerPrefixeds[this.name]) {
        return rule._autoprefixerPrefixeds
      }
    } else {
      rule._autoprefixerPrefixeds = {}
    }

    let prefixeds = {}
    if (rule.selector.includes(',')) {
      let ruleParts = list.comma(rule.selector)
      let toProcess = ruleParts.filter(el => el.includes(this.name))

      for (let prefix of this.possible()) {
        prefixeds[prefix] = toProcess
          .map(el => this.replace(el, prefix))
          .join(', ')
      }
    } else {
      for (let prefix of this.possible()) {
        prefixeds[prefix] = this.replace(rule.selector, prefix)
      }
    }

    rule._autoprefixerPrefixeds[this.name] = prefixeds
    return rule._autoprefixerPrefixeds
  }

  /**
   * Lazy loadRegExp for name
   */
  regexp(prefix) {
    if (!this.regexpCache.has(prefix)) {
      let name = prefix ? this.prefixed(prefix) : this.name
      this.regexpCache.set(
        prefix,
        new RegExp(`(^|[^:"'=])${utils.escapeRegexp(name)}`, 'gi')
      )
    }

    return this.regexpCache.get(prefix)
  }

  /**
   * Replace selectors by prefixed one
   */
  replace(selector, prefix) {
    return selector.replace(this.regexp(), `$1${this.prefixed(prefix)}`)
  }
}

module.exports = Selector


/***/ }),

/***/ "./node_modules/autoprefixer/lib/supports.js":
/*!***************************************************!*\
  !*** ./node_modules/autoprefixer/lib/supports.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let featureQueries = __webpack_require__(/*! caniuse-lite/data/features/css-featurequeries.js */ "./node_modules/caniuse-lite/data/features/css-featurequeries.js")
let feature = __webpack_require__(/*! caniuse-lite/dist/unpacker/feature */ "./node_modules/caniuse-lite/dist/unpacker/feature.js")
let { parse } = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js")

let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let brackets = __webpack_require__(/*! ./brackets */ "./node_modules/autoprefixer/lib/brackets.js")
let Value = __webpack_require__(/*! ./value */ "./node_modules/autoprefixer/lib/value.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

let data = feature(featureQueries)

let supported = []
for (let browser in data.stats) {
  let versions = data.stats[browser]
  for (let version in versions) {
    let support = versions[version]
    if (/y/.test(support)) {
      supported.push(browser + ' ' + version)
    }
  }
}

class Supports {
  constructor(Prefixes, all) {
    this.Prefixes = Prefixes
    this.all = all
  }

  /**
   * Add prefixes
   */
  add(nodes, all) {
    return nodes.map(i => {
      if (this.isProp(i)) {
        let prefixed = this.prefixed(i[0])
        if (prefixed.length > 1) {
          return this.convert(prefixed)
        }

        return i
      }

      if (typeof i === 'object') {
        return this.add(i, all)
      }

      return i
    })
  }

  /**
   * Clean brackets with one child
   */
  cleanBrackets(nodes) {
    return nodes.map(i => {
      if (typeof i !== 'object') {
        return i
      }

      if (i.length === 1 && typeof i[0] === 'object') {
        return this.cleanBrackets(i[0])
      }

      return this.cleanBrackets(i)
    })
  }

  /**
   * Add " or " between properties and convert it to brackets format
   */
  convert(progress) {
    let result = ['']
    for (let i of progress) {
      result.push([`${i.prop}: ${i.value}`])
      result.push(' or ')
    }
    result[result.length - 1] = ''
    return result
  }

  /**
   * Check global options
   */
  disabled(node) {
    if (!this.all.options.grid) {
      if (node.prop === 'display' && node.value.includes('grid')) {
        return true
      }
      if (node.prop.includes('grid') || node.prop === 'justify-items') {
        return true
      }
    }

    if (this.all.options.flexbox === false) {
      if (node.prop === 'display' && node.value.includes('flex')) {
        return true
      }
      let other = ['order', 'justify-content', 'align-items', 'align-content']
      if (node.prop.includes('flex') || other.includes(node.prop)) {
        return true
      }
    }

    return false
  }

  /**
   * Return true if prefixed property has no unprefixed
   */
  isHack(all, unprefixed) {
    let check = new RegExp(`(\\(|\\s)${utils.escapeRegexp(unprefixed)}:`)
    return !check.test(all)
  }

  /**
   * Return true if brackets node is "not" word
   */
  isNot(node) {
    return typeof node === 'string' && /not\s*/i.test(node)
  }

  /**
   * Return true if brackets node is "or" word
   */
  isOr(node) {
    return typeof node === 'string' && /\s*or\s*/i.test(node)
  }

  /**
   * Return true if brackets node is (prop: value)
   */
  isProp(node) {
    return (
      typeof node === 'object' &&
      node.length === 1 &&
      typeof node[0] === 'string'
    )
  }

  /**
   * Compress value functions into a string nodes
   */
  normalize(nodes) {
    if (typeof nodes !== 'object') {
      return nodes
    }

    nodes = nodes.filter(i => i !== '')

    if (typeof nodes[0] === 'string') {
      let firstNode = nodes[0].trim()

      if (
        firstNode.includes(':') ||
        firstNode === 'selector' ||
        firstNode === 'not selector'
      ) {
        return [brackets.stringify(nodes)]
      }
    }
    return nodes.map(i => this.normalize(i))
  }

  /**
   * Parse string into declaration property and value
   */
  parse(str) {
    let parts = str.split(':')
    let prop = parts[0]
    let value = parts[1]
    if (!value) value = ''
    return [prop.trim(), value.trim()]
  }

  /**
   * Return array of Declaration with all necessary prefixes
   */
  prefixed(str) {
    let rule = this.virtual(str)
    if (this.disabled(rule.first)) {
      return rule.nodes
    }

    let result = { warn: () => null }

    let prefixer = this.prefixer().add[rule.first.prop]
    prefixer && prefixer.process && prefixer.process(rule.first, result)

    for (let decl of rule.nodes) {
      for (let value of this.prefixer().values('add', rule.first.prop)) {
        value.process(decl)
      }
      Value.save(this.all, decl)
    }

    return rule.nodes
  }

  /**
   * Return prefixer only with @supports supported browsers
   */
  prefixer() {
    if (this.prefixerCache) {
      return this.prefixerCache
    }

    let filtered = this.all.browsers.selected.filter(i => {
      return supported.includes(i)
    })

    let browsers = new Browsers(
      this.all.browsers.data,
      filtered,
      this.all.options
    )
    this.prefixerCache = new this.Prefixes(
      this.all.data,
      browsers,
      this.all.options
    )
    return this.prefixerCache
  }

  /**
   * Add prefixed declaration
   */
  process(rule) {
    let ast = brackets.parse(rule.params)
    ast = this.normalize(ast)
    ast = this.remove(ast, rule.params)
    ast = this.add(ast, rule.params)
    ast = this.cleanBrackets(ast)
    rule.params = brackets.stringify(ast)
  }

  /**
   * Remove all unnecessary prefixes
   */
  remove(nodes, all) {
    let i = 0
    while (i < nodes.length) {
      if (
        !this.isNot(nodes[i - 1]) &&
        this.isProp(nodes[i]) &&
        this.isOr(nodes[i + 1])
      ) {
        if (this.toRemove(nodes[i][0], all)) {
          nodes.splice(i, 2)
          continue
        }

        i += 2
        continue
      }

      if (typeof nodes[i] === 'object') {
        nodes[i] = this.remove(nodes[i], all)
      }

      i += 1
    }
    return nodes
  }

  /**
   * Return true if we need to remove node
   */
  toRemove(str, all) {
    let [prop, value] = this.parse(str)
    let unprefixed = this.all.unprefixed(prop)

    let cleaner = this.all.cleaner()

    if (
      cleaner.remove[prop] &&
      cleaner.remove[prop].remove &&
      !this.isHack(all, unprefixed)
    ) {
      return true
    }

    for (let checker of cleaner.values('remove', unprefixed)) {
      if (checker.check(value)) {
        return true
      }
    }

    return false
  }

  /**
   * Create virtual rule to process it by prefixer
   */
  virtual(str) {
    let [prop, value] = this.parse(str)
    let rule = parse('a{}').first
    rule.append({ prop, raws: { before: '' }, value })
    return rule
  }
}

module.exports = Supports


/***/ }),

/***/ "./node_modules/autoprefixer/lib/transition.js":
/*!*****************************************************!*\
  !*** ./node_modules/autoprefixer/lib/transition.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { list } = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js")
let parser = __webpack_require__(/*! postcss-value-parser */ "./node_modules/postcss-value-parser/lib/index.js")

let Browsers = __webpack_require__(/*! ./browsers */ "./node_modules/autoprefixer/lib/browsers.js")
let vendor = __webpack_require__(/*! ./vendor */ "./node_modules/autoprefixer/lib/vendor.js")

class Transition {
  constructor(prefixes) {
    this.props = ['transition', 'transition-property']
    this.prefixes = prefixes
  }

  /**
   * Process transition and add prefixes for all necessary properties
   */
  add(decl, result) {
    let prefix, prop
    let add = this.prefixes.add[decl.prop]
    let vendorPrefixes = this.ruleVendorPrefixes(decl)
    let declPrefixes = vendorPrefixes || (add && add.prefixes) || []

    let params = this.parse(decl.value)
    let names = params.map(i => this.findProp(i))
    let added = []

    if (names.some(i => i[0] === '-')) {
      return
    }

    for (let param of params) {
      prop = this.findProp(param)
      if (prop[0] === '-') continue

      let prefixer = this.prefixes.add[prop]
      if (!prefixer || !prefixer.prefixes) continue

      for (prefix of prefixer.prefixes) {
        if (vendorPrefixes && !vendorPrefixes.some(p => prefix.includes(p))) {
          continue
        }

        let prefixed = this.prefixes.prefixed(prop, prefix)
        if (prefixed !== '-ms-transform' && !names.includes(prefixed)) {
          if (!this.disabled(prop, prefix)) {
            added.push(this.clone(prop, prefixed, param))
          }
        }
      }
    }

    params = params.concat(added)
    let value = this.stringify(params)

    let webkitClean = this.stringify(
      this.cleanFromUnprefixed(params, '-webkit-')
    )
    if (declPrefixes.includes('-webkit-')) {
      this.cloneBefore(decl, `-webkit-${decl.prop}`, webkitClean)
    }
    this.cloneBefore(decl, decl.prop, webkitClean)
    if (declPrefixes.includes('-o-')) {
      let operaClean = this.stringify(this.cleanFromUnprefixed(params, '-o-'))
      this.cloneBefore(decl, `-o-${decl.prop}`, operaClean)
    }

    for (prefix of declPrefixes) {
      if (prefix !== '-webkit-' && prefix !== '-o-') {
        let prefixValue = this.stringify(
          this.cleanOtherPrefixes(params, prefix)
        )
        this.cloneBefore(decl, prefix + decl.prop, prefixValue)
      }
    }

    if (value !== decl.value && !this.already(decl, decl.prop, value)) {
      this.checkForWarning(result, decl)
      decl.cloneBefore()
      decl.value = value
    }
  }

  /**
   * Does we already have this declaration
   */
  already(decl, prop, value) {
    return decl.parent.some(i => i.prop === prop && i.value === value)
  }

  /**
   * Show transition-property warning
   */
  checkForWarning(result, decl) {
    if (decl.prop !== 'transition-property') {
      return
    }

    let isPrefixed = false
    let hasAssociatedProp = false

    decl.parent.each(i => {
      if (i.type !== 'decl') {
        return undefined
      }
      if (i.prop.indexOf('transition-') !== 0) {
        return undefined
      }
      let values = list.comma(i.value)
      // check if current Rule's transition-property comma separated value list needs prefixes
      if (i.prop === 'transition-property') {
        values.forEach(value => {
          let lookup = this.prefixes.add[value]
          if (lookup && lookup.prefixes && lookup.prefixes.length > 0) {
            isPrefixed = true
          }
        })
        return undefined
      }
      // check if another transition-* prop in current Rule has comma separated value list
      hasAssociatedProp = hasAssociatedProp || values.length > 1
      return false
    })

    if (isPrefixed && hasAssociatedProp) {
      decl.warn(
        result,
        'Replace transition-property to transition, ' +
          'because Autoprefixer could not support ' +
          'any cases of transition-property ' +
          'and other transition-*'
      )
    }
  }

  /**
   * Remove all non-webkit prefixes and unprefixed params if we have prefixed
   */
  cleanFromUnprefixed(params, prefix) {
    let remove = params
      .map(i => this.findProp(i))
      .filter(i => i.slice(0, prefix.length) === prefix)
      .map(i => this.prefixes.unprefixed(i))

    let result = []
    for (let param of params) {
      let prop = this.findProp(param)
      let p = vendor.prefix(prop)
      if (!remove.includes(prop) && (p === prefix || p === '')) {
        result.push(param)
      }
    }
    return result
  }

  cleanOtherPrefixes(params, prefix) {
    return params.filter(param => {
      let current = vendor.prefix(this.findProp(param))
      return current === '' || current === prefix
    })
  }

  /**
   * Return new param array with different name
   */
  clone(origin, name, param) {
    let result = []
    let changed = false
    for (let i of param) {
      if (!changed && i.type === 'word' && i.value === origin) {
        result.push({ type: 'word', value: name })
        changed = true
      } else {
        result.push(i)
      }
    }
    return result
  }

  /**
   * Add declaration if it is not exist
   */
  cloneBefore(decl, prop, value) {
    if (!this.already(decl, prop, value)) {
      decl.cloneBefore({ prop, value })
    }
  }

  /**
   * Check property for disabled by option
   */
  disabled(prop, prefix) {
    let other = ['order', 'justify-content', 'align-self', 'align-content']
    if (prop.includes('flex') || other.includes(prop)) {
      if (this.prefixes.options.flexbox === false) {
        return true
      }

      if (this.prefixes.options.flexbox === 'no-2009') {
        return prefix.includes('2009')
      }
    }
    return undefined
  }

  /**
   * Find or create separator
   */
  div(params) {
    for (let param of params) {
      for (let node of param) {
        if (node.type === 'div' && node.value === ',') {
          return node
        }
      }
    }
    return { after: ' ', type: 'div', value: ',' }
  }

  /**
   * Find property name
   */
  findProp(param) {
    let prop = param[0].value
    if (/^\d/.test(prop)) {
      for (let [i, token] of param.entries()) {
        if (i !== 0 && token.type === 'word') {
          return token.value
        }
      }
    }
    return prop
  }

  /**
   * Parse properties list to array
   */
  parse(value) {
    let ast = parser(value)
    let result = []
    let param = []
    for (let node of ast.nodes) {
      param.push(node)
      if (node.type === 'div' && node.value === ',') {
        result.push(param)
        param = []
      }
    }
    result.push(param)
    return result.filter(i => i.length > 0)
  }

  /**
   * Process transition and remove all unnecessary properties
   */
  remove(decl) {
    let params = this.parse(decl.value)
    params = params.filter(i => {
      let prop = this.prefixes.remove[this.findProp(i)]
      return !prop || !prop.remove
    })
    let value = this.stringify(params)

    if (decl.value === value) {
      return
    }

    if (params.length === 0) {
      decl.remove()
      return
    }

    let double = decl.parent.some(i => {
      return i.prop === decl.prop && i.value === value
    })
    let smaller = decl.parent.some(i => {
      return i !== decl && i.prop === decl.prop && i.value.length > value.length
    })

    if (double || smaller) {
      decl.remove()
      return
    }

    decl.value = value
  }

  /**
   * Check if transition prop is inside vendor specific rule
   */
  ruleVendorPrefixes(decl) {
    let { parent } = decl

    if (parent.type !== 'rule') {
      return false
    } else if (!parent.selector.includes(':-')) {
      return false
    }

    let selectors = Browsers.prefixes().filter(s =>
      parent.selector.includes(':' + s)
    )

    return selectors.length > 0 ? selectors : false
  }

  /**
   * Return properties string from array
   */
  stringify(params) {
    if (params.length === 0) {
      return ''
    }
    let nodes = []
    for (let param of params) {
      if (param[param.length - 1].type !== 'div') {
        param.push(this.div(params))
      }
      nodes = nodes.concat(param)
    }
    if (nodes[0].type === 'div') {
      nodes = nodes.slice(1)
    }
    if (nodes[nodes.length - 1].type === 'div') {
      nodes = nodes.slice(0, +-2 + 1 || 0)
    }
    return parser.stringify({ nodes })
  }
}

module.exports = Transition


/***/ }),

/***/ "./node_modules/autoprefixer/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/autoprefixer/lib/utils.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { list } = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js")

/**
 * Throw special error, to tell beniary,
 * that this error is from Autoprefixer.
 */
module.exports.error = function (text) {
  let err = new Error(text)
  err.autoprefixer = true
  throw err
}

/**
 * Return array, that doesn’t contain duplicates.
 */
module.exports.uniq = function (array) {
  return [...new Set(array)]
}

/**
 * Return "-webkit-" on "-webkit- old"
 */
module.exports.removeNote = function (string) {
  if (!string.includes(' ')) {
    return string
  }

  return string.split(' ')[0]
}

/**
 * Escape RegExp symbols
 */
module.exports.escapeRegexp = function (string) {
  return string.replace(/[$()*+-.?[\\\]^{|}]/g, '\\$&')
}

/**
 * Return regexp to check, that CSS string contain word
 */
module.exports.regexp = function (word, escape = true) {
  if (escape) {
    word = this.escapeRegexp(word)
  }
  return new RegExp(`(^|[\\s,(])(${word}($|[\\s(,]))`, 'gi')
}

/**
 * Change comma list
 */
module.exports.editList = function (value, callback) {
  let origin = list.comma(value)
  let changed = callback(origin, [])

  if (origin === changed) {
    return value
  }

  let join = value.match(/,\s*/)
  join = join ? join[0] : ', '
  return changed.join(join)
}

/**
 * Split the selector into parts.
 * It returns 3 level deep array because selectors can be comma
 * separated (1), space separated (2), and combined (3)
 * @param {String} selector selector string
 * @return {Array<Array<Array>>} 3 level deep array of split selector
 * @see utils.test.js for examples
 */
module.exports.splitSelector = function (selector) {
  return list.comma(selector).map(i => {
    return list.space(i).map(k => {
      return k.split(/(?=\.|#)/g)
    })
  })
}

/**
 * Return true if a given value only contains numbers.
 * @param {*} value
 * @returns {boolean}
 */
module.exports.isPureNumber = function (value) {
  if (typeof value === 'number') {
    return true
  }
  if (typeof value === 'string') {
    return /^[0-9]+$/.test(value)
  }
  return false
}


/***/ }),

/***/ "./node_modules/autoprefixer/lib/value.js":
/*!************************************************!*\
  !*** ./node_modules/autoprefixer/lib/value.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/autoprefixer/lib/prefixer.js")
let OldValue = __webpack_require__(/*! ./old-value */ "./node_modules/autoprefixer/lib/old-value.js")
let vendor = __webpack_require__(/*! ./vendor */ "./node_modules/autoprefixer/lib/vendor.js")
let utils = __webpack_require__(/*! ./utils */ "./node_modules/autoprefixer/lib/utils.js")

class Value extends Prefixer {
  /**
   * Clone decl for each prefixed values
   */
  static save(prefixes, decl) {
    let prop = decl.prop
    let result = []

    for (let prefix in decl._autoprefixerValues) {
      let value = decl._autoprefixerValues[prefix]

      if (value === decl.value) {
        continue
      }

      let item
      let propPrefix = vendor.prefix(prop)

      if (propPrefix === '-pie-') {
        continue
      }

      if (propPrefix === prefix) {
        item = decl.value = value
        result.push(item)
        continue
      }

      let prefixed = prefixes.prefixed(prop, prefix)
      let rule = decl.parent

      if (!rule.every(i => i.prop !== prefixed)) {
        result.push(item)
        continue
      }

      let trimmed = value.replace(/\s+/, ' ')
      let already = rule.some(
        i => i.prop === decl.prop && i.value.replace(/\s+/, ' ') === trimmed
      )

      if (already) {
        result.push(item)
        continue
      }

      let cloned = this.clone(decl, { value })
      item = decl.parent.insertBefore(decl, cloned)

      result.push(item)
    }

    return result
  }

  /**
   * Save values with next prefixed token
   */
  add(decl, prefix) {
    if (!decl._autoprefixerValues) {
      decl._autoprefixerValues = {}
    }
    let value = decl._autoprefixerValues[prefix] || this.value(decl)

    let before
    do {
      before = value
      value = this.replace(value, prefix)
      if (value === false) return
    } while (value !== before)

    decl._autoprefixerValues[prefix] = value
  }

  /**
   * Is declaration need to be prefixed
   */
  check(decl) {
    let value = decl.value
    if (!value.includes(this.name)) {
      return false
    }

    return !!value.match(this.regexp())
  }

  /**
   * Return function to fast find prefixed value
   */
  old(prefix) {
    return new OldValue(this.name, prefix + this.name)
  }

  /**
   * Lazy regexp loading
   */
  regexp() {
    return this.regexpCache || (this.regexpCache = utils.regexp(this.name))
  }

  /**
   * Add prefix to values in string
   */
  replace(string, prefix) {
    return string.replace(this.regexp(), `$1${prefix}$2`)
  }

  /**
   * Get value with comments if it was not changed
   */
  value(decl) {
    if (decl.raws.value && decl.raws.value.value === decl.value) {
      return decl.raws.value.raw
    } else {
      return decl.value
    }
  }
}

module.exports = Value


/***/ }),

/***/ "./node_modules/autoprefixer/lib/vendor.js":
/*!*************************************************!*\
  !*** ./node_modules/autoprefixer/lib/vendor.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = {
  prefix(prop) {
    let match = prop.match(/^(-\w+-)/)
    if (match) {
      return match[0]
    }

    return ''
  },

  unprefixed(prop) {
    return prop.replace(/^-\w+-/, '')
  }
}


/***/ }),

/***/ "./node_modules/browserslist/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/browserslist/browser.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")

function noop() {}

module.exports = {
  loadQueries: function loadQueries() {
    throw new BrowserslistError(
      'Sharable configs are not supported in client-side build of Browserslist'
    )
  },

  getStat: function getStat(opts) {
    return opts.stats
  },

  loadConfig: function loadConfig(opts) {
    if (opts.config) {
      throw new BrowserslistError(
        'Browserslist config are not supported in client-side build'
      )
    }
  },

  loadCountry: function loadCountry() {
    throw new BrowserslistError(
      'Country statistics are not supported ' +
        'in client-side build of Browserslist'
    )
  },

  loadFeature: function loadFeature() {
    throw new BrowserslistError(
      'Supports queries are not available in client-side build of Browserslist'
    )
  },

  currentNode: function currentNode(resolve, context) {
    return resolve(['maintained node versions'], context)[0]
  },

  parseConfig: noop,

  readConfig: noop,

  findConfig: noop,

  clearCaches: noop,

  oldDataWarning: noop,

  env: {}
}


/***/ }),

/***/ "./node_modules/browserslist/error.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/error.js ***!
  \********************************************/
/***/ ((module) => {

function BrowserslistError(message) {
  this.name = 'BrowserslistError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, BrowserslistError)
  }
}

BrowserslistError.prototype = Error.prototype

module.exports = BrowserslistError


/***/ }),

/***/ "./node_modules/browserslist/index.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var jsReleases = __webpack_require__(/*! node-releases/data/processed/envs.json */ "./node_modules/node-releases/data/processed/envs.json")
var agents = (__webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js").agents)
var jsEOL = __webpack_require__(/*! node-releases/data/release-schedule/release-schedule.json */ "./node_modules/node-releases/data/release-schedule/release-schedule.json")
var path = __webpack_require__(/*! path */ "?3465")
var e2c = __webpack_require__(/*! electron-to-chromium/versions */ "./node_modules/electron-to-chromium/versions.js")

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")
var parse = __webpack_require__(/*! ./parse */ "./node_modules/browserslist/parse.js")
var env = __webpack_require__(/*! ./node */ "./node_modules/browserslist/browser.js") // Will load browser.js in webpack

var YEAR = 365.259641 * 24 * 60 * 60 * 1000
var ANDROID_EVERGREEN_FIRST = '37'
var OP_MOB_BLINK_FIRST = 14

// Helpers

function isVersionsMatch(versionA, versionB) {
  return (versionA + '.').indexOf(versionB + '.') === 0
}

function isEolReleased(name) {
  var version = name.slice(1)
  return browserslist.nodeVersions.some(function (i) {
    return isVersionsMatch(i, version)
  })
}

function normalize(versions) {
  return versions.filter(function (version) {
    return typeof version === 'string'
  })
}

function normalizeElectron(version) {
  var versionToUse = version
  if (version.split('.').length === 3) {
    versionToUse = version.split('.').slice(0, -1).join('.')
  }
  return versionToUse
}

function nameMapper(name) {
  return function mapName(version) {
    return name + ' ' + version
  }
}

function getMajor(version) {
  return parseInt(version.split('.')[0])
}

function getMajorVersions(released, number) {
  if (released.length === 0) return []
  var majorVersions = uniq(released.map(getMajor))
  var minimum = majorVersions[majorVersions.length - number]
  if (!minimum) {
    return released
  }
  var selected = []
  for (var i = released.length - 1; i >= 0; i--) {
    if (minimum > getMajor(released[i])) break
    selected.unshift(released[i])
  }
  return selected
}

function uniq(array) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (filtered.indexOf(array[i]) === -1) filtered.push(array[i])
  }
  return filtered
}

function fillUsage(result, name, data) {
  for (var i in data) {
    result[name + ' ' + i] = data[i]
  }
}

function generateFilter(sign, version) {
  version = parseFloat(version)
  if (sign === '>') {
    return function (v) {
      return parseFloat(v) > version
    }
  } else if (sign === '>=') {
    return function (v) {
      return parseFloat(v) >= version
    }
  } else if (sign === '<') {
    return function (v) {
      return parseFloat(v) < version
    }
  } else {
    return function (v) {
      return parseFloat(v) <= version
    }
  }
}

function generateSemverFilter(sign, version) {
  version = version.split('.').map(parseSimpleInt)
  version[1] = version[1] || 0
  version[2] = version[2] || 0
  if (sign === '>') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) > 0
    }
  } else if (sign === '>=') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) >= 0
    }
  } else if (sign === '<') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) > 0
    }
  } else {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) >= 0
    }
  }
}

function parseSimpleInt(x) {
  return parseInt(x)
}

function compare(a, b) {
  if (a < b) return -1
  if (a > b) return +1
  return 0
}

function compareSemver(a, b) {
  return (
    compare(parseInt(a[0]), parseInt(b[0])) ||
    compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
    compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
  )
}

// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
  range = range.split('.').map(parseSimpleInt)
  if (typeof range[1] === 'undefined') {
    range[1] = 'x'
  }
  // ignore any patch version because we only return minor versions
  // range[2] = 'x'
  switch (operator) {
    case '<=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) <= 0
      }
    case '>=':
    default:
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) >= 0
      }
  }
}

// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
  if (version[0] !== range[0]) {
    return version[0] < range[0] ? -1 : +1
  }
  if (range[1] === 'x') {
    return 0
  }
  if (version[1] !== range[1]) {
    return version[1] < range[1] ? -1 : +1
  }
  return 0
}

function resolveVersion(data, version) {
  if (data.versions.indexOf(version) !== -1) {
    return version
  } else if (browserslist.versionAliases[data.name][version]) {
    return browserslist.versionAliases[data.name][version]
  } else {
    return false
  }
}

function normalizeVersion(data, version) {
  var resolved = resolveVersion(data, version)
  if (resolved) {
    return resolved
  } else if (data.versions.length === 1) {
    return data.versions[0]
  } else {
    return false
  }
}

function filterByYear(since, context) {
  since = since / 1000
  return Object.keys(agents).reduce(function (selected, name) {
    var data = byName(name, context)
    if (!data) return selected
    var versions = Object.keys(data.releaseDate).filter(function (v) {
      var date = data.releaseDate[v]
      return date !== null && date >= since
    })
    return selected.concat(versions.map(nameMapper(data.name)))
  }, [])
}

function cloneData(data) {
  return {
    name: data.name,
    versions: data.versions,
    released: data.released,
    releaseDate: data.releaseDate
  }
}

function byName(name, context) {
  name = name.toLowerCase()
  name = browserslist.aliases[name] || name
  if (context.mobileToDesktop && browserslist.desktopNames[name]) {
    var desktop = browserslist.data[browserslist.desktopNames[name]]
    if (name === 'android') {
      return normalizeAndroidData(cloneData(browserslist.data[name]), desktop)
    } else {
      var cloned = cloneData(desktop)
      cloned.name = name
      return cloned
    }
  }
  return browserslist.data[name]
}

function normalizeAndroidVersions(androidVersions, chromeVersions) {
  var iFirstEvergreen = chromeVersions.indexOf(ANDROID_EVERGREEN_FIRST)
  return androidVersions
    .filter(function (version) {
      return /^(?:[2-4]\.|[34]$)/.test(version)
    })
    .concat(chromeVersions.slice(iFirstEvergreen))
}

function copyObject(obj) {
  var copy = {}
  for (var key in obj) {
    copy[key] = obj[key]
  }
  return copy
}

function normalizeAndroidData(android, chrome) {
  android.released = normalizeAndroidVersions(android.released, chrome.released)
  android.versions = normalizeAndroidVersions(android.versions, chrome.versions)
  android.releaseDate = copyObject(android.releaseDate)
  android.released.forEach(function (v) {
    if (android.releaseDate[v] === undefined) {
      android.releaseDate[v] = chrome.releaseDate[v]
    }
  })
  return android
}

function checkName(name, context) {
  var data = byName(name, context)
  if (!data) throw new BrowserslistError('Unknown browser ' + name)
  return data
}

function unknownQuery(query) {
  return new BrowserslistError(
    'Unknown browser query `' +
      query +
      '`. ' +
      'Maybe you are using old Browserslist or made typo in query.'
  )
}

// Adjusts last X versions queries for some mobile browsers,
// where caniuse data jumps from a legacy version to the latest
function filterJumps(list, name, nVersions, context) {
  var jump = 1
  switch (name) {
    case 'android':
      if (context.mobileToDesktop) return list
      var released = browserslist.data.chrome.released
      jump = released.length - released.indexOf(ANDROID_EVERGREEN_FIRST)
      break
    case 'op_mob':
      var latest = browserslist.data.op_mob.released.slice(-1)[0]
      jump = getMajor(latest) - OP_MOB_BLINK_FIRST + 1
      break
    default:
      return list
  }
  if (nVersions <= jump) {
    return list.slice(-1)
  }
  return list.slice(jump - 1 - nVersions)
}

function isSupported(flags, withPartial) {
  return (
    typeof flags === 'string' &&
    (flags.indexOf('y') >= 0 || (withPartial && flags.indexOf('a') >= 0))
  )
}

function resolve(queries, context) {
  return parse(QUERIES, queries).reduce(function (result, node, index) {
    if (node.not && index === 0) {
      throw new BrowserslistError(
        'Write any browsers query (for instance, `defaults`) ' +
          'before `' +
          node.query +
          '`'
      )
    }
    var type = QUERIES[node.type]
    var array = type.select.call(browserslist, context, node).map(function (j) {
      var parts = j.split(' ')
      if (parts[1] === '0') {
        return parts[0] + ' ' + byName(parts[0], context).versions[0]
      } else {
        return j
      }
    })

    if (node.compose === 'and') {
      if (node.not) {
        return result.filter(function (j) {
          return array.indexOf(j) === -1
        })
      } else {
        return result.filter(function (j) {
          return array.indexOf(j) !== -1
        })
      }
    } else {
      if (node.not) {
        var filter = {}
        array.forEach(function (j) {
          filter[j] = true
        })
        return result.filter(function (j) {
          return !filter[j]
        })
      }
      return result.concat(array)
    }
  }, [])
}

function prepareOpts(opts) {
  if (typeof opts === 'undefined') opts = {}

  if (typeof opts.path === 'undefined') {
    opts.path = path.resolve ? path.resolve('.') : '.'
  }

  return opts
}

function prepareQueries(queries, opts) {
  if (typeof queries === 'undefined' || queries === null) {
    var config = browserslist.loadConfig(opts)
    if (config) {
      queries = config
    } else {
      queries = browserslist.defaults
    }
  }

  return queries
}

function checkQueries(queries) {
  if (!(typeof queries === 'string' || Array.isArray(queries))) {
    throw new BrowserslistError(
      'Browser queries must be an array or string. Got ' + typeof queries + '.'
    )
  }
}

var cache = {}

function browserslist(queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)

  var context = {
    ignoreUnknownVersions: opts.ignoreUnknownVersions,
    dangerousExtend: opts.dangerousExtend,
    mobileToDesktop: opts.mobileToDesktop,
    path: opts.path,
    env: opts.env
  }

  env.oldDataWarning(browserslist.data)
  var stats = env.getStat(opts, browserslist.data)
  if (stats) {
    context.customUsage = {}
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }

  var cacheKey = JSON.stringify([queries, context])
  if (cache[cacheKey]) return cache[cacheKey]

  var result = uniq(resolve(queries, context)).sort(function (name1, name2) {
    name1 = name1.split(' ')
    name2 = name2.split(' ')
    if (name1[0] === name2[0]) {
      // assumptions on caniuse data
      // 1) version ranges never overlaps
      // 2) if version is not a range, it never contains `-`
      var version1 = name1[1].split('-')[0]
      var version2 = name2[1].split('-')[0]
      return compareSemver(version2.split('.'), version1.split('.'))
    } else {
      return compare(name1[0], name2[0])
    }
  })
  if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
    cache[cacheKey] = result
  }
  return result
}

browserslist.parse = function (queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)
  return parse(QUERIES, queries)
}

// Will be filled by Can I Use data below
browserslist.cache = {}
browserslist.data = {}
browserslist.usage = {
  global: {},
  custom: null
}

// Default browsers query
browserslist.defaults = ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']

// Browser names aliases
browserslist.aliases = {
  fx: 'firefox',
  ff: 'firefox',
  ios: 'ios_saf',
  explorer: 'ie',
  blackberry: 'bb',
  explorermobile: 'ie_mob',
  operamini: 'op_mini',
  operamobile: 'op_mob',
  chromeandroid: 'and_chr',
  firefoxandroid: 'and_ff',
  ucandroid: 'and_uc',
  qqandroid: 'and_qq'
}

// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
// Note op_mob is not included as its chromium versions are not in sync with Opera desktop
browserslist.desktopNames = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  android: 'chrome' // has extra processing logic
}

// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {}

browserslist.clearCaches = env.clearCaches
browserslist.parseConfig = env.parseConfig
browserslist.readConfig = env.readConfig
browserslist.findConfig = env.findConfig
browserslist.loadConfig = env.loadConfig

browserslist.coverage = function (browsers, stats) {
  var data
  if (typeof stats === 'undefined') {
    data = browserslist.usage.global
  } else if (stats === 'my stats') {
    var opts = {}
    opts.path = path.resolve ? path.resolve('.') : '.'
    var customStats = env.getStat(opts)
    if (!customStats) {
      throw new BrowserslistError('Custom usage statistics was not provided')
    }
    data = {}
    for (var browser in customStats) {
      fillUsage(data, browser, customStats[browser])
    }
  } else if (typeof stats === 'string') {
    if (stats.length > 2) {
      stats = stats.toLowerCase()
    } else {
      stats = stats.toUpperCase()
    }
    env.loadCountry(browserslist.usage, stats, browserslist.data)
    data = browserslist.usage[stats]
  } else {
    if ('dataByBrowser' in stats) {
      stats = stats.dataByBrowser
    }
    data = {}
    for (var name in stats) {
      for (var version in stats[name]) {
        data[name + ' ' + version] = stats[name][version]
      }
    }
  }

  return browsers.reduce(function (all, i) {
    var usage = data[i]
    if (usage === undefined) {
      usage = data[i.replace(/ \S+$/, ' 0')]
    }
    return all + (usage || 0)
  }, 0)
}

function nodeQuery(context, node) {
  var matched = browserslist.nodeVersions.filter(function (i) {
    return isVersionsMatch(i, node.version)
  })
  if (matched.length === 0) {
    if (context.ignoreUnknownVersions) {
      return []
    } else {
      throw new BrowserslistError(
        'Unknown version ' + node.version + ' of Node.js'
      )
    }
  }
  return ['node ' + matched[matched.length - 1]]
}

function sinceQuery(context, node) {
  var year = parseInt(node.year)
  var month = parseInt(node.month || '01') - 1
  var day = parseInt(node.day || '01')
  return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context)
}

function coverQuery(context, node) {
  var coverage = parseFloat(node.coverage)
  var usage = browserslist.usage.global
  if (node.place) {
    if (node.place.match(/^my\s+stats$/i)) {
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      usage = context.customUsage
    } else {
      var place
      if (node.place.length === 2) {
        place = node.place.toUpperCase()
      } else {
        place = node.place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      usage = browserslist.usage[place]
    }
  }
  var versions = Object.keys(usage).sort(function (a, b) {
    return usage[b] - usage[a]
  })
  var coveraged = 0
  var result = []
  var version
  for (var i = 0; i < versions.length; i++) {
    version = versions[i]
    if (usage[version] === 0) break
    coveraged += usage[version]
    result.push(version)
    if (coveraged >= coverage) break
  }
  return result
}

var QUERIES = {
  last_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = getMajorVersions(data.released, node.versions)
        list = list.map(nameMapper(data.name))
        list = filterJumps(list, data.name, node.versions, context)
        return selected.concat(list)
      }, [])
    }
  },
  last_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.released.slice(-node.versions)
        list = list.map(nameMapper(data.name))
        list = filterJumps(list, data.name, node.versions, context)
        return selected.concat(list)
      }, [])
    }
  },
  last_electron_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (context, node) {
      var validVersions = getMajorVersions(Object.keys(e2c), node.versions)
      return validVersions.map(function (i) {
        return 'chrome ' + e2c[i]
      })
    }
  },
  last_node_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function (context, node) {
      return getMajorVersions(browserslist.nodeVersions, node.versions).map(
        function (version) {
          return 'node ' + version
        }
      )
    }
  },
  last_browser_major_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var validVersions = getMajorVersions(data.released, node.versions)
      var list = validVersions.map(nameMapper(data.name))
      list = filterJumps(list, data.name, node.versions, context)
      return list
    }
  },
  last_electron_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(e2c)
        .slice(-node.versions)
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  last_node_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .slice(-node.versions)
        .map(function (version) {
          return 'node ' + version
        })
    }
  },
  last_browser_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var list = data.released.slice(-node.versions).map(nameMapper(data.name))
      list = filterJumps(list, data.name, node.versions, context)
      return list
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function (context) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        list = list.map(nameMapper(data.name))
        return selected.concat(list)
      }, [])
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return []
    }
  },
  unreleased_browser_versions: {
    matches: ['browser'],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      return data.versions
        .filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        .map(nameMapper(data.name))
    }
  },
  last_years: {
    matches: ['years'],
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function (context, node) {
      return filterByYear(Date.now() - YEAR * node.years, context)
    }
  },
  since_y: {
    matches: ['year'],
    regexp: /^since (\d+)$/i,
    select: sinceQuery
  },
  since_y_m: {
    matches: ['year', 'month'],
    regexp: /^since (\d+)-(\d+)$/i,
    select: sinceQuery
  },
  since_y_m_d: {
    matches: ['year', 'month', 'day'],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: sinceQuery
  },
  popularity: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var usage = browserslist.usage.global
      return Object.keys(usage).reduce(function (result, version) {
        if (node.sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_my_stats: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_config_stats: {
    matches: ['sign', 'popularity', 'config'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var stats = env.loadStat(context, node.config, browserslist.data)
      if (stats) {
        context.customUsage = {}
        for (var browser in stats) {
          fillUsage(context.customUsage, browser, stats[browser])
        }
      }
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_place: {
    matches: ['sign', 'popularity', 'place'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var place = node.place
      if (place.length === 2) {
        place = place.toUpperCase()
      } else {
        place = place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      var usage = browserslist.usage[place]
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  cover: {
    matches: ['coverage'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: coverQuery
  },
  cover_in: {
    matches: ['coverage', 'place'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: coverQuery
  },
  supports: {
    matches: ['supportType', 'feature'],
    regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
    select: function (context, node) {
      env.loadFeature(browserslist.cache, node.feature)
      var withPartial = node.supportType !== 'fully'
      var features = browserslist.cache[node.feature]
      var result = []
      for (var name in features) {
        var data = byName(name, context)
        // Only check desktop when latest released mobile has support
        var checkDesktop =
          context.mobileToDesktop &&
          name in browserslist.desktopNames &&
          isSupported(features[name][data.released.slice(-1)[0]], withPartial)
        data.versions.forEach(function (version) {
          var flags = features[name][version]
          if (flags === undefined && checkDesktop) {
            flags = features[browserslist.desktopNames[name]][version]
          }
          if (isSupported(flags, withPartial)) {
            result.push(name + ' ' + version)
          }
        })
      }
      return result
    }
  },
  electron_range: {
    matches: ['from', 'to'],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var fromToUse = normalizeElectron(node.from)
      var toToUse = normalizeElectron(node.to)
      var from = parseFloat(node.from)
      var to = parseFloat(node.to)
      if (!e2c[fromToUse]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron')
      }
      if (!e2c[toToUse]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron')
      }
      return Object.keys(e2c)
        .filter(function (i) {
          var parsed = parseFloat(i)
          return parsed >= from && parsed <= to
        })
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_range: {
    matches: ['from', 'to'],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(semverFilterLoose('>=', node.from))
        .filter(semverFilterLoose('<=', node.to))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_range: {
    matches: ['browser', 'from', 'to'],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var from = parseFloat(normalizeVersion(data, node.from) || node.from)
      var to = parseFloat(normalizeVersion(data, node.to) || node.to)
      function filter(v) {
        var parsed = parseFloat(v)
        return parsed >= from && parsed <= to
      }
      return data.released.filter(filter).map(nameMapper(data.name))
    }
  },
  electron_ray: {
    matches: ['sign', 'version'],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      return Object.keys(e2c)
        .filter(generateFilter(node.sign, versionToUse))
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_ray: {
    matches: ['sign', 'version'],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(generateSemverFilter(node.sign, node.version))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_ray: {
    matches: ['browser', 'sign', 'version'],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (context, node) {
      var version = node.version
      var data = checkName(node.browser, context)
      var alias = browserslist.versionAliases[data.name][version]
      if (alias) version = alias
      return data.released
        .filter(generateFilter(node.sign, version))
        .map(function (v) {
          return data.name + ' ' + v
        })
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox 115']
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all']
    }
  },
  electron_version: {
    matches: ['version'],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      var chrome = e2c[versionToUse]
      if (!chrome) {
        throw new BrowserslistError(
          'Unknown version ' + node.version + ' of electron'
        )
      }
      return ['chrome ' + chrome]
    }
  },
  node_major_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+)$/i,
    select: nodeQuery
  },
  node_minor_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: nodeQuery
  },
  node_patch_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: nodeQuery
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function (context) {
      return [env.currentNode(resolve, context)]
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (context) {
      var now = Date.now()
      var queries = Object.keys(jsEOL)
        .filter(function (key) {
          return (
            now < Date.parse(jsEOL[key].end) &&
            now > Date.parse(jsEOL[key].start) &&
            isEolReleased(key)
          )
        })
        .map(function (key) {
          return 'node ' + key.slice(1)
        })
      return resolve(queries, context)
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ['safari 5']
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ['safari 6']
    }
  },
  browser_version: {
    matches: ['browser', 'version'],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, node) {
      var version = node.version
      if (/^tp$/i.test(version)) version = 'TP'
      var data = checkName(node.browser, context)
      var alias = normalizeVersion(data, version)
      if (alias) {
        version = alias
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0'
        } else {
          alias = version.replace(/\.0$/, '')
        }
        alias = normalizeVersion(data, alias)
        if (alias) {
          version = alias
        } else if (context.ignoreUnknownVersions) {
          return []
        } else {
          throw new BrowserslistError(
            'Unknown version ' + version + ' of ' + node.browser
          )
        }
      }
      return [data.name + ' ' + version]
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    select: function (context) {
      return browserslist(undefined, context)
    }
  },
  extends: {
    matches: ['config'],
    regexp: /^extends (.+)$/i,
    select: function (context, node) {
      return resolve(env.loadQueries(context, node.config), context)
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function (context) {
      return resolve(browserslist.defaults, context)
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function (context) {
      var dead = [
        'Baidu >= 0',
        'ie <= 11',
        'ie_mob <= 11',
        'bb <= 10',
        'op_mob <= 12.1',
        'samsung 4'
      ]
      return resolve(dead, context)
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function (context, node) {
      if (byName(node.query, context)) {
        throw new BrowserslistError(
          'Specify versions in Browserslist query for browser ' + node.query
        )
      } else {
        throw unknownQuery(node.query)
      }
    }
  }
}

// Get and convert Can I Use data

;(function () {
  for (var name in agents) {
    var browser = agents[name]
    browserslist.data[name] = {
      name: name,
      versions: normalize(agents[name].versions),
      released: normalize(agents[name].versions.slice(0, -3)),
      releaseDate: agents[name].release_date
    }
    fillUsage(browserslist.usage.global, name, browser.usage_global)

    browserslist.versionAliases[name] = {}
    for (var i = 0; i < browser.versions.length; i++) {
      var full = browser.versions[i]
      if (!full) continue

      if (full.indexOf('-') !== -1) {
        var interval = full.split('-')
        for (var j = 0; j < interval.length; j++) {
          browserslist.versionAliases[name][interval[j]] = full
        }
      }
    }
  }

  browserslist.nodeVersions = jsReleases.map(function (release) {
    return release.version
  })
})()

module.exports = browserslist


/***/ }),

/***/ "./node_modules/browserslist/parse.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/parse.js ***!
  \********************************************/
/***/ ((module) => {

var AND_REGEXP = /^\s+and\s+(.*)/i
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i

function flatten(array) {
  if (!Array.isArray(array)) return [array]
  return array.reduce(function (a, b) {
    return a.concat(flatten(b))
  }, [])
}

function find(string, predicate) {
  for (var n = 1, max = string.length; n <= max; n++) {
    var parsed = string.substr(-n, n)
    if (predicate(parsed, n, max)) {
      return string.slice(0, -n)
    }
  }
  return ''
}

function matchQuery(all, query) {
  var node = { query: query }
  if (query.indexOf('not ') === 0) {
    node.not = true
    query = query.slice(4)
  }

  for (var name in all) {
    var type = all[name]
    var match = query.match(type.regexp)
    if (match) {
      node.type = name
      for (var i = 0; i < type.matches.length; i++) {
        node[type.matches[i]] = match[i + 1]
      }
      return node
    }
  }

  node.type = 'unknown'
  return node
}

function matchBlock(all, string, qs) {
  var node
  return find(string, function (parsed, n, max) {
    if (AND_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(AND_REGEXP)[1])
      node.compose = 'and'
      qs.unshift(node)
      return true
    } else if (OR_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(OR_REGEXP)[1])
      node.compose = 'or'
      qs.unshift(node)
      return true
    } else if (n === max) {
      node = matchQuery(all, parsed.trim())
      node.compose = 'or'
      qs.unshift(node)
      return true
    }
    return false
  })
}

module.exports = function parse(all, queries) {
  if (!Array.isArray(queries)) queries = [queries]
  return flatten(
    queries.map(function (block) {
      var qs = []
      do {
        block = matchBlock(all, block, qs)
      } while (block)
      return qs
    })
  )
}


/***/ }),

/***/ "./node_modules/caniuse-lite/data/agents.js":
/*!**************************************************!*\
  !*** ./node_modules/caniuse-lite/data/agents.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports={A:{A:{K:0,D:0,E:0.028588,F:0.0571761,A:0,B:0.500291,WC:0},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","WC","K","D","E","F","A","B","","",""],E:"IE",F:{WC:962323200,K:998870400,D:1161129600,E:1237420800,F:1300060800,A:1346716800,B:1381968000}},B:{A:{"0":0.007562,"1":0.011343,"2":0.015124,"3":0.011343,"4":0.007562,"5":0.015124,"6":0.011343,"7":0.022686,"8":0.068058,"9":0.196612,C:0,L:0,M:0,G:0,N:0,O:0.007562,P:0.034029,Q:0,H:0,R:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0.003781,a:0,b:0.011343,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0.007562,r:0.007562,s:0.068058,y:0.007562,z:0.007562,AB:3.96249,BB:0.313823,I:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","C","L","M","G","N","O","P","Q","H","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","I","","",""],E:"Edge",F:{"0":1680825600,"1":1683158400,"2":1685664000,"3":1689897600,"4":1692576000,"5":1694649600,"6":1697155200,"7":1698969600,"8":1701993600,"9":1706227200,C:1438128000,L:1447286400,M:1470096000,G:1491868800,N:1508198400,O:1525046400,P:1542067200,Q:1579046400,H:1581033600,R:1586736000,S:1590019200,T:1594857600,U:1598486400,V:1602201600,W:1605830400,X:1611360000,Y:1614816000,Z:1618358400,a:1622073600,b:1626912000,c:1630627200,d:1632441600,e:1634774400,f:1637539200,g:1641427200,h:1643932800,i:1646265600,j:1649635200,k:1651190400,l:1653955200,m:1655942400,n:1659657600,o:1661990400,p:1664755200,q:1666915200,r:1670198400,s:1673481600,y:1675900800,z:1678665600,AB:1708732800,BB:1711152000,I:1713398400},D:{C:"ms",L:"ms",M:"ms",G:"ms",N:"ms",O:"ms",P:"ms"}},C:{A:{"0":0.003781,"1":0.011343,"2":0,"3":0.385662,"4":0,"5":0.011343,"6":0.079401,"7":0.007562,"8":0.015124,"9":0.018905,XC:0,AC:0,J:0.003781,CB:0,K:0,D:0,E:0,F:0,A:0,B:0.015124,C:0,L:0,M:0,G:0,N:0,O:0,P:0,DB:0,t:0,u:0,v:0,w:0,x:0,EB:0,FB:0,GB:0,HB:0,IB:0,JB:0,KB:0,LB:0,MB:0,NB:0,OB:0,PB:0,QB:0,RB:0,SB:0,TB:0,UB:0,VB:0,WB:0.011343,XB:0.007562,YB:0.007562,ZB:0,aB:0,bB:0,cB:0,dB:0.003781,eB:0,fB:0.049153,gB:0.007562,hB:0.007562,iB:0,jB:0.018905,kB:0,lB:0,BC:0.003781,mB:0,CC:0,nB:0,oB:0,pB:0,qB:0,rB:0,sB:0,tB:0,uB:0,vB:0,wB:0,xB:0.007562,yB:0,zB:0,"0B":0,"1B":0,"2B":0,"3B":0.015124,Q:0,H:0,R:0,DC:0,S:0,T:0,U:0,V:0,W:0,X:0.007562,Y:0,Z:0,a:0.003781,b:0,c:0,d:0.003781,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0.022686,m:0.03781,n:0.007562,o:0.003781,p:0,q:0,r:0.003781,s:0.007562,y:0.003781,z:0,AB:0.060496,BB:1.08515,I:0.446158,"4B":0,EC:0,FC:0,YC:0,ZC:0,aC:0},B:"moz",C:["XC","AC","ZC","aC","J","CB","K","D","E","F","A","B","C","L","M","G","N","O","P","DB","t","u","v","w","x","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","lB","BC","mB","CC","nB","oB","pB","qB","rB","sB","tB","uB","vB","wB","xB","yB","zB","0B","1B","2B","3B","Q","H","R","DC","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","I","4B","EC","FC","YC"],E:"Firefox",F:{"0":1681171200,"1":1683590400,"2":1686009600,"3":1688428800,"4":1690848000,"5":1693267200,"6":1695686400,"7":1698105600,"8":1700524800,"9":1702944000,XC:1161648000,AC:1213660800,ZC:1246320000,aC:1264032000,J:1300752000,CB:1308614400,K:1313452800,D:1317081600,E:1317081600,F:1320710400,A:1324339200,B:1327968000,C:1331596800,L:1335225600,M:1338854400,G:1342483200,N:1346112000,O:1349740800,P:1353628800,DB:1357603200,t:1361232000,u:1364860800,v:1368489600,w:1372118400,x:1375747200,EB:1379376000,FB:1386633600,GB:1391472000,HB:1395100800,IB:1398729600,JB:1402358400,KB:1405987200,LB:1409616000,MB:1413244800,NB:1417392000,OB:1421107200,PB:1424736000,QB:1428278400,RB:1431475200,SB:1435881600,TB:1439251200,UB:1442880000,VB:1446508800,WB:1450137600,XB:1453852800,YB:1457395200,ZB:1461628800,aB:1465257600,bB:1470096000,cB:1474329600,dB:1479168000,eB:1485216000,fB:1488844800,gB:1492560000,hB:1497312000,iB:1502150400,jB:1506556800,kB:1510617600,lB:1516665600,BC:1520985600,mB:1525824000,CC:1529971200,nB:1536105600,oB:1540252800,pB:1544486400,qB:1548720000,rB:1552953600,sB:1558396800,tB:1562630400,uB:1567468800,vB:1571788800,wB:1575331200,xB:1578355200,yB:1581379200,zB:1583798400,"0B":1586304000,"1B":1588636800,"2B":1591056000,"3B":1593475200,Q:1595894400,H:1598313600,R:1600732800,DC:1603152000,S:1605571200,T:1607990400,U:1611619200,V:1614038400,W:1616457600,X:1618790400,Y:1622505600,Z:1626134400,a:1628553600,b:1630972800,c:1633392000,d:1635811200,e:1638835200,f:1641859200,g:1644364800,h:1646697600,i:1649116800,j:1651536000,k:1653955200,l:1656374400,m:1658793600,n:1661212800,o:1663632000,p:1666051200,q:1668470400,r:1670889600,s:1673913600,y:1676332800,z:1678752000,AB:1705968000,BB:1708387200,I:1710806400,"4B":1713225600,EC:null,FC:null,YC:null}},D:{A:{"0":0.041591,"1":0.083182,"2":0.094525,"3":0.03781,"4":0.219298,"5":0.124773,"6":0.105868,"7":0.181488,"8":0.446158,"9":1.68633,J:0,CB:0,K:0,D:0,E:0,F:0,A:0,B:0,C:0,L:0,M:0,G:0,N:0,O:0,P:0,DB:0,t:0,u:0,v:0,w:0,x:0,EB:0,FB:0,GB:0,HB:0,IB:0,JB:0,KB:0,LB:0,MB:0,NB:0.003781,OB:0.003781,PB:0,QB:0,RB:0.015124,SB:0,TB:0,UB:0,VB:0,WB:0,XB:0,YB:0,ZB:0,aB:0.007562,bB:0.022686,cB:0.026467,dB:0.011343,eB:0,fB:0,gB:0.007562,hB:0,iB:0.003781,jB:0.011343,kB:0,lB:0,BC:0,mB:0.007562,CC:0.003781,nB:0,oB:0.007562,pB:0,qB:0.003781,rB:0.022686,sB:0.003781,tB:0.011343,uB:0.03781,vB:0.056715,wB:0.011343,xB:0.011343,yB:0.011343,zB:0.015124,"0B":0.011343,"1B":0.011343,"2B":0.026467,"3B":0.022686,Q:0.132335,H:0.022686,R:0.030248,S:0.045372,T:0.011343,U:0.022686,V:0.105868,W:0.086963,X:0.022686,Y:0.015124,Z:0.018905,a:0.045372,b:0.022686,c:0.030248,d:0.03781,e:0.011343,f:0.011343,g:0.018905,h:0.07562,i:0.034029,j:0.090744,k:0.158802,l:0.090744,m:0.215517,n:0.166364,o:0.041591,p:0.041591,q:0.034029,r:0.052934,s:1.56912,y:0.049153,z:0.049153,AB:12.5832,BB:3.50877,I:0.018905,"4B":0.003781,EC:0,FC:0},B:"webkit",C:["","","","","","","J","CB","K","D","E","F","A","B","C","L","M","G","N","O","P","DB","t","u","v","w","x","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","lB","BC","mB","CC","nB","oB","pB","qB","rB","sB","tB","uB","vB","wB","xB","yB","zB","0B","1B","2B","3B","Q","H","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","I","4B","EC","FC"],E:"Chrome",F:{"0":1680566400,"1":1682985600,"2":1685404800,"3":1689724800,"4":1692057600,"5":1694476800,"6":1696896000,"7":1698710400,"8":1701993600,"9":1705968000,J:1264377600,CB:1274745600,K:1283385600,D:1287619200,E:1291248000,F:1296777600,A:1299542400,B:1303862400,C:1307404800,L:1312243200,M:1316131200,G:1316131200,N:1319500800,O:1323734400,P:1328659200,DB:1332892800,t:1337040000,u:1340668800,v:1343692800,w:1348531200,x:1352246400,EB:1357862400,FB:1361404800,GB:1364428800,HB:1369094400,IB:1374105600,JB:1376956800,KB:1384214400,LB:1389657600,MB:1392940800,NB:1397001600,OB:1400544000,PB:1405468800,QB:1409011200,RB:1412640000,SB:1416268800,TB:1421798400,UB:1425513600,VB:1429401600,WB:1432080000,XB:1437523200,YB:1441152000,ZB:1444780800,aB:1449014400,bB:1453248000,cB:1456963200,dB:1460592000,eB:1464134400,fB:1469059200,gB:1472601600,hB:1476230400,iB:1480550400,jB:1485302400,kB:1489017600,lB:1492560000,BC:1496707200,mB:1500940800,CC:1504569600,nB:1508198400,oB:1512518400,pB:1516752000,qB:1520294400,rB:1523923200,sB:1527552000,tB:1532390400,uB:1536019200,vB:1539648000,wB:1543968000,xB:1548720000,yB:1552348800,zB:1555977600,"0B":1559606400,"1B":1564444800,"2B":1568073600,"3B":1571702400,Q:1575936000,H:1580860800,R:1586304000,S:1589846400,T:1594684800,U:1598313600,V:1601942400,W:1605571200,X:1611014400,Y:1614556800,Z:1618272000,a:1621987200,b:1626739200,c:1630368000,d:1632268800,e:1634601600,f:1637020800,g:1641340800,h:1643673600,i:1646092800,j:1648512000,k:1650931200,l:1653350400,m:1655769600,n:1659398400,o:1661817600,p:1664236800,q:1666656000,r:1669680000,s:1673308800,y:1675728000,z:1678147200,AB:1708387200,BB:1710806400,I:1713225600,"4B":null,EC:null,FC:null}},E:{A:{J:0,CB:0,K:0,D:0,E:0.003781,F:0.003781,A:0,B:0,C:0,L:0.007562,M:0.03781,G:0.007562,bC:0,GC:0,cC:0.003781,dC:0,eC:0,fC:0.03781,HC:0,"5B":0.007562,"6B":0.015124,gC:0.068058,hC:0.102087,iC:0.030248,IC:0.011343,JC:0.026467,"7B":0.03781,jC:0.257108,"8B":0.030248,KC:0.052934,LC:0.049153,MC:0.11343,NC:0.03781,OC:0.071839,kC:0.381881,"9B":0.045372,PC:0.124773,QC:0.279794,RC:1.11539,SC:0.219298,TC:0,lC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bC","GC","J","CB","cC","K","dC","D","eC","E","F","fC","A","HC","B","5B","C","6B","L","gC","M","hC","G","iC","IC","JC","7B","jC","8B","KC","LC","MC","NC","OC","kC","9B","PC","QC","RC","SC","TC","lC",""],E:"Safari",F:{bC:1205798400,GC:1226534400,J:1244419200,CB:1275868800,cC:1311120000,K:1343174400,dC:1382400000,D:1382400000,eC:1410998400,E:1413417600,F:1443657600,fC:1458518400,A:1474329600,HC:1490572800,B:1505779200,"5B":1522281600,C:1537142400,"6B":1553472000,L:1568851200,gC:1585008000,M:1600214400,hC:1619395200,G:1632096000,iC:1635292800,IC:1639353600,JC:1647216000,"7B":1652745600,jC:1658275200,"8B":1662940800,KC:1666569600,LC:1670889600,MC:1674432000,NC:1679875200,OC:1684368000,kC:1690156800,"9B":1695686400,PC:1698192000,QC:1702252800,RC:1705881600,SC:1709596800,TC:null,lC:null}},F:{A:{F:0,B:0,C:0,G:0,N:0,O:0,P:0,DB:0,t:0,u:0,v:0,w:0,x:0,EB:0,FB:0,GB:0,HB:0.003781,IB:0,JB:0,KB:0,LB:0,MB:0,NB:0,OB:0,PB:0.003781,QB:0,RB:0,SB:0,TB:0,UB:0,VB:0,WB:0,XB:0,YB:0,ZB:0.015124,aB:0,bB:0,cB:0,dB:0,eB:0,fB:0,gB:0,hB:0,iB:0,jB:0,kB:0,lB:0,mB:0,nB:0,oB:0,pB:0,qB:0,rB:0,sB:0,tB:0,uB:0,vB:0,wB:0,xB:0,yB:0,zB:0,"0B":0,"1B":0,"2B":0,"3B":0,Q:0,H:0,R:0,DC:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0,a:0,b:0,c:0,d:0,e:0.045372,f:0,g:0,h:0,i:0,j:0,k:0,l:0.045372,m:0,n:0,o:0,p:0.018905,q:0.782667,r:0.15124,s:0,mC:0,nC:0,oC:0,pC:0,"5B":0,UC:0,qC:0,"6B":0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","F","mC","nC","oC","pC","B","5B","UC","qC","C","6B","G","N","O","P","DB","t","u","v","w","x","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","lB","mB","nB","oB","pB","qB","rB","sB","tB","uB","vB","wB","xB","yB","zB","0B","1B","2B","3B","Q","H","R","DC","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","","",""],E:"Opera",F:{F:1150761600,mC:1223424000,nC:1251763200,oC:1267488000,pC:1277942400,B:1292457600,"5B":1302566400,UC:1309219200,qC:1323129600,C:1323129600,"6B":1352073600,G:1372723200,N:1377561600,O:1381104000,P:1386288000,DB:1390867200,t:1393891200,u:1399334400,v:1401753600,w:1405987200,x:1409616000,EB:1413331200,FB:1417132800,GB:1422316800,HB:1425945600,IB:1430179200,JB:1433808000,KB:1438646400,LB:1442448000,MB:1445904000,NB:1449100800,OB:1454371200,PB:1457308800,QB:1462320000,RB:1465344000,SB:1470096000,TB:1474329600,UB:1477267200,VB:1481587200,WB:1486425600,XB:1490054400,YB:1494374400,ZB:1498003200,aB:1502236800,bB:1506470400,cB:1510099200,dB:1515024000,eB:1517961600,fB:1521676800,gB:1525910400,hB:1530144000,iB:1534982400,jB:1537833600,kB:1543363200,lB:1548201600,mB:1554768000,nB:1561593600,oB:1566259200,pB:1570406400,qB:1573689600,rB:1578441600,sB:1583971200,tB:1587513600,uB:1592956800,vB:1595894400,wB:1600128000,xB:1603238400,yB:1613520000,zB:1612224000,"0B":1616544000,"1B":1619568000,"2B":1623715200,"3B":1627948800,Q:1631577600,H:1633392000,R:1635984000,DC:1638403200,S:1642550400,T:1644969600,U:1647993600,V:1650412800,W:1652745600,X:1654646400,Y:1657152000,Z:1660780800,a:1663113600,b:1668816000,c:1668643200,d:1671062400,e:1675209600,f:1677024000,g:1679529600,h:1681948800,i:1684195200,j:1687219200,k:1690329600,l:1692748800,m:1696204800,n:1699920000,o:1699920000,p:1702944000,q:1707264000,r:1710115200,s:1711497600},D:{F:"o",B:"o",C:"o",mC:"o",nC:"o",oC:"o",pC:"o","5B":"o",UC:"o",qC:"o","6B":"o"}},G:{A:{E:0,GC:0,rC:0,VC:0.00300253,sC:0.00150127,tC:0.0090076,uC:0.0105089,vC:0.00300253,wC:0.00600507,xC:0.0375317,yC:0.00600507,zC:0.0630532,"0C":0.045038,"1C":0.0165139,"2C":0.0135114,"3C":0.259719,"4C":0.0045038,"5C":0.045038,"6C":0.0135114,"7C":0.0510431,"8C":0.1186,"9C":0.153129,AD:0.0660557,IC:0.0780659,JC:0.0915773,"7B":0.117099,BD:0.980327,"8B":0.2372,KC:0.493917,LC:0.238701,MC:0.423357,NC:0.090076,OC:0.190661,CD:1.44422,"9B":0.187658,PC:0.378319,QC:0.60501,RC:7.43127,SC:1.09142,TC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","GC","rC","VC","sC","tC","uC","E","vC","wC","xC","yC","zC","0C","1C","2C","3C","4C","5C","6C","7C","8C","9C","AD","IC","JC","7B","BD","8B","KC","LC","MC","NC","OC","CD","9B","PC","QC","RC","SC","TC","",""],E:"Safari on iOS",F:{GC:1270252800,rC:1283904000,VC:1299628800,sC:1331078400,tC:1359331200,uC:1394409600,E:1410912000,vC:1413763200,wC:1442361600,xC:1458518400,yC:1473724800,zC:1490572800,"0C":1505779200,"1C":1522281600,"2C":1537142400,"3C":1553472000,"4C":1568851200,"5C":1572220800,"6C":1580169600,"7C":1585008000,"8C":1600214400,"9C":1619395200,AD:1632096000,IC:1639353600,JC:1647216000,"7B":1652659200,BD:1658275200,"8B":1662940800,KC:1666569600,LC:1670889600,MC:1674432000,NC:1679875200,OC:1684368000,CD:1690156800,"9B":1694995200,PC:1698192000,QC:1702252800,RC:1705881600,SC:1709596800,TC:null}},H:{A:{DD:0.09},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","DD","","",""],E:"Opera Mini",F:{DD:1426464000}},I:{A:{AC:0,J:0.0000628119,I:0.625607,ED:0,FD:0,GD:0,HD:0.0000628119,VC:0.000376871,ID:0,JD:0.00150749},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","ED","FD","GD","AC","J","HD","VC","ID","JD","I","","",""],E:"Android Browser",F:{ED:1256515200,FD:1274313600,GD:1291593600,AC:1298332800,J:1318896000,HD:1341792000,VC:1374624000,ID:1386547200,JD:1401667200,I:1713225600}},J:{A:{D:0,A:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","A","","",""],E:"Blackberry Browser",F:{D:1325376000,A:1359504000}},K:{A:{A:0,B:0,C:0,H:1.25952,"5B":0,UC:0,"6B":0},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","5B","UC","C","6B","H","","",""],E:"Opera Mobile",F:{A:1287100800,B:1300752000,"5B":1314835200,UC:1318291200,C:1330300800,"6B":1349740800,H:1709769600},D:{H:"webkit"}},L:{A:{I:42.2934},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","I","","",""],E:"Chrome for Android",F:{I:1713225600}},M:{A:{"4B":0.298512},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","4B","","",""],E:"Firefox for Android",F:{"4B":1713225600}},N:{A:{A:0,B:0},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","","",""],E:"IE Mobile",F:{A:1340150400,B:1353456000}},O:{A:{"7B":0.889317},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","7B","","",""],E:"UC Browser for Android",F:{"7B":1710115200},D:{"7B":"webkit"}},P:{A:{J:0.14052,t:0.0324276,u:0.0648553,v:0.0756645,w:1.08092,x:1.15659,KD:0.0108092,LD:0,MD:0.0432369,ND:0,OD:0,HC:0,PD:0.0108092,QD:0,RD:0.0108092,SD:0,TD:0,"8B":0.0108092,"9B":0.0324276,UD:0.0216184,VD:0.0324276},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","J","KD","LD","MD","ND","OD","HC","PD","QD","RD","SD","TD","8B","9B","UD","VD","t","u","v","w","x","","",""],E:"Samsung Internet",F:{J:1461024000,KD:1481846400,LD:1509408000,MD:1528329600,ND:1546128000,OD:1554163200,HC:1567900800,PD:1582588800,QD:1593475200,RD:1605657600,SD:1618531200,TD:1629072000,"8B":1640736000,"9B":1651708800,UD:1659657600,VD:1667260800,t:1677369600,u:1684454400,v:1689292800,w:1697587200,x:1711497600}},Q:{A:{WD:0.236322},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","WD","","",""],E:"QQ Browser",F:{WD:1710288000}},R:{A:{XD:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","XD","","",""],E:"Baidu Browser",F:{XD:1710201600}},S:{A:{YD:0.080847,ZD:0},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","YD","ZD","","",""],E:"KaiOS Browser",F:{YD:1527811200,ZD:1631664000}}};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browserVersions.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browserVersions.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports={"0":"112","1":"113","2":"114","3":"115","4":"116","5":"117","6":"118","7":"119","8":"120","9":"121",A:"10",B:"11",C:"12",D:"7",E:"8",F:"9",G:"15",H:"80",I:"124",J:"4",K:"6",L:"13",M:"14",N:"16",O:"17",P:"18",Q:"79",R:"81",S:"83",T:"84",U:"85",V:"86",W:"87",X:"88",Y:"89",Z:"90",a:"91",b:"92",c:"93",d:"94",e:"95",f:"96",g:"97",h:"98",i:"99",j:"100",k:"101",l:"102",m:"103",n:"104",o:"105",p:"106",q:"107",r:"108",s:"109",t:"20",u:"21",v:"22",w:"23",x:"24",y:"110",z:"111",AB:"122",BB:"123",CB:"5",DB:"19",EB:"25",FB:"26",GB:"27",HB:"28",IB:"29",JB:"30",KB:"31",LB:"32",MB:"33",NB:"34",OB:"35",PB:"36",QB:"37",RB:"38",SB:"39",TB:"40",UB:"41",VB:"42",WB:"43",XB:"44",YB:"45",ZB:"46",aB:"47",bB:"48",cB:"49",dB:"50",eB:"51",fB:"52",gB:"53",hB:"54",iB:"55",jB:"56",kB:"57",lB:"58",mB:"60",nB:"62",oB:"63",pB:"64",qB:"65",rB:"66",sB:"67",tB:"68",uB:"69",vB:"70",wB:"71",xB:"72",yB:"73",zB:"74","0B":"75","1B":"76","2B":"77","3B":"78","4B":"125","5B":"11.1","6B":"12.1","7B":"15.5","8B":"16.0","9B":"17.0",AC:"3",BC:"59",CC:"61",DC:"82",EC:"126",FC:"127",GC:"3.2",HC:"10.1",IC:"15.2-15.3",JC:"15.4",KC:"16.1",LC:"16.2",MC:"16.3",NC:"16.4",OC:"16.5",PC:"17.1",QC:"17.2",RC:"17.3",SC:"17.4",TC:"17.5",UC:"11.5",VC:"4.2-4.3",WC:"5.5",XC:"2",YC:"128",ZC:"3.5",aC:"3.6",bC:"3.1",cC:"5.1",dC:"6.1",eC:"7.1",fC:"9.1",gC:"13.1",hC:"14.1",iC:"15.1",jC:"15.6",kC:"16.6",lC:"TP",mC:"9.5-9.6",nC:"10.0-10.1",oC:"10.5",pC:"10.6",qC:"11.6",rC:"4.0-4.1",sC:"5.0-5.1",tC:"6.0-6.1",uC:"7.0-7.1",vC:"8.1-8.4",wC:"9.0-9.2",xC:"9.3",yC:"10.0-10.2",zC:"10.3","0C":"11.0-11.2","1C":"11.3-11.4","2C":"12.0-12.1","3C":"12.2-12.5","4C":"13.0-13.1","5C":"13.2","6C":"13.3","7C":"13.4-13.7","8C":"14.0-14.4","9C":"14.5-14.8",AD:"15.0-15.1",BD:"15.6-15.8",CD:"16.6-16.7",DD:"all",ED:"2.1",FD:"2.2",GD:"2.3",HD:"4.1",ID:"4.4",JD:"4.4.3-4.4.4",KD:"5.0-5.4",LD:"6.2-6.4",MD:"7.2-7.4",ND:"8.2",OD:"9.2",PD:"11.1-11.2",QD:"12.0",RD:"13.0",SD:"14.0",TD:"15.0",UD:"18.0",VD:"19.0",WD:"14.9",XD:"13.52",YD:"2.5",ZD:"3.0-3.1"};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browsers.js":
/*!****************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browsers.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports={A:"ie",B:"edge",C:"firefox",D:"chrome",E:"safari",F:"opera",G:"ios_saf",H:"op_mini",I:"android",J:"bb",K:"op_mob",L:"and_chr",M:"and_ff",N:"ie_mob",O:"and_uc",P:"samsung",Q:"and_qq",R:"baidu",S:"kaios"};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/background-clip-text.js":
/*!*************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/background-clip-text.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"G N O P","33":"C L M","132":"8 9 AB BB I","164":"0 1 2 3 4 5 6 7 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z"},C:{"1":"0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB ZC aC"},D:{"132":"8 9 AB BB I 4B EC FC","164":"0 1 2 3 4 5 6 7 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z"},E:{"16":"bC GC","132":"7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","388":"M G hC iC IC JC","420":"J CB K D E F A B C L cC dC eC fC HC 5B 6B gC"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","132":"p q r s","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o"},G:{"16":"GC rC VC sC","132":"7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","388":"8C 9C AD IC JC","420":"E tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C"},H:{"2":"DD"},I:{"16":"AC ED FD GD","132":"I","164":"J HD VC ID JD"},J:{"164":"D A"},K:{"16":"A B C 5B UC 6B","132":"H"},L:{"132":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"164":"7B"},P:{"164":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"164":"WD"},R:{"164":"XD"},S:{"1":"YD ZD"}},B:7,C:"Background-clip: text",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/background-img-opts.js":
/*!************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/background-img-opts.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"F A B","2":"K D E WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC","36":"aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","516":"J CB K D E F A B C L M"},E:{"1":"D E F A B C L M G eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","772":"J CB K bC GC cC dC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC 5B UC qC 6B","2":"F mC","36":"nC"},G:{"1":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","4":"GC rC VC tC","516":"sC"},H:{"132":"DD"},I:{"1":"I ID JD","36":"ED","516":"AC J HD VC","548":"FD GD"},J:{"1":"D A"},K:{"1":"A B C H 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS3 Background-image options",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/border-image.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/border-image.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"B","2":"K D E F A WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","129":"C L"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","260":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB","804":"J CB K D E F A B C L M ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","260":"eB fB gB hB iB","388":"JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB","1412":"G N O P DB t u v w x EB FB GB HB IB","1956":"J CB K D E F A B C L M"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","129":"A B C L M G fC HC 5B 6B gC hC iC IC","1412":"K D E F dC eC","1956":"J CB bC GC cC"},F:{"1":"WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F mC nC","260":"RB SB TB UB VB","388":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB","1796":"oC pC","1828":"B C 5B UC qC 6B"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","129":"xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC","1412":"E tC uC vC wC","1956":"GC rC VC sC"},H:{"1828":"DD"},I:{"1":"I","388":"ID JD","1956":"AC J ED FD GD HD VC"},J:{"1412":"A","1924":"D"},K:{"1":"H","2":"A","1828":"B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"B","2":"A"},O:{"1":"7B"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","260":"KD LD","388":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","260":"YD"}},B:4,C:"CSS3 Border images",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/border-radius.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/border-radius.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"F A B","2":"K D E WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","257":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB","289":"AC ZC aC","292":"XC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J"},E:{"1":"CB D E F A B C L M G eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"J bC GC","129":"K cC dC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC 5B UC qC 6B","2":"F mC nC"},G:{"1":"E rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"GC"},H:{"2":"DD"},I:{"1":"AC J I FD GD HD VC ID JD","33":"ED"},J:{"1":"D A"},K:{"1":"B C H 5B UC 6B","2":"A"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","257":"YD"}},B:4,C:"CSS3 Border-radius (rounded corners)",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/calc.js":
/*!*********************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/calc.js ***!
  \*********************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E WC","260":"F","516":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC aC","33":"J CB K D E F A B C L M G"},D:{"1":"0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P","33":"DB t u v w x EB"},E:{"1":"D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC cC","33":"K"},F:{"1":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B"},G:{"1":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"tC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","132":"ID JD"},J:{"1":"A","2":"D"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"calc() as CSS unit value",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-animation.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-animation.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"A B","2":"K D E F WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J ZC aC","33":"CB K D E F A B C L M G"},D:{"1":"0 1 2 3 4 5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"bC GC","33":"K D E cC dC eC","292":"J CB"},F:{"1":"JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F B mC nC oC pC 5B UC qC","33":"C G N O P DB t u v w x EB FB GB HB IB"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E tC uC vC","164":"GC rC VC sC"},H:{"2":"DD"},I:{"1":"I","33":"J HD VC ID JD","164":"AC ED FD GD"},J:{"33":"D A"},K:{"1":"H 6B","2":"A B C 5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:5,C:"CSS Animation",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-any-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-any-link.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","16":"XC","33":"AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","16":"J CB K D E F A B C L M","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","16":"J CB K bC GC cC","33":"D E dC eC"},F:{"1":"fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","16":"GC rC VC sC","33":"E tC uC vC"},H:{"2":"DD"},I:{"1":"I","16":"AC J ED FD GD HD VC","33":"ID JD"},J:{"16":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x OD HC PD QD RD SD TD 8B 9B UD VD","16":"J","33":"KD LD MD ND"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:5,C:"CSS :any-link selector",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-appearance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-appearance.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","33":"S","164":"Q H R","388":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","164":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q","676":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"S","164":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","164":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC"},F:{"1":"yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"vB wB xB","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","164":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC"},H:{"2":"DD"},I:{"1":"I","164":"AC J ED FD GD HD VC ID JD"},J:{"164":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A","388":"B"},O:{"1":"7B"},P:{"1":"t u v w x SD TD 8B 9B UD VD","164":"J KD LD MD ND OD HC PD QD RD"},Q:{"164":"WD"},R:{"1":"XD"},S:{"1":"ZD","164":"YD"}},B:5,C:"CSS Appearance",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-autofill.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-autofill.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 y z AB BB I","2":"C L M G N O P","33":"Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},C:{"1":"0 1 2 3 4 5 6 7 8 9 V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U ZC aC"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"G iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"lC","33":"J CB K D E F A B C L M bC GC cC dC eC fC HC 5B 6B gC hC"},G:{"1":"AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C"},P:{"1":"u v w x","33":"J t KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},I:{"1":"I","2":"AC J ED FD GD HD VC","33":"ID JD"}},B:6,C:":autofill CSS pseudo-class",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-backdrop-filter.js":
/*!************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-backdrop-filter.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N","257":"O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB ZC aC","578":"vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l"},D:{"1":"0 1 2 3 4 5 6 7 8 9 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB","194":"aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B"},E:{"2":"J CB K D E bC GC cC dC eC","33":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"1":"pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB mC nC oC pC 5B UC qC 6B","194":"NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB"},G:{"2":"E GC rC VC sC tC uC vC","33":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x QD RD SD TD 8B 9B UD VD","2":"J","194":"KD LD MD ND OD HC PD"},Q:{"2":"WD"},R:{"1":"XD"},S:{"2":"YD ZD"}},B:7,C:"CSS Backdrop Filter",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-boxdecorationbreak.js":
/*!***************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-boxdecorationbreak.js ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"C L M G N O P","164":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB ZC aC"},D:{"2":"J CB K D E F A B C L M G N O P DB t u","164":"0 1 2 3 4 5 6 7 8 9 v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"2":"J CB K bC GC cC","164":"D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"2":"F mC nC oC pC","129":"B C 5B UC qC 6B","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"2":"GC rC VC sC tC","164":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"132":"DD"},I:{"2":"AC J ED FD GD HD VC","164":"I ID JD"},J:{"2":"D","164":"A"},K:{"2":"A","129":"B C 5B UC 6B","164":"H"},L:{"164":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"164":"7B"},P:{"164":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"164":"WD"},R:{"164":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS box-decoration-break",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-boxshadow.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-boxshadow.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"F A B","2":"K D E WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","33":"ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F"},E:{"1":"K D E F A B C L M G cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"CB","164":"J bC GC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC 5B UC qC 6B","2":"F mC nC"},G:{"1":"E sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"rC VC","164":"GC"},H:{"2":"DD"},I:{"1":"J I HD VC ID JD","164":"AC ED FD GD"},J:{"1":"A","33":"D"},K:{"1":"B C H 5B UC 6B","2":"A"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS3 Box-shadow",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-clip-path.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-clip-path.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"C L M G N O","260":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","3138":"P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","132":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB ZC aC","644":"aB bB cB dB eB fB gB"},D:{"2":"J CB K D E F A B C L M G N O P DB t u v w","260":"0 1 2 3 4 5 6 7 8 9 iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","292":"x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB"},E:{"2":"J CB K bC GC cC dC","260":"M G gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","292":"D E F A B C L eC fC HC 5B 6B"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","260":"VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","292":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB"},G:{"2":"GC rC VC sC tC","260":"4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","292":"E uC vC wC xC yC zC 0C 1C 2C 3C"},H:{"2":"DD"},I:{"2":"AC J ED FD GD HD VC","260":"I","292":"ID JD"},J:{"2":"D A"},K:{"2":"A B C 5B UC 6B","260":"H"},L:{"260":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"260":"7B"},P:{"260":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","292":"J KD"},Q:{"260":"WD"},R:{"260":"XD"},S:{"1":"ZD","644":"YD"}},B:4,C:"CSS clip-path property (for HTML)",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-crisp-edges.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-crisp-edges.js ***!
  \********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K WC","2340":"D E F A B"},B:{"2":"C L M G N O P","1025":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC","513":"qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b","545":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB aC"},D:{"2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB","1025":"0 1 2 3 4 5 6 7 8 9 UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"A B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC cC","164":"K","4644":"D E F dC eC fC"},F:{"2":"F B G N O P DB t u v w x EB FB GB mC nC oC pC 5B UC","545":"C qC 6B","1025":"HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC","4260":"sC tC","4644":"E uC vC wC xC"},H:{"2":"DD"},I:{"2":"AC J ED FD GD HD VC ID JD","1025":"I"},J:{"2":"D","4260":"A"},K:{"2":"A B 5B UC","545":"C 6B","1025":"H"},L:{"1025":"I"},M:{"1":"4B"},N:{"2340":"A B"},O:{"1025":"7B"},P:{"1025":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1025":"WD"},R:{"1025":"XD"},S:{"1":"ZD","4097":"YD"}},B:4,C:"Crisp edges/pixelated images",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-cross-fade.js":
/*!*******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-cross-fade.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"C L M G N O P","33":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"2":"J CB K D E F A B C L M G N","33":"0 1 2 3 4 5 6 7 8 9 O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"A B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC","33":"K D E F cC dC eC fC"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC","33":"E sC tC uC vC wC xC"},H:{"2":"DD"},I:{"2":"AC J ED FD GD HD VC","33":"I ID JD"},J:{"2":"D A"},K:{"2":"A B C 5B UC 6B","33":"H"},L:{"33":"I"},M:{"2":"4B"},N:{"2":"A B"},O:{"33":"7B"},P:{"33":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"33":"WD"},R:{"33":"XD"},S:{"2":"YD ZD"}},B:4,C:"CSS Cross-Fade Function",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-deviceadaptation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-deviceadaptation.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","164":"A B"},B:{"66":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","164":"C L M G N O P"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB","66":"0 1 2 3 4 5 6 7 8 9 IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"2":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB mC nC oC pC 5B UC qC 6B","66":"TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"292":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A H","292":"B C 5B UC 6B"},L:{"2":"I"},M:{"2":"4B"},N:{"164":"A B"},O:{"2":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"66":"WD"},R:{"2":"XD"},S:{"2":"YD ZD"}},B:5,C:"CSS Device Adaptation",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-element-function.js":
/*!*************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-element-function.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"33":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","164":"XC AC ZC aC"},D:{"2":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"2":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A B C H 5B UC 6B"},L:{"2":"I"},M:{"33":"4B"},N:{"2":"A B"},O:{"2":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"2":"WD"},R:{"2":"XD"},S:{"33":"YD ZD"}},B:5,C:"CSS element() function",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-featurequeries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-featurequeries.js ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E bC GC cC dC eC"},F:{"1":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F B C mC nC oC pC 5B UC qC"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC"},H:{"1":"DD"},I:{"1":"I ID JD","2":"AC J ED FD GD HD VC"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS Feature Queries",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-file-selector-button.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-file-selector-button.js ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","33":"C L M G N O P Q H R S T U V W X"},C:{"1":"0 1 2 3 4 5 6 7 8 9 DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R ZC aC"},M:{"1":"4B"},A:{"2":"K D E F WC","33":"A B"},F:{"1":"0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"G hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"lC","33":"J CB K D E F A B C L M bC GC cC dC eC fC HC 5B 6B gC"},G:{"1":"9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C"},P:{"1":"t u v w x TD 8B 9B UD VD","33":"J KD LD MD ND OD HC PD QD RD SD"},I:{"1":"I","2":"AC J ED FD GD HD VC","33":"ID JD"}},B:6,C:"::file-selector-button CSS pseudo-element",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-filter-function.js":
/*!************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-filter-function.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"2":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E bC GC cC dC eC","33":"F"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC","33":"wC xC"},H:{"2":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A B C H 5B UC 6B"},L:{"2":"I"},M:{"2":"4B"},N:{"2":"A B"},O:{"2":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"2":"WD"},R:{"2":"XD"},S:{"2":"YD ZD"}},B:5,C:"CSS filter() function",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-filters.js":
/*!****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-filters.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","1028":"L M G N O P","1346":"C"},C:{"1":"0 1 2 3 4 5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC","196":"NB","516":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O","33":"P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB"},E:{"1":"A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC cC","33":"K D E F dC eC"},F:{"1":"TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB"},G:{"1":"xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"E tC uC vC wC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","33":"ID JD"},J:{"2":"D","33":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","33":"J KD LD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:5,C:"CSS Filter Effects",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-gradients.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-gradients.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"A B","2":"K D E F WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC","260":"N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB","292":"J CB K D E F A B C L M G aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"A B C L M G N O P DB t u v w x EB","548":"J CB K D E F"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"bC GC","260":"D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC","292":"K cC","804":"J CB"},F:{"1":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F B mC nC oC pC","33":"C qC","164":"5B UC"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","260":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC","292":"sC tC","804":"GC rC VC"},H:{"2":"DD"},I:{"1":"I ID JD","33":"J HD VC","548":"AC ED FD GD"},J:{"1":"A","548":"D"},K:{"1":"H 6B","2":"A B","33":"C","164":"5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS Gradients",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-grid.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E WC","8":"F","292":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","292":"C L M G"},C:{"1":"0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P ZC aC","8":"DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB","584":"TB UB VB WB XB YB ZB aB bB cB dB eB","1025":"fB gB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x","8":"EB FB GB HB","200":"IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB","1025":"kB"},E:{"1":"B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC cC","8":"K D E F A dC eC fC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB mC nC oC pC 5B UC qC 6B","200":"HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB"},G:{"1":"zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","8":"E tC uC vC wC xC yC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD","8":"VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"292":"A B"},O:{"1":"7B"},P:{"1":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"KD","8":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS Grid Layout (level 1)",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-hyphens.js":
/*!****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-hyphens.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","33":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 o p q r s y z AB BB I","33":"C L M G N O P","132":"Q H R S T U V W","260":"X Y Z a b c d e f g h i j k l m n"},C:{"1":"0 1 2 3 4 5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC","33":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB","132":"iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W"},E:{"1":"9B PC QC RC SC TC lC","2":"J CB bC GC","33":"K D E F A B C L M G cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC"},F:{"1":"a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB mC nC oC pC 5B UC qC 6B","132":"VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z"},G:{"1":"9B PC QC RC SC TC","2":"GC rC","33":"E VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J","132":"KD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS Hyphenation",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-image-set.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-image-set.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"2 3 4 5 6 7 8 9 AB BB I","2":"C L M G N O P","164":"0 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z","2049":"1"},C:{"1":"1 2 3 4 5 6 7 8 9 AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U ZC aC","66":"V W","2305":"0 Y Z a b c d e f g h i j k l m n o p q r s y z","2820":"X"},D:{"1":"2 3 4 5 6 7 8 9 AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t","164":"0 u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z","2049":"1"},E:{"1":"9B PC QC RC SC TC lC","2":"J CB bC GC cC","132":"A B C L HC 5B 6B gC","164":"K D E F dC eC fC","1540":"M G hC iC IC JC 7B jC 8B KC LC MC NC OC kC"},F:{"1":"j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h","2049":"i"},G:{"1":"9B PC QC RC SC TC","2":"GC rC VC sC","132":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C","164":"E tC uC vC wC xC","1540":"8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","164":"ID JD"},J:{"2":"D","164":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"164":"7B"},P:{"1":"w x","164":"J t u v KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"164":"WD"},R:{"164":"XD"},S:{"2":"YD ZD"}},B:5,C:"CSS image-set",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-logical-props.js":
/*!**********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-logical-props.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P","1028":"W X","1540":"Q H R S T U V"},C:{"1":"0 1 2 3 4 5 6 7 8 9 rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC","164":"AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB ZC aC","1540":"UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","292":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB","1028":"W X","1540":"uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V"},E:{"1":"G iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","292":"J CB K D E F A B C bC GC cC dC eC fC HC 5B","1540":"L M 6B gC","3076":"hC"},F:{"1":"1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","292":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB","1028":"zB 0B","1540":"jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB"},G:{"1":"AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","292":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C","1540":"3C 4C 5C 6C 7C 8C","3076":"9C"},H:{"2":"DD"},I:{"1":"I","292":"AC J ED FD GD HD VC ID JD"},J:{"292":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x TD 8B 9B UD VD","292":"J KD LD MD ND OD","1540":"HC PD QD RD SD"},Q:{"1540":"WD"},R:{"1":"XD"},S:{"1":"ZD","1540":"YD"}},B:5,C:"CSS Logical Properties",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-masks.js":
/*!**************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-masks.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"8 9 AB BB I","2":"C L M G N","164":"0 1 2 3 4 5 6 7 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z","3138":"O","12292":"P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","260":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB ZC aC"},D:{"1":"8 9 AB BB I 4B EC FC","164":"0 1 2 3 4 5 6 7 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"bC GC","164":"J CB K D E F A B C L M G cC dC eC fC HC 5B 6B gC hC iC IC"},F:{"1":"p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","164":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC"},H:{"2":"DD"},I:{"1":"I","164":"ID JD","676":"AC J ED FD GD HD VC"},J:{"164":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"164":"7B"},P:{"164":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"164":"WD"},R:{"164":"XD"},S:{"1":"ZD","260":"YD"}},B:4,C:"CSS Masks",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-media-resolution.js":
/*!*************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-media-resolution.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E WC","132":"F A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","1028":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","260":"J CB K D E F A B C L M G ZC aC","1028":"N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","548":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB","1028":"IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB"},E:{"1":"8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"bC GC","548":"J CB K D E F A B C L M G cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC"},F:{"1":"iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F","548":"B C mC nC oC pC 5B UC qC","1028":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB"},G:{"1":"8B KC LC MC NC OC CD 9B PC QC RC SC TC","16":"GC","548":"E rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD"},H:{"132":"DD"},I:{"1":"I","16":"ED FD","548":"AC J GD HD VC","1028":"ID JD"},J:{"548":"D A"},K:{"1":"H 6B","548":"A B C 5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"132":"A B"},O:{"1":"7B"},P:{"1":"t u v w x HC PD QD RD SD TD 8B 9B UD VD","1028":"J KD LD MD ND OD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"Media Queries: resolution feature",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-overscroll-behavior.js":
/*!****************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-overscroll-behavior.js ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","132":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","132":"C L M G N O","516":"P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB","260":"oB pB"},E:{"1":"8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E F A B C L M bC GC cC dC eC fC HC 5B 6B gC","1090":"G hC iC IC JC 7B jC"},F:{"1":"fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB mC nC oC pC 5B UC qC 6B","260":"dB eB"},G:{"1":"8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C","1090":"9C AD IC JC 7B BD"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"132":"A B"},O:{"1":"7B"},P:{"1":"t u v w x ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD MD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","2":"YD"}},B:5,C:"CSS overscroll-behavior",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-placeholder-shown.js":
/*!**************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-placeholder-shown.js ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","292":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC aC","164":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E bC GC cC dC eC"},F:{"1":"NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB mC nC oC pC 5B UC qC 6B"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","164":"YD"}},B:5,C:":placeholder-shown CSS pseudo-class",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-placeholder.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-placeholder.js ***!
  \********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","36":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB","130":"XC AC J CB K D E F A B C L M G N O P ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","36":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB"},E:{"1":"B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J bC GC","36":"CB K D E F A cC dC eC fC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","36":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB"},G:{"1":"zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC","36":"E VC sC tC uC vC wC xC yC"},H:{"2":"DD"},I:{"1":"I","36":"AC J ED FD GD HD VC ID JD"},J:{"36":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"36":"A B"},O:{"1":"7B"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","36":"J KD LD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:5,C:"::placeholder CSS pseudo-element",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-print-color-adjust.js":
/*!***************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-print-color-adjust.js ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"2":"J CB K D E F A B C L M G N","33":"0 1 2 3 4 5 6 7 8 9 O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},L:{"33":"I"},B:{"2":"C L M G N O P","33":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB ZC aC","33":"bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},K:{"2":"A B C 5B UC 6B","33":"H"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB bC GC cC lC","33":"K D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"E tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC"},P:{"33":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},I:{"2":"AC J ED FD GD HD VC","33":"I ID JD"}},B:6,C:"print-color-adjust property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-read-only-write.js":
/*!************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-read-only-write.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C"},C:{"1":"0 1 2 3 4 5 6 7 8 9 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","16":"XC","33":"AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","16":"J CB K D E F A B C L M","132":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","16":"bC GC","132":"J CB K D E cC dC eC"},F:{"1":"w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","16":"F B mC nC oC pC 5B","132":"C G N O P DB t u v UC qC 6B"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","16":"GC rC","132":"E VC sC tC uC vC"},H:{"2":"DD"},I:{"1":"I","16":"ED FD","132":"AC J GD HD VC ID JD"},J:{"1":"A","132":"D"},K:{"1":"H","2":"A B 5B","132":"C UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:1,C:"CSS :read-only and :read-write selectors",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-regions.js":
/*!****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-regions.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","420":"A B"},B:{"2":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","420":"C L M G N O P"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"2":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","36":"G N O P","66":"DB t u v w x EB FB GB HB IB JB KB LB MB NB"},E:{"2":"J CB K C L M G bC GC cC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"D E F A B dC eC fC HC"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B"},G:{"2":"GC rC VC sC tC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E uC vC wC xC yC zC 0C"},H:{"2":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A B C H 5B UC 6B"},L:{"2":"I"},M:{"2":"4B"},N:{"420":"A B"},O:{"2":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"2":"WD"},R:{"2":"XD"},S:{"2":"YD ZD"}},B:5,C:"CSS Regions",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-selection.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-selection.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"F A B","2":"K D E WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B","2":"F"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I ID JD","2":"AC J ED FD GD HD VC"},J:{"1":"A","2":"D"},K:{"1":"C H UC 6B","16":"A B 5B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:5,C:"::selection CSS pseudo-element",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-shapes.js":
/*!***************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-shapes.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB ZC aC","322":"eB fB gB hB iB jB kB lB BC mB CC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB","194":"NB OB PB"},E:{"1":"B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D bC GC cC dC","33":"E F A eC fC"},F:{"1":"x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w mC nC oC pC 5B UC qC 6B"},G:{"1":"zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","33":"E vC wC xC yC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","2":"YD"}},B:4,C:"CSS Shapes Level 1",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-snappoints.js":
/*!*******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-snappoints.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","6308":"A","6436":"B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","6436":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB ZC aC","2052":"SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB","8258":"rB sB tB"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E bC GC cC dC eC","3108":"F A fC HC"},F:{"1":"pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB mC nC oC pC 5B UC qC 6B","8258":"hB iB jB kB lB mB nB oB"},G:{"1":"0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC","3108":"wC xC yC zC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD MD ND OD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","2052":"YD"}},B:4,C:"CSS Scroll Snap",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-sticky.js":
/*!***************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-sticky.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G","1028":"Q H R S T U V W X Y Z","4100":"N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB ZC aC","194":"FB GB HB IB JB KB","516":"LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB","322":"w x EB FB GB HB IB JB KB LB MB NB OB PB fB gB hB iB","1028":"jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z"},E:{"1":"L M G gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC","33":"E F A B C eC fC HC 5B 6B","2084":"D dC"},F:{"1":"3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB mC nC oC pC 5B UC qC 6B","322":"SB TB UB","1028":"VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B"},G:{"1":"4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"E vC wC xC yC zC 0C 1C 2C 3C","2084":"tC uC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD"},Q:{"1028":"WD"},R:{"1":"XD"},S:{"1":"ZD","516":"YD"}},B:5,C:"CSS position:sticky",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-text-align-last.js":
/*!************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-text-align-last.js ***!
  \************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"132":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","4":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B ZC aC","33":"C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB","322":"OB PB QB RB SB TB UB VB WB XB YB ZB"},E:{"1":"8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC"},F:{"1":"NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u mC nC oC pC 5B UC qC 6B","578":"v w x EB FB GB HB IB JB KB LB MB"},G:{"1":"8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"132":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:4,C:"CSS3 text-align-last",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-text-orientation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-text-orientation.js ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB ZC aC","194":"RB SB TB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"},E:{"1":"M G hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D E F bC GC cC dC eC fC","16":"A","33":"B C L HC 5B 6B gC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB mC nC oC pC 5B UC qC 6B"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC wC xC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:2,C:"CSS text-orientation",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-text-spacing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-text-spacing.js ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D WC","161":"E F A B"},B:{"2":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","161":"C L M G N O P"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"2":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"2":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A B C H 5B UC 6B"},L:{"2":"I"},M:{"2":"4B"},N:{"16":"A B"},O:{"2":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"2":"WD"},R:{"2":"XD"},S:{"2":"YD ZD"}},B:5,C:"CSS Text 4 text-spacing",D:false};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-transitions.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-transitions.js ***!
  \********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"A B","2":"K D E F WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC aC","33":"CB K D E F A B C L M G","164":"J"},D:{"1":"0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB"},E:{"1":"D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"K cC","164":"J CB bC GC"},F:{"1":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F mC nC","33":"C","164":"B oC pC 5B UC qC"},G:{"1":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"tC","164":"GC rC VC sC"},H:{"2":"DD"},I:{"1":"I ID JD","33":"AC J ED FD GD HD VC"},J:{"1":"A","33":"D"},K:{"1":"H 6B","33":"C","164":"A B 5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:5,C:"CSS3 Transitions",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-width-stretch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-width-stretch.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"2":"J CB K D E F A B C L M G N O P DB t u","33":"0 1 2 3 4 5 6 7 8 9 v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},L:{"33":"I"},B:{"2":"C L M G N O P","33":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"2":"XC","33":"0 1 2 3 4 5 6 7 8 9 AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},M:{"33":"4B"},A:{"2":"K D E F A B WC"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},K:{"2":"A B C 5B UC 6B","33":"H"},E:{"2":"J CB K bC GC cC dC lC","33":"D E F A B C L M G eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC"},G:{"2":"GC rC VC sC tC","33":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},P:{"2":"J","33":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},I:{"2":"AC J ED FD GD HD VC","33":"I ID JD"}},B:6,C:"width: stretch property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css-writing-mode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css-writing-mode.js ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"132":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB ZC aC","322":"PB QB RB SB TB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K","16":"D","33":"E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J bC GC","16":"CB","33":"K D E F A cC dC eC fC HC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB"},G:{"1":"0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","16":"GC rC VC","33":"E sC tC uC vC wC xC yC zC"},H:{"2":"DD"},I:{"1":"I","2":"ED FD GD","33":"AC J HD VC ID JD"},J:{"33":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"36":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","33":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:2,C:"CSS writing-mode property",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css3-boxsizing.js":
/*!*******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css3-boxsizing.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"E F A B","8":"K D WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F"},E:{"1":"K D E F A B C L M G cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"J CB bC GC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s mC nC oC pC 5B UC qC 6B","2":"F"},G:{"1":"E sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"GC rC VC"},H:{"1":"DD"},I:{"1":"J I HD VC ID JD","33":"AC ED FD GD"},J:{"1":"A","33":"D"},K:{"1":"A B C H 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:5,C:"CSS3 Box-sizing",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css3-cursors-grab.js":
/*!**********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css3-cursors-grab.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M"},C:{"1":"0 1 2 3 4 5 6 7 8 9 GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"J CB K D E F A bC GC cC dC eC fC HC"},F:{"1":"C iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s qC 6B","2":"F B mC nC oC pC 5B UC","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"33":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"2":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"2":"YD ZD"}},B:2,C:"CSS grab & grabbing cursors",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css3-cursors-newer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css3-cursors-newer.js ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"XC AC J CB K D E F A B C L M G N O P DB t u v w ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"J CB K D E bC GC cC dC eC"},F:{"1":"C x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s qC 6B","2":"F B mC nC oC pC 5B UC","33":"G N O P DB t u v w"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"33":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"2":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"2":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"2":"YD ZD"}},B:2,C:"CSS3 Cursors: zoom-in & zoom-out",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/css3-tabsize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/css3-tabsize.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC aC","33":"gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z","164":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t","132":"u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB"},E:{"1":"M G gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC","132":"D E F A B C L dC eC fC HC 5B 6B"},F:{"1":"IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F mC nC oC","132":"G N O P DB t u v w x EB FB GB HB","164":"B C pC 5B UC qC 6B"},G:{"1":"7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC","132":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C"},H:{"164":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","132":"ID JD"},J:{"132":"D A"},K:{"1":"H","2":"A","164":"B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"164":"YD ZD"}},B:4,C:"CSS3 tab-size",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/flexbox.js":
/*!************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/flexbox.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","1028":"B","1316":"A"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","164":"XC AC J CB K D E F A B C L M G N O P DB t u ZC aC","516":"v w x EB FB GB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"u v w x EB FB GB HB","164":"J CB K D E F A B C L M G N O P DB t"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"D E dC eC","164":"J CB K bC GC cC"},F:{"1":"O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F B C mC nC oC pC 5B UC qC","33":"G N"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E uC vC","164":"GC rC VC sC tC"},H:{"1":"DD"},I:{"1":"I ID JD","164":"AC J ED FD GD HD VC"},J:{"1":"A","164":"D"},K:{"1":"H 6B","2":"A B C 5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"B","292":"A"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS Flexible Box Layout Module",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/font-feature.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/font-feature.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"A B","2":"K D E F WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC ZC aC","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB","164":"J CB K D E F A B C L M"},D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G","33":"u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB","292":"N O P DB t"},E:{"1":"A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"D E F bC GC dC eC","4":"J CB K cC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB"},G:{"1":"xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E uC vC wC","4":"GC rC VC sC tC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","33":"ID JD"},J:{"2":"D","33":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","33":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:2,C:"CSS font-feature-settings",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/font-kerning.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/font-kerning.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w ZC aC","194":"x EB FB GB HB IB JB KB LB MB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB","33":"IB JB KB LB"},E:{"1":"A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC dC","33":"D E F eC"},F:{"1":"t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G mC nC oC pC 5B UC qC 6B","33":"N O P DB"},G:{"1":"2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","33":"E vC wC xC yC zC 0C 1C"},H:{"2":"DD"},I:{"1":"I JD","2":"AC J ED FD GD HD VC","33":"ID"},J:{"2":"D","33":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS3 font-kerning",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/fullscreen.js":
/*!***************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/fullscreen.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A WC","548":"B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","516":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F ZC aC","676":"A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB","1700":"aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M","676":"G N O P DB","804":"t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB"},E:{"1":"NC OC kC 9B PC QC RC SC TC lC","2":"J CB bC GC","548":"JC 7B jC 8B KC LC MC","676":"cC","804":"K D E F A B C L M G dC eC fC HC 5B 6B gC hC iC IC"},F:{"1":"pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F B C mC nC oC pC 5B UC qC","804":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB"},G:{"2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C","2052":"2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"2":"AC J I ED FD GD HD VC ID JD"},J:{"2":"D","292":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A","548":"B"},O:{"1":"7B"},P:{"1":"t u v w x HC PD QD RD SD TD 8B 9B UD VD","804":"J KD LD MD ND OD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:1,C:"Fullscreen API",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/intrinsic-width.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/intrinsic-width.js ***!
  \********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"C L M G N O P","1025":"0 1 2 3 4 5 6 7 8 9 d e f g h i j k l m n o p q r s y z AB BB I","1537":"Q H R S T U V W X Y Z a b c"},C:{"2":"XC","932":"AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB ZC aC","2308":"0 1 2 3 4 5 6 7 8 9 rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC"},D:{"2":"J CB K D E F A B C L M G N O P DB t u","545":"v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB","1025":"0 1 2 3 4 5 6 7 8 9 d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","1537":"ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c"},E:{"1":"8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC","516":"B C L M G 5B 6B gC hC iC IC JC 7B jC","548":"F A fC HC","676":"D E dC eC"},F:{"2":"F B C mC nC oC pC 5B UC qC 6B","513":"NB","545":"G N O P DB t u v w x EB FB GB HB IB JB KB LB","1025":"e f g h i j k l m n o p q r s","1537":"MB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d"},G:{"1":"8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC","516":"8C 9C AD IC JC 7B BD","548":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C","676":"E uC vC"},H:{"2":"DD"},I:{"2":"AC J ED FD GD HD VC","545":"ID JD","1025":"I"},J:{"2":"D","545":"A"},K:{"2":"A B C 5B UC 6B","1025":"H"},L:{"1025":"I"},M:{"2308":"4B"},N:{"2":"A B"},O:{"1537":"7B"},P:{"545":"J","1025":"t u v w x 9B UD VD","1537":"KD LD MD ND OD HC PD QD RD SD TD 8B"},Q:{"1537":"WD"},R:{"1537":"XD"},S:{"932":"YD","2308":"ZD"}},B:5,C:"Intrinsic & Extrinsic Sizing",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-css-backdrop-pseudo-element.js":
/*!************************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-css-backdrop-pseudo-element.js ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB","33":"LB MB NB OB PB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","33":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB ZC aC"},M:{"1":"4B"},A:{"2":"K D E F A WC","33":"B"},F:{"1":"x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P mC nC oC pC 5B UC qC 6B","33":"DB t u v w"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC lC"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},I:{"1":"I","2":"AC J ED FD GD HD VC","33":"ID JD"}},B:6,C:"CSS ::backdrop pseudo-element",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate-override.js ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N ZC aC","33":"O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB K bC GC cC dC lC","33":"D E F A eC fC HC"},G:{"1":"0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC","33":"E uC vC wC xC yC zC"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"isolate-override from unicode-bidi",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-isolate.js ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G","33":"N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F ZC aC","33":"A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB bC GC cC lC","33":"K D E F A dC eC fC HC"},G:{"1":"0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"E tC uC vC wC xC yC zC"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"isolate from unicode-bidi",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-css-unicode-bidi-plaintext.js ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F ZC aC","33":"A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"B C L M G 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB bC GC cC lC","33":"K D E F A dC eC fC HC"},G:{"1":"0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC","33":"E tC uC vC wC xC yC zC"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"plaintext from unicode-bidi",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-color.js":
/*!******************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-text-decoration-color.js ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC","33":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"L M G 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB K D bC GC cC dC eC lC","33":"E F A B C fC HC 5B"},G:{"1":"3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","33":"E vC wC xC yC zC 0C 1C 2C"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"text-decoration-color property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-line.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-text-decoration-line.js ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC","33":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"L M G 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB K D bC GC cC dC eC lC","33":"E F A B C fC HC 5B"},G:{"1":"3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","33":"E vC wC xC yC zC 0C 1C 2C"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"text-decoration-line property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-shorthand.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-text-decoration-shorthand.js ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"2":"J CB K D bC GC cC dC eC lC","33":"E F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC"},G:{"2":"GC rC VC sC tC uC","33":"E vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"text-decoration shorthand property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/mdn-text-decoration-style.js":
/*!******************************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/mdn-text-decoration-style.js ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports={A:{D:{"1":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB"},L:{"1":"I"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC","33":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},M:{"1":"4B"},A:{"2":"K D E F A B WC"},F:{"1":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB mC nC oC pC 5B UC qC 6B"},K:{"1":"H","2":"A B C 5B UC 6B"},E:{"1":"L M G 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC","2":"J CB K D bC GC cC dC eC lC","33":"E F A B C fC HC 5B"},G:{"1":"3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","33":"E vC wC xC yC zC 0C 1C 2C"},P:{"1":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J KD LD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"}},B:6,C:"text-decoration-style property",D:undefined};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/multicolumn.js":
/*!****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/multicolumn.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"A B","2":"K D E F WC"},B:{"1":"C L M G N O P","516":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"132":"fB gB hB iB jB kB lB BC mB CC nB oB pB","164":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB ZC aC","516":"qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a","1028":"0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC"},D:{"420":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB","516":"0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"A B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","132":"F fC","164":"D E eC","420":"J CB K bC GC cC dC"},F:{"1":"C 5B UC qC 6B","2":"F B mC nC oC pC","420":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB","516":"QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","132":"wC xC","164":"E uC vC","420":"GC rC VC sC tC"},H:{"1":"DD"},I:{"420":"AC J ED FD GD HD VC ID JD","516":"I"},J:{"420":"D A"},K:{"1":"C 5B UC 6B","2":"A B","516":"H"},L:{"516":"I"},M:{"1028":"4B"},N:{"1":"A B"},O:{"516":"7B"},P:{"420":"J","516":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"516":"WD"},R:{"516":"XD"},S:{"164":"YD ZD"}},B:4,C:"CSS3 Multiple column layout",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/object-fit.js":
/*!***************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/object-fit.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","2":"C L M G","260":"N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB"},E:{"1":"A B C L M G HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K D bC GC cC dC","132":"E F eC fC"},F:{"1":"DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F G N O P mC nC oC","33":"B C pC 5B UC qC 6B"},G:{"1":"yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC uC","132":"E vC wC xC"},H:{"33":"DD"},I:{"1":"I JD","2":"AC J ED FD GD HD VC ID"},J:{"2":"D A"},K:{"1":"H","2":"A","33":"B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS3 object-fit/object-position",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/pointer.js":
/*!************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/pointer.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"B","2":"K D E F WC","164":"A"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB ZC aC","8":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB","328":"UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u","8":"v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB","584":"fB gB hB"},E:{"1":"L M G gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC","8":"D E F A B C dC eC fC HC 5B","1096":"6B"},F:{"1":"VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","8":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB","584":"SB TB UB"},G:{"1":"5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","8":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C","6148":"4C"},H:{"2":"DD"},I:{"1":"I","8":"AC J ED FD GD HD VC ID JD"},J:{"8":"D A"},K:{"1":"H","2":"A","8":"B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"B","36":"A"},O:{"1":"7B"},P:{"1":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"KD","8":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","328":"YD"}},B:2,C:"Pointer events",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/text-decoration.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/text-decoration.js ***!
  \********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"2":"C L M G N O P","2052":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"2":"XC AC J CB ZC aC","1028":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","1060":"K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},D:{"2":"J CB K D E F A B C L M G N O P DB t u v w x EB","226":"FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB","2052":"0 1 2 3 4 5 6 7 8 9 kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"2":"J CB K D bC GC cC dC","772":"L M G 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","804":"E F A B C fC HC 5B","1316":"eC"},F:{"2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB mC nC oC pC 5B UC qC 6B","226":"OB PB QB RB SB TB UB VB WB","2052":"XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"},G:{"2":"GC rC VC sC tC uC","292":"E vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"2":"A B C 5B UC 6B","2052":"H"},L:{"2052":"I"},M:{"1028":"4B"},N:{"2":"A B"},O:{"2052":"7B"},P:{"2":"J KD LD","2052":"t u v w x MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"2052":"WD"},R:{"2052":"XD"},S:{"1028":"YD ZD"}},B:4,C:"text-decoration styling",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/text-emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/text-emphasis.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 i j k l m n o p q r s y z AB BB I","2":"C L M G N O P","164":"Q H R S T U V W X Y Z a b c d e f g h"},C:{"1":"0 1 2 3 4 5 6 7 8 9 ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB ZC aC","322":"YB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x","164":"EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h"},E:{"1":"E F A B C L M G eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"J CB K bC GC cC","164":"D dC"},F:{"1":"V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","164":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U"},G:{"1":"E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","2":"GC rC VC sC tC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC","164":"ID JD"},J:{"2":"D","164":"A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"2":"A B"},O:{"1":"7B"},P:{"1":"t u v w x UD VD","164":"J KD LD MD ND OD HC PD QD RD SD TD 8B 9B"},Q:{"164":"WD"},R:{"164":"XD"},S:{"1":"YD ZD"}},B:4,C:"text-emphasis styling",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/text-overflow.js":
/*!******************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/text-overflow.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"1":"K D E F A B","2":"WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","8":"XC AC J CB K ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC"},E:{"1":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC"},F:{"1":"B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 5B UC qC 6B","33":"F mC nC oC pC"},G:{"1":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"1":"DD"},I:{"1":"AC J I ED FD GD HD VC ID JD"},J:{"1":"D A"},K:{"1":"H 6B","33":"A B C 5B UC"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:2,C:"CSS3 Text-overflow",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/text-size-adjust.js":
/*!*********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/text-size-adjust.js ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F A B WC"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","33":"C L M G N O P"},C:{"2":"0 1 2 3 4 5 6 7 8 9 XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B C L M G N O P DB t u v w x EB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB","258":"FB"},E:{"2":"J CB K D E F A B C L M G bC GC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","258":"cC"},F:{"1":"WB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB XB mC nC oC pC 5B UC qC 6B"},G:{"2":"GC rC VC","33":"E sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","2":"AC J ED FD GD HD VC ID JD"},J:{"2":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"33":"4B"},N:{"161":"A B"},O:{"1":"7B"},P:{"1":"t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","2":"J"},Q:{"1":"WD"},R:{"1":"XD"},S:{"2":"YD ZD"}},B:7,C:"CSS text-size-adjust",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/transforms2d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/transforms2d.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"WC","8":"K D E","129":"A B","161":"F"},B:{"1":"0 1 2 3 4 5 6 7 8 9 O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","129":"C L M G N"},C:{"1":"0 1 2 3 4 5 6 7 8 9 N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC","33":"J CB K D E F A B C L M G ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},E:{"1":"F A B C L M G fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","33":"J CB K D E bC GC cC dC eC"},F:{"1":"w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B","2":"F mC nC","33":"B C G N O P DB t u v oC pC 5B UC qC"},G:{"1":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E GC rC VC sC tC uC vC"},H:{"2":"DD"},I:{"1":"I","33":"AC J ED FD GD HD VC ID JD"},J:{"33":"D A"},K:{"1":"B C H 5B UC 6B","2":"A"},L:{"1":"I"},M:{"1":"4B"},N:{"1":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:4,C:"CSS3 2D Transforms",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/transforms3d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/transforms3d.js ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","132":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I"},C:{"1":"0 1 2 3 4 5 6 7 8 9 N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","2":"XC AC J CB K D E F ZC aC","33":"A B C L M G"},D:{"1":"0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","2":"J CB K D E F A B","33":"C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB"},E:{"1":"JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC lC","2":"bC GC","33":"J CB K D E cC dC eC","257":"F A B C L M G fC HC 5B 6B gC hC iC IC"},F:{"1":"w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v"},G:{"1":"JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC","33":"E GC rC VC sC tC uC vC","257":"wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC"},H:{"2":"DD"},I:{"1":"I","2":"ED FD GD","33":"AC J HD VC ID JD"},J:{"33":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"132":"A B"},O:{"1":"7B"},P:{"1":"J t u v w x KD LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"YD ZD"}},B:5,C:"CSS3 3D Transforms",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/features/user-select-none.js":
/*!*********************************************************************!*\
  !*** ./node_modules/caniuse-lite/data/features/user-select-none.js ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports={A:{A:{"2":"K D E F WC","33":"A B"},B:{"1":"0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I","33":"C L M G N O P"},C:{"1":"0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC YC","33":"XC AC J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB ZC aC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB BC mB CC nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s y z AB BB I 4B EC FC","33":"J CB K D E F A B C L M G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB"},E:{"1":"lC","33":"J CB K D E F A B C L M G bC GC cC dC eC fC HC 5B 6B gC hC iC IC JC 7B jC 8B KC LC MC NC OC kC 9B PC QC RC SC TC"},F:{"1":"UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s","2":"F B C mC nC oC pC 5B UC qC 6B","33":"G N O P DB t u v w x EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB"},G:{"33":"E GC rC VC sC tC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD IC JC 7B BD 8B KC LC MC NC OC CD 9B PC QC RC SC TC"},H:{"2":"DD"},I:{"1":"I","33":"AC J ED FD GD HD VC ID JD"},J:{"33":"D A"},K:{"1":"H","2":"A B C 5B UC 6B"},L:{"1":"I"},M:{"1":"4B"},N:{"33":"A B"},O:{"1":"7B"},P:{"1":"t u v w x LD MD ND OD HC PD QD RD SD TD 8B 9B UD VD","33":"J KD"},Q:{"1":"WD"},R:{"1":"XD"},S:{"1":"ZD","33":"YD"}},B:5,C:"CSS user-select: none",D:true};


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/lib/statuses.js":
/*!********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/lib/statuses.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {
  1: 'ls', // WHATWG Living Standard
  2: 'rec', // W3C Recommendation
  3: 'pr', // W3C Proposed Recommendation
  4: 'cr', // W3C Candidate Recommendation
  5: 'wd', // W3C Working Draft
  6: 'other', // Non-W3C, but reputable
  7: 'unoff' // Unofficial, Editor's Draft or W3C "Note"
}


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/lib/supported.js":
/*!*********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/lib/supported.js ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {
  y: 1 << 0,
  n: 1 << 1,
  a: 1 << 2,
  p: 1 << 3,
  u: 1 << 4,
  x: 1 << 5,
  d: 1 << 6
}


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/agents.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/agents.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const browsers = (__webpack_require__(/*! ./browsers */ "./node_modules/caniuse-lite/dist/unpacker/browsers.js").browsers)
const versions = (__webpack_require__(/*! ./browserVersions */ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js").browserVersions)
const agentsData = __webpack_require__(/*! ../../data/agents */ "./node_modules/caniuse-lite/data/agents.js")

function unpackBrowserVersions(versionsData) {
  return Object.keys(versionsData).reduce((usage, version) => {
    usage[versions[version]] = versionsData[version]
    return usage
  }, {})
}

module.exports.agents = Object.keys(agentsData).reduce((map, key) => {
  let versionsData = agentsData[key]
  map[browsers[key]] = Object.keys(versionsData).reduce((data, entry) => {
    if (entry === 'A') {
      data.usage_global = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'C') {
      data.versions = versionsData[entry].reduce((list, version) => {
        if (version === '') {
          list.push(null)
        } else {
          list.push(versions[version])
        }
        return list
      }, [])
    } else if (entry === 'D') {
      data.prefix_exceptions = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'E') {
      data.browser = versionsData[entry]
    } else if (entry === 'F') {
      data.release_date = Object.keys(versionsData[entry]).reduce(
        (map2, key2) => {
          map2[versions[key2]] = versionsData[entry][key2]
          return map2
        },
        {}
      )
    } else {
      // entry is B
      data.prefix = versionsData[entry]
    }
    return data
  }, {})
  return map
}, {})


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browserVersions.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.browserVersions = __webpack_require__(/*! ../../data/browserVersions */ "./node_modules/caniuse-lite/data/browserVersions.js")


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browsers.js":
/*!*************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browsers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.browsers = __webpack_require__(/*! ../../data/browsers */ "./node_modules/caniuse-lite/data/browsers.js")


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/feature.js":
/*!************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/feature.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const statuses = __webpack_require__(/*! ../lib/statuses */ "./node_modules/caniuse-lite/dist/lib/statuses.js")
const supported = __webpack_require__(/*! ../lib/supported */ "./node_modules/caniuse-lite/dist/lib/supported.js")
const browsers = (__webpack_require__(/*! ./browsers */ "./node_modules/caniuse-lite/dist/unpacker/browsers.js").browsers)
const versions = (__webpack_require__(/*! ./browserVersions */ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js").browserVersions)

const MATH2LOG = Math.log(2)

function unpackSupport(cipher) {
  // bit flags
  let stats = Object.keys(supported).reduce((list, support) => {
    if (cipher & supported[support]) list.push(support)
    return list
  }, [])

  // notes
  let notes = cipher >> 7
  let notesArray = []
  while (notes) {
    let note = Math.floor(Math.log(notes) / MATH2LOG) + 1
    notesArray.unshift(`#${note}`)
    notes -= Math.pow(2, note - 1)
  }

  return stats.concat(notesArray).join(' ')
}

function unpackFeature(packed) {
  let unpacked = {
    status: statuses[packed.B],
    title: packed.C,
    shown: packed.D
  }
  unpacked.stats = Object.keys(packed.A).reduce((browserStats, key) => {
    let browser = packed.A[key]
    browserStats[browsers[key]] = Object.keys(browser).reduce(
      (stats, support) => {
        let packedVersions = browser[support].split(' ')
        let unpacked2 = unpackSupport(support)
        packedVersions.forEach(v => (stats[versions[v]] = unpacked2))
        return stats
      },
      {}
    )
    return browserStats
  }, {})
  return unpacked
}

module.exports = unpackFeature
module.exports["default"] = unpackFeature


/***/ }),

/***/ "./node_modules/electron-to-chromium/versions.js":
/*!*******************************************************!*\
  !*** ./node_modules/electron-to-chromium/versions.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {
	"0.20": "39",
	"0.21": "41",
	"0.22": "41",
	"0.23": "41",
	"0.24": "41",
	"0.25": "42",
	"0.26": "42",
	"0.27": "43",
	"0.28": "43",
	"0.29": "43",
	"0.30": "44",
	"0.31": "45",
	"0.32": "45",
	"0.33": "45",
	"0.34": "45",
	"0.35": "45",
	"0.36": "47",
	"0.37": "49",
	"1.0": "49",
	"1.1": "50",
	"1.2": "51",
	"1.3": "52",
	"1.4": "53",
	"1.5": "54",
	"1.6": "56",
	"1.7": "58",
	"1.8": "59",
	"2.0": "61",
	"2.1": "61",
	"3.0": "66",
	"3.1": "66",
	"4.0": "69",
	"4.1": "69",
	"4.2": "69",
	"5.0": "73",
	"6.0": "76",
	"6.1": "76",
	"7.0": "78",
	"7.1": "78",
	"7.2": "78",
	"7.3": "78",
	"8.0": "80",
	"8.1": "80",
	"8.2": "80",
	"8.3": "80",
	"8.4": "80",
	"8.5": "80",
	"9.0": "83",
	"9.1": "83",
	"9.2": "83",
	"9.3": "83",
	"9.4": "83",
	"10.0": "85",
	"10.1": "85",
	"10.2": "85",
	"10.3": "85",
	"10.4": "85",
	"11.0": "87",
	"11.1": "87",
	"11.2": "87",
	"11.3": "87",
	"11.4": "87",
	"11.5": "87",
	"12.0": "89",
	"12.1": "89",
	"12.2": "89",
	"13.0": "91",
	"13.1": "91",
	"13.2": "91",
	"13.3": "91",
	"13.4": "91",
	"13.5": "91",
	"13.6": "91",
	"14.0": "93",
	"14.1": "93",
	"14.2": "93",
	"15.0": "94",
	"15.1": "94",
	"15.2": "94",
	"15.3": "94",
	"15.4": "94",
	"15.5": "94",
	"16.0": "96",
	"16.1": "96",
	"16.2": "96",
	"17.0": "98",
	"17.1": "98",
	"17.2": "98",
	"17.3": "98",
	"17.4": "98",
	"18.0": "100",
	"18.1": "100",
	"18.2": "100",
	"18.3": "100",
	"19.0": "102",
	"19.1": "102",
	"20.0": "104",
	"20.1": "104",
	"20.2": "104",
	"20.3": "104",
	"21.0": "106",
	"21.1": "106",
	"21.2": "106",
	"21.3": "106",
	"21.4": "106",
	"22.0": "108",
	"22.1": "108",
	"22.2": "108",
	"22.3": "108",
	"23.0": "110",
	"23.1": "110",
	"23.2": "110",
	"23.3": "110",
	"24.0": "112",
	"24.1": "112",
	"24.2": "112",
	"24.3": "112",
	"24.4": "112",
	"24.5": "112",
	"24.6": "112",
	"24.7": "112",
	"24.8": "112",
	"25.0": "114",
	"25.1": "114",
	"25.2": "114",
	"25.3": "114",
	"25.4": "114",
	"25.5": "114",
	"25.6": "114",
	"25.7": "114",
	"25.8": "114",
	"25.9": "114",
	"26.0": "116",
	"26.1": "116",
	"26.2": "116",
	"26.3": "116",
	"26.4": "116",
	"26.5": "116",
	"26.6": "116",
	"27.0": "118",
	"27.1": "118",
	"27.2": "118",
	"27.3": "118",
	"28.0": "120",
	"28.1": "120",
	"28.2": "120",
	"28.3": "120",
	"29.0": "122",
	"29.1": "122",
	"29.2": "122",
	"29.3": "122",
	"30.0": "124",
	"31.0": "125"
};

/***/ }),

/***/ "./node_modules/normalize-range/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-range/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";

module.exports = {
  wrap: wrapRange,
  limit: limitRange,
  validate: validateRange,
  test: testRange,
  curry: curry,
  name: name
};

function wrapRange(min, max, value) {
  var maxLessMin = max - min;
  return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}

function limitRange(min, max, value) {
  return Math.max(min, Math.min(max, value));
}

function validateRange(min, max, value, minExclusive, maxExclusive) {
  if (!testRange(min, max, value, minExclusive, maxExclusive)) {
    throw new Error(value + ' is outside of range [' + min + ',' + max + ')');
  }
  return value;
}

function testRange(min, max, value, minExclusive, maxExclusive) {
  return !(
       value < min ||
       value > max ||
       (maxExclusive && (value === max)) ||
       (minExclusive && (value === min))
  );
}

function name(min, max, minExcl, maxExcl) {
  return (minExcl ? '(' : '[') + min + ',' + max + (maxExcl ? ')' : ']');
}

function curry(min, max, minExclusive, maxExclusive) {
  var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
  return {
    wrap: wrapRange.bind(null, min, max),
    limit: limitRange.bind(null, min, max),
    validate: function(value) {
      return validateRange(min, max, value, minExclusive, maxExclusive);
    },
    test: function(value) {
      return testRange(min, max, value, minExclusive, maxExclusive);
    },
    toString: boundNameFn,
    name: boundNameFn
  };
}


/***/ }),

/***/ "./node_modules/picocolors/picocolors.browser.js":
/*!*******************************************************!*\
  !*** ./node_modules/picocolors/picocolors.browser.js ***!
  \*******************************************************/
/***/ ((module) => {

var x=String;
var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x}};
module.exports=create();
module.exports.createColors = create;


/***/ }),

/***/ "./node_modules/postcss-value-parser/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/postcss-value-parser/lib/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss-value-parser/lib/parse.js");
var walk = __webpack_require__(/*! ./walk */ "./node_modules/postcss-value-parser/lib/walk.js");
var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss-value-parser/lib/stringify.js");

function ValueParser(value) {
  if (this instanceof ValueParser) {
    this.nodes = parse(value);
    return this;
  }
  return new ValueParser(value);
}

ValueParser.prototype.toString = function() {
  return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};

ValueParser.prototype.walk = function(cb, bubble) {
  walk(this.nodes, cb, bubble);
  return this;
};

ValueParser.unit = __webpack_require__(/*! ./unit */ "./node_modules/postcss-value-parser/lib/unit.js");

ValueParser.walk = walk;

ValueParser.stringify = stringify;

module.exports = ValueParser;


/***/ }),

/***/ "./node_modules/postcss-value-parser/lib/parse.js":
/*!********************************************************!*\
  !*** ./node_modules/postcss-value-parser/lib/parse.js ***!
  \********************************************************/
/***/ ((module) => {

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;

module.exports = function(input) {
  var tokens = [];
  var value = input;

  var next,
    quote,
    prev,
    token,
    escape,
    escapePos,
    whitespacePos,
    parenthesesOpenPos;
  var pos = 0;
  var code = value.charCodeAt(pos);
  var max = value.length;
  var stack = [{ nodes: tokens }];
  var balanced = 0;
  var parent;

  var name = "";
  var before = "";
  var after = "";

  while (pos < max) {
    // Whitespaces
    if (code <= 32) {
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = value.slice(pos, next);

      prev = tokens[tokens.length - 1];
      if (code === closeParentheses && balanced) {
        after = token;
      } else if (prev && prev.type === "div") {
        prev.after = token;
        prev.sourceEndIndex += token.length;
      } else if (
        code === comma ||
        code === colon ||
        (code === slash &&
          value.charCodeAt(next + 1) !== star &&
          (!parent ||
            (parent && parent.type === "function" && parent.value !== "calc")))
      ) {
        before = token;
      } else {
        tokens.push({
          type: "space",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;

      // Quotes
    } else if (code === singleQuote || code === doubleQuote) {
      next = pos;
      quote = code === singleQuote ? "'" : '"';
      token = {
        type: "string",
        sourceIndex: pos,
        quote: quote
      };
      do {
        escape = false;
        next = value.indexOf(quote, next + 1);
        if (~next) {
          escapePos = next;
          while (value.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escape = !escape;
          }
        } else {
          value += quote;
          next = value.length - 1;
          token.unclosed = true;
        }
      } while (escape);
      token.value = value.slice(pos + 1, next);
      token.sourceEndIndex = token.unclosed ? next : next + 1;
      tokens.push(token);
      pos = next + 1;
      code = value.charCodeAt(pos);

      // Comments
    } else if (code === slash && value.charCodeAt(pos + 1) === star) {
      next = value.indexOf("*/", pos);

      token = {
        type: "comment",
        sourceIndex: pos,
        sourceEndIndex: next + 2
      };

      if (next === -1) {
        token.unclosed = true;
        next = value.length;
        token.sourceEndIndex = next;
      }

      token.value = value.slice(pos + 2, next);
      tokens.push(token);

      pos = next + 2;
      code = value.charCodeAt(pos);

      // Operation within calc
    } else if (
      (code === slash || code === star) &&
      parent &&
      parent.type === "function" &&
      parent.value === "calc"
    ) {
      token = value[pos];
      tokens.push({
        type: "word",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token
      });
      pos += 1;
      code = value.charCodeAt(pos);

      // Dividers
    } else if (code === slash || code === comma || code === colon) {
      token = value[pos];

      tokens.push({
        type: "div",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token,
        before: before,
        after: ""
      });
      before = "";

      pos += 1;
      code = value.charCodeAt(pos);

      // Open parentheses
    } else if (openParentheses === code) {
      // Whitespaces after open parentheses
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      parenthesesOpenPos = pos;
      token = {
        type: "function",
        sourceIndex: pos - name.length,
        value: name,
        before: value.slice(parenthesesOpenPos + 1, next)
      };
      pos = next;

      if (name === "url" && code !== singleQuote && code !== doubleQuote) {
        next -= 1;
        do {
          escape = false;
          next = value.indexOf(")", next + 1);
          if (~next) {
            escapePos = next;
            while (value.charCodeAt(escapePos - 1) === backslash) {
              escapePos -= 1;
              escape = !escape;
            }
          } else {
            value += ")";
            next = value.length - 1;
            token.unclosed = true;
          }
        } while (escape);
        // Whitespaces before closed
        whitespacePos = next;
        do {
          whitespacePos -= 1;
          code = value.charCodeAt(whitespacePos);
        } while (code <= 32);
        if (parenthesesOpenPos < whitespacePos) {
          if (pos !== whitespacePos + 1) {
            token.nodes = [
              {
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: whitespacePos + 1,
                value: value.slice(pos, whitespacePos + 1)
              }
            ];
          } else {
            token.nodes = [];
          }
          if (token.unclosed && whitespacePos + 1 !== next) {
            token.after = "";
            token.nodes.push({
              type: "space",
              sourceIndex: whitespacePos + 1,
              sourceEndIndex: next,
              value: value.slice(whitespacePos + 1, next)
            });
          } else {
            token.after = value.slice(whitespacePos + 1, next);
            token.sourceEndIndex = next;
          }
        } else {
          token.after = "";
          token.nodes = [];
        }
        pos = next + 1;
        token.sourceEndIndex = token.unclosed ? next : pos;
        code = value.charCodeAt(pos);
        tokens.push(token);
      } else {
        balanced += 1;
        token.after = "";
        token.sourceEndIndex = pos + 1;
        tokens.push(token);
        stack.push(token);
        tokens = token.nodes = [];
        parent = token;
      }
      name = "";

      // Close parentheses
    } else if (closeParentheses === code && balanced) {
      pos += 1;
      code = value.charCodeAt(pos);

      parent.after = after;
      parent.sourceEndIndex += after.length;
      after = "";
      balanced -= 1;
      stack[stack.length - 1].sourceEndIndex = pos;
      stack.pop();
      parent = stack[balanced];
      tokens = parent.nodes;

      // Words
    } else {
      next = pos;
      do {
        if (code === backslash) {
          next += 1;
        }
        next += 1;
        code = value.charCodeAt(next);
      } while (
        next < max &&
        !(
          code <= 32 ||
          code === singleQuote ||
          code === doubleQuote ||
          code === comma ||
          code === colon ||
          code === slash ||
          code === openParentheses ||
          (code === star &&
            parent &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === slash &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === closeParentheses && balanced)
        )
      );
      token = value.slice(pos, next);

      if (openParentheses === code) {
        name = token;
      } else if (
        (uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) &&
        plus === token.charCodeAt(1) &&
        isUnicodeRange.test(token.slice(2))
      ) {
        tokens.push({
          type: "unicode-range",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      } else {
        tokens.push({
          type: "word",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;
    }
  }

  for (pos = stack.length - 1; pos; pos -= 1) {
    stack[pos].unclosed = true;
    stack[pos].sourceEndIndex = value.length;
  }

  return stack[0].nodes;
};


/***/ }),

/***/ "./node_modules/postcss-value-parser/lib/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/postcss-value-parser/lib/stringify.js ***!
  \************************************************************/
/***/ ((module) => {

function stringifyNode(node, custom) {
  var type = node.type;
  var value = node.value;
  var buf;
  var customResult;

  if (custom && (customResult = custom(node)) !== undefined) {
    return customResult;
  } else if (type === "word" || type === "space") {
    return value;
  } else if (type === "string") {
    buf = node.quote || "";
    return buf + value + (node.unclosed ? "" : buf);
  } else if (type === "comment") {
    return "/*" + value + (node.unclosed ? "" : "*/");
  } else if (type === "div") {
    return (node.before || "") + value + (node.after || "");
  } else if (Array.isArray(node.nodes)) {
    buf = stringify(node.nodes, custom);
    if (type !== "function") {
      return buf;
    }
    return (
      value +
      "(" +
      (node.before || "") +
      buf +
      (node.after || "") +
      (node.unclosed ? "" : ")")
    );
  }
  return value;
}

function stringify(nodes, custom) {
  var result, i;

  if (Array.isArray(nodes)) {
    result = "";
    for (i = nodes.length - 1; ~i; i -= 1) {
      result = stringifyNode(nodes[i], custom) + result;
    }
    return result;
  }
  return stringifyNode(nodes, custom);
}

module.exports = stringify;


/***/ }),

/***/ "./node_modules/postcss-value-parser/lib/unit.js":
/*!*******************************************************!*\
  !*** ./node_modules/postcss-value-parser/lib/unit.js ***!
  \*******************************************************/
/***/ ((module) => {

var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);

// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
  var code = value.charCodeAt(0);
  var nextCode;

  if (code === plus || code === minus) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    var nextNextCode = value.charCodeAt(2);

    if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code === dot) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code >= 48 && code <= 57) {
    return true;
  }

  return false;
}

// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
  var pos = 0;
  var length = value.length;
  var code;
  var nextCode;
  var nextNextCode;

  if (length === 0 || !likeNumber(value)) {
    return false;
  }

  code = value.charCodeAt(pos);

  if (code === plus || code === minus) {
    pos++;
  }

  while (pos < length) {
    code = value.charCodeAt(pos);

    if (code < 48 || code > 57) {
      break;
    }

    pos += 1;
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);

  if (code === dot && nextCode >= 48 && nextCode <= 57) {
    pos += 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);
  nextNextCode = value.charCodeAt(pos + 2);

  if (
    (code === exp || code === EXP) &&
    ((nextCode >= 48 && nextCode <= 57) ||
      ((nextCode === plus || nextCode === minus) &&
        nextNextCode >= 48 &&
        nextNextCode <= 57))
  ) {
    pos += nextCode === plus || nextCode === minus ? 3 : 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  return {
    number: value.slice(0, pos),
    unit: value.slice(pos)
  };
};


/***/ }),

/***/ "./node_modules/postcss-value-parser/lib/walk.js":
/*!*******************************************************!*\
  !*** ./node_modules/postcss-value-parser/lib/walk.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = function walk(nodes, cb, bubble) {
  var i, max, node, result;

  for (i = 0, max = nodes.length; i < max; i += 1) {
    node = nodes[i];
    if (!bubble) {
      result = cb(node, i, nodes);
    }

    if (
      result !== false &&
      node.type === "function" &&
      Array.isArray(node.nodes)
    ) {
      walk(node.nodes, cb, bubble);
    }

    if (bubble) {
      cb(node, i, nodes);
    }
  }
};


/***/ }),

/***/ "./node_modules/postcss/lib/at-rule.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/at-rule.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

class AtRule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'atrule'
  }

  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.append(...children)
  }

  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.prepend(...children)
  }
}

module.exports = AtRule
AtRule.default = AtRule

Container.registerAtRule(AtRule)


/***/ }),

/***/ "./node_modules/postcss/lib/comment.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/comment.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

class Comment extends Node {
  constructor(defaults) {
    super(defaults)
    this.type = 'comment'
  }
}

module.exports = Comment
Comment.default = Comment


/***/ }),

/***/ "./node_modules/postcss/lib/container.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/container.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

let parse, Rule, AtRule, Root

function cleanSource(nodes) {
  return nodes.map(i => {
    if (i.nodes) i.nodes = cleanSource(i.nodes)
    delete i.source
    return i
  })
}

function markDirtyUp(node) {
  node[isClean] = false
  if (node.proxyOf.nodes) {
    for (let i of node.proxyOf.nodes) {
      markDirtyUp(i)
    }
  }
}

class Container extends Node {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last)
      for (let node of nodes) this.proxyOf.nodes.push(node)
    }

    this.markDirty()

    return this
  }

  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween)
    if (this.nodes) {
      for (let node of this.nodes) node.cleanRaws(keepBetween)
    }
  }

  each(callback) {
    if (!this.proxyOf.nodes) return undefined
    let iterator = this.getIterator()

    let index, result
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator]
      result = callback(this.proxyOf.nodes[index], index)
      if (result === false) break

      this.indexes[iterator] += 1
    }

    delete this.indexes[iterator]
    return result
  }

  every(condition) {
    return this.nodes.every(condition)
  }

  getIterator() {
    if (!this.lastEach) this.lastEach = 0
    if (!this.indexes) this.indexes = {}

    this.lastEach += 1
    let iterator = this.lastEach
    this.indexes[iterator] = 0

    return iterator
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (!node[prop]) {
          return node[prop]
        } else if (
          prop === 'each' ||
          (typeof prop === 'string' && prop.startsWith('walk'))
        ) {
          return (...args) => {
            return node[prop](
              ...args.map(i => {
                if (typeof i === 'function') {
                  return (child, index) => i(child.toProxy(), index)
                } else {
                  return i
                }
              })
            )
          }
        } else if (prop === 'every' || prop === 'some') {
          return cb => {
            return node[prop]((child, ...other) =>
              cb(child.toProxy(), ...other)
            )
          }
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else if (prop === 'nodes') {
          return node.nodes.map(i => i.toProxy())
        } else if (prop === 'first' || prop === 'last') {
          return node[prop].toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (prop === 'name' || prop === 'params' || prop === 'selector') {
          node.markDirty()
        }
        return true
      }
    }
  }

  index(child) {
    if (typeof child === 'number') return child
    if (child.proxyOf) child = child.proxyOf
    return this.proxyOf.nodes.indexOf(child)
  }

  insertAfter(exist, add) {
    let existIndex = this.index(exist)
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex < index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  insertBefore(exist, add) {
    let existIndex = this.index(exist)
    let type = existIndex === 0 ? 'prepend' : false
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex <= index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  normalize(nodes, sample) {
    if (typeof nodes === 'string') {
      nodes = cleanSource(parse(nodes).nodes)
    } else if (typeof nodes === 'undefined') {
      nodes = []
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type === 'root' && this.type !== 'document') {
      nodes = nodes.nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type) {
      nodes = [nodes]
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation')
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value)
      }
      nodes = [new Declaration(nodes)]
    } else if (nodes.selector) {
      nodes = [new Rule(nodes)]
    } else if (nodes.name) {
      nodes = [new AtRule(nodes)]
    } else if (nodes.text) {
      nodes = [new Comment(nodes)]
    } else {
      throw new Error('Unknown node type in node creation')
    }

    let processed = nodes.map(i => {
      /* c8 ignore next */
      if (!i[my]) Container.rebuild(i)
      i = i.proxyOf
      if (i.parent) i.parent.removeChild(i)
      if (i[isClean]) markDirtyUp(i)
      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/\S/g, '')
        }
      }
      i.parent = this.proxyOf
      return i
    })

    return processed
  }

  prepend(...children) {
    children = children.reverse()
    for (let child of children) {
      let nodes = this.normalize(child, this.first, 'prepend').reverse()
      for (let node of nodes) this.proxyOf.nodes.unshift(node)
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  push(child) {
    child.parent = this
    this.proxyOf.nodes.push(child)
    return this
  }

  removeAll() {
    for (let node of this.proxyOf.nodes) node.parent = undefined
    this.proxyOf.nodes = []

    this.markDirty()

    return this
  }

  removeChild(child) {
    child = this.index(child)
    this.proxyOf.nodes[child].parent = undefined
    this.proxyOf.nodes.splice(child, 1)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (index >= child) {
        this.indexes[id] = index - 1
      }
    }

    this.markDirty()

    return this
  }

  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts
      opts = {}
    }

    this.walkDecls(decl => {
      if (opts.props && !opts.props.includes(decl.prop)) return
      if (opts.fast && !decl.value.includes(opts.fast)) return

      decl.value = decl.value.replace(pattern, callback)
    })

    this.markDirty()

    return this
  }

  some(condition) {
    return this.nodes.some(condition)
  }

  walk(callback) {
    return this.each((child, i) => {
      let result
      try {
        result = callback(child, i)
      } catch (e) {
        throw child.addToError(e)
      }
      if (result !== false && child.walk) {
        result = child.walk(callback)
      }

      return result
    })
  }

  walkAtRules(name, callback) {
    if (!callback) {
      callback = name
      return this.walk((child, i) => {
        if (child.type === 'atrule') {
          return callback(child, i)
        }
      })
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i)
      }
    })
  }

  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === 'comment') {
        return callback(child, i)
      }
    })
  }

  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop
      return this.walk((child, i) => {
        if (child.type === 'decl') {
          return callback(child, i)
        }
      })
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i)
      }
    })
  }

  walkRules(selector, callback) {
    if (!callback) {
      callback = selector

      return this.walk((child, i) => {
        if (child.type === 'rule') {
          return callback(child, i)
        }
      })
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i)
      }
    })
  }

  get first() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[0]
  }

  get last() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
  }
}

Container.registerParse = dependant => {
  parse = dependant
}

Container.registerRule = dependant => {
  Rule = dependant
}

Container.registerAtRule = dependant => {
  AtRule = dependant
}

Container.registerRoot = dependant => {
  Root = dependant
}

module.exports = Container
Container.default = Container

/* c8 ignore start */
Container.rebuild = node => {
  if (node.type === 'atrule') {
    Object.setPrototypeOf(node, AtRule.prototype)
  } else if (node.type === 'rule') {
    Object.setPrototypeOf(node, Rule.prototype)
  } else if (node.type === 'decl') {
    Object.setPrototypeOf(node, Declaration.prototype)
  } else if (node.type === 'comment') {
    Object.setPrototypeOf(node, Comment.prototype)
  } else if (node.type === 'root') {
    Object.setPrototypeOf(node, Root.prototype)
  }

  node[my] = true

  if (node.nodes) {
    node.nodes.forEach(child => {
      Container.rebuild(child)
    })
  }
}
/* c8 ignore stop */


/***/ }),

/***/ "./node_modules/postcss/lib/css-syntax-error.js":
/*!******************************************************!*\
  !*** ./node_modules/postcss/lib/css-syntax-error.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let pico = __webpack_require__(/*! picocolors */ "./node_modules/picocolors/picocolors.browser.js")

let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?5580")

class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin) {
    super(message)
    this.name = 'CssSyntaxError'
    this.reason = message

    if (file) {
      this.file = file
    }
    if (source) {
      this.source = source
    }
    if (plugin) {
      this.plugin = plugin
    }
    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      if (typeof line === 'number') {
        this.line = line
        this.column = column
      } else {
        this.line = line.line
        this.column = line.column
        this.endLine = column.line
        this.endColumn = column.column
      }
    }

    this.setMessage()

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError)
    }
  }

  setMessage() {
    this.message = this.plugin ? this.plugin + ': ' : ''
    this.message += this.file ? this.file : '<css input>'
    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column
    }
    this.message += ': ' + this.reason
  }

  showSourceCode(color) {
    if (!this.source) return ''

    let css = this.source
    if (color == null) color = pico.isColorSupported
    if (terminalHighlight) {
      if (color) css = terminalHighlight(css)
    }

    let lines = css.split(/\r?\n/)
    let start = Math.max(this.line - 3, 0)
    let end = Math.min(this.line + 2, lines.length)

    let maxWidth = String(end).length

    let mark, aside
    if (color) {
      let { bold, gray, red } = pico.createColors(true)
      mark = text => bold(red(text))
      aside = text => gray(text)
    } else {
      mark = aside = str => str
    }

    return lines
      .slice(start, end)
      .map((line, index) => {
        let number = start + 1 + index
        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | '
        if (number === this.line) {
          let spacing =
            aside(gutter.replace(/\d/g, ' ')) +
            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ')
          return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^')
        }
        return ' ' + aside(gutter) + line
      })
      .join('\n')
  }

  toString() {
    let code = this.showSourceCode()
    if (code) {
      code = '\n\n' + code + '\n'
    }
    return this.name + ': ' + this.message + code
  }
}

module.exports = CssSyntaxError
CssSyntaxError.default = CssSyntaxError


/***/ }),

/***/ "./node_modules/postcss/lib/declaration.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/declaration.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

class Declaration extends Node {
  constructor(defaults) {
    if (
      defaults &&
      typeof defaults.value !== 'undefined' &&
      typeof defaults.value !== 'string'
    ) {
      defaults = { ...defaults, value: String(defaults.value) }
    }
    super(defaults)
    this.type = 'decl'
  }

  get variable() {
    return this.prop.startsWith('--') || this.prop[0] === '$'
  }
}

module.exports = Declaration
Declaration.default = Declaration


/***/ }),

/***/ "./node_modules/postcss/lib/document.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/document.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Document extends Container {
  constructor(defaults) {
    // type needs to be passed to super, otherwise child roots won't be normalized correctly
    super({ type: 'document', ...defaults })

    if (!this.nodes) {
      this.nodes = []
    }
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)

    return lazy.stringify()
  }
}

Document.registerLazyResult = dependant => {
  LazyResult = dependant
}

Document.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Document
Document.default = Document


/***/ }),

/***/ "./node_modules/postcss/lib/fromJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/fromJSON.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "./node_modules/postcss/lib/previous-map.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")

function fromJSON(json, inputs) {
  if (Array.isArray(json)) return json.map(n => fromJSON(n))

  let { inputs: ownInputs, ...defaults } = json
  if (ownInputs) {
    inputs = []
    for (let input of ownInputs) {
      let inputHydrated = { ...input, __proto__: Input.prototype }
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap.prototype
        }
      }
      inputs.push(inputHydrated)
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map(n => fromJSON(n, inputs))
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source
    defaults.source = source
    if (inputId != null) {
      defaults.source.input = inputs[inputId]
    }
  }
  if (defaults.type === 'root') {
    return new Root(defaults)
  } else if (defaults.type === 'decl') {
    return new Declaration(defaults)
  } else if (defaults.type === 'rule') {
    return new Rule(defaults)
  } else if (defaults.type === 'comment') {
    return new Comment(defaults)
  } else if (defaults.type === 'atrule') {
    return new AtRule(defaults)
  } else {
    throw new Error('Unknown node type: ' + json.type)
  }
}

module.exports = fromJSON
fromJSON.default = fromJSON


/***/ }),

/***/ "./node_modules/postcss/lib/input.js":
/*!*******************************************!*\
  !*** ./node_modules/postcss/lib/input.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { fileURLToPath, pathToFileURL } = __webpack_require__(/*! url */ "?c717")
let { isAbsolute, resolve } = __webpack_require__(/*! path */ "?6197")
let { nanoid } = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.cjs")

let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?5580")
let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "./node_modules/postcss/lib/previous-map.js")

let fromOffsetCache = Symbol('fromOffsetCache')

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(resolve && isAbsolute)

class Input {
  constructor(css, opts = {}) {
    if (
      css === null ||
      typeof css === 'undefined' ||
      (typeof css === 'object' && !css.toString)
    ) {
      throw new Error(`PostCSS received ${css} instead of CSS string`)
    }

    this.css = css.toString()

    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
      this.hasBOM = true
      this.css = this.css.slice(1)
    } else {
      this.hasBOM = false
    }

    if (opts.from) {
      if (
        !pathAvailable ||
        /^\w+:\/\//.test(opts.from) ||
        isAbsolute(opts.from)
      ) {
        this.file = opts.from
      } else {
        this.file = resolve(opts.from)
      }
    }

    if (pathAvailable && sourceMapAvailable) {
      let map = new PreviousMap(this.css, opts)
      if (map.text) {
        this.map = map
        let file = map.consumer().file
        if (!this.file && file) this.file = this.mapResolve(file)
      }
    }

    if (!this.file) {
      this.id = '<input css ' + nanoid(6) + '>'
    }
    if (this.map) this.map.file = this.from
  }

  error(message, line, column, opts = {}) {
    let result, endLine, endColumn

    if (line && typeof line === 'object') {
      let start = line
      let end = column
      if (typeof start.offset === 'number') {
        let pos = this.fromOffset(start.offset)
        line = pos.line
        column = pos.col
      } else {
        line = start.line
        column = start.column
      }
      if (typeof end.offset === 'number') {
        let pos = this.fromOffset(end.offset)
        endLine = pos.line
        endColumn = pos.col
      } else {
        endLine = end.line
        endColumn = end.column
      }
    } else if (!column) {
      let pos = this.fromOffset(line)
      line = pos.line
      column = pos.col
    }

    let origin = this.origin(line, column, endLine, endColumn)
    if (origin) {
      result = new CssSyntaxError(
        message,
        origin.endLine === undefined
          ? origin.line
          : { column: origin.column, line: origin.line },
        origin.endLine === undefined
          ? origin.column
          : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      )
    } else {
      result = new CssSyntaxError(
        message,
        endLine === undefined ? line : { column, line },
        endLine === undefined ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      )
    }

    result.input = { column, endColumn, endLine, line, source: this.css }
    if (this.file) {
      if (pathToFileURL) {
        result.input.url = pathToFileURL(this.file).toString()
      }
      result.input.file = this.file
    }

    return result
  }

  fromOffset(offset) {
    let lastLine, lineToIndex
    if (!this[fromOffsetCache]) {
      let lines = this.css.split('\n')
      lineToIndex = new Array(lines.length)
      let prevIndex = 0

      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex
        prevIndex += lines[i].length + 1
      }

      this[fromOffsetCache] = lineToIndex
    } else {
      lineToIndex = this[fromOffsetCache]
    }
    lastLine = lineToIndex[lineToIndex.length - 1]

    let min = 0
    if (offset >= lastLine) {
      min = lineToIndex.length - 1
    } else {
      let max = lineToIndex.length - 2
      let mid
      while (min < max) {
        mid = min + ((max - min) >> 1)
        if (offset < lineToIndex[mid]) {
          max = mid - 1
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1
        } else {
          min = mid
          break
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    }
  }

  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file
    }
    return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file)
  }

  origin(line, column, endLine, endColumn) {
    if (!this.map) return false
    let consumer = this.map.consumer()

    let from = consumer.originalPositionFor({ column, line })
    if (!from.source) return false

    let to
    if (typeof endLine === 'number') {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine })
    }

    let fromUrl

    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL(from.source)
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
      )
    }

    let result = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    }

    if (fromUrl.protocol === 'file:') {
      if (fileURLToPath) {
        result.file = fileURLToPath(fromUrl)
      } else {
        /* c8 ignore next 2 */
        throw new Error(`file: protocol is not available in this PostCSS build`)
      }
    }

    let source = consumer.sourceContentFor(from.source)
    if (source) result.source = source

    return result
  }

  toJSON() {
    let json = {}
    for (let name of ['hasBOM', 'css', 'file', 'id']) {
      if (this[name] != null) {
        json[name] = this[name]
      }
    }
    if (this.map) {
      json.map = { ...this.map }
      if (json.map.consumerCache) {
        json.map.consumerCache = undefined
      }
    }
    return json
  }

  get from() {
    return this.file || this.id
  }
}

module.exports = Input
Input.default = Input

if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input)
}


/***/ }),

/***/ "./node_modules/postcss/lib/lazy-result.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/lazy-result.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let MapGenerator = __webpack_require__(/*! ./map-generator */ "./node_modules/postcss/lib/map-generator.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "./node_modules/postcss/lib/warn-once.js")
let Result = __webpack_require__(/*! ./result */ "./node_modules/postcss/lib/result.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")

const TYPE_TO_CLASS_NAME = {
  atrule: 'AtRule',
  comment: 'Comment',
  decl: 'Declaration',
  document: 'Document',
  root: 'Root',
  rule: 'Rule'
}

const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
}

const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
}

const CHILDREN = 0

function isPromise(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}

function getEvents(node) {
  let key = false
  let type = TYPE_TO_CLASS_NAME[node.type]
  if (node.type === 'decl') {
    key = node.prop.toLowerCase()
  } else if (node.type === 'atrule') {
    key = node.name.toLowerCase()
  }

  if (key && node.append) {
    return [
      type,
      type + '-' + key,
      CHILDREN,
      type + 'Exit',
      type + 'Exit-' + key
    ]
  } else if (key) {
    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
  } else if (node.append) {
    return [type, CHILDREN, type + 'Exit']
  } else {
    return [type, type + 'Exit']
  }
}

function toStack(node) {
  let events
  if (node.type === 'document') {
    events = ['Document', CHILDREN, 'DocumentExit']
  } else if (node.type === 'root') {
    events = ['Root', CHILDREN, 'RootExit']
  } else {
    events = getEvents(node)
  }

  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node,
    visitorIndex: 0,
    visitors: []
  }
}

function cleanMarks(node) {
  node[isClean] = false
  if (node.nodes) node.nodes.forEach(i => cleanMarks(i))
  return node
}

let postcss = {}

class LazyResult {
  constructor(processor, css, opts) {
    this.stringified = false
    this.processed = false

    let root
    if (
      typeof css === 'object' &&
      css !== null &&
      (css.type === 'root' || css.type === 'document')
    ) {
      root = cleanMarks(css)
    } else if (css instanceof LazyResult || css instanceof Result) {
      root = cleanMarks(css.root)
      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {}
        if (!opts.map.inline) opts.map.inline = false
        opts.map.prev = css.map
      }
    } else {
      let parser = parse
      if (opts.syntax) parser = opts.syntax.parse
      if (opts.parser) parser = opts.parser
      if (parser.parse) parser = parser.parse

      try {
        root = parser(css, opts)
      } catch (error) {
        this.processed = true
        this.error = error
      }

      if (root && !root[my]) {
        /* c8 ignore next 2 */
        Container.rebuild(root)
      }
    }

    this.result = new Result(processor, root, opts)
    this.helpers = { ...postcss, postcss, result: this.result }
    this.plugins = this.processor.plugins.map(plugin => {
      if (typeof plugin === 'object' && plugin.prepare) {
        return { ...plugin, ...plugin.prepare(this.result) }
      } else {
        return plugin
      }
    })
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    if (this.processed) return Promise.resolve(this.result)
    if (!this.processing) {
      this.processing = this.runAsync()
    }
    return this.processing
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  getAsyncError() {
    throw new Error('Use process(css).then(cb) to work with async plugins')
  }

  handleError(error, node) {
    let plugin = this.result.lastPlugin
    try {
      if (node) node.addToError(error)
      this.error = error
      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin
        error.setMessage()
      } else if (plugin.postcssVersion) {
        if (true) {
          let pluginName = plugin.postcssPlugin
          let pluginVer = plugin.postcssVersion
          let runtimeVer = this.result.processor.version
          let a = pluginVer.split('.')
          let b = runtimeVer.split('.')

          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            // eslint-disable-next-line no-console
            console.error(
              'Unknown error from PostCSS plugin. Your current PostCSS ' +
                'version is ' +
                runtimeVer +
                ', but ' +
                pluginName +
                ' uses ' +
                pluginVer +
                '. Perhaps this is the source of the error below.'
            )
          }
        }
      }
    } catch (err) {
      /* c8 ignore next 3 */
      // eslint-disable-next-line no-console
      if (console && console.error) console.error(err)
    }
    return error
  }

  prepareVisitors() {
    this.listeners = {}
    let add = (plugin, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = []
      this.listeners[type].push([plugin, cb])
    }
    for (let plugin of this.plugins) {
      if (typeof plugin === 'object') {
        for (let event in plugin) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
                `Try to update PostCSS (${this.processor.version} now).`
            )
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin[event] === 'object') {
              for (let filter in plugin[event]) {
                if (filter === '*') {
                  add(plugin, event, plugin[event][filter])
                } else {
                  add(
                    plugin,
                    event + '-' + filter.toLowerCase(),
                    plugin[event][filter]
                  )
                }
              }
            } else if (typeof plugin[event] === 'function') {
              add(plugin, event, plugin[event])
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0
  }

  async runAsync() {
    this.plugin = 0
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin = this.plugins[i]
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        try {
          await promise
        } catch (error) {
          throw this.handleError(error)
        }
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        let stack = [toStack(root)]
        while (stack.length > 0) {
          let promise = this.visitTick(stack)
          if (isPromise(promise)) {
            try {
              await promise
            } catch (e) {
              let node = stack[stack.length - 1].node
              throw this.handleError(e, node)
            }
          }
        }
      }

      if (this.listeners.OnceExit) {
        for (let [plugin, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin
          try {
            if (root.type === 'document') {
              let roots = root.nodes.map(subRoot =>
                visitor(subRoot, this.helpers)
              )

              await Promise.all(roots)
            } else {
              await visitor(root, this.helpers)
            }
          } catch (e) {
            throw this.handleError(e)
          }
        }
      }
    }

    this.processed = true
    return this.stringify()
  }

  runOnRoot(plugin) {
    this.result.lastPlugin = plugin
    try {
      if (typeof plugin === 'object' && plugin.Once) {
        if (this.result.root.type === 'document') {
          let roots = this.result.root.nodes.map(root =>
            plugin.Once(root, this.helpers)
          )

          if (isPromise(roots[0])) {
            return Promise.all(roots)
          }

          return roots
        }

        return plugin.Once(this.result.root, this.helpers)
      } else if (typeof plugin === 'function') {
        return plugin(this.result.root, this.result)
      }
    } catch (error) {
      throw this.handleError(error)
    }
  }

  stringify() {
    if (this.error) throw this.error
    if (this.stringified) return this.result
    this.stringified = true

    this.sync()

    let opts = this.result.opts
    let str = stringify
    if (opts.syntax) str = opts.syntax.stringify
    if (opts.stringifier) str = opts.stringifier
    if (str.stringify) str = str.stringify

    let map = new MapGenerator(str, this.result.root, this.result.opts)
    let data = map.generate()
    this.result.css = data[0]
    this.result.map = data[1]

    return this.result
  }

  sync() {
    if (this.error) throw this.error
    if (this.processed) return this.result
    this.processed = true

    if (this.processing) {
      throw this.getAsyncError()
    }

    for (let plugin of this.plugins) {
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        this.walkSync(root)
      }
      if (this.listeners.OnceExit) {
        if (root.type === 'document') {
          for (let subRoot of root.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot)
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root)
        }
      }
    }

    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this.opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }
    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this.css
  }

  visitSync(visitors, node) {
    for (let [plugin, visitor] of visitors) {
      this.result.lastPlugin = plugin
      let promise
      try {
        promise = visitor(node, this.helpers)
      } catch (e) {
        throw this.handleError(e, node.proxyOf)
      }
      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
        return true
      }
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }
  }

  visitTick(stack) {
    let visit = stack[stack.length - 1]
    let { node, visitors } = visit

    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
      stack.pop()
      return
    }

    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin, visitor] = visitors[visit.visitorIndex]
      visit.visitorIndex += 1
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = []
        visit.visitorIndex = 0
      }
      this.result.lastPlugin = plugin
      try {
        return visitor(node.toProxy(), this.helpers)
      } catch (e) {
        throw this.handleError(e, node)
      }
    }

    if (visit.iterator !== 0) {
      let iterator = visit.iterator
      let child
      while ((child = node.nodes[node.indexes[iterator]])) {
        node.indexes[iterator] += 1
        if (!child[isClean]) {
          child[isClean] = true
          stack.push(toStack(child))
          return
        }
      }
      visit.iterator = 0
      delete node.indexes[iterator]
    }

    let events = visit.events
    while (visit.eventIndex < events.length) {
      let event = events[visit.eventIndex]
      visit.eventIndex += 1
      if (event === CHILDREN) {
        if (node.nodes && node.nodes.length) {
          node[isClean] = true
          visit.iterator = node.getIterator()
        }
        return
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event]
        return
      }
    }
    stack.pop()
  }

  walkSync(node) {
    node[isClean] = true
    let events = getEvents(node)
    for (let event of events) {
      if (event === CHILDREN) {
        if (node.nodes) {
          node.each(child => {
            if (!child[isClean]) this.walkSync(child)
          })
        }
      } else {
        let visitors = this.listeners[event]
        if (visitors) {
          if (this.visitSync(visitors, node.toProxy())) return
        }
      }
    }
  }

  warnings() {
    return this.sync().warnings()
  }

  get content() {
    return this.stringify().content
  }

  get css() {
    return this.stringify().css
  }

  get map() {
    return this.stringify().map
  }

  get messages() {
    return this.sync().messages
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    return this.sync().root
  }

  get [Symbol.toStringTag]() {
    return 'LazyResult'
  }
}

LazyResult.registerPostcss = dependant => {
  postcss = dependant
}

module.exports = LazyResult
LazyResult.default = LazyResult

Root.registerLazyResult(LazyResult)
Document.registerLazyResult(LazyResult)


/***/ }),

/***/ "./node_modules/postcss/lib/list.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/list.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


let list = {
  comma(string) {
    return list.split(string, [','], true)
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let inQuote = false
    let prevQuote = ''
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true
        prevQuote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  }
}

module.exports = list
list.default = list


/***/ }),

/***/ "./node_modules/postcss/lib/map-generator.js":
/*!***************************************************!*\
  !*** ./node_modules/postcss/lib/map-generator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { dirname, relative, resolve, sep } = __webpack_require__(/*! path */ "?6197")
let { pathToFileURL } = __webpack_require__(/*! url */ "?c717")

let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(dirname && resolve && relative && sep)

class MapGenerator {
  constructor(stringify, root, opts, cssString) {
    this.stringify = stringify
    this.mapOpts = opts.map || {}
    this.root = root
    this.opts = opts
    this.css = cssString
    this.originalCSS = cssString
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute

    this.memoizedFileURLs = new Map()
    this.memoizedPaths = new Map()
    this.memoizedURLs = new Map()
  }

  addAnnotation() {
    let content

    if (this.isInline()) {
      content =
        'data:application/json;base64,' + this.toBase64(this.map.toString())
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation
    } else if (typeof this.mapOpts.annotation === 'function') {
      content = this.mapOpts.annotation(this.opts.to, this.root)
    } else {
      content = this.outputFile() + '.map'
    }
    let eol = '\n'
    if (this.css.includes('\r\n')) eol = '\r\n'

    this.css += eol + '/*# sourceMappingURL=' + content + ' */'
  }

  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file))
      let root = prev.root || dirname(prev.file)
      let map

      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text)
        if (map.sourcesContent) {
          map.sourcesContent = null
        }
      } else {
        map = prev.consumer()
      }

      this.map.applySourceMap(map, from, this.toUrl(this.path(root)))
    }
  }

  clearAnnotation() {
    if (this.mapOpts.annotation === false) return

    if (this.root) {
      let node
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i]
        if (node.type !== 'comment') continue
        if (node.text.indexOf('# sourceMappingURL=') === 0) {
          this.root.removeChild(i)
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, '')
    }
  }

  generate() {
    this.clearAnnotation()
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap()
    } else {
      let result = ''
      this.stringify(this.root, i => {
        result += i
      })
      return [result]
    }
  }

  generateMap() {
    if (this.root) {
      this.generateString()
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer()
      prev.file = this.outputFile()
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      })
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      })
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : '<no source>'
      })
    }

    if (this.isSourcesContent()) this.setSourcesContent()
    if (this.root && this.previous().length > 0) this.applyPrevMaps()
    if (this.isAnnotation()) this.addAnnotation()

    if (this.isInline()) {
      return [this.css]
    } else {
      return [this.css, this.map]
    }
  }

  generateString() {
    this.css = ''
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    })

    let line = 1
    let column = 1

    let noSource = '<no source>'
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ''
    }

    let lines, last
    this.stringify(this.root, (str, node, type) => {
      this.css += str

      if (node && type !== 'end') {
        mapping.generated.line = line
        mapping.generated.column = column - 1
        if (node.source && node.source.start) {
          mapping.source = this.sourcePath(node)
          mapping.original.line = node.source.start.line
          mapping.original.column = node.source.start.column - 1
          this.map.addMapping(mapping)
        } else {
          mapping.source = noSource
          mapping.original.line = 1
          mapping.original.column = 0
          this.map.addMapping(mapping)
        }
      }

      lines = str.match(/\n/g)
      if (lines) {
        line += lines.length
        last = str.lastIndexOf('\n')
        column = str.length - last
      } else {
        column += str.length
      }

      if (node && type !== 'start') {
        let p = node.parent || { raws: {} }
        let childless =
          node.type === 'decl' || (node.type === 'atrule' && !node.nodes)
        if (!childless || node !== p.last || p.raws.semicolon) {
          if (node.source && node.source.end) {
            mapping.source = this.sourcePath(node)
            mapping.original.line = node.source.end.line
            mapping.original.column = node.source.end.column - 1
            mapping.generated.line = line
            mapping.generated.column = column - 2
            this.map.addMapping(mapping)
          } else {
            mapping.source = noSource
            mapping.original.line = 1
            mapping.original.column = 0
            mapping.generated.line = line
            mapping.generated.column = column - 1
            this.map.addMapping(mapping)
          }
        }
      }
    })
  }

  isAnnotation() {
    if (this.isInline()) {
      return true
    }
    if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation
    }
    if (this.previous().length) {
      return this.previous().some(i => i.annotation)
    }
    return true
  }

  isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline
    }

    let annotation = this.mapOpts.annotation
    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false
    }

    if (this.previous().length) {
      return this.previous().some(i => i.inline)
    }
    return true
  }

  isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map
    }
    return this.previous().length > 0
  }

  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent
    }
    if (this.previous().length) {
      return this.previous().some(i => i.withContent())
    }
    return true
  }

  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to)
    } else if (this.opts.from) {
      return this.path(this.opts.from)
    } else {
      return 'to.css'
    }
  }

  path(file) {
    if (this.mapOpts.absolute) return file
    if (file.charCodeAt(0) === 60 /* `<` */) return file
    if (/^\w+:\/\//.test(file)) return file
    let cached = this.memoizedPaths.get(file)
    if (cached) return cached

    let from = this.opts.to ? dirname(this.opts.to) : '.'

    if (typeof this.mapOpts.annotation === 'string') {
      from = dirname(resolve(from, this.mapOpts.annotation))
    }

    let path = relative(from, file)
    this.memoizedPaths.set(file, path)

    return path
  }

  previous() {
    if (!this.previousMaps) {
      this.previousMaps = []
      if (this.root) {
        this.root.walk(node => {
          if (node.source && node.source.input.map) {
            let map = node.source.input.map
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map)
            }
          }
        })
      } else {
        let input = new Input(this.originalCSS, this.opts)
        if (input.map) this.previousMaps.push(input.map)
      }
    }

    return this.previousMaps
  }

  setSourcesContent() {
    let already = {}
    if (this.root) {
      this.root.walk(node => {
        if (node.source) {
          let from = node.source.input.from
          if (from && !already[from]) {
            already[from] = true
            let fromUrl = this.usesFileUrls
              ? this.toFileUrl(from)
              : this.toUrl(this.path(from))
            this.map.setSourceContent(fromUrl, node.source.input.css)
          }
        }
      })
    } else if (this.css) {
      let from = this.opts.from
        ? this.toUrl(this.path(this.opts.from))
        : '<no source>'
      this.map.setSourceContent(from, this.css)
    }
  }

  sourcePath(node) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from)
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node.source.input.from)
    } else {
      return this.toUrl(this.path(node.source.input.from))
    }
  }

  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString('base64')
    } else {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
  }

  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path)
    if (cached) return cached

    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString()
      this.memoizedFileURLs.set(path, fileURL)

      return fileURL
    } else {
      throw new Error(
        '`map.absolute` option is not available in this PostCSS build'
      )
    }
  }

  toUrl(path) {
    let cached = this.memoizedURLs.get(path)
    if (cached) return cached

    if (sep === '\\') {
      path = path.replace(/\\/g, '/')
    }

    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent)
    this.memoizedURLs.set(path, url)

    return url
  }
}

module.exports = MapGenerator


/***/ }),

/***/ "./node_modules/postcss/lib/no-work-result.js":
/*!****************************************************!*\
  !*** ./node_modules/postcss/lib/no-work-result.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let MapGenerator = __webpack_require__(/*! ./map-generator */ "./node_modules/postcss/lib/map-generator.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "./node_modules/postcss/lib/warn-once.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
const Result = __webpack_require__(/*! ./result */ "./node_modules/postcss/lib/result.js")

class NoWorkResult {
  constructor(processor, css, opts) {
    css = css.toString()
    this.stringified = false

    this._processor = processor
    this._css = css
    this._opts = opts
    this._map = undefined
    let root

    let str = stringify
    this.result = new Result(this._processor, root, this._opts)
    this.result.css = css

    let self = this
    Object.defineProperty(this.result, 'root', {
      get() {
        return self.root
      }
    })

    let map = new MapGenerator(str, root, this._opts, css)
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate()
      if (generatedCSS) {
        this.result.css = generatedCSS
      }
      if (generatedMap) {
        this.result.map = generatedMap
      }
    } else {
      map.clearAnnotation()
      this.result.css = map.css
    }
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    return Promise.resolve(this.result)
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  sync() {
    if (this.error) throw this.error
    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this._opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }

    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this._css
  }

  warnings() {
    return []
  }

  get content() {
    return this.result.css
  }

  get css() {
    return this.result.css
  }

  get map() {
    return this.result.map
  }

  get messages() {
    return []
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    if (this._root) {
      return this._root
    }

    let root
    let parser = parse

    try {
      root = parser(this._css, this._opts)
    } catch (error) {
      this.error = error
    }

    if (this.error) {
      throw this.error
    } else {
      this._root = root
      return root
    }
  }

  get [Symbol.toStringTag]() {
    return 'NoWorkResult'
  }
}

module.exports = NoWorkResult
NoWorkResult.default = NoWorkResult


/***/ }),

/***/ "./node_modules/postcss/lib/node.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/node.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let Stringifier = __webpack_require__(/*! ./stringifier */ "./node_modules/postcss/lib/stringifier.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")

function cloneNode(obj, parent) {
  let cloned = new obj.constructor()

  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      /* c8 ignore next 2 */
      continue
    }
    if (i === 'proxyCache') continue
    let value = obj[i]
    let type = typeof value

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent
    } else if (i === 'source') {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(j => cloneNode(j, cloned))
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value)
      cloned[i] = value
    }
  }

  return cloned
}

class Node {
  constructor(defaults = {}) {
    this.raws = {}
    this[isClean] = false
    this[my] = true

    for (let name in defaults) {
      if (name === 'nodes') {
        this.nodes = []
        for (let node of defaults[name]) {
          if (typeof node.clone === 'function') {
            this.append(node.clone())
          } else {
            this.append(node)
          }
        }
      } else {
        this[name] = defaults[name]
      }
    }
  }

  addToError(error) {
    error.postcssNode = this
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      )
    }
    return error
  }

  after(add) {
    this.parent.insertAfter(this, add)
    return this
  }

  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name]
    }
    return this
  }

  before(add) {
    this.parent.insertBefore(this, add)
    return this
  }

  cleanRaws(keepBetween) {
    delete this.raws.before
    delete this.raws.after
    if (!keepBetween) delete this.raws.between
  }

  clone(overrides = {}) {
    let cloned = cloneNode(this)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertAfter(this, cloned)
    return cloned
  }

  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertBefore(this, cloned)
    return cloned
  }

  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts)
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      )
    }
    return new CssSyntaxError(message)
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (
          prop === 'prop' ||
          prop === 'value' ||
          prop === 'name' ||
          prop === 'params' ||
          prop === 'important' ||
          /* c8 ignore next */
          prop === 'text'
        ) {
          node.markDirty()
        }
        return true
      }
    }
  }

  markDirty() {
    if (this[isClean]) {
      this[isClean] = false
      let next = this
      while ((next = next.parent)) {
        next[isClean] = false
      }
    }
  }

  next() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index + 1]
  }

  positionBy(opts, stringRepresentation) {
    let pos = this.source.start
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation)
    } else if (opts.word) {
      stringRepresentation = this.toString()
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) pos = this.positionInside(index, stringRepresentation)
    }
    return pos
  }

  positionInside(index, stringRepresentation) {
    let string = stringRepresentation || this.toString()
    let column = this.source.start.column
    let line = this.source.start.line

    for (let i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1
        line += 1
      } else {
        column += 1
      }
    }

    return { column, line }
  }

  prev() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index - 1]
  }

  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    }
    let end = this.source.end
      ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      }
      : {
        column: start.column + 1,
        line: start.line
      }

    if (opts.word) {
      let stringRepresentation = this.toString()
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) {
        start = this.positionInside(index, stringRepresentation)
        end = this.positionInside(index + opts.word.length, stringRepresentation)
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        }
      } else if (opts.index) {
        start = this.positionInside(opts.index)
      }

      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        }
      } else if (typeof opts.endIndex === 'number') {
        end = this.positionInside(opts.endIndex)
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1)
      }
    }

    if (
      end.line < start.line ||
      (end.line === start.line && end.column <= start.column)
    ) {
      end = { column: start.column + 1, line: start.line }
    }

    return { end, start }
  }

  raw(prop, defaultType) {
    let str = new Stringifier()
    return str.raw(this, prop, defaultType)
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = undefined
    return this
  }

  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this
      let foundSelf = false
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node)
          bookmark = node
        } else {
          this.parent.insertBefore(bookmark, node)
        }
      }

      if (!foundSelf) {
        this.remove()
      }
    }

    return this
  }

  root() {
    let result = this
    while (result.parent && result.parent.type !== 'document') {
      result = result.parent
    }
    return result
  }

  toJSON(_, inputs) {
    let fixed = {}
    let emitInputs = inputs == null
    inputs = inputs || new Map()
    let inputsNextIndex = 0

    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        /* c8 ignore next 2 */
        continue
      }
      if (name === 'parent' || name === 'proxyCache') continue
      let value = this[name]

      if (Array.isArray(value)) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON(null, inputs)
          } else {
            return i
          }
        })
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs)
      } else if (name === 'source') {
        let inputId = inputs.get(value.input)
        if (inputId == null) {
          inputId = inputsNextIndex
          inputs.set(value.input, inputsNextIndex)
          inputsNextIndex++
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        }
      } else {
        fixed[name] = value
      }
    }

    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map(input => input.toJSON())
    }

    return fixed
  }

  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor())
    }
    return this.proxyCache
  }

  toString(stringifier = stringify) {
    if (stringifier.stringify) stringifier = stringifier.stringify
    let result = ''
    stringifier(this, i => {
      result += i
    })
    return result
  }

  warn(result, text, opts) {
    let data = { node: this }
    for (let i in opts) data[i] = opts[i]
    return result.warn(text, data)
  }

  get proxyOf() {
    return this
  }
}

module.exports = Node
Node.default = Node


/***/ }),

/***/ "./node_modules/postcss/lib/parse.js":
/*!*******************************************!*\
  !*** ./node_modules/postcss/lib/parse.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Parser = __webpack_require__(/*! ./parser */ "./node_modules/postcss/lib/parser.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")

function parse(css, opts) {
  let input = new Input(css, opts)
  let parser = new Parser(input)
  try {
    parser.parse()
  } catch (e) {
    if (true) {
      if (e.name === 'CssSyntaxError' && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse SCSS with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-scss parser'
        } else if (/\.sass/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Sass with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-sass parser'
        } else if (/\.less$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Less with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-less parser'
        }
      }
    }
    throw e
  }

  return parser.root
}

module.exports = parse
parse.default = parse

Container.registerParse(parse)


/***/ }),

/***/ "./node_modules/postcss/lib/parser.js":
/*!********************************************!*\
  !*** ./node_modules/postcss/lib/parser.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let tokenizer = __webpack_require__(/*! ./tokenize */ "./node_modules/postcss/lib/tokenize.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")

const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
}

function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i]
    let pos = token[3] || token[2]
    if (pos) return pos
  }
}

class Parser {
  constructor(input) {
    this.input = input

    this.root = new Root()
    this.current = this.root
    this.spaces = ''
    this.semicolon = false

    this.createTokenizer()
    this.root.source = { input, start: { column: 1, line: 1, offset: 0 } }
  }

  atrule(token) {
    let node = new AtRule()
    node.name = token[1].slice(1)
    if (node.name === '') {
      this.unnamedAtrule(node, token)
    }
    this.init(node, token[2])

    let type
    let prev
    let shift
    let last = false
    let open = false
    let params = []
    let brackets = []

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()
      type = token[0]

      if (type === '(' || type === '[') {
        brackets.push(type === '(' ? ')' : ']')
      } else if (type === '{' && brackets.length > 0) {
        brackets.push('}')
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
      }

      if (brackets.length === 0) {
        if (type === ';') {
          node.source.end = this.getPosition(token[2])
          node.source.end.offset++
          this.semicolon = true
          break
        } else if (type === '{') {
          open = true
          break
        } else if (type === '}') {
          if (params.length > 0) {
            shift = params.length - 1
            prev = params[shift]
            while (prev && prev[0] === 'space') {
              prev = params[--shift]
            }
            if (prev) {
              node.source.end = this.getPosition(prev[3] || prev[2])
              node.source.end.offset++
            }
          }
          this.end(token)
          break
        } else {
          params.push(token)
        }
      } else {
        params.push(token)
      }

      if (this.tokenizer.endOfFile()) {
        last = true
        break
      }
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params)
    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params)
      this.raw(node, 'params', params)
      if (last) {
        token = params[params.length - 1]
        node.source.end = this.getPosition(token[3] || token[2])
        node.source.end.offset++
        this.spaces = node.raws.between
        node.raws.between = ''
      }
    } else {
      node.raws.afterName = ''
      node.params = ''
    }

    if (open) {
      node.nodes = []
      this.current = node
    }
  }

  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens)
    if (colon === false) return

    let founded = 0
    let token
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j]
      if (token[0] !== 'space') {
        founded += 1
        if (founded === 2) break
      }
    }
    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
    // And because we need it after that one we do +1 to get the next one.
    throw this.input.error(
      'Missed semicolon',
      token[0] === 'word' ? token[3] + 1 : token[2]
    )
  }

  colon(tokens) {
    let brackets = 0
    let token, type, prev
    for (let [i, element] of tokens.entries()) {
      token = element
      type = token[0]

      if (type === '(') {
        brackets += 1
      }
      if (type === ')') {
        brackets -= 1
      }
      if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token)
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue
        } else {
          return i
        }
      }

      prev = token
    }
    return false
  }

  comment(token) {
    let node = new Comment()
    this.init(node, token[2])
    node.source.end = this.getPosition(token[3] || token[2])
    node.source.end.offset++

    let text = token[1].slice(2, -2)
    if (/^\s*$/.test(text)) {
      node.text = ''
      node.raws.left = text
      node.raws.right = ''
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/)
      node.text = match[2]
      node.raws.left = match[1]
      node.raws.right = match[3]
    }
  }

  createTokenizer() {
    this.tokenizer = tokenizer(this.input)
  }

  decl(tokens, customProperty) {
    let node = new Declaration()
    this.init(node, tokens[0][2])

    let last = tokens[tokens.length - 1]
    if (last[0] === ';') {
      this.semicolon = true
      tokens.pop()
    }

    node.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    )
    node.source.end.offset++

    while (tokens[0][0] !== 'word') {
      if (tokens.length === 1) this.unknownWord(tokens)
      node.raws.before += tokens.shift()[1]
    }
    node.source.start = this.getPosition(tokens[0][2])

    node.prop = ''
    while (tokens.length) {
      let type = tokens[0][0]
      if (type === ':' || type === 'space' || type === 'comment') {
        break
      }
      node.prop += tokens.shift()[1]
    }

    node.raws.between = ''

    let token
    while (tokens.length) {
      token = tokens.shift()

      if (token[0] === ':') {
        node.raws.between += token[1]
        break
      } else {
        if (token[0] === 'word' && /\w/.test(token[1])) {
          this.unknownWord([token])
        }
        node.raws.between += token[1]
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0]
      node.prop = node.prop.slice(1)
    }

    let firstSpaces = []
    let next
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      firstSpaces.push(tokens.shift())
    }

    this.precheckMissedSemicolon(tokens)

    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i]
      if (token[1].toLowerCase() === '!important') {
        node.important = true
        let string = this.stringFrom(tokens, i)
        string = this.spacesFromEnd(tokens) + string
        if (string !== ' !important') node.raws.important = string
        break
      } else if (token[1].toLowerCase() === 'important') {
        let cache = tokens.slice(0)
        let str = ''
        for (let j = i; j > 0; j--) {
          let type = cache[j][0]
          if (str.trim().indexOf('!') === 0 && type !== 'space') {
            break
          }
          str = cache.pop()[1] + str
        }
        if (str.trim().indexOf('!') === 0) {
          node.important = true
          node.raws.important = str
          tokens = cache
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break
      }
    }

    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment')

    if (hasWord) {
      node.raws.between += firstSpaces.map(i => i[1]).join('')
      firstSpaces = []
    }
    this.raw(node, 'value', firstSpaces.concat(tokens), customProperty)

    if (node.value.includes(':') && !customProperty) {
      this.checkMissedSemicolon(tokens)
    }
  }

  doubleColon(token) {
    throw this.input.error(
      'Double colon',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }

  emptyRule(token) {
    let node = new Rule()
    this.init(node, token[2])
    node.selector = ''
    node.raws.between = ''
    this.current = node
  }

  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.semicolon = false

    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.spaces = ''

    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2])
      this.current.source.end.offset++
      this.current = this.current.parent
    } else {
      this.unexpectedClose(token)
    }
  }

  endFile() {
    if (this.current.parent) this.unclosedBlock()
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.root.source.end = this.getPosition(this.tokenizer.position())
  }

  freeSemicolon(token) {
    this.spaces += token[1]
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1]
      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces
        this.spaces = ''
      }
    }
  }

  // Helpers

  getPosition(offset) {
    let pos = this.input.fromOffset(offset)
    return {
      column: pos.col,
      line: pos.line,
      offset
    }
  }

  init(node, offset) {
    this.current.push(node)
    node.source = {
      input: this.input,
      start: this.getPosition(offset)
    }
    node.raws.before = this.spaces
    this.spaces = ''
    if (node.type !== 'comment') this.semicolon = false
  }

  other(start) {
    let end = false
    let type = null
    let colon = false
    let bracket = null
    let brackets = []
    let customProperty = start[1].startsWith('--')

    let tokens = []
    let token = start
    while (token) {
      type = token[0]
      tokens.push(token)

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token
        brackets.push(type === '(' ? ')' : ']')
      } else if (customProperty && colon && type === '{') {
        if (!bracket) bracket = token
        brackets.push('}')
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(tokens, customProperty)
            return
          } else {
            break
          }
        } else if (type === '{') {
          this.rule(tokens)
          return
        } else if (type === '}') {
          this.tokenizer.back(tokens.pop())
          end = true
          break
        } else if (type === ':') {
          colon = true
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
        if (brackets.length === 0) bracket = null
      }

      token = this.tokenizer.nextToken()
    }

    if (this.tokenizer.endOfFile()) end = true
    if (brackets.length > 0) this.unclosedBracket(bracket)

    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0]
          if (token !== 'space' && token !== 'comment') break
          this.tokenizer.back(tokens.pop())
        }
      }
      this.decl(tokens, customProperty)
    } else {
      this.unknownWord(tokens)
    }
  }

  parse() {
    let token
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()

      switch (token[0]) {
        case 'space':
          this.spaces += token[1]
          break

        case ';':
          this.freeSemicolon(token)
          break

        case '}':
          this.end(token)
          break

        case 'comment':
          this.comment(token)
          break

        case 'at-word':
          this.atrule(token)
          break

        case '{':
          this.emptyRule(token)
          break

        default:
          this.other(token)
          break
      }
    }
    this.endFile()
  }

  precheckMissedSemicolon(/* tokens */) {
    // Hook for Safe Parser
  }

  raw(node, prop, tokens, customProperty) {
    let token, type
    let length = tokens.length
    let value = ''
    let clean = true
    let next, prev

    for (let i = 0; i < length; i += 1) {
      token = tokens[i]
      type = token[0]
      if (type === 'space' && i === length - 1 && !customProperty) {
        clean = false
      } else if (type === 'comment') {
        prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty'
        next = tokens[i + 1] ? tokens[i + 1][0] : 'empty'
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ',') {
            clean = false
          } else {
            value += token[1]
          }
        } else {
          clean = false
        }
      } else {
        value += token[1]
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], '')
      node.raws[prop] = { raw, value }
    }
    node[prop] = value
  }

  rule(tokens) {
    tokens.pop()

    let node = new Rule()
    this.init(node, tokens[0][2])

    node.raws.between = this.spacesAndCommentsFromEnd(tokens)
    this.raw(node, 'selector', tokens)
    this.current = node
  }

  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  // Errors

  spacesAndCommentsFromStart(tokens) {
    let next
    let spaces = ''
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      spaces += tokens.shift()[1]
    }
    return spaces
  }

  spacesFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  stringFrom(tokens, from) {
    let result = ''
    for (let i = from; i < tokens.length; i++) {
      result += tokens[i][1]
    }
    tokens.splice(from, tokens.length - from)
    return result
  }

  unclosedBlock() {
    let pos = this.current.source.start
    throw this.input.error('Unclosed block', pos.line, pos.column)
  }

  unclosedBracket(bracket) {
    throw this.input.error(
      'Unclosed bracket',
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    )
  }

  unexpectedClose(token) {
    throw this.input.error(
      'Unexpected }',
      { offset: token[2] },
      { offset: token[2] + 1 }
    )
  }

  unknownWord(tokens) {
    throw this.input.error(
      'Unknown word',
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    )
  }

  unnamedAtrule(node, token) {
    throw this.input.error(
      'At-rule without name',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }
}

module.exports = Parser


/***/ }),

/***/ "./node_modules/postcss/lib/postcss.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/postcss.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "./node_modules/postcss/lib/lazy-result.js")
let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Processor = __webpack_require__(/*! ./processor */ "./node_modules/postcss/lib/processor.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let fromJSON = __webpack_require__(/*! ./fromJSON */ "./node_modules/postcss/lib/fromJSON.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let Warning = __webpack_require__(/*! ./warning */ "./node_modules/postcss/lib/warning.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Result = __webpack_require__(/*! ./result.js */ "./node_modules/postcss/lib/result.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
let list = __webpack_require__(/*! ./list */ "./node_modules/postcss/lib/list.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0]
  }
  return new Processor(plugins)
}

postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false
  function creator(...args) {
    // eslint-disable-next-line no-console
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true
      // eslint-disable-next-line no-console
      console.warn(
        name +
          ': postcss.plugin was deprecated. Migration guide:\n' +
          'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
      )
      if (process.env.LANG && process.env.LANG.startsWith('cn')) {
        /* c8 ignore next 7 */
        // eslint-disable-next-line no-console
        console.warn(
          name +
            ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
            'https://www.w3ctech.com/topic/2226'
        )
      }
    }
    let transformer = initializer(...args)
    transformer.postcssPlugin = name
    transformer.postcssVersion = new Processor().version
    return transformer
  }

  let cache
  Object.defineProperty(creator, 'postcss', {
    get() {
      if (!cache) cache = creator()
      return cache
    }
  })

  creator.process = function (css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts)
  }

  return creator
}

postcss.stringify = stringify
postcss.parse = parse
postcss.fromJSON = fromJSON
postcss.list = list

postcss.comment = defaults => new Comment(defaults)
postcss.atRule = defaults => new AtRule(defaults)
postcss.decl = defaults => new Declaration(defaults)
postcss.rule = defaults => new Rule(defaults)
postcss.root = defaults => new Root(defaults)
postcss.document = defaults => new Document(defaults)

postcss.CssSyntaxError = CssSyntaxError
postcss.Declaration = Declaration
postcss.Container = Container
postcss.Processor = Processor
postcss.Document = Document
postcss.Comment = Comment
postcss.Warning = Warning
postcss.AtRule = AtRule
postcss.Result = Result
postcss.Input = Input
postcss.Rule = Rule
postcss.Root = Root
postcss.Node = Node

LazyResult.registerPostcss(postcss)

module.exports = postcss
postcss.default = postcss


/***/ }),

/***/ "./node_modules/postcss/lib/previous-map.js":
/*!**************************************************!*\
  !*** ./node_modules/postcss/lib/previous-map.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { existsSync, readFileSync } = __webpack_require__(/*! fs */ "?03fb")
let { dirname, join } = __webpack_require__(/*! path */ "?6197")

function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, 'base64').toString()
  } else {
    /* c8 ignore next 2 */
    return window.atob(str)
  }
}

class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return
    this.loadAnnotation(css)
    this.inline = this.startWith(this.annotation, 'data:')

    let prev = opts.map ? opts.map.prev : undefined
    let text = this.loadMap(opts.from, prev)
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from
    }
    if (this.mapFile) this.root = dirname(this.mapFile)
    if (text) this.text = text
  }

  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer(this.text)
    }
    return this.consumerCache
  }

  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/
    let baseUri = /^data:application\/json;base64,/
    let charsetUri = /^data:application\/json;charset=utf-?8,/
    let uri = /^data:application\/json,/

    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length))
    }

    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length))
    }

    let encoding = text.match(/data:application\/json;([^,]+),/)[1]
    throw new Error('Unsupported source map encoding ' + encoding)
  }

  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
  }

  isMap(map) {
    if (typeof map !== 'object') return false
    return (
      typeof map.mappings === 'string' ||
      typeof map._mappings === 'string' ||
      Array.isArray(map.sections)
    )
  }

  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm)
    if (!comments) return

    // sourceMappingURLs from comments, strings, etc.
    let start = css.lastIndexOf(comments.pop())
    let end = css.indexOf('*/', start)

    if (start > -1 && end > -1) {
      // Locate the last sourceMappingURL to avoid pickin
      this.annotation = this.getAnnotationURL(css.substring(start, end))
    }
  }

  loadFile(path) {
    this.root = dirname(path)
    if (existsSync(path)) {
      this.mapFile = path
      return readFileSync(path, 'utf-8').toString().trim()
    }
  }

  loadMap(file, prev) {
    if (prev === false) return false

    if (prev) {
      if (typeof prev === 'string') {
        return prev
      } else if (typeof prev === 'function') {
        let prevPath = prev(file)
        if (prevPath) {
          let map = this.loadFile(prevPath)
          if (!map) {
            throw new Error(
              'Unable to load previous source map: ' + prevPath.toString()
            )
          }
          return map
        }
      } else if (prev instanceof SourceMapConsumer) {
        return SourceMapGenerator.fromSourceMap(prev).toString()
      } else if (prev instanceof SourceMapGenerator) {
        return prev.toString()
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev)
      } else {
        throw new Error(
          'Unsupported previous source map format: ' + prev.toString()
        )
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation)
    } else if (this.annotation) {
      let map = this.annotation
      if (file) map = join(dirname(file), map)
      return this.loadFile(map)
    }
  }

  startWith(string, start) {
    if (!string) return false
    return string.substr(0, start.length) === start
  }

  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    )
  }
}

module.exports = PreviousMap
PreviousMap.default = PreviousMap


/***/ }),

/***/ "./node_modules/postcss/lib/processor.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/processor.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let NoWorkResult = __webpack_require__(/*! ./no-work-result */ "./node_modules/postcss/lib/no-work-result.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "./node_modules/postcss/lib/lazy-result.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")

class Processor {
  constructor(plugins = []) {
    this.version = '8.4.38'
    this.plugins = this.normalize(plugins)
  }

  normalize(plugins) {
    let normalized = []
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i()
      } else if (i.postcss) {
        i = i.postcss
      }

      if (typeof i === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins)
      } else if (typeof i === 'object' && i.postcssPlugin) {
        normalized.push(i)
      } else if (typeof i === 'function') {
        normalized.push(i)
      } else if (typeof i === 'object' && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            'PostCSS syntaxes cannot be used as plugins. Instead, please use ' +
              'one of the syntax/parser/stringifier options as outlined ' +
              'in your PostCSS runner documentation.'
          )
        }
      } else {
        throw new Error(i + ' is not a PostCSS plugin')
      }
    }
    return normalized
  }

  process(css, opts = {}) {
    if (
      !this.plugins.length &&
      !opts.parser &&
      !opts.stringifier &&
      !opts.syntax
    ) {
      return new NoWorkResult(this, css, opts)
    } else {
      return new LazyResult(this, css, opts)
    }
  }

  use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]))
    return this
  }
}

module.exports = Processor
Processor.default = Processor

Root.registerProcessor(Processor)
Document.registerProcessor(Processor)


/***/ }),

/***/ "./node_modules/postcss/lib/result.js":
/*!********************************************!*\
  !*** ./node_modules/postcss/lib/result.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Warning = __webpack_require__(/*! ./warning */ "./node_modules/postcss/lib/warning.js")

class Result {
  constructor(processor, root, opts) {
    this.processor = processor
    this.messages = []
    this.root = root
    this.opts = opts
    this.css = undefined
    this.map = undefined
  }

  toString() {
    return this.css
  }

  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin
      }
    }

    let warning = new Warning(text, opts)
    this.messages.push(warning)

    return warning
  }

  warnings() {
    return this.messages.filter(i => i.type === 'warning')
  }

  get content() {
    return this.css
  }
}

module.exports = Result
Result.default = Result


/***/ }),

/***/ "./node_modules/postcss/lib/root.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/root.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Root extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'root'
    if (!this.nodes) this.nodes = []
  }

  normalize(child, sample, type) {
    let nodes = super.normalize(child)

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before
        } else {
          delete sample.raws.before
        }
      } else if (this.first !== sample) {
        for (let node of nodes) {
          node.raws.before = sample.raws.before
        }
      }
    }

    return nodes
  }

  removeChild(child, ignore) {
    let index = this.index(child)

    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before
    }

    return super.removeChild(child)
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)
    return lazy.stringify()
  }
}

Root.registerLazyResult = dependant => {
  LazyResult = dependant
}

Root.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Root
Root.default = Root

Container.registerRoot(Root)


/***/ }),

/***/ "./node_modules/postcss/lib/rule.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/rule.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let list = __webpack_require__(/*! ./list */ "./node_modules/postcss/lib/list.js")

class Rule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'rule'
    if (!this.nodes) this.nodes = []
  }

  get selectors() {
    return list.comma(this.selector)
  }

  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null
    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen')
    this.selector = values.join(sep)
  }
}

module.exports = Rule
Rule.default = Rule

Container.registerRule(Rule)


/***/ }),

/***/ "./node_modules/postcss/lib/stringifier.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/stringifier.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


const DEFAULT_RAW = {
  after: '\n',
  beforeClose: '\n',
  beforeComment: '\n',
  beforeDecl: '\n',
  beforeOpen: ' ',
  beforeRule: '\n',
  colon: ': ',
  commentLeft: ' ',
  commentRight: ' ',
  emptyBody: '',
  indent: '    ',
  semicolon: false
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  atrule(node, semicolon) {
    let name = '@' + node.name
    let params = node.params ? this.rawValue(node, 'params') : ''

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName
    } else if (params) {
      name += ' '
    }

    if (node.nodes) {
      this.block(node, name + params)
    } else {
      let end = (node.raws.between || '') + (semicolon ? ';' : '')
      this.builder(name + params + end, node)
    }
  }

  beforeAfter(node, detect) {
    let value
    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment')
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule')
    } else {
      value = this.raw(node, null, 'beforeClose')
    }

    let buf = node.parent
    let depth = 0
    while (buf && buf.type !== 'root') {
      depth += 1
      buf = buf.parent
    }

    if (value.includes('\n')) {
      let indent = this.raw(node, null, 'indent')
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent
      }
    }

    return value
  }

  block(node, start) {
    let between = this.raw(node, 'between', 'beforeOpen')
    this.builder(start + between + '{', node, 'start')

    let after
    if (node.nodes && node.nodes.length) {
      this.body(node)
      after = this.raw(node, 'after')
    } else {
      after = this.raw(node, 'after', 'emptyBody')
    }

    if (after) this.builder(after)
    this.builder('}', node, 'end')
  }

  body(node) {
    let last = node.nodes.length - 1
    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break
      last -= 1
    }

    let semicolon = this.raw(node, 'semicolon')
    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i]
      let before = this.raw(child, 'before')
      if (before) this.builder(before)
      this.stringify(child, last !== i || semicolon)
    }
  }

  comment(node) {
    let left = this.raw(node, 'left', 'commentLeft')
    let right = this.raw(node, 'right', 'commentRight')
    this.builder('/*' + left + node.text + right + '*/', node)
  }

  decl(node, semicolon) {
    let between = this.raw(node, 'between', 'colon')
    let string = node.prop + between + this.rawValue(node, 'value')

    if (node.important) {
      string += node.raws.important || ' !important'
    }

    if (semicolon) string += ';'
    this.builder(string, node)
  }

  document(node) {
    this.body(node)
  }

  raw(node, own, detect) {
    let value
    if (!detect) detect = own

    // Already had
    if (own) {
      value = node.raws[own]
      if (typeof value !== 'undefined') return value
    }

    let parent = node.parent

    if (detect === 'before') {
      // Hack for first rule in CSS
      if (!parent || (parent.type === 'root' && parent.first === node)) {
        return ''
      }

      // `root` nodes in `document` should use only their own raws
      if (parent && parent.type === 'document') {
        return ''
      }
    }

    // Floating child without parent
    if (!parent) return DEFAULT_RAW[detect]

    // Detect style by other nodes
    let root = node.root()
    if (!root.rawCache) root.rawCache = {}
    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect]
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect)
    } else {
      let method = 'raw' + capitalize(detect)
      if (this[method]) {
        value = this[method](root, node)
      } else {
        root.walk(i => {
          value = i.raws[own]
          if (typeof value !== 'undefined') return false
        })
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect]

    root.rawCache[detect] = value
    return value
  }

  rawBeforeClose(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeComment(root, node) {
    let value
    root.walkComments(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeDecl(root, node) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeOpen(root) {
    let value
    root.walk(i => {
      if (i.type !== 'decl') {
        value = i.raws.between
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawBeforeRule(root) {
    let value
    root.walk(i => {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawColon(root) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '')
        return false
      }
    })
    return value
  }

  rawEmptyBody(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawIndent(root) {
    if (root.raws.indent) return root.raws.indent
    let value
    root.walk(i => {
      let p = i.parent
      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          let parts = i.raws.before.split('\n')
          value = parts[parts.length - 1]
          value = value.replace(/\S/g, '')
          return false
        }
      }
    })
    return value
  }

  rawSemicolon(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawValue(node, prop) {
    let value = node[prop]
    let raw = node.raws[prop]
    if (raw && raw.value === value) {
      return raw.raw
    }

    return value
  }

  root(node) {
    this.body(node)
    if (node.raws.after) this.builder(node.raws.after)
  }

  rule(node) {
    this.block(node, this.rawValue(node, 'selector'))
    if (node.raws.ownSemicolon) {
      this.builder(node.raws.ownSemicolon, node, 'end')
    }
  }

  stringify(node, semicolon) {
    /* c8 ignore start */
    if (!this[node.type]) {
      throw new Error(
        'Unknown AST node type ' +
          node.type +
          '. ' +
          'Maybe you need to change PostCSS stringifier.'
      )
    }
    /* c8 ignore stop */
    this[node.type](node, semicolon)
  }
}

module.exports = Stringifier
Stringifier.default = Stringifier


/***/ }),

/***/ "./node_modules/postcss/lib/stringify.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/stringify.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Stringifier = __webpack_require__(/*! ./stringifier */ "./node_modules/postcss/lib/stringifier.js")

function stringify(node, builder) {
  let str = new Stringifier(builder)
  str.stringify(node)
}

module.exports = stringify
stringify.default = stringify


/***/ }),

/***/ "./node_modules/postcss/lib/symbols.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/symbols.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports.isClean = Symbol('isClean')

module.exports.my = Symbol('my')


/***/ }),

/***/ "./node_modules/postcss/lib/tokenize.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/tokenize.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


const SINGLE_QUOTE = "'".charCodeAt(0)
const DOUBLE_QUOTE = '"'.charCodeAt(0)
const BACKSLASH = '\\'.charCodeAt(0)
const SLASH = '/'.charCodeAt(0)
const NEWLINE = '\n'.charCodeAt(0)
const SPACE = ' '.charCodeAt(0)
const FEED = '\f'.charCodeAt(0)
const TAB = '\t'.charCodeAt(0)
const CR = '\r'.charCodeAt(0)
const OPEN_SQUARE = '['.charCodeAt(0)
const CLOSE_SQUARE = ']'.charCodeAt(0)
const OPEN_PARENTHESES = '('.charCodeAt(0)
const CLOSE_PARENTHESES = ')'.charCodeAt(0)
const OPEN_CURLY = '{'.charCodeAt(0)
const CLOSE_CURLY = '}'.charCodeAt(0)
const SEMICOLON = ';'.charCodeAt(0)
const ASTERISK = '*'.charCodeAt(0)
const COLON = ':'.charCodeAt(0)
const AT = '@'.charCodeAt(0)

const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/
const RE_HEX_ESCAPE = /[\da-f]/i

module.exports = function tokenizer(input, options = {}) {
  let css = input.css.valueOf()
  let ignore = options.ignoreErrors

  let code, next, quote, content, escape
  let escaped, escapePos, prev, n, currentToken

  let length = css.length
  let pos = 0
  let buffer = []
  let returned = []

  function position() {
    return pos
  }

  function unclosed(what) {
    throw input.error('Unclosed ' + what, pos)
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length
  }

  function nextToken(opts) {
    if (returned.length) return returned.pop()
    if (pos >= length) return

    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false

    code = css.charCodeAt(pos)

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos
        do {
          next += 1
          code = css.charCodeAt(next)
        } while (
          code === SPACE ||
          code === NEWLINE ||
          code === TAB ||
          code === CR ||
          code === FEED
        )

        currentToken = ['space', css.slice(pos, next)]
        pos = next - 1
        break
      }

      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code)
        currentToken = [controlChar, controlChar, pos]
        break
      }

      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : ''
        n = css.charCodeAt(pos + 1)
        if (
          prev === 'url' &&
          n !== SINGLE_QUOTE &&
          n !== DOUBLE_QUOTE &&
          n !== SPACE &&
          n !== NEWLINE &&
          n !== TAB &&
          n !== FEED &&
          n !== CR
        ) {
          next = pos
          do {
            escaped = false
            next = css.indexOf(')', next + 1)
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos
                break
              } else {
                unclosed('bracket')
              }
            }
            escapePos = next
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1
              escaped = !escaped
            }
          } while (escaped)

          currentToken = ['brackets', css.slice(pos, next + 1), pos, next]

          pos = next
        } else {
          next = css.indexOf(')', pos + 1)
          content = css.slice(pos, next + 1)

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ['(', '(', pos]
          } else {
            currentToken = ['brackets', content, pos, next]
            pos = next
          }
        }

        break
      }

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"'
        next = pos
        do {
          escaped = false
          next = css.indexOf(quote, next + 1)
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1
              break
            } else {
              unclosed('string')
            }
          }
          escapePos = next
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1
            escaped = !escaped
          }
        } while (escaped)

        currentToken = ['string', css.slice(pos, next + 1), pos, next]
        pos = next
        break
      }

      case AT: {
        RE_AT_END.lastIndex = pos + 1
        RE_AT_END.test(css)
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1
        } else {
          next = RE_AT_END.lastIndex - 2
        }

        currentToken = ['at-word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      case BACKSLASH: {
        next = pos
        escape = true
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1
          escape = !escape
        }
        code = css.charCodeAt(next + 1)
        if (
          escape &&
          code !== SLASH &&
          code !== SPACE &&
          code !== NEWLINE &&
          code !== TAB &&
          code !== CR &&
          code !== FEED
        ) {
          next += 1
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length
            } else {
              unclosed('comment')
            }
          }

          currentToken = ['comment', css.slice(pos, next + 1), pos, next]
          pos = next
        } else {
          RE_WORD_END.lastIndex = pos + 1
          RE_WORD_END.test(css)
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1
          } else {
            next = RE_WORD_END.lastIndex - 2
          }

          currentToken = ['word', css.slice(pos, next + 1), pos, next]
          buffer.push(currentToken)
          pos = next
        }

        break
      }
    }

    pos++
    return currentToken
  }

  function back(token) {
    returned.push(token)
  }

  return {
    back,
    endOfFile,
    nextToken,
    position
  }
}


/***/ }),

/***/ "./node_modules/postcss/lib/warn-once.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/warn-once.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
/* eslint-disable no-console */


let printed = {}

module.exports = function warnOnce(message) {
  if (printed[message]) return
  printed[message] = true

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message)
  }
}


/***/ }),

/***/ "./node_modules/postcss/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/warning.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


class Warning {
  constructor(text, opts = {}) {
    this.type = 'warning'
    this.text = text

    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts)
      this.line = range.start.line
      this.column = range.start.column
      this.endLine = range.end.line
      this.endColumn = range.end.column
    }

    for (let opt in opts) this[opt] = opts[opt]
  }

  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message
    }

    if (this.plugin) {
      return this.plugin + ': ' + this.text
    }

    return this.text
  }
}

module.exports = Warning
Warning.default = Warning


/***/ }),

/***/ "?3465":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/fraction.js/fraction.cjs":
/*!***********************************************!*\
  !*** ./node_modules/fraction.js/fraction.cjs ***!
  \***********************************************/
/***/ (function(module, exports) {

/**
 * @license Fraction.js v4.3.7 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/


/**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * [ n => <numerator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */

(function(root) {

  "use strict";

  // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
  // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
  // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
  var MAX_CYCLE_LEN = 2000;

  // Parsed data to avoid calling "new" all the time
  var P = {
    "s": 1,
    "n": 0,
    "d": 1
  };

  function assign(n, s) {

    if (isNaN(n = parseInt(n, 10))) {
      throw InvalidParameter();
    }
    return n * s;
  }

  // Creates a new Fraction internally without the need of the bulky constructor
  function newFraction(n, d) {

    if (d === 0) {
      throw DivisionByZero();
    }

    var f = Object.create(Fraction.prototype);
    f["s"] = n < 0 ? -1 : 1;

    n = n < 0 ? -n : n;

    var a = gcd(n, d);

    f["n"] = n / a;
    f["d"] = d / a;
    return f;
  }

  function factorize(num) {

    var factors = {};

    var n = num;
    var i = 2;
    var s = 4;

    while (s <= n) {

      while (n % i === 0) {
        n/= i;
        factors[i] = (factors[i] || 0) + 1;
      }
      s+= 1 + 2 * i++;
    }

    if (n !== num) {
      if (n > 1)
        factors[n] = (factors[n] || 0) + 1;
    } else {
      factors[num] = (factors[num] || 0) + 1;
    }
    return factors;
  }

  var parse = function(p1, p2) {

    var n = 0, d = 1, s = 1;
    var v = 0, w = 0, x = 0, y = 1, z = 1;

    var A = 0, B = 1;
    var C = 1, D = 1;

    var N = 10000000;
    var M;

    if (p1 === undefined || p1 === null) {
      /* void */
    } else if (p2 !== undefined) {
      n = p1;
      d = p2;
      s = n * d;

      if (n % 1 !== 0 || d % 1 !== 0) {
        throw NonIntegerParameter();
      }

    } else
      switch (typeof p1) {

        case "object":
          {
            if ("d" in p1 && "n" in p1) {
              n = p1["n"];
              d = p1["d"];
              if ("s" in p1)
                n*= p1["s"];
            } else if (0 in p1) {
              n = p1[0];
              if (1 in p1)
                d = p1[1];
            } else {
              throw InvalidParameter();
            }
            s = n * d;
            break;
          }
        case "number":
          {
            if (p1 < 0) {
              s = p1;
              p1 = -p1;
            }

            if (p1 % 1 === 0) {
              n = p1;
            } else if (p1 > 0) { // check for != 0, scale would become NaN (log(0)), which converges really slow

              if (p1 >= 1) {
                z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                p1/= z;
              }

              // Using Farey Sequences
              // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/

              while (B <= N && D <= N) {
                M = (A + C) / (B + D);

                if (p1 === M) {
                  if (B + D <= N) {
                    n = A + C;
                    d = B + D;
                  } else if (D > B) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                  break;

                } else {

                  if (p1 > M) {
                    A+= C;
                    B+= D;
                  } else {
                    C+= A;
                    D+= B;
                  }

                  if (B > N) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                }
              }
              n*= z;
            } else if (isNaN(p1) || isNaN(p2)) {
              d = n = NaN;
            }
            break;
          }
        case "string":
          {
            B = p1.match(/\d+|./g);

            if (B === null)
              throw InvalidParameter();

            if (B[A] === '-') {// Check for minus sign at the beginning
              s = -1;
              A++;
            } else if (B[A] === '+') {// Check for plus sign at the beginning
              A++;
            }

            if (B.length === A + 1) { // Check if it's just a simple number "1234"
              w = assign(B[A++], s);
            } else if (B[A + 1] === '.' || B[A] === '.') { // Check if it's a decimal number

              if (B[A] !== '.') { // Handle 0.5 and .5
                v = assign(B[A++], s);
              }
              A++;

              // Check for decimal places
              if (A + 1 === B.length || B[A + 1] === '(' && B[A + 3] === ')' || B[A + 1] === "'" && B[A + 3] === "'") {
                w = assign(B[A], s);
                y = Math.pow(10, B[A].length);
                A++;
              }

              // Check for repeating places
              if (B[A] === '(' && B[A + 2] === ')' || B[A] === "'" && B[A + 2] === "'") {
                x = assign(B[A + 1], s);
                z = Math.pow(10, B[A + 1].length) - 1;
                A+= 3;
              }

            } else if (B[A + 1] === '/' || B[A + 1] === ':') { // Check for a simple fraction "123/456" or "123:456"
              w = assign(B[A], s);
              y = assign(B[A + 2], 1);
              A+= 3;
            } else if (B[A + 3] === '/' && B[A + 1] === ' ') { // Check for a complex fraction "123 1/2"
              v = assign(B[A], s);
              w = assign(B[A + 2], s);
              y = assign(B[A + 4], 1);
              A+= 5;
            }

            if (B.length <= A) { // Check for more tokens on the stack
              d = y * z;
              s = /* void */
              n = x + d * v + z * w;
              break;
            }

            /* Fall through on error */
          }
        default:
          throw InvalidParameter();
      }

    if (d === 0) {
      throw DivisionByZero();
    }

    P["s"] = s < 0 ? -1 : 1;
    P["n"] = Math.abs(n);
    P["d"] = Math.abs(d);
  };

  function modpow(b, e, m) {

    var r = 1;
    for (; e > 0; b = (b * b) % m, e >>= 1) {

      if (e & 1) {
        r = (r * b) % m;
      }
    }
    return r;
  }


  function cycleLen(n, d) {

    for (; d % 2 === 0;
      d/= 2) {
    }

    for (; d % 5 === 0;
      d/= 5) {
    }

    if (d === 1) // Catch non-cyclic numbers
      return 0;

    // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
    // 10^(d-1) % d == 1
    // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
    // as we want to translate the numbers to strings.

    var rem = 10 % d;
    var t = 1;

    for (; rem !== 1; t++) {
      rem = rem * 10 % d;

      if (t > MAX_CYCLE_LEN)
        return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
    }
    return t;
  }


  function cycleStart(n, d, len) {

    var rem1 = 1;
    var rem2 = modpow(10, len, d);

    for (var t = 0; t < 300; t++) { // s < ~log10(Number.MAX_VALUE)
      // Solve 10^s == 10^(s+t) (mod d)

      if (rem1 === rem2)
        return t;

      rem1 = rem1 * 10 % d;
      rem2 = rem2 * 10 % d;
    }
    return 0;
  }

  function gcd(a, b) {

    if (!a)
      return b;
    if (!b)
      return a;

    while (1) {
      a%= b;
      if (!a)
        return b;
      b%= a;
      if (!b)
        return a;
    }
  };

  /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */
  function Fraction(a, b) {

    parse(a, b);

    if (this instanceof Fraction) {
      a = gcd(P["d"], P["n"]); // Abuse variable a
      this["s"] = P["s"];
      this["n"] = P["n"] / a;
      this["d"] = P["d"] / a;
    } else {
      return newFraction(P['s'] * P['n'], P['d']);
    }
  }

  var DivisionByZero = function() { return new Error("Division by Zero"); };
  var InvalidParameter = function() { return new Error("Invalid argument"); };
  var NonIntegerParameter = function() { return new Error("Parameters must be integer"); };

  Fraction.prototype = {

    "s": 1,
    "n": 0,
    "d": 1,

    /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/
    "abs": function() {

      return newFraction(this["n"], this["d"]);
    },

    /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/
    "neg": function() {

      return newFraction(-this["s"] * this["n"], this["d"]);
    },

    /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/
    "add": function(a, b) {

      parse(a, b);
      return newFraction(
        this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/
    "sub": function(a, b) {

      parse(a, b);
      return newFraction(
        this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/
    "mul": function(a, b) {

      parse(a, b);
      return newFraction(
        this["s"] * P["s"] * this["n"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/
    "div": function(a, b) {

      parse(a, b);
      return newFraction(
        this["s"] * P["s"] * this["n"] * P["d"],
        this["d"] * P["n"]
      );
    },

    /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/
    "clone": function() {
      return newFraction(this['s'] * this['n'], this['d']);
    },

    /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/
    "mod": function(a, b) {

      if (isNaN(this['n']) || isNaN(this['d'])) {
        return new Fraction(NaN);
      }

      if (a === undefined) {
        return newFraction(this["s"] * this["n"] % this["d"], 1);
      }

      parse(a, b);
      if (0 === P["n"] && 0 === this["d"]) {
        throw DivisionByZero();
      }

      /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/

      /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */
      return newFraction(
        this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
        P["d"] * this["d"]
      );
    },

    /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */
    "gcd": function(a, b) {

      parse(a, b);

      // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)

      return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
    },

    /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */
    "lcm": function(a, b) {

      parse(a, b);

      // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)

      if (P["n"] === 0 && this["n"] === 0) {
        return newFraction(0, 1);
      }
      return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
    },

    /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/
    "ceil": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/
    "floor": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/
    "round": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Rounds a rational number to a multiple of another rational number
     *
     * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
     **/
    "roundTo": function(a, b) {

      /*
      k * x/y ≤ a/b < (k+1) * x/y
      ⇔ k ≤ a/b / (x/y) < (k+1)
      ⇔ k = floor(a/b * y/x)
      */

      parse(a, b);

      return newFraction(this['s'] * Math.round(this['n'] * P['d'] / (this['d'] * P['n'])) * P['n'], P['d']);
    },

    /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/
    "inverse": function() {

      return newFraction(this["s"] * this["d"], this["n"]);
    },

    /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */
    "pow": function(a, b) {

      parse(a, b);

      // Trivial case when exp is an integer

      if (P['d'] === 1) {

        if (P['s'] < 0) {
          return newFraction(Math.pow(this['s'] * this["d"], P['n']), Math.pow(this["n"], P['n']));
        } else {
          return newFraction(Math.pow(this['s'] * this["n"], P['n']), Math.pow(this["d"], P['n']));
        }
      }

      // Negative roots become complex
      //     (-a/b)^(c/d) = x
      // <=> (-1)^(c/d) * (a/b)^(c/d) = x
      // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
      // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
      // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
      if (this['s'] < 0) return null;

      // Now prime factor n and d
      var N = factorize(this['n']);
      var D = factorize(this['d']);

      // Exponentiate and take root for n and d individually
      var n = 1;
      var d = 1;
      for (var k in N) {
        if (k === '1') continue;
        if (k === '0') {
          n = 0;
          break;
        }
        N[k]*= P['n'];

        if (N[k] % P['d'] === 0) {
          N[k]/= P['d'];
        } else return null;
        n*= Math.pow(k, N[k]);
      }

      for (var k in D) {
        if (k === '1') continue;
        D[k]*= P['n'];

        if (D[k] % P['d'] === 0) {
          D[k]/= P['d'];
        } else return null;
        d*= Math.pow(k, D[k]);
      }

      if (P['s'] < 0) {
        return newFraction(d, n);
      }
      return newFraction(n, d);
    },

    /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    "equals": function(a, b) {

      parse(a, b);
      return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
    },

    /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    "compare": function(a, b) {

      parse(a, b);
      var t = (this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"]);
      return (0 < t) - (t < 0);
    },

    "simplify": function(eps) {

      if (isNaN(this['n']) || isNaN(this['d'])) {
        return this;
      }

      eps = eps || 0.001;

      var thisABS = this['abs']();
      var cont = thisABS['toContinued']();

      for (var i = 1; i < cont.length; i++) {

        var s = newFraction(cont[i - 1], 1);
        for (var k = i - 2; k >= 0; k--) {
          s = s['inverse']()['add'](cont[k]);
        }

        if (Math.abs(s['sub'](thisABS).valueOf()) < eps) {
          return s['mul'](this['s']);
        }
      }
      return this;
    },

    /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */
    "divisible": function(a, b) {

      parse(a, b);
      return !(!(P["n"] * this["d"]) || ((this["n"] * P["d"]) % (P["n"] * this["d"])));
    },

    /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/
    'valueOf': function() {

      return this["s"] * this["n"] / this["d"];
    },

    /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/
    'toFraction': function(excludeWhole) {

      var whole, str = "";
      var n = this["n"];
      var d = this["d"];
      if (this["s"] < 0) {
        str+= '-';
      }

      if (d === 1) {
        str+= n;
      } else {

        if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
          str+= whole;
          str+= " ";
          n%= d;
        }

        str+= n;
        str+= '/';
        str+= d;
      }
      return str;
    },

    /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/
    'toLatex': function(excludeWhole) {

      var whole, str = "";
      var n = this["n"];
      var d = this["d"];
      if (this["s"] < 0) {
        str+= '-';
      }

      if (d === 1) {
        str+= n;
      } else {

        if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
          str+= whole;
          n%= d;
        }

        str+= "\\frac{";
        str+= n;
        str+= '}{';
        str+= d;
        str+= '}';
      }
      return str;
    },

    /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */
    'toContinued': function() {

      var t;
      var a = this['n'];
      var b = this['d'];
      var res = [];

      if (isNaN(a) || isNaN(b)) {
        return res;
      }

      do {
        res.push(Math.floor(a / b));
        t = a % b;
        a = b;
        b = t;
      } while (a !== 1);

      return res;
    },

    /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/
    'toString': function(dec) {

      var N = this["n"];
      var D = this["d"];

      if (isNaN(N) || isNaN(D)) {
        return "NaN";
      }

      dec = dec || 15; // 15 = decimal places when no repetation

      var cycLen = cycleLen(N, D); // Cycle length
      var cycOff = cycleStart(N, D, cycLen); // Cycle start

      var str = this['s'] < 0 ? "-" : "";

      str+= N / D | 0;

      N%= D;
      N*= 10;

      if (N)
        str+= ".";

      if (cycLen) {

        for (var i = cycOff; i--;) {
          str+= N / D | 0;
          N%= D;
          N*= 10;
        }
        str+= "(";
        for (var i = cycLen; i--;) {
          str+= N / D | 0;
          N%= D;
          N*= 10;
        }
        str+= ")";
      } else {
        for (var i = dec; N && i--;) {
          str+= N / D | 0;
          N%= D;
          N*= 10;
        }
      }
      return str;
    }
  };

  if (true) {
    Object.defineProperty(exports, "__esModule", ({ 'value': true }));
    exports["default"] = Fraction;
    module['exports'] = Fraction;
  } else {}

})(this);


/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.cjs ***!
  \**************************************************/
/***/ ((module) => {

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = ''
    let i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
module.exports = { nanoid, customAlphabet }


/***/ }),

/***/ "./node_modules/node-releases/data/processed/envs.json":
/*!*************************************************************!*\
  !*** ./node_modules/node-releases/data/processed/envs.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.3.8.0"},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.5.1.0"},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.2.0"},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.8.25"},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false,"v8":"3.6.6.6"},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false,"v8":"3.8.6.0"},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false,"v8":"3.11.10.10"},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false,"v8":"3.11.10.15"},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false,"v8":"3.14.5.8"},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false,"v8":"3.17.13.0"},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false,"v8":"3.28.73.0"},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false,"v8":"4.5.103.30"},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false,"v8":"4.5.103.33"},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false,"v8":"4.5.103.43"},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false,"v8":"4.5.103.45"},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true,"v8":"4.5.103.53"},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false,"v8":"4.6.85.28"},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false,"v8":"4.6.85.32"},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false,"v8":"5.0.71.47"},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false,"v8":"5.0.71.52"},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false,"v8":"5.0.71.60"},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false,"v8":"5.1.281.81"},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false,"v8":"5.1.281.93"},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false,"v8":"5.1.281.102"},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false,"v8":"5.1.281.108"},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false,"v8":"5.4.500.43"},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false,"v8":"5.4.500.48"},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false,"v8":"5.5.372.40"},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false,"v8":"5.5.372.41"},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false,"v8":"6.1.534.46"},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false,"v8":"6.2.414.66"},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false,"v8":"6.2.414.75"},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false,"v8":"6.2.414.77"},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true,"v8":"6.2.414.78"},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false,"v8":"6.2.414.44"},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false,"v8":"6.6.346.24"},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false,"v8":"6.6.346.27"},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false,"v8":"6.7.288.43"},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false,"v8":"6.8.275.24"},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false,"v8":"6.8.275.30"},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false,"v8":"7.0.276.28"},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false,"v8":"7.0.276.32"},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false,"v8":"7.7.299.11"},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false,"v8":"7.9.317.23"},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false,"v8":"8.1.307.30"},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false,"v8":"8.3.110.9"},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false,"v8":"8.6.395.16"},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false,"v8":"9.0.257.17"},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false,"v8":"9.0.257.24"},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false,"v8":"9.1.269.36"},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false,"v8":"9.1.269.38"},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false,"v8":"9.3.345.16"},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false,"v8":"9.3.345.19"},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.20.0","date":"2023-03-28","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false,"v8":"9.5.172.21"},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false,"v8":"9.5.172.25"},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false,"v8":"9.6.180.14"},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.15.0","date":"2023-03-05","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.16.0","date":"2023-04-12","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.17.0","date":"2023-07-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.18.0","date":"2023-09-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.19.0","date":"2023-11-29","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false,"v8":"10.7.193.13"},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false,"v8":"10.7.193.20"},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false,"v8":"10.8.168.20"},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false,"v8":"10.8.168.21"},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.7.0","date":"2023-02-21","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.8.0","date":"2023-03-14","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.9.0","date":"2023-04-10","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"20.0.0","date":"2023-04-17","lts":false,"security":false,"v8":"11.3.244.4"},{"name":"nodejs","version":"20.1.0","date":"2023-05-03","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.2.0","date":"2023-05-16","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.3.0","date":"2023-06-08","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.4.0","date":"2023-07-04","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.5.0","date":"2023-07-19","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.6.0","date":"2023-08-23","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.7.0","date":"2023-09-18","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.8.0","date":"2023-09-28","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.9.0","date":"2023-10-24","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.10.0","date":"2023-11-22","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"21.0.0","date":"2023-10-17","lts":false,"security":false,"v8":"11.8.172.13"},{"name":"nodejs","version":"21.1.0","date":"2023-10-24","lts":false,"security":false,"v8":"11.8.172.15"},{"name":"nodejs","version":"21.2.0","date":"2023-11-14","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.3.0","date":"2023-11-30","lts":false,"security":false,"v8":"11.8.172.17"}]');

/***/ }),

/***/ "./node_modules/node-releases/data/release-schedule/release-schedule.json":
/*!********************************************************************************!*\
  !*** ./node_modules/node-releases/data/release-schedule/release-schedule.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":"Iron"},"v21":{"start":"2023-10-17","maintenance":"2024-04-01","end":"2024-06-01"},"v22":{"start":"2024-04-23","lts":"2024-10-29","maintenance":"2025-10-21","end":"2027-04-30","codename":""},"v23":{"start":"2024-10-15","maintenance":"2025-04-01","end":"2025-06-01"},"v24":{"start":"2025-04-22","lts":"2025-10-28","maintenance":"2026-10-20","end":"2028-04-30","codename":""}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/


const {
  data
} = __webpack_require__(/*! autoprefixer */ "./node_modules/autoprefixer/lib/autoprefixer.js");
document.addEventListener('DOMContentLoaded', () => {
  //Tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  // Function to hide <div class="tabcontent"> and <div class="tabheader__item">
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  // Function to show <div class="tabcontent"> and <div class="tabheader__item"> by it's index
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();

  //Delegated eventListener for <div class="tabheader__item"> to show choosen one tab and tabcontent
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer

  const deadLine = '2024-06-21';
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)), hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / 1000 / 60 % 60), seconds = Math.floor(t / 1000 % 60);
    }
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadLine);

  //Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal');
  function openModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //it'll fixate all the document; user can't scroll the page
    clearInterval(modalTimerId);
  }
  modalTrigger.forEach(trigger => {
    trigger.addEventListener('click', openModal);
  });
  function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
  }
  modalWindow.addEventListener('click', e => {
    if (e.target === modalWindow || e.target.getAttribute(['data-close']) == '') {
      closeModal();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModal();
    }
  });
  const modalTimerId = setTimeout(openModal, 15000);
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  //Menu-item class

  class MenuItem {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.transfer = 40;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const item = document.createElement('div');
      if (this.classes.length === 0) {
        this.item = 'menu__item';
        item.classList.add(this.item);
      } else {
        this.classes.forEach(className => item.classList.add(className));
      }
      item.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;
      this.parent.append(item);
    }
  }
  new MenuItem("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu__field .container').render();
  new MenuItem("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 15, '.menu__field .container').render();
  new MenuItem("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 12, '.menu__field .container').render();

  //Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Thanks! We will contact with you soon!',
    failure: 'Oops... Something went wrong!'
  };
  forms.forEach(form => bindPostData(form));

  //Function to connecting to the server
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    const thanksModalWrapper = document.createElement('div');
    thanksModalWrapper.classList.add('modal__dialog');
    thanksModalWrapper.innerHTML = `
			<div class="modal__content">
				<div data-close class="modal__close">&times;</div>
				<div class="modal__title">${message}</div>
			</div>
		`;
    document.querySelector('.modal').append(thanksModalWrapper);
    setTimeout(() => {
      thanksModalWrapper.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  // fetch('http://localhost:3000/menu')
  // .then(data => data.json())
  // .then(res => console.log(res));
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map