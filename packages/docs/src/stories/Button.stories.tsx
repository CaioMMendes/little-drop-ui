import type {StoryObj,Meta}from "@storybook/react"
import {Button, ButtonProps} from "@caiom-ui/react"


export default{
    title:"Button",
    component:Button,
    args:{
        children:"Submit"
    }

} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps>={
    args:{
        variant: 'primary'
    }
}

export const Secondary:StoryObj<ButtonProps>={
    args:{
       variant:"secondary"
    }
}