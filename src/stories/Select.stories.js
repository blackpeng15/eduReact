import { Select } from './Select';

export default {
    title: 'Example/Select',
    component: Select,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={ {margin: '1em'} }>
                <Story />
            </div>
        )
    ]
}

export const Select01 = {
    args: {
        title: '통신사 : ',
        values: ['skt', 'kt', 'u+', 'skt2', 'kt2', 'u+2'],
        names: ['SKT', 'KT', 'U+', '알뜰폰 SKT', '알뜰폰 KT', '알뜰폰 U+'],
        onChange: () => {}
    }
}

export const Select02 = {
    args: {
        title: '성별 : ',
        values: ['male', 'female'],
        names: ['남자', '여자'],
        onChange: () => {}
    }
}