Eventer
=======

Create event simply.

```
Storage = (function() {
  // Create events
  var _events = {
    insert: new Eventer(),
    save: new Eventer()
  };
  var _private = {
    insert: function() {
      // ...
      // Call all subscribers
      _events.insert.emit();
    },
    save: function() {
      // ...
      // Call all subscribers
      _events.insert.emit();
    },
  };

  var Storage = {};
  // ...
  Storage.onSave = _events.save.forSubscribers();
  // ...
  Storage.onInsert = _events.insert.forSubscribers();
  return Storage;
})();
```
Add new subscriber to event:
```
Storage.onSave.add({
  name: 'event',
  func: function() {
    // ...
  }
});
```
Remove subscriber from event:
```
Storage.onSave.remove({
  name: 'event'
});
```
Add new subscriber instead of old to event:
```
Storage.onSave.addInsteadOf({
  name: 'event',
  func: function() {
    // ...
  }
});
```
