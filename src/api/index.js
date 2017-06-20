/**
 * Created by shangkuikui on 2017/6/19.
 */
const _data = 'sucess';
export default {
    getDatas (cb) {
        setTimeout(() => cb(_data), 4000)
    },
}