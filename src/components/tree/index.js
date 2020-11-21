import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategories,
  updateCategories,
  deleteCategory,
} from '../../redux/actions/category.action';

function getObjFromPath(cats, path) {
  let obj = null;

  for (let i = 0; i < path.length; ++i) {
    obj = cats[path[i]];

    if (obj.children.length > 0 && i + 1 < path.length) {
      return getObjFromPath(obj.children, path.slice(i + 1));
    } else {
      return obj;
    }
  }
}

function getArrayFromPath(cats, path) {
  let obj = null;
  let arr = [];

  for (let i = 0; i < path.length; ++i) {
    arr = cats;
    obj = cats[path[i]];

    if (obj.children.length > 0 && i + 1 < path.length) {
      return getArrayFromPath(obj.children, path.slice(i + 1));
    } else {
      return arr;
    }
  }
}

const TreeEditor = React.memo(function TreeEditor({
  catName = '',
  path = '0,0',
  currentPath = 0,
}) {
  const [value, setValue] = useState(catName ?? '');
  const [showInput, setShowInput] = useState(false);

  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  const arrayOfPath = path
    .split(',')
    .slice(1)
    .map((path) => parseInt(path));
  const obj = getObjFromPath(categories, arrayOfPath);
  const arr = getArrayFromPath(categories, arrayOfPath);
  const onChangeName = (e) => {
    setValue(e.target.value);
  };

  const onToggleShowInput = () => {
    setShowInput((state) => !state);
  };

  const onSave = () => {
    obj.name = value;
    dispatch(updateCategories(obj)).then((result) => {
      if (result) {
        dispatch(setCategories(categories));
      }
    });
    dispatch(setCategories(categories));
    onToggleShowInput();
  };

  const onDelete = () => {
    const data = arr.splice(currentPath, 1);
    dispatch(deleteCategory(data[0]._id)).then((result) => {
      if (result) {
        dispatch(setCategories(categories));
      }
    });
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {showInput ? (
        <div>
          <input value={value} onChange={onChangeName} />
          <button onClick={onSave}>Save</button>
          <button onClick={onToggleShowInput}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={onToggleShowInput}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
});

function Tree({ cats = [], level = 0, path = '0' }) {
  const style = { paddingLeft: level * 50 + 'px' };
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleShowChildren = (e, id) => {
    e.stopPropagation();
    if (selectedIds.includes(id)) {
      setSelectedIds((state) => state.filter((idInArr) => idInArr !== id));
    } else {
      setSelectedIds((state) => [...state, id]);
    }
  };

  return (
    <ul style={style}>
      {cats.map((cat, index) => (
        <li key={cat._id} onClick={(e) => toggleShowChildren(e, cat._id)}>
          <TreeEditor
            catName={cat.name}
            path={path + `,${index}`}
            currentPath={index}
          />
          {selectedIds.includes(cat._id) && cat.children.length > 0 && (
            <Tree
              cats={cat.children}
              level={level + 2}
              path={path + `,${index}`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Tree;
