import {chartNameDisplayFormat} from './util.js'

export const TREE_VIEWS = [
  'ancestor',
  'descendant',
  'hourglass',
  'relationship',
  'fan',
]

export const DEFAULT_TREE_VIEW = 'ancestor'
export const DEFAULT_RELATIONSHIP_DEGREE = 2
export const DEFAULT_RELATIONSHIP_MAX_IMAGES = 50
export const DEFAULT_NAME_DISPLAY_FORMAT =
  chartNameDisplayFormat.surnameThenGiven

export function getTreeViewTabIndex(view) {
  const index = TREE_VIEWS.indexOf(view)
  if (index !== -1) {
    return index
  }
  return TREE_VIEWS.indexOf(DEFAULT_TREE_VIEW)
}
