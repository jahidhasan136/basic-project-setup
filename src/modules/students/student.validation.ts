const userNamevalidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .pattern(/^[A-Z][a-z]*$/, '{value} is not in capitalize format')
    .messages({
      'string.pattern.base': '{#value} is not in capitalize format',
      'string.empty': 'First name is required',
      'string.max': 'First Name cannot be more than 20 characters',
    }),
  middleName: Joi.string().trim().allow(null, ''),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.base': '{#value} is not valid',
    }),
});

const guardianvalicationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': "Father's name is required",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Father's contact number is required",
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': "Mother's name is required",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Mother's contact number is required",
  }),
});

const localGuardianvalidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': "Local guardian's name is required",
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': "Local guardian's contact number is required",
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': "Local guardian's address is required",
  }),
});

const studentvalidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: userNamevalidationSchema.required().messages({
    'any.required': "Student's name is required",
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only':
      '{#value} is not a valid gender. Allowed values are "male" or "female".',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().trim(),
  email: Joi.string().trim().required().email().messages({
    'string.email': '{#value} is not a valid email type',
    'string.empty': 'Email is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .messages({
      'any.only':
        '{#value} is not a valid blood group. Allowed values are "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-".',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianvalicationSchema.required().messages({
    'any.required': 'Guardian details are required',
  }),
  localGuardian: localGuardianvalidationSchema.required().messages({
    'any.required': 'Local guardian details are required',
  }),
  profileImg: Joi.string().trim(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only':
      '{#value} is not a valid status. Allowed values are "active" or "blocked".',
  }),
});

export default studentvalidationSchema;
