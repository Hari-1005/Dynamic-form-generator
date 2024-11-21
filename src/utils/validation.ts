import Ajv, { ErrorObject } from "ajv";

const ajv = new Ajv();

export const validateJSONSchema = async (
  schema: any
): Promise<{ valid: boolean; errors: string[] }> => {
  try {
    const validate = ajv.compile(schema);
    const valid = await validate(schema);

    const errors =
      validate.errors?.map(
        (err: ErrorObject) => `${err.dataPath} ${err.message}`
      ) || [];
    return { valid, errors };
  } catch (err) {
    return { valid: false, errors: ["Invalid schema structure"] };
  }
};
