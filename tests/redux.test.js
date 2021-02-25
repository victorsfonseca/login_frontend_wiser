import reducer, {Types} from '../store/ducks/auth'

describe('all reducers', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            request:{
              user: null,
              pass: null
            },
            isLogged: false,
            error_message: '',
            token: null,
            user: {
              username: '',
              name: ''
            },
        }
      )
    })
  
    it('should handle LOGIN_REQUEST', () => {
      expect(
        reducer([], {
          type: Types.LOGIN_REQUEST,
          request: {
              user: 'user@mail.com',
              pass: 'pass'
          }
        })
      ).toEqual(
        {
            request: {
                user: 'user@mail.com',
                pass: 'pass'
            }
        }
      )
    })

    it('should handle LOGGED_IN', ()=>{
        expect(
            reducer([],{
                type: Types.LOGGED_IN,
                token: '1234567890asdfgh', 
                user: {
                    username: 'admin',
                    name: 'Administrator'
                }
            })
        ).toEqual(
            {
                isLogged: true,
                error_message: '', 
                token: '1234567890asdfgh', 
                user: {
                    username: 'admin',
                    name: 'Administrator'
                }
            }
        )
    })

    it('should handle LOGIN_FAIL', ()=>{
      expect(
          reducer([],{
              type: Types.LOGIN_FAIL,
              message: 'User not found'
          })
      ).toEqual(
          {
              error_message: 'User not found'
          }
      )
    })
  })