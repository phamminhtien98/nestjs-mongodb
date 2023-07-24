[
  {
    _id: '64bd68698575dfecb4a72739',
    id: 1,
    name: 'Quần Áo',
    ids: [1],
    parentId: null,
  },
  {
    _id: '64bd68798575dfecb4a7273b',
    id: 2,
    name: 'Quần',
    ids: [1, 2],
    parentId: 1,
  },
  {
    _id: '64bd68868575dfecb4a7273d',
    id: 3,
    name: 'Áo',
    ids: [1, 3],
    parentId: 1,
  },
  {
    _id: '64bd68978575dfecb4a7273f',
    id: 21,
    name: 'Quần dài',
    ids: [1, 2, 21],
    parentId: 2,
  },
  {
    _id: '64bd68a48575dfecb4a72741',
    id: 22,
    name: 'Quần đùi',
    ids: [1, 2, 22],
    parentId: 2,
  },
  {
    _id: '64bd68bb8575dfecb4a72743',
    id: 31,
    name: 'Áo dài',
    ids: [1, 3, 31],
    parentId: 3,
  },
];

[
  {
    _id: '64bd68698575dfecb4a72739',
    id: 1,
    name: 'Quần Áo',
    ids: [1],
    parentId: null,
    sub_cate: [
      {
        _id: '64bd68798575dfecb4a7273b',
        id: 2,
        name: 'Quần',
        ids: [1, 2],
        parentId: 1,
        sub_cate: [
          {
            _id: '64bd68978575dfecb4a7273f',
            id: 21,
            name: 'Quần dài',
            ids: [1, 2, 21],
            parentId: 2,
          },
          {
            _id: '64bd68a48575dfecb4a72741',
            id: 22,
            name: 'Quần đùi',
            ids: [1, 2, 22],
            parentId: 2,
          },
        ],
      },
      {
        _id: '64bd68868575dfecb4a7273d',
        id: 3,
        name: 'Áo',
        ids: [1, 3],
        parentId: 1,
        sub_cate: [
          {
            _id: '64bd68bb8575dfecb4a72743',
            id: 31,
            name: 'Áo dài',
            ids: [1, 3, 31],
            parentId: 3,
          },
        ],
      },
    ],
  },
];
