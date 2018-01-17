var pusher = new Pusher('8dss30f7a775b908af25', {
  cluster: 'APP_CLUSTER'
});

var channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
  alert('An event was triggered with message: ' + data.message);
});
