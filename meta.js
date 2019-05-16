function kebabToCamel (name) {
  name = name.replace(/\-(\w)/g, (match, p1) => {
    return p1.toUpperCase();
  });
  name = name.replace(/^\w/, (match) => {
    return match.toUpperCase();
  });
  return name
}

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'application name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Application description',
      default: 'A Vuetify application'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '1.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    siteName: {
      type: 'string',
      required: true,
      message: 'Site name',
      default: 'Vuetify application'
    },
    companyName: {
      type: 'string',
      required: false,
      message: 'Company name',
      default: '武汉迅驰时代信息科技有限公司'
    },
    apiBase: {
      type: 'string',
      required: false,
      message: 'API base location',
      default: 'http://localhost:8080'
    },
    clientId: {
      type: 'string',
      required: false,
      message: 'API client id',
      default: 'openid'
    },
    redirectUrl: {
      type: 'string',
      required: false,
      message: 'OAuth2 redirect url',
      default: 'http://localhost:3000/callback'
    },
    loadingColor: {
      type: 'string',
      required: false,
      message: 'Applies specified color to the loading control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))',
      default: 'purple'
    },
    loadingErrorColor: {
      type: 'string',
      required: false,
      message: 'Applies specified color to the loading control when error occurred - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))',
      default: 'red'
    },
    loadingHeight: {
      type: 'Number',
      required: false,
      message: 'Sets the loading component height',
      default: 5
    },
    messageTimeout: {
      type: 'Number',
      required: false,
      message: 'Time (in milliseconds) to wait until snackbar is automatically hidden. Use 0 to keep open indefinitely.',
      default: 10000
    },
  },
  helpers: {
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    }
  },
  completeMessage: "To get started:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev"
}
