export const RESPONSE = {
  CREATE_MOVIE: {
    409: {
      status: 409,
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'number',
            example: 409,
          },
          error: {
            type: 'string',
            example: 'MovieAlreadyExists',
          },
          message: {
            type: 'string',
            example: 'Movie already exists',
          },
        },
      },
    },
    201: {
      status: 201,
      schema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
          },
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          director: {
            type: 'string',
          },
          releaseYear: {
            type: 'number',
          },
        },
      },
    },
  },
  LIST_MOVIES: {
    status: 200,
    schema: {
      type: 'object',
      properties: {
        meta: {
          type: 'object',
          properties: {
            total: {
              type: 'number',
            },
            currentPage: {
              type: 'number',
            },
            lastPage: {
              type: 'number',
            },
            perPage: {
              type: 'number',
            },
          },
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                format: 'uuid',
              },
              title: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              director: {
                type: 'string',
              },
              releaseYear: {
                type: 'number',
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
              },
              updatedAt: {
                type: 'string',
                format: 'date-time',
              },
            },
          },
        },
      },
    },
  },
  GET_MOVIE: {
    status: 200,
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            director: {
              type: 'string',
            },
            releaseYear: {
              type: 'number',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
  UPDATE_MOVIE: {
    status: 200,
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            director: {
              type: 'string',
            },
            releaseYear: {
              type: 'number',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
  NOT_FOUND: {
    status: 404,
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 404,
        },
        error: {
          type: 'string',
          example: 'NotFoundError',
        },
        message: {
          type: 'string',
          example:
            'Movie Not Found using ID 3fa85f64-5717-4562-b3fc-2c963f66afa6',
        },
      },
    },
  },
};

export const MOVIE_DOCUMENTATION = {
  RESPONSE,
};
