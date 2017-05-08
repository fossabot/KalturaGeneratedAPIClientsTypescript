
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeDeleteActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/** 
* delete server node by id
**/
export class ServerNodeDeleteAction extends KalturaRequest<void> {

    serverNodeId : string;

    constructor(data : ServerNodeDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'delete' },
				serverNodeId : { type : 's' }
            }
        );
        return result;
    }
}

