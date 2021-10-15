const queryList = (_page, _pageSize, _searchQuery, _sortBy, _orderBy, _minPrice, _maxPrice, _minDuration, _maxDuration) => ({
    page: _page,
    pageSize: _pageSize,
    searchQuery: _searchQuery,
    sortBy: _sortBy,
    orderBy: _orderBy,
    minPrice: _minPrice,
    maxPrice: _maxPrice,
    minDuration: _minDuration,
    maxDuration: _maxDuration
  });

  module.exports = {
      queryList
    };