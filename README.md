# FlowLayout.setRoot Bug Reproduction

A small Meteor app to showing how `FlowLayout.setRoot` fails when used with `flow-router (1.16.1)` because it runs before `Template.body` is rendered.

[Reported as issue #25 on flow-layout](https://github.com/meteorhacks/flow-layout/issues/25)
