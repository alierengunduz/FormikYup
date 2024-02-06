import * as yup from 'yup';

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/;

export const userSchema = yup.object().shape({
    userName : yup.string().required('Kullanıcı adı zorunludur'),
    email : yup.string().email('Geçerli bir email adresi giriniz').required('Email alanı zorunludur'),
    date : yup.string().required('Tarih alanı zorunludur'),
    password : yup.string().required('Şifre alanı zorunludur').min(6, "password alanı en az 6 karakter olmalıdır").matches(passwordRules, {
        message:
          "password alanı en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir",
      }),
      confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "password ve confirmPassword alanları eşleşmiyor"
    ),
    terms : yup.boolean().oneOf([true], 'Kullanım koşullarını kabul etmelisiniz')
})