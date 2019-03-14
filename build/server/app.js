'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 1000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get('/api/v1', function (req, res) {
  return res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to JokeTown!'
  });
});

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Page Not Found. Please go to /api/v1 to use our api' });
});

app.listen(port, function () {
  return console.log('JokeTown is running on http://localhost ' + port);
});

exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1BLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7O0FBRUFKLElBQUlLLEdBQUosQ0FBUUMscUJBQVdDLElBQVgsRUFBUjtBQUNBUCxJQUFJSyxHQUFKLENBQVFDLHFCQUFXRSxVQUFYLENBQXNCLEVBQUVDLFVBQVUsSUFBWixFQUF0QixDQUFSOztBQUdBVCxJQUFJVSxHQUFKLENBQVEsU0FBUixFQUFtQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxTQUFjQSxJQUFJQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbERELFlBQVEsdUJBRDBDO0FBRWxERSxhQUFTO0FBRnlDLEdBQXJCLENBQWQ7QUFBQSxDQUFuQjs7QUFNRWYsSUFBSUssR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDTSxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QkEsTUFBSUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCLEVBQUVRLFNBQVMscURBQVgsRUFBckI7QUFDRCxDQUZEOztBQUlGZixJQUFJZ0IsTUFBSixDQUFXZixJQUFYLEVBQWlCO0FBQUEsU0FBTWdCLFFBQVFDLEdBQVIsOENBQXVEakIsSUFBdkQsQ0FBTjtBQUFBLENBQWpCOztrQkFFZUQsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDEwMDA7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cblxuYXBwLmdldCgnL2FwaS92MScsIChyZXEsIHJlcykgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgIHN0YXR1czogJ2Nvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcsXG4gICAgbWVzc2FnZTogJ1dlbGNvbWUgdG8gSm9rZVRvd24hJyxcbiAgfSkpO1xuICBcbiAgXG4gIGFwcC51c2UoJyonLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdQYWdlIE5vdCBGb3VuZC4gUGxlYXNlIGdvIHRvIC9hcGkvdjEgdG8gdXNlIG91ciBhcGknIH0pO1xuICB9KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgSm9rZVRvd24gaXMgcnVubmluZyBvbiBodHRwOi8vbG9jYWxob3N0ICR7cG9ydH1gKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiXX0=