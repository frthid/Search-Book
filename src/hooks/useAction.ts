import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as BookActionCreators from '../services/fetchBook';

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(BookActionCreators, dispatch)
}