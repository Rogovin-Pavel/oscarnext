export const getCalculations = () =>
  fetch('/api/results')
    .then((res) => res.json())
    .then(({ address, result_CO2_1, result_CO2_2 }) => ({
      address,
      result_CO2_1: JSON.parse(result_CO2_1),
      result_CO2_2: JSON.parse(result_CO2_2),
    }));

export const sendCalculation = (data) =>
  fetch('/api/result', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

export const getAuthors = () => fetch('/api/author');

// [
//   {
//     name: 'GRO555OL',
//     result_CO2_1: {
//       name_PPU:
//         'Материалы и изделия на присоединения к существующим системам(в зданиях и камерах) для стальных труб в ППУ - изоляции',
//       futlars_PPU: {
//         mat_name: 'Футляр из стальной трубы 325x7 L=700мм',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'шт',
//         mat_kol: '4',
//       },
//       stals_PPU: {
//         mat_name: 'Труба стальная бесшовная 108x5',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '6/0.076',
//       },
//       spusk_trubs_PPU: {
//         mat_name: 'Труба стальная бесшовная 45x4',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '2/0.008',
//       },
//       vozd_trubs_PPU: {
//         mat_name: 'Труба стальная бесшовная 38x3',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '2/0.005',
//       },
//       otvods_PPU: {
//         mat_name: 'Отвод крутоизогнутый 90 гр. 108x6',
//         mat_gost: 'Ст.20 ГОСТ 17375-2001',
//         mat_izm: 'шт',
//         mat_kol: '8',
//       },
//       spusk_krans_PPU: {
//         mat_name: 'Шаровой кран под приварку Ру 1,6 МПа Ду40',
//         mat_izm: 'шт',
//         mat_kol: '2',
//       },
//       vozd_krans_PPU: {
//         mat_name: 'Шаровой кран под приварку Ру 1,6 МПа Ду32',
//         mat_izm: 'шт',
//         mat_kol: '2',
//       },
//       vilaterms_PPU: {
//         mat_name: 'Уплотнитель Вилатерм 30',
//         mat_izm: 'пог.м',
//         mat_kol: '25.2',
//       },
//       betons_PPU: {
//         mat_name: 'Смесь БСТ B15 П4 F150 W4',
//         mat_izm: 'м3',
//         mat_kol: '0.16',
//       },
//       kanats_PPU: {
//         mat_name: 'Смоляной канат',
//         mat_izm: 'пог.м',
//         mat_kol: '6.2',
//       },
//       bitums_PPU: {
//         mat_name: 'Мастика битумная универсальная МБУ 16кг',
//         mat_izm: 'кг',
//         mat_kol: '3.73',
//       },
//       izolyats_PPU: {
//         mat_name: 'Изоляция трубопроводов Ду100',
//         mat_gost: 'ТС 794.01.03.00',
//         mat_izm: 'пог.м',
//         mat_kol: '6',
//       },
//       n_oporas_PPU: {
//         mat_name: 'Опора неподвижная ТС-660.00.00-06',
//         mat_gost: 'Серия 5.903-13 вып.7-95',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       name_IZOP:
//         'Материалы и изделия на присоединения к существующим системам(в зданиях и камерах) для труб типа Изопрофлекс',
//       futlars_IZOP: {
//         mat_name: 'Футляр из стальной трубы 219x6 L=700мм',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'шт',
//         mat_kol: '2',
//       },
//       stals_IZOP: {
//         mat_name: 'Труба Ц-45x4,0',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '3/0.013',
//       },
//       spusk_trubs_IZOP: {
//         mat_name: 'Труба Ц-45x4',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '1/0.004',
//       },
//       vozd_trubs_IZOP: {
//         mat_name: 'Труба Ц-38x3',
//         mat_gost: 'Ст.20 ГОСТ 8731-74',
//         mat_izm: 'м/т',
//         mat_kol: '1/0.003',
//       },
//       otvods_IZOP: {
//         mat_name: 'Отвод крутоизогнутый оцинкованный 90 гр. 45x5,0',
//         mat_gost: 'Ст.20 ГОСТ 17375-2001',
//         mat_izm: 'шт',
//         mat_kol: '4',
//       },
//       vozd_krans_IZOP: {
//         mat_name: 'Шаровой кран под приварку Ру 1,6 МПа Ду32',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       spusk_krans_IZOP: {
//         mat_name: 'Шаровой кран под приварку Ру 1,6 МПа Ду40',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       vilaterms: {
//         mat_name: 'Уплотнитель Вилатерм 30',
//         mat_izm: 'пог.м',
//         mat_kol: '25.0',
//       },
//       betons_IZOP: {
//         mat_name: 'Смесь БСТ B15 П4 F150 W4',
//         mat_izm: 'м3',
//         mat_kol: '1.0',
//       },
//       m100s_IZOP: {
//         mat_name: 'Раствор М100 Пк3 ПМД-5 Г28013-98',
//         mat_izm: 'пог.м',
//         mat_kol: '0.5',
//       },
//       bitums_IZOP: {
//         mat_name: 'Мастика битумная универсальная МБУ 16кг',
//         mat_izm: 'кг',
//         mat_kol: '15.0',
//       },
//       izolyats_IZOP: {
//         mat_name: 'Изоляция трубопроводов Ду40',
//         mat_gost: 'ТС 794.01.03.00',
//         mat_izm: 'пог.м',
//         mat_kol: '3',
//       },
//       n_oporas_IZOP: {
//         mat_name: 'Опора хомутовая ',
//         mat_gost: 'Серия 5.903-13 вып.7-95',
//         mat_izm: 'шт',
//         mat_kol: '2',
//       },
//     },
//     result_CO2_2: {
//       construct_name: 'Строительная часть',
//       l6_l: {
//         mat_name: 'Лоток Л6-8/2',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l6_dl: {
//         mat_name: 'Лоток доборный Л6д-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l6_pl: {
//         mat_name: 'Плита перекрытия П8-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l6_dpl: {
//         mat_name: 'Плита доборная П8д-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l11_l: {
//         mat_name: 'Лоток Л11-8/2',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l11_dl: {
//         mat_name: 'Лоток доборный Л11д-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l11_pl: {
//         mat_name: 'Плита перекрытия П11-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       l11_dpl: {
//         mat_name: 'Плита доборная П11-8',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       fbs_3_3_6: {
//         mat_name: 'Фундаментный блок ФБС 3.3.6-т',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       fbs_6_3_6: {
//         mat_name: 'Фундаментный блок ФБС 6.3.6-т',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       fbs_9_3_6: {
//         mat_name: 'Фундаментный блок ФБС 9.3.6-т',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       fbs_12_3_6: {
//         mat_name: 'Фундаментный блок ФБС 12.3.6-т',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       fbs_24_3_6: {
//         mat_name: 'Фундаментный блок ФБС 24.3.6-т',
//         mat_gost: 'Территориальный каталог г.Москвы',
//         mat_izm: 'шт',
//         mat_kol: '1',
//       },
//       all_a14A3: {
//         mat_name: 'Сталь арматурная 14-А-III (А400)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '-0.001',
//       },
//       all_a12A3: {
//         mat_name: 'Сталь арматурная 12-А-III (А400)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '0.004',
//       },
//       all_a10A3: {
//         mat_name: 'Сталь арматурная 10-А-III (А400)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '-0.002',
//       },
//       all_a10A1: {
//         mat_name: 'Сталь арматурная 10-А-I (A240)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '-0.002',
//       },
//       all_a8A3: {
//         mat_name: 'Сталь арматурная 8-А-III (А400)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '-0.0',
//       },
//       all_a6A1: {
//         mat_name: 'Сталь арматурная 6-А-I (A240)',
//         mat_gost: 'ГОСТ 5781-82',
//         mat_izm: 'т',
//         mat_kol: '-0.0',
//       },
//       all_B22u5: {
//         mat_name: 'Смесь БСТ В22,5 П3 F100 W4',
//         mat_izm: 'м³',
//         mat_kol: '-0.087',
//       },
//       all_B15: {
//         mat_name: 'Смесь БСТ B15 П4 F150 W4',
//         mat_izm: 'м³',
//         mat_kol: '1',
//       },
//       all_B7u5: {
//         mat_name: 'Смесь БСТ B7,5 П3 F50 W2',
//         mat_izm: 'м³',
//         mat_kol: '0.048',
//       },
//       all_pesok: {
//         mat_name: 'Песок строит. Мк 2,4-3,0 Г8736-93',
//         mat_izm: 'м³',
//         mat_kol: '1.845',
//       },
//       all_obm_bit: {
//         mat_name: 'Мастика битумная универсальная МБУ 16кг',
//         mat_izm: 'кг',
//         mat_kol: '18.726',
//       },
//       all_M100: {
//         mat_name: 'Раствор М100 Пк3 ПМД-5 Г28013-98',
//         mat_izm: 'м³',
//         mat_kol: '0.132',
//       },
//       all_izol: {
//         mat_name: 'Гидростеклоизол ТКП-4,0 стеклоткань кар.',
//         mat_izm: 'м²',
//         mat_kol: '10.21',
//       },
//       all_perg: {
//         mat_name: 'Пергамин П-350 Г2697-83',
//         mat_izm: 'м²',
//         mat_kol: '0.884',
//       },
//       all_shv: {
//         mat_name: 'Швеллер 16П Г8240-97 / Ст3пс',
//         mat_izm: 'т',
//         mat_kol: '0.079',
//       },
//       all_mlist: {
//         mat_name: 'Лист Б-ПН-НО-10х1500х6000 /Ст3пс5',
//         mat_izm: 'т',
//         mat_kol: '0.063',
//       },
//       all_polosa: {
//         mat_name: 'Полоса 10х200-ОН-ВТ1-ВШ1-НД-ВС-ПН Ст3сп',
//         mat_gost: 'С245 ГОСТ 27772-88',
//         mat_izm: 'т',
//         mat_kol: '0.026',
//       },
//       all_gaika: {
//         mat_name: 'Гайка М16-6H.5 (S24)',
//         mat_gost: 'ГОСТ 5927-70',
//         mat_izm: 'шт',
//         mat_kol: '24',
//       },
//       all_shaiba: {
//         mat_name: 'Шайба А 16.01.08кп.016',
//         mat_gost: 'ГОСТ 11371-78',
//         mat_izm: 'шт',
//         mat_kol: '24',
//       },
//       all_epox: {
//         mat_name: 'Эмаль эпоксидная ЭП-140 белый',
//         mat_gost: 'ГОСТ 24709-81',
//         mat_izm: 'кг',
//         mat_kol: '2.0',
//       },
//       all_bolt: {
//         mat_name: 'Самоанкерующийся болт БСР 16х150 УЗ ст.09Г2С',
//         mat_gost: 'ГОСТ 28778-90',
//         mat_izm: 'шт',
//         mat_kol: '24',
//       },
//     },
//   },
// ];
