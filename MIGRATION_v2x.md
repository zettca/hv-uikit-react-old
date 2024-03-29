# Migration Guide

**Table of Contents**

- [Migration Guide](#migration-guide)
- [From v1.x to v2.x](#from-v1x-to-v2x)
  - [Package Changes](#package-changes)
  - [Material-UI v4](#material-ui-v4)
  - [Provider Changes](#provider-changes)
  - [Layout Changes](#layout-changes)
  - [Icons Changes](#icons-changes)
  - [Component Changes](#component-changes)
    - [Asset Inventory](#asset-inventory)
      - [List View Row](#list-view-row)
    - [Button](#button)
    - [Card](#card)
    - [Checkbox](#checkbox)
    - [Dropdown](#dropdown)
    - [Dropdown Menu](#dropdown-menu)
    - [Input](#input)
    - [KPI](#kpi)
    - [List](#list)
    - [Login](#login)
    - [Modal](#modal)
    - [Multi-Button](#multi-button)
    - [Radio Button](#radio-button)
    - [Snackbar](#snackbar)
    - [Tabs](#tabs)
    - [Table](#table)
    - [Text Area](#text-area)
    - [Toggle Button](#toggle-button)
    - [Tooltip](#tooltip)

# From v1.x to v2.x

## Package Changes

- Package `@hv/uikit-common-themes` moved from the [hv-uikit-common](https://github.com/pentaho/hv-uikit-common) repository to [this](https://github.com/pentaho/hv-uikit-react) repository. The package will continue to be published under the same name, only the repository's location has changed.

- Packages `@hv/uikit-common-icons` and `@hv/uikit-common-utils` are now deprecated, and will no longer receive updates. You can still use the other releases, if you need them. As for their contents:

  - `@hv/uikit-common-icons` was integrated in `@hv/uikit-react-icons` package. SVG files can be found in `assets/` folder.
  - `@hv/uikit-common-utils` was integrated in `@hv/uikit-react-core` package, under `/dist/utils`.

## Material-UI v4

Material UI has been from v3 to v4, and is now a peer-depencency of our packages.
You have to install it in your project, or upgrade if you're already using it and follow their [migration guide](https://material-ui.com/guides/migration-v3/).

## Provider Changes

The routing was removed from the provider. The component `HvLink` that used the router now offers either a `href` attribute or a `<div />` with an `onClick`.

## Layout Changes

The greater change in our layout component (the Grid) is the definition of spacing, that now uses a 7.5px factor. For example if we passed a spacing of 2, the resulting spacing between containers is 15px.

## Icons Changes

- Removed all deprecated icons. Generic Icons were moved up a directory (to `dist/`).
- Added the icons index to the module for allowing the ES6 import usage (destructuring).

To import an icon you should use (using `Checkbox` as an example):

```diff
-import { Checkbox } from "@hv/uikit-react-icons/dist/Generic";
+import { Checkbox } from "@hv/uikit-react-icons/dist";
```

- Icon box dimensions now follow Design System specifications by default.

## Component Changes

With our first major release, several components where reviewed in order to remove properties already marked as deprecated. The following list details all breaking changes that you must fix.

- Components' event function props now always pass `event` as first parameter (`onClick`, `onChange`, etc.)

```diff
-<HvList onClick={(data, event)} />
+<HvList onClick={(event, data)} />
```

```diff
-<HvMultiButton onChange={(data)} />
+<HvMultiButton onChange={(event, data)} />
```

### Asset Inventory

- `searchBoxLabels` and `labels` merged into `labels`

#### List View Row

- `checkboxSemantic` renamed to `semantic`
- `checkboxSelected` renamed to `checked`
- `checkboxValue` renamed to `checkboxProps.value`
- `checkboxIndeterminate` renamed to `checkboxProps.indeterminate`

### Button

- `type` renamed to `category`.
- `colorType` renamed to `category`.

### Card

- Removed class `upperArea`
- `onClickAction` renamed to `onClick`
- `checkboxSelected` renamed to `checked`
- Removed prop `actionItemWidth`. Use CSS to change the width if necessary

Some of the Cards' props that are passed down to the Cards' sub-components were grouped into a single prop. This applies if a Card is not built using composition. The new group props are the following: `mediaProps`, `checkboxProps`, `cardButtonProps`

- `checkboxValue` changed to `checkboxProps.value`
- `checkboxLabel` changed to `checkboxProps.label`
- `checkboxIndeterminate` changed to `checkboxProps.indeterminate`

As for the accessibility aria-\* props, you should pass them directly to the sub-component by composition, using the grouped props:

- `mediaAriaLabel`, `mediaAriaLabelledBy`, `mediaAriaDescribedBy` removed. You should instead pass these props to `mediaProps`
- `checkboxAriaLabel`, `checkboxAriaLabelledBy`, `checkboxAriaDescribedBy` removed. You should instead pass these props to `checkboxProps`
- `defaultAriaLabel`, `defaultAriaLabelledBy`, `defaultAriaDescribedBy` removed. You should instead pass these props to `cardButtonProps`

- #### Card Header

  - `needsBorder` removed (was not in use)
  - `onClickAction` renamed to `onClick`

- #### Card Content

  - `needsBorder` removed (was not in use)
  - `buttomBorder` class removed
  - `innerCardContent` renamed to `children`
  - `onClickAction` renamed to `onClick`

- #### Card Footer

  - `actions.icon` renamed to `actions.iconCallback`
  - `checkboxSelected` changed to `checked`
  - `checkboxValue` changed to `checkboxProps.value`
  - `checkboxLabel` changed to `checkboxProps.label`
  - `checkboxIndeterminate` changed to `checkboxProps.indeterminate`
  - `checkboxAriaLabel` changed to `checkboxProps.aria-label`
  - `checkboxAriaLabelledby` changed to `checkboxProps.aria-labelledby`
  - `checkboxDescribedby` changed to `checkboxProps.aria-describedby`

- #### Card Media
  - `mediaTitle` renamed to `title`
  - `mediaContainer` class renamed to `root`
  - `mediaAriaLabel` removed. Pass `aria-label` directly
  - `mediaAriaLabelledBy` removed. Pass `aria-labelledby` directly
  - `mediaAriaDescribedBy` removed. Pass `aria-describedby` directly
  - `mediaTitle` renamed to `title`
  - `onClickAction` renamed to `onClick`

### Checkbox

- `type` renamed to `category`.
- `colorType` renamed to `category`.
- `propsIcon` renamed to `formControlLabelProps`
- Removed `checkboxProps` and `propsLabel`. These are now directly passed to the Checkbox

### Dropdown

- `label` changed to `labels.title`
- `rootActive` class renamed to `rootOpen`

### Dropdown Menu

- `onClick` callback was triggered not only on selection but also when opening the dropdown. A new specific callback `onToggleOpen` was created. This callback is triggered whenever the open state of the dropdown changes

### Input

- `validate` renamed to `showInfo`
- `value` renamed to `initialValue`
- `inputValue` renamed to `value`
- `iconVisible` renamed to `validationIconVisible`
- `iconPosition` renamed to `validationIconPosition`
- `inputTextConfiguration` replaced by `labels`
- `container` class renamed to `root`.
- `labelDisable` class renamed to `labelDisabled`.

### KPI

- `kpiContainer` class renamed to `root`
- `kpiTextConfiguration` renamed to `labels`.

### List

- Renamed `root` class to `list`
- Removed `listProps` props. Instead pass props directly to the component
- `values.leftIcon` replaced by `values.iconCallback`
- These changes should also propagated to the `DropDropMenu` and `VerticalNavigation` components

### Login

- `titleText` changed to `labels.titleText`
- `recoveryTitle` changed to `labels.recoveryTitle`
- `messageToRecover` changed to `labels.messageToRecover`
- `messageAfterRecover` changed to `labels.messageAfterRecover`
- `recoveryInputLabel` changed to `labels.recoveryInputLabel`
- `recoveryPlaceholder` changed to `labels.recoveryPlaceholder`
- `recoveryErrorMessage` changed to `labels.recoveryErrorMessage`
- `userNameInputLabel` changed to `labels.userNameInputLabel`
- `userNamePlaceHolder` changed to `labels.userNamePlaceHolder`
- `passwordInputLabel` changed to `labels.passwordInputLabel`
- `passwordPlaceHolder` changed to `labels.passwordPlaceHolder`
- `rememberMeLabel` changed to `labels.rememberMeLabel`
- `incorrectCredentialsMessage` changed to `labels.incorrectCredentialsMessage`
- #### Login Title
  - Renamed `logoContainer` class to `root`.
  - Renamed `root` class to `titleContainer`.

### Modal

- Removed `iconContainer` class - use `closeButton` class instead.
- #### Modal Actions
  - Renamed class `action` to `spacing`.

### Multi-Button

- Removed `btnBase` and `btnSecondary` classes - use `button` class instead.
- Renamed `rootVertical` class to `vertical`.

### Radio Button

- `propsLabel` renamed to `formControlLabelProps`
- Removed `radioProps` and `propsIcon`. Instead pass props directly to the component

### Snackbar

- `message` renamed to `label`
- Now has `offset=60` as a default, matching `HvBanner`.

### Tabs

- Css class `labelContainer` passed to the `root`

### Table

- `titleText` changed to `labels.titleText`
- `subtitleText` changed to `labels.subtitleText`

### Text Area

- `inputTextConfiguration` replaced by `labels`
- `value` renamed to `initialValue` (used just for initial values)
- `inputValue` renamed to `value`

### Toggle Button

- `selectedTitle` changed to `labels.selectedTitle`
- `notSelectedTitle` changed to `labels.notSelectedTitle`
- Removed display inline-table from icon

### Tooltip

- Renamed `multitooltip` class to `tooltipMulti`.
- `tooltipAnchor` removes, now uses composition.
