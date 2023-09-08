import { Button, ButtonProps, createPolymorphicComponent, Modal, Group, Switch, Checkbox, Badge } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import styled from '@emotion/styled'
import './App.css'

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withinPortal={false}
        withCloseButton={false}
        size="60vw"
        radius="md"
      >
        <Title>
          <span>Personalization Settings:</span>
          <Switch
            label="Use Account Research"
            labelPosition='left'
            size='md'
          />
        </Title>
        <Body>
          <div className='section'>
            <p className='caption'>Profile:</p>
            <div className='grid'>
              <Checkbox label="Linkedin Bio" checked />
              <Checkbox label="List of past jobs" checked={false} />
              <Checkbox label="Years of experience" checked />
              <Checkbox
                label={<>Current job description <Badge variant='light' color="orange">Disabled</Badge></>}
                disabled
              />
              <Checkbox label="Curernt Experience" checked />
              <Checkbox
                label={<>Current job specialities <Badge variant='light' color="orange">Disabled</Badge></>}
                disabled
              />
            </div>
          </div>
          <div className='section'>
            <p className='caption'>Account:</p>
            <div className='grid'>
              <Checkbox label="Linkedin Bio" checked />
              <Checkbox label="List of past jobs" checked={false} />
              <Checkbox label="Years of experience" checked />
              <Checkbox
                label={<>Current job description <Badge variant='light' color="orange">Disabled</Badge></>}
                disabled
              />
              <Checkbox label="Curernt Experience" checked />
              <Checkbox
                label={<>Current job specialities <Badge variant='light' color="orange">Disabled</Badge></>}
                disabled
              />
            </div>
          </div>
        </Body>
      </Modal>
      <Group position="center">
        <StyledButton onClick={open}>
          Click to Personalize
        </StyledButton>
      </Group>
    </>
  )
}

const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  background-color: #67bd63;
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

const Title = styled("div")`
  background-color: #67bd63;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 10px;
`

const Body = styled("div")({
  padding: "0 40px 40px",

  "& .section": {
    padding: "10px 5px",
  },
  "& .section:first-child": {
    borderBottom: "1px solid #67bd63",
    padding: "10px 5px 30px",
  },
  "& .caption": {
    fontSize: "20px",
    margin: "10px 0",
  },

  "& .grid": {
    display: "grid",
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    rowGap: "10px",
  }
})

export default App
