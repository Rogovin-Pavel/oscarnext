const data = {
  fields: [
    {
      type: 'text',
      placeholder: 'Введите адрес объекта',
      id: 'address',
    },
    {
      type: 'select',
      placeholder: 'Выберите Ду стальных труб',
      options: ['Выберите Ду стальных труб', '50', '65', '80', '100', '125', '150', '200', '250', '300', '400', '500'],
      id: 'diameter_PPU',
    },
    {
      type: 'text',
      placeholder: 'Количество вводов',
      id: 'vvoda_PPU',
    },
    {
      type: 'text',
      placeholder: 'Колличество опор для ППУ',
      id: 'nopora_PPU',
    },
    {
      type: 'select',
      placeholder: 'Выберите Ду Изопрофлекса',
      options: ['Выберите Ду Изопрофлекса', '25', '32', '40', '50', '63', '75', '90', '110', '125', '140', '160'],
      id: 'diameter_IZOP',
    },
    {
      type: 'text',
      placeholder: 'Количество вводов Изопрофлекса',
      id: 'vvoda_IZOP',
    },
    {
      type: 'text',
      placeholder: 'Колличество опор для Изопрофлекса',
      id: 'nopora_IZOP',
    },
    {
      type: 'text',
      placeholder: 'Ширина монолита(внеш)',
      id: 'width_mon',
    },
    {
      type: 'text',
      placeholder: 'Высота монолита(внеш)',
      id: 'height_mon',
    },
    {
      type: 'text',
      placeholder: 'Длина монолита',
      id: 'm_mon',
    },
    {
      type: 'text',
      placeholder: 'Ширина ж/б 1-го основания',
      id: 'width_bez_1',
    },
    {
      type: 'text',
      placeholder: 'Длина ж/б 1-го основания',
      id: 'm_bez_1',
    },
    {
      type: 'text',
      placeholder: 'Ширина ж/б 2-го основания',
      id: 'width_bez_2',
    },
    {
      type: 'text',
      placeholder: 'Длина ж/б 2-го основания',
      id: 'm_bez_2',
    },
    {
      type: 'text',
      placeholder: 'Длина канала по Л6',
      id: 'l6_sht',
    },
    {
      type: 'text',
      placeholder: 'Количество лотков Л6-8/2',
      id: 'l6_l',
    },
    {
      type: 'text',
      placeholder: 'Количество лотков Л6д-8',
      id: 'l6_dl',
    },
    {
      type: 'text',
      placeholder: 'Количество плит П8-8',
      id: 'l6_pl',
    },
    {
      type: 'text',
      placeholder: 'Количество плит П8д-8',
      id: 'l6_dpl',
    },
    {
      type: 'text',
      placeholder: 'Длина канала по Л11',
      id: 'l11_sht',
    },
    {
      type: 'text',
      placeholder: 'Количество лотков Л11-8/2',
      id: 'l11_l',
    },
    {
      type: 'text',
      placeholder: 'Количество лотков Л11д-8',
      id: 'l11_dl',
    },
    {
      type: 'text',
      placeholder: 'Количество плит П11-8',
      id: 'l11_pl',
    },
    {
      type: 'text',
      placeholder: 'Количество плит П11д-8',
      id: 'l11_dpl',
    },
    {
      type: 'text',
      placeholder: 'Количество ФБС 3-3-6',
      id: 'fbs336',
    },
    {
      type: 'text',
      placeholder: 'Количество ФБС 6-3-6',
      id: 'fbs636',
    },
    {
      type: 'text',
      placeholder: 'Количество ФБС 9-3-6',
      id: 'fbs936',
    },
    {
      type: 'text',
      placeholder: 'Количество ФБС 12-3-6',
      id: 'fbs1236',
    },
    {
      type: 'text',
      placeholder: 'Количество ФБС 24-3-6',
      id: 'fbs2436',
    },
    {
      type: 'text',
      placeholder: 'Количество подбетонки В15',
      id: 'podb_B15',
    },
    {
      type: 'text',
      placeholder: 'Количество силовых опор ППУ',
      id: 'sil_PPU',
    },
    {
      type: 'text',
      placeholder: 'Количество силовых опор Изопрофлекс',
      id: 'sil_IZOP',
    },
  ],
};

export default data;
