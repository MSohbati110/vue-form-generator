const id = 'select-http'

const title = 'Selects from HTTP'

const description = `It is possible to fill selects using the results from HTTP requests.

Inject values coming from the context in the URL and transform the select in an autocomplete by including {q}.`

const schema = {
  type: 'object',
  properties: {
    selectAjaxString: {
      type: 'string',
      title: `I'm a string selected from results of an HTTP request`,
      // 'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&owner={context.owner.type}:{context.owner.id}',
      'x-from': {
          url: 'http://localhost:8002/api/v1/meta/common/state/search',
          method: "post",
          data: { 'name': 'اردبیل' },
          headers: {
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNDgyNzI5NjA2LCJqdGkiOiI4Mjg4ODdlODM5MGY0MzUyYjJjZTczYmM4MWRlZjVlYSIsInVzZXJfaWQiOjEsImNhbl9sb2dpbl90b19kYXNoYm9hcmQiOnRydWV9.6M3O_OnRCzoSsvlKx78nCB_Wn5sawFrUZASRX8GXY1c'
          }
      },
      'x-itemsProp': 'results',
      'x-itemTitle': 'name',
      'x-itemKey': 'id'
    },
    // selectAjaxStringArray: {
    //   type: 'array',
    //   items: { type: 'string' },
    //   title: `I'm an array of strings selected from results of an HTTP request`,
    //   'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&owner={context.owner.type}:{context.owner.id}',
    //   'x-itemsProp': 'results',
    //   'x-itemTitle': 'id',
    //   'x-itemKey': 'href'
    // },
    // selectAjaxObject: {
    //   type: 'object',
    //   title: `I'm an object selected from results of an HTTP request`,
    //   'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title,schema&owner={context.owner.type}:{context.owner.id}',
    //   'x-itemsProp': 'results',
    //   'x-itemTitle': 'title',
    //   'x-itemKey': 'href',
    //   properties: {
    //     href: { type: 'string' },
    //     title: { type: 'string' }
    //   }
    // },
    // selectAjaxArrayOfObjects: {
    //   type: 'array',
    //   title: `I'm an array of objects selected from results of an HTTP request`,
    //   'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title,schema&owner={context.owner.type}:{context.owner.id}',
    //   'x-itemsProp': 'results',
    //   'x-itemTitle': 'title',
    //   'x-itemKey': 'href',
    //   items: {
    //     type: 'object',
    //     properties: {
    //       href: { type: 'string' },
    //       title: { type: 'string' }
    //     }
    //   }
    // },
    // selectAjaxLarge: {
    //   type: 'object',
    //   title: `I'm an object from a large HTTP request`,
    //   'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&size=100&owner={context.owner.type}:{context.owner.id}',
    //   'x-itemsProp': 'results',
    //   'x-itemTitle': 'title',
    //   'x-itemKey': 'href',
    //   properties: {
    //     href: { type: 'string' },
    //     title: { type: 'string' }
    //   }
    // },
    // selectAjaxWithQuery: {
    //   type: 'object',
    //   title: `I'm an object from a HTTP request with query`,
    //   'x-fromUrl': 'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&q={q}&owner={context.owner.type}:{context.owner.id}',
    //   'x-itemsProp': 'results',
    //   'x-itemTitle': 'title',
    //   'x-itemKey': 'href',
    //   properties: {
    //     href: { type: 'string' },
    //     title: { type: 'string' }
    //   }
    // }
  }
}

const model = {}

const options = { context: { owner: { type: 'organization', id: '5a5dc47163ebd4a6f438589b' } } }

const httpMocks = {
  'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&owner=organization:5a5dc47163ebd4a6f438589b': { results: [] },
  'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&q=&owner=organization:5a5dc47163ebd4a6f438589b': { results: [] },
  'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title,schema&owner=organization:5a5dc47163ebd4a6f438589b': { results: [] },
  'https://koumoul.com/s/data-fair/api/v1/datasets?status=finalized&select=title&size=100&owner=organization:5a5dc47163ebd4a6f438589b': { results: [] }
}

export default { id, title, description, schema, model, options, httpMocks }
