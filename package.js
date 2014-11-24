Package.describe({
  name: 'striletskyy:eventer',
  summary: 'Create event simply.',
  version: '0.0.1',
  git: 'https://github.com/striletskyy/Eventer.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('eventer.js');
  api.export('Eventer');
});