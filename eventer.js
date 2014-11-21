Eventer = (function() {
  function Eventer() {
    var _private = {
      subscribers: [],
      subscribe: {
        add: function(sub) {
          if(!sub.name || !sub.func) {
            throw new Error("Please enter correct subscriber. Name or func doesn't exist.");
          }
          if(_private.isExist(sub)) {
            throw new Error("This subscriber already exist.");
          } else {
            _private.subscribers.push(sub);
          }
        },
        remove: function(sub) {
          if(_private.isExist(sub)) {
            _private.deleteSubscriber(sub);
          } else {
            throw new Error("This subscriber doesn't exist.");
          }
        },
        addInsteadOf: function(sub) {
          if(_private.isExist(sub)) {
            this.remove(sub);
          } else {
            this.add(sub);
          }
        }
      },
      isExist: function(newSub) {
        var i = 0;
        for(var sub = _private.subscribers[i]; i < _private.subscribers.length; i++, sub = _private.subscribers[i]) {
          if(sub.name == newSub.name) {
            return true;
          } else {
            return false;
          }
        }
      },
      deleteSubscriber: function(sub) {
        var index = _private.getIndex(sub);
        _private.splice(index, 1);
      },
      getIndex: function(newSub) {
        var i = 0;
        for(var sub = _private.subscribers[i]; i < _private.subscribers.length; i++, sub = _private.subscribers[i]) {
          if(sub.name == newSub.name) {
            return i;
          } else {
            throw new Error("This subscriber doesn't exist.");
          }
        }
      }
    };
    this.forSubscribers = function() {
      return _private.subscribe;
    };
    this.emit = function() {
      var i = 0;
      for(var sub = _private.subscribers[i]; i < _private.subscribers.length; i++, sub = _private.subscribers[i]) {
        sub.func.call();
      }
    };
  };

  return Eventer;
})();