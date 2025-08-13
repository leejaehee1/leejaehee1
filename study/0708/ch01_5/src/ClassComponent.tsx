import { Component } from "react";

type ClassComponentProps = {
  href: string;
  text: string;
};

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    // const href = this.props.href;
    // const text = this.props.text;
    const { href, text } = this.props;
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}
