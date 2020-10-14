import * as actionTypes from "../constants";
const initialState = {
  categories: [],
  loading: false,
  error: null
}
const newCategory = (parentID, categories, category) => {
  let currentCategory = [];
  if (parentID === undefined) {
    return [
      ...categories,
      {
        _id: category.id,
        name: category.name,
        slug: category.slug,
        children: []
      }
    ]
  }
  for (let cat of categories) {
    if (cat._id === parentID) {
      currentCategory.push({
        ...cat,
        children: cat.children.length > 0 ?
          newCategory(parentID,
            [...cat.children,
            {
              _id: category._id,
              name: category.name,
              slug: category.slug,
              parentID: category.parentID,
              children: category.children
            }],
            category)
          : []
      })
    } else {
      currentCategory.push({
        ...cat,
        children: cat.children && cat.children.length > 0 ? newCategory(parentID, cat.children, category) : []
      })
    }

  }
  return currentCategory;
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORY_RQ:
      return { ...state, loading: true }
    case actionTypes.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payloads.categories,
        loading: false,
      }
    case actionTypes.GET_ALL_CATEGORY_FAILURE:
      return { ...state, error: action.payloads.error }
    case actionTypes.ADD_CATEGORY_REQUEST:
      return { ...state, loading: true }
    case actionTypes.ADD_CATEGORY_SUCCESS:
      const { category } = action.payloads;
      console.log(category)
      return {
        ...state,
        loading: false,
        categories: newCategory(category.parentID, state.categories, category)
      }

    case actionTypes.ADD_CATEGORY_FAILURE:
      return { ...state, loading: false, error: action.payloads.error }
    default: return state
  }
}