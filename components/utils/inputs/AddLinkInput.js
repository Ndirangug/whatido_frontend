import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { AddLinkInputContainer } from '../../../styles/utils.styles';
import { TextSm, TextxS } from '../typography/Typography';

const websiteRegex =
  // eslint-disable-next-line no-useless-escape
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

function AddLinkInput({ linkName, url, i }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.editableProfile);

  const schema = yup.object().shape({
    linkUrl: yup
      .string()
      .default(null)
      .nullable()
      .matches(websiteRegex, 'invalid website url'),
    linkName: yup
      .string()
      .required('link name is required')
      .default(null)
      .nullable(),
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      linkUrl: url,
      linkName: linkName,
    },
  });

  return (
    <AddLinkInputContainer>
      <div className="link-container">
        <div className="link-name-container">
          <TextSm>link name</TextSm>
          <input
            type="text"
            className="input"
            name="linkName"
            {...register('linkName')}
            // onChange={(e) =>
            //   console.log(e.target.value, errors.linkName?.message)
            // }
          />
        </div>
        <div className="link-url-container">
          <TextSm>url</TextSm>

          <input
            type="text"
            className="input"
            name="linkUrl"
            {...register('linkUrl')}
          />
        </div>
        <TextxS
          style={{
            color: 'red',
            fontWeight: 200,
            cursor: 'pointer',
            margin: 'auto 0',
          }}
        >
          remove
        </TextxS>
      </div>
      <TextxS
        style={{
          color: 'red',
          fontWeight: 200,
        }}
      >
        {errors?.linkUrl?.message}
        {'     '}
        {errors?.linkName?.message}
      </TextxS>
    </AddLinkInputContainer>
  );
}

export default AddLinkInput;
