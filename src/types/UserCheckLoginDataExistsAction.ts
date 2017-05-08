
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserLoginDataFilter } from './KalturaUserLoginDataFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserCheckLoginDataExistsActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserLoginDataFilter;
}

/** 
* Action which checks whther user login
**/
export class UserCheckLoginDataExistsAction extends KalturaRequest<boolean> {

    filter : KalturaUserLoginDataFilter;

    constructor(data : UserCheckLoginDataExistsActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'checkLoginDataExists' },
				filter : { type : 'o', subTypeConstructor : KalturaUserLoginDataFilter, subType : 'KalturaUserLoginDataFilter' }
            }
        );
        return result;
    }
}

