/**   
 * api接口统一管理
 */
import { get, post } from '@/src/axios/http.js'; 

export const queryCategory = p => post('api/optimization/querycategory', p);