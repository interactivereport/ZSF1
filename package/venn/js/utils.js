// Generated by CoffeeScript 1.7.1
(function() {
  var log_msg;

  window.our_log = function(o) {
    if (window.console && console.log) {
      return console.log.apply(console, !!arguments.length ? arguments : [this]);
    } else {
      return opera && opera.postError && opera.postError(o || this);
    }
  };

  window.log_debug = function(o) {
    return log_msg("DEBUG", arguments);
  };

  window.log_info = function(o) {
    return log_msg("INFO", arguments);
  };

  window.log_warn = function(o) {
    return log_msg("WARN", arguments);
  };

  window.log_error = function(o) {
    return log_msg("ERROR", arguments);
  };

  log_msg = function(msg, rest) {
    var args, r;
    args = Array.prototype.slice.call(rest);
    r = [msg].concat(args);
    window.our_log.apply(window, r);
    $('.log-list').append("<pre class='" + (msg.toLowerCase()) + "'>" + msg + ": " + args);
    if (msg === 'ERROR') {
      $('.log-link').removeClass('btn-link');
      $('.log-link').addClass('btn-danger');
    }
    if (msg === 'ERROR' || msg === 'WARN') {
      return $('.log-link').css('opacity', '1');
    }
  };

}).call(this);