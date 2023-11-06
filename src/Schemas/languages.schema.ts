/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LanguagesTranslations extends Document {    
MODEL: {
    REASON1: string,
    REASON2: string,
    REASON3: string,
    REASON4: string,
    REASON5: string,
    REASON6: string,
    REASON7: string
}
SUBMODEL1: {
    SUBREASON1: string,
    SUBREASON2: string,
    SUBREASON3: string,
    SUBREASON4: string,
    SUBREASON5: string,
    SUBREASON6: string,
    SUBREASON7: string,
    SUBREASON8: string,
    SUBREASON9:string
}
SUBMODEL2: {
    SUBREASON1: string,
    SUBREASON2: string,
    SUBREASON3: string,
    SUBREASON4: string,
    SUBREASON5:string,
    SUBREASON6: string,
    SUBREASON7: string,
    SUBREASON8: string
}
SUBMODEL3: {
    SUBREASON1: string
    SUBREASON2: string,
    SUBREASON3: string,
    SUBREASON4: string,
    SUBREASON5: string
}
SUBMODEL4: {
    SUBREASON1:string,
    SUBREASON2: string,
    SUBREASON3: string,
    SUBREASON4: string
}

}

export const LanguagesSchema = SchemaFactory.createForClass(LanguagesTranslations);