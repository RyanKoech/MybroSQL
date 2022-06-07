const ColumnObject = (_name, _isForeignKey, _isUnique, _size, _datatype, _dataDomain, _customData) => {
  const name = _name
  let isForeignKey = _isForeignKey
  let isUnique = _isUnique
  let size = _size
  let datatype = _datatype
  let dataDomain = _dataDomain
  let customData = _customData

  return{
    name,
    isForeignKey,
    isUnique,
    size,
    datatype,
    dataDomain,
    customData
  };
};

export default ColumnObject;