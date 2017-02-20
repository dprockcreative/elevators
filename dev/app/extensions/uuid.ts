const GETRANDOMVALUES = (
  typeof (window.crypto) !== 'undefined' &&
  typeof (window.crypto.getRandomValues) !== 'undefined'
);

export default function UUID () {

  const pad4 = (num: number): string => {
    let ret = num.toString(16);
    while (ret.length < 4) {
      ret = '0' + ret;
    }
    return ret;
  };

  const random4 = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  const make = (): string =>  {
    if (GETRANDOMVALUES) {

      let buf = new Uint16Array(8);
      window.crypto.getRandomValues(buf);

      return [
        [pad4(buf[0]), pad4(buf[1])].join(''), pad4(buf[2]), pad4(buf[3]), pad4(buf[4]),
        [pad4(buf[5]), pad4(buf[6]), pad4(buf[7])].join('')
      ].join('-');

    } else {

      return [
        [random4(), random4()].join(''), random4(), random4(),
        [random4(), random4(), random4()].join('')
      ].join('-');
    }
  };

  return make();
}
