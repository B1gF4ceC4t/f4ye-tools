module.exports = function (api) {
  return api.env('test')
    ? {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current'
              }
            }
          ]
        ]
      }
    : {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'usage',
              corejs: '2'
            }
          ]
        ],
        ignore: ['./node/*.js']
      };
};
