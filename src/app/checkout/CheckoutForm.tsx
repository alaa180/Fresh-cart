// import { Button } from '@/components/ui/button'
// import { Field, FieldError, FieldLabel } from '@/components/ui/field'
// import { Input } from '@/components/ui/input'
// import { toast } from '@/components/ui/toast'
// import { payCash } from '@/src/api/actions/payment/paycash.actions'
// import { payOnline } from '@/src/api/actions/payment/payonline.actions'
// import { useRouter } from 'next/navigation'
// import React from 'react'
// import { Controller, useForm } from 'react-hook-form'


// export default function CheckoutForm({ cartId }: { cartId: string }) {
//   const router = useRouter()

//   const { handleSubmit, control } = useForm<shippingData>({
//     defaultValues: {
//       details: '',
//       phone: '',
//       city: '',
//       postalcode: '',
//     }
//   })

//   async function submitForm(data: shippingData) {
//     console.log(data)
//     // pay online
//     // const payload = await payOnline(cartId, data)
//     // console.log(payload)
//     // if (payload.status == 'success') {
//     //   toast.add({
//     //     type: 'success',
//     //     description: 'Order created successfully'
//     //   })
//     //   window.location.href = payload.session.url

//     // }
// // pay Cash
//     // const payload = await payCash(cartId, data)
//     // console.log(payload)

//     // if(payload.status=='success'){
//     //     toast.add({
//     //         type:'success',
//     //         description:'Order created successfully'
//     //     })
//     //   window.location.href = payload.session.url

//     // router.push('/')
//     // }
//     // else{
//     //      toast.add({
//     //         type:'error',
//     //         description:'Order Failed!'
//     //     })
//     // }


//   }

//   return (
//     // <div className='w-1/2 mx-auto my-10 p-10'>
//     //     <h2>Checkout</h2>
//     //     <form onSubmit={handleSubmit(submitForm)}>
//     //         <div className="flex flex-col gap-5">
//     //             <Controller
//     //                 name="details"
//     //                 control={control}
//     //                 render={({ field, fieldState }) => (
//     //                     <Field data-invalid={fieldState.invalid}>
//     //                         <FieldLabel htmlFor={field.name}>details</FieldLabel>
//     //                         <Input
//     //                             {...field}
//     //                             id={field.name}
//     //                             aria-invalid={fieldState.invalid}
//     //                             placeholder="Enter your details"
//     //                             autoComplete="off"
//     //                         />
//     //                         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     //                     </Field>
//     //                 )}
//     //             />
//     //             <Controller
//     //                 name="phone"
//     //                 control={control}
//     //                 render={({ field, fieldState }) => (
//     //                     <Field data-invalid={fieldState.invalid}>
//     //                         <FieldLabel htmlFor={field.name}>phone</FieldLabel>
//     //                         <Input
//     //                             type="text"
//     //                             {...field}
//     //                             id={field.name}
//     //                             aria-invalid={fieldState.invalid}
//     //                             placeholder="Enter your phone"
//     //                             autoComplete="off"
//     //                         />
//     //                         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     //                     </Field>
//     //                 )}
//     //             />
//     //             <Controller
//     //                 name="city"
//     //                 control={control}
//     //                 render={({ field, fieldState }) => (
//     //                     <Field data-invalid={fieldState.invalid}>
//     //                         <FieldLabel htmlFor={field.name}>city</FieldLabel>
//     //                         <Input
//     //                             type="text"
//     //                             {...field}
//     //                             id={field.name}
//     //                             aria-invalid={fieldState.invalid}
//     //                             placeholder="Enter your city"
//     //                             autoComplete="off"
//     //                         />
//     //                         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     //                     </Field>
//     //                 )}
//     //             /> <Controller
//     //                 name="postalcode"
//     //                 control={control}
//     //                 render={({ field, fieldState }) => (
//     //                     <Field data-invalid={fieldState.invalid}>
//     //                         <FieldLabel htmlFor={field.name}>postalcode</FieldLabel>
//     //                         <Input
//     //                             type="text"
//     //                             {...field}
//     //                             id={field.name}
//     //                             aria-invalid={fieldState.invalid}
//     //                             placeholder="Enter your postal code"
//     //                             autoComplete="off"
//     //                         />
//     //                         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     //                     </Field>
//     //                 )}
//     //             />
//     //         </div>

//     //         <Button type="submit" className="w-full bg-green-600 my-6 p-4">Login</Button>
//     //     </form>


//     // </div>
//     <div className="w-full max-w-2xl mx-auto my-12 px-4 sm:px-6">
//       <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">

//         <div className="mb-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">
//             Checkout
//           </h2>

//           <p className="text-gray-500 text-sm">
//             Enter your shipping details to complete your order.
//           </p>

//           <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-5"></div>
//         </div>

//         <form onSubmit={handleSubmit(submitForm)}>
//           <div className="flex flex-col gap-6">

//             <Controller
//               name="details"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid} className="gap-2">
//                   <FieldLabel
//                     htmlFor={field.name}
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Address Details
//                   </FieldLabel>

//                   <Input
//                     {...field}
//                     id={field.name}
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter your address details"
//                     autoComplete="off"
//                     className="h-12 rounded-lg border-gray-200 px-4
//                 transition-all focus-visible:ring-2
//                 focus-visible:ring-green-500 focus-visible:border-green-500"
//                   />

//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="phone"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid} className="gap-2">
//                   <FieldLabel
//                     htmlFor={field.name}
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Phone Number
//                   </FieldLabel>

//                   <Input
//                     type="text"
//                     {...field}
//                     id={field.name}
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter your phone number"
//                     autoComplete="off"
//                     className="h-12 rounded-lg border-gray-200 px-4
//                 transition-all focus-visible:ring-2
//                 focus-visible:ring-green-500 focus-visible:border-green-500"
//                   />

//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="city"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid} className="gap-2">
//                   <FieldLabel
//                     htmlFor={field.name}
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     City
//                   </FieldLabel>

//                   <Input
//                     type="text"
//                     {...field}
//                     id={field.name}
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter your city"
//                     autoComplete="off"
//                     className="h-12 rounded-lg border-gray-200 px-4
//                 transition-all focus-visible:ring-2
//                 focus-visible:ring-green-500 focus-visible:border-green-500"
//                   />

//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="postalcode"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid} className="gap-2">
//                   <FieldLabel
//                     htmlFor={field.name}
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Postal Code
//                   </FieldLabel>

//                   <Input
//                     type="text"
//                     {...field}
//                     id={field.name}
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Enter your postal code"
//                     autoComplete="off"
//                     className="h-12 rounded-lg border-gray-200 px-4
//                 transition-all focus-visible:ring-2
//                 focus-visible:ring-green-500 focus-visible:border-green-500"
//                   />

//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//           </div>

//           <Button
//             type="submit"
//             className="w-full h-12 mt-8 rounded-lg bg-green-600
//         hover:bg-green-700 text-white text-base font-semibold
//         shadow-md hover:shadow-lg transition-all duration-300"
//           >
//             Continue to Payment
//           </Button>

//           <p className="text-center text-xs text-gray-400 mt-4">
//             Please make sure your shipping details are correct.
//           </p>
//         </form>

//       </div>
//     </div>
//   )
// }
// export interface shippingData {
//   details: string,
//   phone: string,
//   city: string,
//   postalcode: string

// }

'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import { payCash } from '@/src/api/actions/payment/paycash.actions'
import { payOnline } from '@/src/api/actions/payment/payonline.actions'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function CheckoutForm({ cartId }: { cartId: string }) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash')

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<shippingData>({
    defaultValues: {
      details: '',
      phone: '',
      city: '',
      postalcode: '',
    },
  })

  async function submitForm(data: shippingData) {
    try {
      if (paymentMethod === 'online') {

        const payload = await payOnline(cartId, data)
        console.log(payload)

        if (payload.status == 'success') {
          toast.add({
            type: 'success',
            description: 'Order created successfully',
          })

          queryClient.setQueryData(['cart'], null)
          queryClient.invalidateQueries({ queryKey: ['cart'] })
          window.location.href = payload.session.url
        } else {
          toast.add({
            type: 'error',
            description: 'Order Failed!',
          })
        }
      } else {
        const payload = await payCash(cartId, data)
        console.log(payload)

        if (payload.status == 'success') {
          toast.add({
            type: 'success',
            description: 'Order created successfully',
          })
          queryClient.setQueryData(['cart'], null)
          queryClient.invalidateQueries({ queryKey: ['cart'] })
          router.push('/')
        } else {
          toast.add({
            type: 'error',
            description: 'Order Failed!',
          })
        }
      }
    } catch (error) {
      console.error(error)
      toast.add({
        type: 'error',
        description: 'Something went wrong!',
      })
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Checkout
          </h2>

          <p className="text-gray-500 text-sm">
            Enter your shipping details to complete your order.
          </p>

          <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-5"></div>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col gap-6">

            <Controller
              name="details"
              control={control}
              rules={{ required: 'Address details are required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-sm font-semibold text-gray-700"
                  >
                    Address Details
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your address details"
                    autoComplete="off"
                    className="h-12 rounded-lg border-gray-200 px-4
                transition-all focus-visible:ring-2
                focus-visible:ring-green-500 focus-visible:border-green-500"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{ required: 'Phone number is required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </FieldLabel>

                  <Input
                    type="text"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your phone number"
                    autoComplete="off"
                    className="h-12 rounded-lg border-gray-200 px-4
                transition-all focus-visible:ring-2
                focus-visible:ring-green-500 focus-visible:border-green-500"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="city"
              control={control}
              rules={{ required: 'City is required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-sm font-semibold text-gray-700"
                  >
                    City
                  </FieldLabel>

                  <Input
                    type="text"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your city"
                    autoComplete="off"
                    className="h-12 rounded-lg border-gray-200 px-4
                transition-all focus-visible:ring-2
                focus-visible:ring-green-500 focus-visible:border-green-500"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="postalcode"
              control={control}
              rules={{ required: 'Postal code is required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-sm font-semibold text-gray-700"
                  >
                    Postal Code
                  </FieldLabel>

                  <Input
                    type="text"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your postal code"
                    autoComplete="off"
                    className="h-12 rounded-lg border-gray-200 px-4
                transition-all focus-visible:ring-2
                focus-visible:ring-green-500 focus-visible:border-green-500"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-gray-700">
                Payment Method
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-green-600 bg-green-50 ring-1 ring-green-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="mt-1 accent-green-600"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-gray-500">
                      Pay when you receive your order
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    paymentMethod === 'online'
                      ? 'border-green-600 bg-green-50 ring-1 ring-green-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={() => setPaymentMethod('online')}
                    className="mt-1 accent-green-600"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Pay Online
                    </p>
                    <p className="text-xs text-gray-500">
                      Pay now with your card
                    </p>
                  </div>
                </label>
              </div>
            </div>

          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 mt-8 rounded-lg bg-green-600
        hover:bg-green-700 text-white text-base font-semibold
        shadow-md hover:shadow-lg transition-all duration-300
        disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting
              ? 'Processing...'
              : paymentMethod === 'online'
              ? 'Continue to Payment'
              : 'Place Order'}
          </Button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Please make sure your shipping details are correct.
          </p>
        </form>

      </div>
    </div>
  )
}
export interface shippingData {
  details: string,
  phone: string,
  city: string,
  postalcode: string
}