# Roadmap

The roadmap is a living document, and it is likely that priorities will change, but the list below should give some indication of our plans for the next major release, and for the future.

## Methodology

We work on the problems that resonate the most with our users.
Please **upvote** 👍 the issues you are the most interested in on GitHub.

## Our priorities

Here are our top priorities:

#### [Design System Guidelines Update](https://github.com/pentaho/hv-uikit-react/milestone/4)

The Design System, like the UI Kit, is a living project, which means patterns and themes evolve. Since our goal is to speed up the Hitachi application ecosystem development, alignment with the guidelines is a priority for us. This enables teams to fully leverage the new guidelines just by using the UI Kit and our new releases.

#### [Accessibility](https://github.com/pentaho/hv-uikit-react/milestone/9)

Our components have to follow the Web Accessibility Standard: WAI (https://www.w3.org/WAI/). While some guidelines are already being applied (color contrasts, for instance) at the Design System patterns and theme levels, the components have their rules too. This topic aims to enable the development of accessible applications using the UI Kit.

- Although the UI Kit components will enable the development of applications compliant with the WAI guidelines, some rules have to be applied at the application layer. We will try our best to inform the important rules to keep in mind when using our components.

#### [Visualizations](https://github.com/pentaho/hv-uikit-react/milestone/7)

We know Visualizations is a hot topic, and almost all our applications require charts, tables, etc... This topic aims to incrementally offer more components, again, align with the Design System patterns, so that, with minimal effort, applications can be developed and be compliant with the Design System Guidelines

- The Charting Library we are using is [Plotly](https://plot.ly/).

#### [Adoption](https://github.com/pentaho/hv-uikit-react/milestone/12)

We want to make sure the UI Kit is used as much as possible, and the goal of this topic is to enable that. Here we want to capture:

- Better documentation and add more examples in our component example section
- Template Views that mimic examples of the usage of our components together and that match some of our common application use cases. Things like the Login page, Home page and Detail Sections are some examples.
- Integration examples, showing the configurations required to include the UI Kit in the projects
- Application example, that aims to accelerate the development of a React Application using the UI Kit

#### [QA Automation](https://github.com/pentaho/hv-uikit-react/milestone/11)

We want to have our components fully tested, avoiding manual testing as much as possible. We want to make sure we cover all the supported browsers and fully back our development and contributions with the confidence nothing breaks when a change is proposed.

#### [New Components and Features](https://github.com/pentaho/hv-uikit-react/milestone/6)

Like the first item, new patterns and features to existing patterns are being actively added. Our goal, along with the other priorities, is to make sure we implement those components/features on our side. The Accessibility and Resposiveness are also important in this section.

#### [Promote Components from Lab to Core](https://github.com/pentaho/hv-uikit-react/milestone/3)

The Lab section works as an incubator for components that are not ready yet to move to the Core library and exposes all the external contributions to the UI Kit repository. For any team that needs a specific pattern that was not part of the priority list of the UI Kit team, they can contribute by proposing a pattern to the Lab section. In the long run, our objective with this topic is to promote those components to the Core library and review them according to the Design System specifications. Accessibility and Responsiveness are also important in this section.

#### [Localization and i18n](https://github.com/pentaho/hv-uikit-react/milestone/10)

Our components need to be localizable. More than having them reacting to the locale, they need to be configurable in order to react to the definitions the application injects. This means the setup of the i18n should happen at the application layer. The goal of this priority is to make sure this is possible. Although, the UI Kit also provides utilities to:

- format numbers according to the Design System Guidelines and locales;
- dates according to the Design System Guidelines and locales.

#### [Responsiveness](https://github.com/pentaho/hv-uikit-react/milestone/8)

Our patterns have to be able to live in a Grid System and react when space where they are rendered in changes. Right now we are not aiming to support mobile use cases, but the more we invest in making sure the components can behave correctly in these situations, the closer we are from reaching the responsiveness goal.
