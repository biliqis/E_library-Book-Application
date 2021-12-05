const middleware = {}

middleware['authenticated copy'] = require('../middleware/authenticated copy.js')
middleware['authenticated copy'] = middleware['authenticated copy'].default || middleware['authenticated copy']

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['clearMessage'] = require('../middleware/clearMessage.js')
middleware['clearMessage'] = middleware['clearMessage'].default || middleware['clearMessage']

middleware['clearValidationErrors'] = require('../middleware/clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['isAdmin'] = require('../middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isUser'] = require('../middleware/isUser.js')
middleware['isUser'] = middleware['isUser'].default || middleware['isUser']

export default middleware
